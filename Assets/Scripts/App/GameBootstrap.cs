using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using HexaTest.Config;
using HexaTest.Domain;
using HexaTest.Levels;
using HexaTest.Logic;
using HexaTest.UI;
using HexaTest.View;

namespace HexaTest.App
{
    public sealed class GameBootstrap : MonoBehaviour
    {
        [SerializeField] private GameConfig config = new GameConfig();
        // Camera position / rotation / projection / size are configured directly on the
        // Main Camera in the scene — the runtime no longer touches them, so you can frame
        // the shot in the editor. See ApplyEnvironment() for the non-camera render settings.

        [Header("Scene references (drag the HUD / tutorial objects)")]
        [SerializeField] private TimerHudView hud;
        [SerializeField] private TutorialController tutorial;

        [Tooltip("Assign Assets/Resources/HexBaseMaterial — referenced here so Luna bundles it reliably.")]
        [SerializeField] private Material hexBaseMaterial;
        [Tooltip("Assign back.png — full-screen gradient background drawn behind the board.")]
        [SerializeField] private Sprite backgroundSprite;
        [Tooltip("Material asset using Hexa/ScreenGradient. A direct asset reference (not Shader.Find) is required for Luna to include the shader in the web build.")]
        [SerializeField] private Material backgroundMaterial;
        [Tooltip("Material asset using Hexa/ShadowGround. Same Luna requirement as above.")]
        [SerializeField] private Material shadowGroundMaterial;

        private const int TraySlots = 3;

        private bool _levelOver;   // won or lost — input frozen
        private int _score;
        private int _level;
        private Camera _cam;
        private int _activeMagnets;

        private LevelSpec _spec;
        private readonly Queue<LevelPiece> _bag = new Queue<LevelPiece>();
        private int _seedTotal;    // hexes to clear at level start (for the goal HUD)

        private GoalHud _goalHud;
        private GameOverView _overView;
        private LevelCompleteView _completeView;

        private HexAssets _assets;
        private BoardModel _board;
        private BoardView _boardView;
        private StackFactory _factory;
        private MergeResolver _resolver;
        private MergeAnimator _animator;
        private Transform _trayRoot;
        private readonly GameTimer _levelTimer = new GameTimer();
        private bool _levelTimerStarted;
        private float _levelTimerDuration;

        private sealed class TrayEntry { public StackModel Model; public StackView View; public int Slot; }
        private readonly List<TrayEntry> _tray = new List<TrayEntry>();

        private float StackY => config.tileRaise + config.tileThickness * 0.5f;

        private Vector3 CellStackPos(HexCoord coord)
        {
            Vector3 p = _boardView.WorldOf(coord);
            return new Vector3(p.x, StackY, p.z);
        }

        private Vector3 TraySlotPos(int slot)
        {
            return new Vector3((slot - 1) * config.traySpacing, StackY, -config.trayDistance);
        }

