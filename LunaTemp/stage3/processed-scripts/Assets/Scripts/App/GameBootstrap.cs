using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
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
        [SerializeField] private int seededCells = 10;
        // Camera position / rotation / projection / size are configured directly on the
        // Main Camera in the scene — the runtime no longer touches them, so you can frame
        // the shot in the editor. See ApplyEnvironment() for the non-camera render settings.

        [Header("Scene references (drag the HUD / tutorial objects)")]
        [SerializeField] private TimerHudView hud;
        [SerializeField] private TutorialController tutorial;

        [Tooltip("Assign Assets/Resources/HexBaseMaterial — referenced here so Luna bundles it reliably.")]
        [SerializeField] private Material hexBaseMaterial;
        [SerializeField] private PackshotView packshot;
        [Tooltip("Assign back.png — full-screen gradient background drawn behind the board.")]
        [SerializeField] private Sprite backgroundSprite;
        [Tooltip("Material asset using Hexa/ScreenGradient. A direct asset reference (not Shader.Find) is required for Luna to include the shader in the web build.")]
        [SerializeField] private Material backgroundMaterial;
        [Tooltip("Material asset using Hexa/ShadowGround. Same Luna requirement as above.")]
        [SerializeField] private Material shadowGroundMaterial;

        private bool _gameOver;
        private bool _started;
        private Camera _cam;
        private int _activeMagnets;

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

        private Vector3 CellStackPos([Bridge.Ref] HexCoord coord)
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

            ApplyEnvironment();
            BuildBackground();
            BuildShadowGround();

            _animator = gameObject.AddComponent<MergeAnimator>();
            _animator.Init(config, _board, _boardView);

            if (tutorial != null) tutorial.Init(Camera.main, config, _board, GetTraySource);

            InputController input = gameObject.AddComponent<InputController>();
            input.Init(Camera.main, config, _board, _boardView,
                () => _animator.IsPlaying || _gameOver || _activeMagnets > 0, PlaceFromTray,
                OnPlayerGrab,
                () => { if (tutorial != null) tutorial.NotifyDropFailed(); });

            if (hud != null) hud.Expired += OnTimeUp;
        }

        private void OnPlayerGrab()
        {
            if (tutorial != null) tutorial.NotifyGrab();
            if (!_started)
            {
                _started = true;
                if (hud != null) hud.Begin();
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

        private bool PlaceFromTray(StackView view, [Bridge.Ref] HexCoord coord)
        {
            TrayEntry entry = _tray.Find(e => e.View == view);
            if (entry == null || !_board.TryGet(coord, out CellModel cell) || !cell.IsEmpty) return false;

            cell.Stack = entry.Model;
            view.IsTray = false;
            view.transform.SetParent(_boardView.transform, true);
            _boardView.Register(coord, view);
            _tray.Remove(entry);
            if (tutorial != null) tutorial.NotifyPlaced();

            StartCoroutine(MagnetIntoCell(view, coord, cell));
            return true;
        }

        // Glides the just-dropped stack from wherever it was released into its cell's
        // resting spot, instead of snapping there instantly. The merge cascade only
        // starts once it has visually arrived, so discs don't fly off before the piece
        // has landed.
        private IEnumerator MagnetIntoCell(StackView view, [Bridge.Ref] HexCoord coord, CellModel cell)
        {
            _activeMagnets++;

            Vector3 start = view.transform.position;
            Vector3 target = CellStackPos(coord);
            float dist = Vector3.Distance(start, target);
            float dur = config.magnetSpeed > 0.001f ? dist / config.magnetSpeed : 0f;

            float t = 0f;
            while (t < dur)
            {
                t += Time.deltaTime;
                view.transform.position = Vector3.Lerp(start, target, Easing.OutQuad(Mathf.Clamp01(t / dur)));
                yield return null;
            }
            view.transform.position = target;

            _activeMagnets--;

            List<MergeStep> plan = _resolver.Resolve(_board.Clone(), coord, config.clearCount);
            _animator.Play(plan, OnCascadeDone);
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

        // Non-camera render settings only. The camera itself (transform, projection,
        // orthographic size, clear flags) is set up in the scene and left untouched here.
        private void ApplyEnvironment()
        {
            _cam = Camera.main;
            // Required for Luna's shadow pipeline: its web renderer draws a camera depth
            // pre-pass through each shader's SHADOWCASTER pass with NO keywords before
            // collecting screen-space shadows. Enabling the depth texture here makes the
            // editor exercise those keywordless caster variants during Play mode, so the
            // Luna export records and compiles them (otherwise shadows silently vanish
            // in the web build even though all SHADOWS_DEPTH variants are present).
            if (_cam != null)
                _cam.depthTextureMode |= DepthTextureMode.Depth;

            RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Flat;
            RenderSettings.ambientLight = new Color(0.72f, 0.78f, 0.86f);
            QualitySettings.shadowDistance = 60f;
            QualitySettings.shadowProjection = ShadowProjection.StableFit;
        }

        // A large horizontal shadow-catcher at board level so stacks cast soft shadows
        // onto the backdrop AROUND the board (not just on the board), matching the ref.
        // It is invisible except where a real-time shadow darkens the background beneath it.
        private void BuildShadowGround()
        {
            // Luna strips shaders that are only referenced through Shader.Find, so the
            // serialized material asset is the reliable path; Shader.Find stays as an
            // editor-friendly fallback.
            Material src = shadowGroundMaterial;
            if (src == null)
            {
                Shader sh = Shader.Find("Hexa/ShadowGround");
                if (sh != null) src = new Material(sh);
            }
            if (src == null || backgroundSprite == null) { Debug.LogWarning("[Hexa] ShadowGround material/background missing."); return; }

            // Must sit strictly below the lowest platform layer, or the two coplanar
            // opaque surfaces z-fight and the shadowed ground wins the fight in patches,
            // blanking out the platform's rim colors wherever a shadow lands on them.
            float platformBottom = -config.baseLayerThickness * _assets.BaseLayerMeshes.Length;

            GameObject g = GameObject.CreatePrimitive(PrimitiveType.Plane);
            g.name = "ShadowGround";
            g.layer = 0; // Luna: code-created nodes need an explicit layer for realtime shadows in web
            Destroy(g.GetComponent<Collider>());
            g.transform.SetParent(transform, false);
            g.transform.position = new Vector3(0f, platformBottom - 0.05f, 0f);
            g.transform.localScale = new Vector3(20f, 1f, 20f); // Unity plane is 10u => 200u

            Material mat = new Material(src);
            mat.mainTexture = backgroundSprite.texture;  // same image as the background => seamless
            mat.SetFloat("_Strength", 0.45f);
            MeshRenderer mr = g.GetComponent<MeshRenderer>();
            mr.sharedMaterial = mat;
            mr.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            mr.receiveShadows = true;
        }

        private void BuildBackground()
        {
            if (backgroundSprite == null || _cam == null) return;

            // A screen-filling quad parented to the camera, placed far behind the board.
            // Unlit so it is unaffected by lights/shadows, and depth-correct so the board
            // always draws on top (the earlier ScreenSpace-Camera canvas covered the board).
            GameObject bg = GameObject.CreatePrimitive(PrimitiveType.Quad);
            bg.name = "Background";
            bg.layer = 0; // Luna: see BuildShadowGround
            Destroy(bg.GetComponent<Collider>());
            bg.transform.SetParent(_cam.transform, false);
            bg.transform.localPosition = new Vector3(0f, 0f, 50f);
            bg.transform.localRotation = Quaternion.identity;

            // Screen-UV sampling makes the visible gradient independent of the quad size,
            // so we oversize generously to always cover the view (the aspect fitter may
            // zoom out at runtime). No distortion results from the extra size.
            float h = (_cam.orthographic ? _cam.orthographicSize : 20f * Mathf.Tan(_cam.fieldOfView * 0.5f * Mathf.Deg2Rad)) * 2f;
            bg.transform.localScale = new Vector3(h * 4f, h * 3f, 1f);

            Material src = backgroundMaterial;
            if (src == null)
            {
                Shader bgSh = Shader.Find("Hexa/ScreenGradient");
                if (bgSh == null) bgSh = Shader.Find("Unlit/Texture");
                if (bgSh != null) src = new Material(bgSh);
            }
            if (src == null) { Debug.LogWarning("[Hexa] Background material missing."); Destroy(bg); return; }
            Material mat = new Material(src) { mainTexture = backgroundSprite.texture };
            MeshRenderer mr = bg.GetComponent<MeshRenderer>();
            mr.sharedMaterial = mat;
            mr.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            mr.receiveShadows = false;
        }
    }
}
