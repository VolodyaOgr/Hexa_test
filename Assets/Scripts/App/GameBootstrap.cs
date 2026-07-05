using System.Collections.Generic;
using UnityEngine;
using HexaTest.Config;
using HexaTest.Domain;
using HexaTest.Logic;
using HexaTest.UI;
using HexaTest.View;

namespace HexaTest.App
{
    public sealed class GameBootstrap : MonoBehaviour
    {
        [SerializeField] private GameConfig config = new GameConfig();
        [SerializeField] private bool setUpCamera = true;
        [SerializeField] private int seededCells = 10;
        [Tooltip("How much of the screen width the board fills. Higher = smaller board. Keeps framing consistent across device aspects (editor vs Luna).")]
        [SerializeField] private float cameraFitMargin = 1.2f;

        [Header("Scene references (drag the HUD / tutorial objects)")]
        [SerializeField] private TimerHudView hud;
        [SerializeField] private TutorialController tutorial;

        [Tooltip("Assign Assets/Resources/HexBaseMaterial — referenced here so Luna bundles it reliably.")]
        [SerializeField] private Material hexBaseMaterial;
        [SerializeField] private PackshotView packshot;

        private bool _gameOver;

        private HexAssets _assets;
        private BoardModel _board;
        private BoardView _boardView;
        private StackFactory _factory;
        private MergeResolver _resolver;
        private MergeAnimator _animator;
        private Transform _trayRoot;

        private sealed class TrayEntry { public StackModel Model; public StackView View; public int Slot; }
        private readonly List<TrayEntry> _tray = new List<TrayEntry>();

        private float StackY => config.tileRaise + config.tileThickness * 0.5f;

        private Vector3 CellStackPos(HexCoord coord)
        {
            Vector3 p = _boardView.WorldOf(coord);
            return new Vector3(p.x, StackY, p.z);
        }

        private void Awake()
        {
            _assets = new HexAssets(config, hexBaseMaterial);
            _board = BoardModel.BuildHexagon(config.boardRadius);

            _boardView = new GameObject("BoardView").AddComponent<BoardView>();
            _boardView.transform.SetParent(transform, false);
            _boardView.Build(config, _assets, _board);

            _factory = new StackFactory(config, _assets);
            _resolver = new MergeResolver();

            SeedBoard();

            _trayRoot = new GameObject("Tray").transform;
            _trayRoot.SetParent(transform, false);
            RefillTray();

            if (setUpCamera) SetUpCamera();

            _animator = gameObject.AddComponent<MergeAnimator>();
            _animator.Init(config, _board, _boardView);

            if (tutorial != null) tutorial.Init(Camera.main, config, _board, GetTraySource);

            InputController input = gameObject.AddComponent<InputController>();
            input.Init(Camera.main, config, _board, _boardView,
                () => _animator.IsPlaying || _gameOver, PlaceFromTray,
                () => { if (tutorial != null) tutorial.NotifyGrab(); },
                () => { if (tutorial != null) tutorial.NotifyDropFailed(); });

            if (hud != null)
            {
                hud.Expired += OnTimeUp;
                hud.Begin();
            }
        }

        private Vector3? GetTraySource()
        {
            if (_tray.Count == 0) return null;
            return _tray[0].View.transform.position + Vector3.up * 0.25f;
        }

        private void OnTimeUp()
        {
            _gameOver = true;
            if (tutorial != null) tutorial.StopForever();

            if (packshot != null) packshot.Show();
        }

        private bool PlaceFromTray(StackView view, HexCoord coord)
        {
            TrayEntry entry = _tray.Find(e => e.View == view);
            if (entry == null || !_board.TryGet(coord, out CellModel cell) || !cell.IsEmpty) return false;

            cell.Stack = entry.Model;
            view.IsTray = false;
            view.transform.SetParent(_boardView.transform, true);
            view.transform.position = CellStackPos(coord);
            _boardView.Register(coord, view);
            _tray.Remove(entry);
            if (tutorial != null) tutorial.NotifyPlaced();

            List<MergeStep> plan = _resolver.Resolve(_board.Clone(), coord, config.clearCount);
            _animator.Play(plan, OnCascadeDone);
            return true;
        }

        private void OnCascadeDone()
        {
            if (_tray.Count == 0) RefillTray();
        }

        private void SeedBoard()
        {
            List<CellModel> cells = new List<CellModel>(_board.Cells);
            Shuffle(cells);
            int n = Mathf.Clamp(seededCells, 0, cells.Count - 1);
            for (int i = 0; i < n; i++)
            {
                CellModel cell = cells[i];
                StackModel model = new StackModel();
                model.Set(RandomDiscs());
                cell.Stack = model;
                StackView view = _factory.Create($"Stack_{cell.Coord}", model, CellStackPos(cell.Coord), _boardView.transform);
                _boardView.Register(cell.Coord, view);
            }
        }

        private void RefillTray()
        {
            float z = -config.trayDistance;
            for (int i = 0; i < 3; i++)
            {
                StackModel model = new StackModel();
                model.Set(RandomDiscs());
                Vector3 pos = new Vector3((i - 1) * config.traySpacing, StackY, z);
                StackView view = _factory.Create($"TrayStack_{i}", model, pos, _trayRoot);
                view.IsTray = true;
                _tray.Add(new TrayEntry { Model = model, View = view, Slot = i });
            }
        }

        private List<HexColorId> RandomDiscs()
        {
            List<HexColorId> list = new List<HexColorId>();
            int bands = Random.Range(1, 4);
            int budget = 9;
            for (int b = 0; b < bands && budget > 0; b++)
            {
                HexColorId color = (HexColorId)Random.Range(0, config.palette.Length);
                int count = Mathf.Min(Random.Range(2, 6), budget);
                for (int i = 0; i < count; i++) list.Add(color);
                budget -= count;
            }
            return list;
        }

        private static void Shuffle<T>(IList<T> list)
        {
            for (int i = list.Count - 1; i > 0; i--)
            {
                int j = Random.Range(0, i + 1);
                (list[i], list[j]) = (list[j], list[i]);
            }
        }

        private void SetUpCamera()
        {
            Camera cam = Camera.main;
            if (cam == null)
            {
                GameObject go = new GameObject("Main Camera") { tag = "MainCamera" };
                cam = go.AddComponent<Camera>();
            }
            cam.transform.position = new Vector3(0f, 11f, -10f);
            cam.transform.rotation = Quaternion.Euler(50f, 0f, 0f);
            cam.clearFlags = CameraClearFlags.SolidColor;
            cam.backgroundColor = new Color(0.75f, 0.85f, 0.93f);
            FitCameraToAspect(cam);

            RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Flat;
            RenderSettings.ambientLight = new Color(0.78f, 0.83f, 0.9f);
        }

        private void FitCameraToAspect(Camera cam)
        {
            float aspect = Screen.height > 0 ? (float)Screen.width / Screen.height : cam.aspect;
            if (aspect <= 0f) { cam.fieldOfView = 65f; return; }

            float boardHalfWidth = config.cellSize * (1.5f * config.boardRadius + 1f);
            float halfW = boardHalfWidth * cameraFitMargin;
            float dist = Vector3.Distance(cam.transform.position, Vector3.zero);
            float fov = 2f * Mathf.Atan(halfW / (aspect * dist)) * Mathf.Rad2Deg;
            cam.fieldOfView = Mathf.Clamp(fov, 25f, 90f);
        }
    }
}