        private void Awake()
        {
            _level = LoadLevel();
            _spec = LevelGenerator.Generate(_level, config.boardRadius, config.clearCount, config.palette.Length);

            _assets = new HexAssets(config, hexBaseMaterial);
            _board = BoardModel.BuildHexagon(config.boardRadius);

            _boardView = new GameObject("BoardView").AddComponent<BoardView>();
            _boardView.transform.SetParent(transform, false);
            _boardView.Build(config, _assets, _board);

            _factory = new StackFactory(config, _assets);
            _resolver = new MergeResolver();

            SeedFromSpec();

            _trayRoot = new GameObject("Tray").transform;
            _trayRoot.SetParent(transform, false);
            for (int i = 0; i < _spec.Bag.Count; i++) _bag.Enqueue(_spec.Bag[i]);
            FillTray();

            ApplyEnvironment();
            BuildBackground();
            BuildShadowGround();

            _animator = gameObject.AddComponent<MergeAnimator>();
            _animator.Init(config, _board, _boardView);

            // Tutorial only on Level 1: simpler UX, avoids logic confusion on later levels.
            if (tutorial != null && _level == 1)
                tutorial.Init(Camera.main, config, _board, GetTraySource);
            else if (tutorial != null)
                tutorial = null;

            InputController input = gameObject.AddComponent<InputController>();
            input.Init(Camera.main, config, _board, _boardView,
                () => _animator.IsPlaying || _levelOver || _activeMagnets > 0, PlaceFromTray,
                OnPlayerGrab,
                () => { if (tutorial != null) tutorial.NotifyDropFailed(); });

            // Endless mode's countdown HUD is gone; hide the old timer HUD and drive the goal readout.
            if (hud != null) hud.gameObject.SetActive(false);

            _goalHud = gameObject.AddComponent<GoalHud>();
            _goalHud.Build();
            _goalHud.SetLevel(_level);
            _goalHud.SetTimerRemaining(1f);
            RefreshGoal();

            _overView = gameObject.AddComponent<GameOverView>();
            _overView.Init(Restart, ContinueWithReward);

            _completeView = gameObject.AddComponent<LevelCompleteView>();
            _completeView.Init(NextLevel);

            GaEventProvider.ProgressionEvent(GameAnalyticsSDK.GAProgressionStatus.Start, Metric("Level"), Metric(_level.ToString()));
            SafeGameStart();
        }

        private void Update()
        {
            if (_levelOver || !_levelTimerStarted) return;

            bool expired = _levelTimer.Tick(Time.deltaTime);
            if (_goalHud != null) _goalHud.SetTimerRemaining(_levelTimer.Remaining01);
            if (expired) GameOver(false);
        }

        // Yandex Req 1.19.3: mark active gameplay so the platform can pause ads/other games.
        // Guarded because the SDK is uninitialized when a scene is run without Boot in the editor.
        private static void SafeGameStart() { try { Kimicu.YandexGames.YandexGamesSdk.GameStart(); } catch { } }
        private static void SafeGameStop()  { try { Kimicu.YandexGames.YandexGamesSdk.GameStop(); }  catch { } }

        private void OnPlayerGrab()
        {
            if (tutorial != null) tutorial.NotifyGrab();
        }

        private Vector3? GetTraySource()
        {
            if (_tray.Count == 0) return null;
            return _tray[0].View.transform.position + Vector3.up * 0.25f;
        }

        // --- Level setup --------------------------------------------------------------------------

        private void SeedFromSpec()
        {
            _seedTotal = 0;
            foreach (LevelSeedCell s in _spec.Seed)
            {
                if (!_board.TryGet(s.Coord, out CellModel cell)) continue;
                StackModel model = new StackModel();
                model.Set(s.Discs);
                cell.Stack = model;
                _seedTotal += s.Discs.Count;
                StackView view = _factory.Create($"Stack_{s.Coord}", model, CellStackPos(s.Coord), _boardView.transform);
                _boardView.Register(s.Coord, view);
            }
        }

        // Fills any empty tray slots from the finite bag (no infinite refill — when the bag is
        // empty the tray simply thins out and the level ends once the board is clear or stuck).
        private void FillTray()
        {
            for (int slot = 0; slot < TraySlots; slot++)
            {
                if (_bag.Count == 0) break;
                if (_tray.Exists(e => e.Slot == slot)) continue;

                LevelPiece piece = _bag.Dequeue();
                StackModel model = new StackModel();
                model.Set(piece.Discs);
                StackView view = _factory.Create($"TrayStack_{slot}", model, TraySlotPos(slot), _trayRoot);
                view.IsTray = true;
                _tray.Add(new TrayEntry { Model = model, View = view, Slot = slot });
            }
        }

        // --- Scoring / goal -----------------------------------------------------------------------

        private void AddScoreFromPlan(List<MergeStep> plan)
        {
            int cleared = 0;
            for (int i = 0; i < plan.Count; i++)
                if (plan[i] is ClearStep cs) cleared += cs.Count;
            if (cleared <= 0) return;
            _score += cleared;
        }

