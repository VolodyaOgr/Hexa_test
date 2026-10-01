using System.Collections;
using System.Collections.Generic;
using TMPro;
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
        [Tooltip("Material asset using Hexa/ScreenGradient. A direct asset reference (not Shader.Find) is required for Luna to include the shader in the web build.")]
        [SerializeField] private Material backgroundMaterial;
        [Tooltip("Material asset using Hexa/ShadowGround. Same Luna requirement as above.")]
        [SerializeField] private Material shadowGroundMaterial;

        [Header("Background (procedural — no external art)")]
        [Tooltip("Sky color, upper part of the screen. Paired by index with backgroundDockColors; cycled by level, wrapping.")]
        [SerializeField] private Color[] backgroundSkyColors = { new Color(0.45f, 0.75f, 0.92f) };
        [Tooltip("Dock color, lower part of the screen where the tray sits — visually marks off the placement area.")]
        [SerializeField] private Color[] backgroundDockColors = { new Color(0.16f, 0.42f, 0.46f) };
        [Tooltip("How far up the screen (0=bottom edge, 1=top edge) the sky/dock gradient is centered.")]
        [Range(0f, 1f)] [SerializeField] private float backgroundDockHeight01 = 0.30f;
        [Tooltip("How wide the smooth transition between sky and dock color is, as a fraction of screen height.")]
        [Range(0.02f, 0.6f)] [SerializeField] private float backgroundGradientSoftness01 = 0.22f;
        [Tooltip("Twinkling star/sparkle particles drifting over the background.")]
        [SerializeField] private bool backgroundStars = true;
        [SerializeField] private int backgroundStarCount = 40;
        [SerializeField] private Color backgroundStarColor = new Color(1f, 1f, 0.92f);

        [Header("VFX (particle prefabs)")]
        [Tooltip("One burst prefab per palette color, indexed the same as config.palette — played once per stack clear.")]
        [SerializeField] private GameObject[] clearVfxByColor;
        [Tooltip("Played once at the cell when a tray piece lands.")]
        [SerializeField] private GameObject placeVfxPrefab;

        [Header("End screens (win/lose popup art)")]
        [SerializeField] private GameObject endScreenPopupFrame;
        [SerializeField] private GameObject endScreenButtonGreen;
        [SerializeField] private GameObject endScreenButtonBlue;
        [SerializeField] private Sprite endScreenStarOn;
        [SerializeField] private Sprite endScreenStarOff;
        [Tooltip("UI-space particle burst played behind each earned star as it pops in.")]
        [SerializeField] private GameObject endScreenStarSparkleVfx;
        [Tooltip("Small ad icon badge shown on the rewarded-ad continue button.")]
        [SerializeField] private Sprite endScreenAdIcon;
        [Tooltip("Cyrillic-capable TMP font asset for HUD/score text built directly from code. " +
                 "Unity's built-in legacy WebGL font has no Cyrillic glyphs, so Russian text on the " +
                 "goal HUD and the Game Over score/best labels needs this instead.")]
        [SerializeField] private TMP_FontAsset hudFontAsset;

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
            BuildBackgroundStars();

            _animator = gameObject.AddComponent<MergeAnimator>();
            _animator.Init(config, _board, _boardView, clearVfxByColor);

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
            if (hud != null) HideTimerHud();

            _goalHud = gameObject.AddComponent<GoalHud>();
            _goalHud.Build(hudFontAsset);
            _goalHud.SetLevel(_level);
            _goalHud.SetTimerRemaining(1f);
            RefreshGoal();

            var endScreenAssets = new EndScreenAssets
            {
                PopupFrame = endScreenPopupFrame,
                ButtonGreen = endScreenButtonGreen,
                ButtonBlue = endScreenButtonBlue,
                StarOn = endScreenStarOn,
                StarOff = endScreenStarOff,
                StarSparkleVfx = endScreenStarSparkleVfx,
                AdIcon = endScreenAdIcon,
                HudFont = hudFontAsset,
            };

            _overView = gameObject.AddComponent<GameOverView>();
            _overView.Init(Restart, ContinueWithReward, endScreenAssets);

            _completeView = gameObject.AddComponent<LevelCompleteView>();
            _completeView.Init(NextLevel, endScreenAssets);

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

            if (_goalHud != null) _goalHud.SetVisible(false);
            if (_completeView != null) _completeView.Show(_level, stars);
        }

        // The old timer HUD is hidden, but its canvas also hosts the NoAds button (and must stay
        // visible), so deactivating the whole hud object would remove that button from the game.
        private void HideTimerHud()
        {
            hud.enabled = false;

            Canvas canvas = hud.GetComponentInChildren<Canvas>(true);
            Transform keep = canvas != null && canvas.GetComponentInChildren<NoAdButton>(true) != null
                ? canvas.GetComponentInChildren<NoAdButton>(true).transform
                : null;
            if (keep == null)
            {
                hud.gameObject.SetActive(false);
                return;
            }

            foreach (Transform child in canvas.transform)
                if (child != keep) child.gameObject.SetActive(false);
        }

        // Stars reward speed: how much of the level's allotted time got used.
        // <50% => 3 stars, 50-80% => 2 stars, >80% => 1 star.
        private int ComputeStars()
        {
            float used01 = _levelTimerStarted ? _levelTimer.Progress01 : 0f;
            if (used01 < 0.5f) return 3;
            if (used01 <= 0.8f) return 2;
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
            if (_goalHud != null) _goalHud.SetVisible(false);
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
            if (_goalHud != null)
            {
                _goalHud.SetTimerRemaining(_levelTimer.Remaining01);
                _goalHud.SetVisible(true);
            }
            SafeGameStart();
            if (_overView != null) _overView.Hide();

            // A continue must always leave the player with something to place. If the level was
            // lost by running out of bag pieces (not a placement deadlock), clearing board space
            // alone changes nothing — EvaluateEnd would immediately re-trigger GameOver against the
            // still-empty tray/bag, bouncing the player straight back to the loss screen.
            if (_bag.Count == 0 && _tray.Count == 0)
                RefillBagForContinue();

            FillTray();
            RefreshGoal();
            EvaluateEnd();
        }

        // Tops up the bag with a handful of single-disc pieces, colored from whatever's already on
        // the board (falls back to the level palette if the board is somehow empty), so the pieces
        // are likely to merge with existing stacks instead of just taking up space.
        private void RefillBagForContinue()
        {
            var colors = new List<HexColorId>();
            foreach (CellModel c in _board.Cells)
                if (!c.IsEmpty && !colors.Contains(c.Stack.TopColor))
                    colors.Add(c.Stack.TopColor);

            if (colors.Count == 0)
            {
                int paletteCount = Mathf.Max(1, config.palette.Length);
                for (int i = 0; i < paletteCount; i++)
                    colors.Add((HexColorId)i);
            }

            for (int i = 0; i < TraySlots; i++)
            {
                HexColorId color = colors[Random.Range(0, colors.Count)];
                _bag.Enqueue(new LevelPiece(new List<HexColorId> { color }));
            }
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

            if (placeVfxPrefab != null)
            {
                GameObject fx = Instantiate(placeVfxPrefab, target, Quaternion.identity);
                VfxTuning.Scale(fx, 0.6f, 0.8f);
                Destroy(fx, 2f);
            }

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

        private Texture2D _backgroundTex;

        // Smooth vertical gradient backdrop instead of stock art: sky color up top blending
        // into a "dock" color toward the bottom, no hard edge. A tall, 1px-wide texture with
        // bilinear filtering interpolates perfectly smoothly regardless of resolution — no
        // pixelation. Generated once per level and reused by BuildShadowGround so the ground
        // stays seamless with it (same texture, same screen-space UV sampling).
        private Texture2D CurrentBackgroundTexture()
        {
            if (_backgroundTex != null) return _backgroundTex;

            Color sky = PickCycled(backgroundSkyColors, _level, new Color(0.45f, 0.75f, 0.92f));
            Color dock = PickCycled(backgroundDockColors, _level, new Color(0.16f, 0.42f, 0.46f));

            const int h = 256;
            var tex = new Texture2D(1, h, TextureFormat.RGBA32, false) { wrapMode = TextureWrapMode.Clamp, filterMode = FilterMode.Bilinear };

            float center = backgroundDockHeight01;
            float half = Mathf.Max(0.001f, backgroundGradientSoftness01 * 0.5f);

            var pixels = new Color[h];
            for (int y = 0; y < h; y++)
            {
                float v = (float)y / (h - 1); // 0 = bottom of screen, 1 = top
                float t = Mathf.SmoothStep(0f, 1f, Mathf.InverseLerp(center - half, center + half, v));
                pixels[y] = Color.Lerp(dock, sky, t);
            }
            tex.SetPixels(pixels);
            tex.Apply(false, false);

            _backgroundTex = tex;
            return tex;
        }

        private static Color PickCycled(Color[] colors, int level, Color fallback)
        {
            if (colors == null || colors.Length == 0) return fallback;
            int i = ((level - 1) % colors.Length + colors.Length) % colors.Length;
            return colors[i];
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
            Texture2D bgTex = CurrentBackgroundTexture();
            if (src == null || bgTex == null) { Debug.LogWarning("[Hexa] ShadowGround material/background missing."); return; }

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
            mat.mainTexture = bgTex;  // same image as the background => seamless
            mat.SetFloat("_Strength", 0.45f);
            MeshRenderer mr = g.GetComponent<MeshRenderer>();
            mr.sharedMaterial = mat;
            mr.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            mr.receiveShadows = true;
        }

        private void BuildBackground()
        {
            Texture2D bgTex = CurrentBackgroundTexture();
            if (bgTex == null || _cam == null) return;

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
            Material mat = new Material(src) { mainTexture = bgTex };
            MeshRenderer mr = bg.GetComponent<MeshRenderer>();
            mr.sharedMaterial = mat;
            mr.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            mr.receiveShadows = false;
        }

        // Ambient twinkling stars scattered over the background, behind the board (depth-tested
        // against the board's opaque geometry, same trick BuildBackground relies on). Uses
        // Unity's built-in default particle material — no external art.
        private void BuildBackgroundStars()
        {
            if (!backgroundStars || backgroundStarCount <= 0 || _cam == null) return;

            GameObject stars = new GameObject("BackgroundStars");
            stars.layer = 0;
            stars.transform.SetParent(_cam.transform, false);
            stars.transform.localPosition = new Vector3(0f, 0f, 49.5f); // in front of the bg quad (z=50)

            float h = (_cam.orthographic ? _cam.orthographicSize : 20f * Mathf.Tan(_cam.fieldOfView * 0.5f * Mathf.Deg2Rad)) * 2f;

            ParticleSystem ps = stars.AddComponent<ParticleSystem>();
            ps.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);

            ParticleSystem.MainModule main = ps.main;
            main.loop = true;
            main.startLifetime = 22f;
            main.startSpeed = 0f;
            main.startSize = new ParticleSystem.MinMaxCurve(0.02f, 0.06f);
            main.startColor = backgroundStarColor;
            main.simulationSpace = ParticleSystemSimulationSpace.Local;
            main.maxParticles = Mathf.Max(1, backgroundStarCount * 2);

            ParticleSystem.EmissionModule emission = ps.emission;
            emission.rateOverTime = backgroundStarCount / main.startLifetime.constant;

            ParticleSystem.ShapeModule shape = ps.shape;
            shape.shapeType = ParticleSystemShapeType.Box;
            shape.scale = new Vector3(h * 3.2f, h * 2.2f, 0.01f);

            // Size pulses through several full cycles across each particle's lifetime, and since
            // particles spawn at different times their pulses land out of phase — reads as an
            // organic shimmer rather than a synchronized blink.
            var twinkle = new AnimationCurve();
            const int cycles = 6;
            const int steps = cycles * 4;
            for (int i = 0; i <= steps; i++)
            {
                float t = (float)i / steps;
                float v = 0.25f + 0.75f * (0.5f + 0.5f * Mathf.Sin(t * cycles * Mathf.PI * 2f));
                twinkle.AddKey(t, v);
            }
            ParticleSystem.SizeOverLifetimeModule sizeOverLifetime = ps.sizeOverLifetime;
            sizeOverLifetime.enabled = true;
            sizeOverLifetime.size = new ParticleSystem.MinMaxCurve(1f, twinkle);

            ps.Play();
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