        private int DiscsOnBoard()
        {
            int n = 0;
            foreach (CellModel c in _board.Cells)
                if (!c.IsEmpty) n += c.Stack.Count;
            return n;
        }

        private int EmptyCellCount()
        {
            int n = 0;
            foreach (CellModel c in _board.Cells)
                if (c.IsEmpty) n++;
            return n;
        }

        private bool BoardEmpty()
        {
            foreach (CellModel c in _board.Cells)
                if (!c.IsEmpty) return false;
            return true;
        }

        private void RefreshGoal()
        {
            if (_goalHud != null) _goalHud.SetRemainingCount(DiscsOnBoard());
        }

        private void OnCascadeDone()
        {
            FillTray();
            RefreshGoal();
            EvaluateEnd();
        }

        // Decides win / loss after a placement settles.
        private void EvaluateEnd()
        {
            if (_levelOver) return;

            if (BoardEmpty()) { LevelComplete(); return; }

            bool trayHasPieces = _tray.Count > 0;
            bool anyEmptyCell = EmptyCellCount() > 0;

            // Deadlock: pieces in hand but nowhere to place them.
            if (trayHasPieces && !anyEmptyCell) { GameOver(true); return; }
            // Out of pieces with the board still not clear.
            if (!trayHasPieces && _bag.Count == 0) { GameOver(true); return; }
        }

        // --- Win ---------------------------------------------------------------------------------

        private void LevelComplete()
        {
            _levelOver = true;
            _levelTimer.Stop();
            SafeGameStop();
            if (tutorial != null) tutorial.StopForever();

            SaveBest(_score);
            int stars = ComputeStars();

            // Immediate save of progression (Yandex Req 1.9): advance to the next level now.
            try
            {
                SaveSystem.SaveData.Level = _level + 1;
                SaveSystem.SaveCurrent();
            }
            catch { /* Cloud not initialized (scene run without Boot in editor) — skip. */ }

            GaEventProvider.ProgressionEvent(GameAnalyticsSDK.GAProgressionStatus.Complete, Metric("Level"), Metric(_level.ToString()));

            if (_completeView != null) _completeView.Show(_level, stars);
        }

        // Stars reward efficiency: 3 if a good chunk of the bag was left unused, down to 1.
        private int ComputeStars()
        {
            int bagTotal = _spec.Bag.Count;
            int used = bagTotal - _bag.Count - _tray.Count;
            if (bagTotal <= 0) return 3;
            float usedRatio = (float)used / bagTotal;
            if (usedRatio <= 0.7f) return 3;
            if (usedRatio <= 0.9f) return 2;
            return 1;
        }

        // "Next": interstitial on every 2nd completed level (a natural break), then load the next.
        private void NextLevel()
        {
            if (_level % 2 == 0)
                Yandex.Advertisement.ShowInterstitial(onCloseCallback: ReloadScene);
            else
                ReloadScene();
        }

        // --- Loss --------------------------------------------------------------------------------

        private void GameOver(bool continueAvailable)
        {
            _levelOver = true;
            _levelTimer.Stop();
            SafeGameStop();
            if (tutorial != null) tutorial.StopForever();
            SaveBest(_score);
            GaEventProvider.ProgressionEvent(GameAnalyticsSDK.GAProgressionStatus.Fail, Metric("Level"), Metric(_level.ToString()));
            if (_overView != null) _overView.Show(_score, LoadBest(), continueAvailable);
        }

        // Retry the SAME level: interstitial at this break, then reload. ShowInterstitial always
        // invokes onClose (immediately when ads are unavailable), so reload is reliable.
        private void Restart()
        {
            Yandex.Advertisement.ShowInterstitial(onCloseCallback: ReloadScene);
        }

        private static void ReloadScene()
        {
            UnityEngine.SceneManagement.Scene active = UnityEngine.SceneManagement.SceneManager.GetActiveScene();
            UnityEngine.SceneManagement.SceneManager.LoadScene(active.buildIndex);
        }

        // Rewarded "continue" — clears room so a stuck player can keep going toward the empty board.
        private void ContinueWithReward()
        {
            Yandex.Advertisement.ShowReward(onRewardedCallback: GrantContinue, onErrorCallback: _ => { });
        }

        private void GrantContinue()
        {
            ClearSomeCells(6);
            _levelOver = false;
            if (_levelTimerStarted) _levelTimer.Begin(Mathf.Max(1f, _levelTimerDuration * 0.35f));
            if (_goalHud != null) _goalHud.SetTimerRemaining(_levelTimer.Remaining01);
            SafeGameStart();
            if (_overView != null) _overView.Hide();
            FillTray();
            RefreshGoal();
            EvaluateEnd();
        }

        private void ClearSomeCells(int count)
        {
            List<CellModel> occupied = new List<CellModel>();
            foreach (CellModel c in _board.Cells)
                if (!c.IsEmpty) occupied.Add(c);

            Shuffle(occupied);
            int n = Mathf.Min(count, occupied.Count);
            for (int i = 0; i < n; i++)
            {
                occupied[i].Stack = null;
                _boardView.RemoveStack(occupied[i].Coord);
            }
        }

        private static int LoadLevel()
        {
            try { return Mathf.Max(1, SaveSystem.SaveData.Level); }
            catch { return 1; }
        }

        private static int LoadBest()
        {
            try { return SaveSystem.SaveData.BestScore; }
            catch { return 0; }
        }

        private static void SaveBest(int best)
        {
            try
            {
                if (SaveSystem.SaveData.BestScore < best) SaveSystem.SaveData.BestScore = best;
                SaveSystem.SaveCurrent();
            }
            catch { /* Cloud not initialized (e.g. scene run without Boot in editor) — skip. */ }
        }

        private static GaEventProvider.MetricData Metric(string s) => () => s;

        private bool PlaceFromTray(StackView view, HexCoord coord)
        {
            TrayEntry entry = _tray.Find(e => e.View == view);
            if (entry == null || !_board.TryGet(coord, out CellModel cell) || !cell.IsEmpty) return false;

            cell.Stack = entry.Model;
            StartLevelTimerIfNeeded();
            view.IsTray = false;
            view.transform.SetParent(_boardView.transform, true);
            _boardView.Register(coord, view);
            _tray.Remove(entry);
            if (tutorial != null) tutorial.NotifyPlaced();

            StartCoroutine(MagnetIntoCell(view, coord, cell));
            return true;
        }

        private void StartLevelTimerIfNeeded()
        {
            if (_levelTimerStarted) return;

            _levelTimerDuration = ComputeLevelTimerDuration();
            _levelTimer.Begin(_levelTimerDuration);
            _levelTimerStarted = true;
            if (_goalHud != null) _goalHud.SetTimerRemaining(1f);
        }

        private float ComputeLevelTimerDuration()
        {
            int pressureLevel = Mathf.Max(2, config.timerFullPressureLevel);
            float pressure01 = Mathf.Clamp01((float)(_level - 1) / (pressureLevel - 1));
            float bonus = Mathf.Lerp(config.timerStartBonusSeconds, config.timerEndBonusSeconds, pressure01);
            float perPiece = Mathf.Lerp(config.timerStartSecondsPerPiece, config.timerEndSecondsPerPiece, pressure01);
            return Mathf.Max(10f, bonus + Mathf.Max(1, _spec.Bag.Count) * perPiece);
        }

        // Glides the just-dropped stack from wherever it was released into its cell's
        // resting spot, instead of snapping there instantly. The merge cascade only
        // starts once it has visually arrived, so discs don't fly off before the piece
        // has landed.
        private IEnumerator MagnetIntoCell(StackView view, HexCoord coord, CellModel cell)
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
            AddScoreFromPlan(plan);
            _animator.Play(plan, OnCascadeDone);
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

        private static void Shuffle<T>(IList<T> list)
        {
            for (int i = list.Count - 1; i > 0; i--)
            {
                int j = Random.Range(0, i + 1);
                (list[i], list[j]) = (list[j], list[i]);
            }
        }
    }
}
