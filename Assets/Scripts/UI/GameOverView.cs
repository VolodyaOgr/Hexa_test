using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using HexaTest.View;

namespace HexaTest.UI
{
    /// <summary>
    /// End-of-run screen, built from code (no scene wiring). Shows the final score and best
    /// (counting up on entry), a Restart button, and — when rewarded ads are available — a
    /// "watch to continue" button that grants extra room to keep playing. The rewarded reward
    /// is an optional bonus and never blocks restarting (Yandex Req 4.5).
    /// </summary>
    public sealed class GameOverView : MonoBehaviour
    {
        private const float ReferenceWidth = 1080f;
        private const float ReferenceHeight = 1920f;

        private GameObject _root;
        private CanvasGroup _dimGroup;
        private RectTransform _panelRect;
        private Text _scoreText;
        private Text _bestText;
        private Action _onRestart;
        private Action _onContinue;
        private Button _continueButton;
        private RectTransform _continueRect;
        private RectTransform _restartRect;
        private int _shownScore;
        private int _shownBest;
        private EndScreenAssets _assets;
        private Coroutine _intro;

        public void Init(Action onRestart, Action onContinue, EndScreenAssets assets)
        {
            _onRestart = onRestart;
            _onContinue = onContinue;
            _assets = assets;
            Build();
            Hide();
        }

        public void Show(int score, int best, bool continueAvailable)
        {
            if (_root == null) Build();
            _shownScore = score;
            _shownBest = best;
            if (_continueButton != null) _continueButton.gameObject.SetActive(continueAvailable);
            _root.SetActive(true);

            if (_intro != null) StopCoroutine(_intro);
            _intro = StartCoroutine(PlayIntro());
        }

        public void Hide()
        {
            if (_intro != null) { StopCoroutine(_intro); _intro = null; }
            if (_root != null) _root.SetActive(false);
        }

        private IEnumerator PlayIntro()
        {
            _dimGroup.alpha = 0f;
            _panelRect.localScale = Vector3.zero;
            if (_scoreText != null) _scoreText.text = Loc.Format(LocalizationKey.score_format, "SCORE  {0}", 0);
            if (_bestText != null) _bestText.text = Loc.Format(LocalizationKey.best_format, "BEST  {0}", 0);
            if (_continueRect != null) _continueRect.localScale = Vector3.zero;
            if (_restartRect != null) _restartRect.localScale = Vector3.zero;

            yield return Tweener.Tween(0.18f, Easing.Linear, k => _dimGroup.alpha = k);
            yield return Tweener.Tween(0.32f, Easing.OutBack, k => _panelRect.localScale = Vector3.one * k);

            yield return Tweener.Tween(0.5f, Easing.OutQuad, k =>
            {
                if (_scoreText != null) _scoreText.text = Loc.Format(LocalizationKey.score_format, "SCORE  {0}", Mathf.RoundToInt(_shownScore * k));
                if (_bestText != null) _bestText.text = Loc.Format(LocalizationKey.best_format, "BEST  {0}", Mathf.RoundToInt(_shownBest * k));
            });

            if (_restartRect != null)
                yield return Tweener.Tween(0.22f, Easing.OutBack, k => _restartRect.localScale = Vector3.one * k);
            if (_continueRect != null && _continueButton != null && _continueButton.gameObject.activeSelf)
                yield return Tweener.Tween(0.22f, Easing.OutBack, k => _continueRect.localScale = Vector3.one * k);
        }

        private void Build()
        {
            GameObject canvasGo = new GameObject("GameOverCanvas", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            canvasGo.transform.SetParent(transform, false);

            Canvas canvas = canvasGo.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 1000;

            CanvasScaler scaler = canvasGo.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(ReferenceWidth, ReferenceHeight);
            scaler.matchWidthOrHeight = 0.5f;

            _root = canvasGo;

            GameObject dim = new GameObject("Dim", typeof(RectTransform), typeof(CanvasRenderer), typeof(Image), typeof(CanvasGroup));
            dim.transform.SetParent(canvasGo.transform, false);
            Stretch(dim.GetComponent<RectTransform>());
            Image dimImg = dim.GetComponent<Image>();
            dimImg.color = new Color(0f, 0f, 0f, 0.72f);
            dimImg.raycastTarget = true;
            _dimGroup = dim.GetComponent<CanvasGroup>();

            GameObject panelGo;
            if (_assets != null && _assets.PopupFrame != null)
            {
                panelGo = Instantiate(_assets.PopupFrame);
                panelGo.transform.SetParent(canvasGo.transform, false);
            }
            else
            {
                panelGo = new GameObject("Panel", typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
                panelGo.transform.SetParent(canvasGo.transform, false);
                panelGo.GetComponent<Image>().color = new Color(0.13f, 0.17f, 0.26f, 0.98f);
            }
            _panelRect = panelGo.GetComponent<RectTransform>();
            _panelRect.anchorMin = _panelRect.anchorMax = new Vector2(0.5f, 0.5f);
            _panelRect.pivot = new Vector2(0.5f, 0.5f);
            _panelRect.anchoredPosition = Vector2.zero;
            _panelRect.sizeDelta = new Vector2(920f, 1150f);

            Transform closeBtn = panelGo.transform.Find("Button_Close");
            if (closeBtn != null) closeBtn.gameObject.SetActive(false);

            TextMeshProUGUI existingTitle = panelGo.transform.Find("Text_Title")?.GetComponent<TextMeshProUGUI>();
            if (existingTitle != null)
            {
                RectTransform tr = existingTitle.rectTransform;
                tr.anchoredPosition = new Vector2(tr.anchoredPosition.x, 210f);
                tr.sizeDelta = new Vector2(tr.sizeDelta.x, 220f);
                existingTitle.text = Loc.Text(LocalizationKey.game_over_title, "GAME OVER");
            }
            else
            {
                CreateLabel(_panelRect, "Title", new Vector2(0f, 210f), 80,
                    Loc.Text(LocalizationKey.game_over_title, "GAME OVER"));
            }

            float[] starX = { -130f, 0f, 130f };
            for (int i = 0; i < 3; i++)
            {
                GameObject starGo = new GameObject("Star" + i, typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
                starGo.transform.SetParent(_panelRect, false);
                RectTransform r = starGo.GetComponent<RectTransform>();
                r.anchorMin = r.anchorMax = new Vector2(0.5f, 0.5f);
                r.pivot = new Vector2(0.5f, 0.5f);
                r.anchoredPosition = new Vector2(starX[i], 90f);
                r.sizeDelta = new Vector2(130f, 130f);
                Image img = starGo.GetComponent<Image>();
                img.sprite = _assets != null ? _assets.StarOff : null;
                img.preserveAspect = true;
            }

            _scoreText = CreateLabel(_panelRect, "Score", new Vector2(0f, -50f), 60,
                Loc.Format(LocalizationKey.score_format, "SCORE  {0}", 0));
            _bestText = CreateLabel(_panelRect, "Best", new Vector2(0f, -130f), 48,
                Loc.Format(LocalizationKey.best_format, "BEST  {0}", 0));

            // Continue: primary label ("CONTINUE") plus a smaller "ad required" subtitle and an
            // ad icon badge, instead of a single cryptic "WATCH AD +ROOM" line.
            GameObject continueGo;
            if (_assets != null && _assets.ButtonBlue != null)
            {
                continueGo = Instantiate(_assets.ButtonBlue);
                continueGo.transform.SetParent(_panelRect, false);
            }
            else
            {
                continueGo = new GameObject("Continue", typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
                continueGo.transform.SetParent(_panelRect, false);
                continueGo.GetComponent<Image>().color = new Color(0.20f, 0.45f, 0.75f);
                continueGo.GetComponent<RectTransform>().sizeDelta = new Vector2(620f, 160f);
            }
            _continueButton = continueGo.GetComponent<Button>();
            if (_continueButton == null) _continueButton = continueGo.AddComponent<Button>();
            _continueButton.onClick.AddListener(() => _onContinue?.Invoke());
            BuildContinueButtonContents(continueGo);

            _continueRect = continueGo.GetComponent<RectTransform>();
            _continueRect.anchorMin = _continueRect.anchorMax = new Vector2(0.5f, 0.5f);
            _continueRect.pivot = new Vector2(0.5f, 0.5f);
            _continueRect.anchoredPosition = new Vector2(0f, -260f);

            GameObject restartGo;
            if (_assets != null && _assets.ButtonGreen != null)
            {
                restartGo = Instantiate(_assets.ButtonGreen);
                restartGo.transform.SetParent(_panelRect, false);
                TextMeshProUGUI label = restartGo.GetComponentInChildren<TextMeshProUGUI>();
                if (label != null) label.text = Loc.Text(LocalizationKey.restart, "RESTART");
                Button b = restartGo.GetComponent<Button>();
                if (b != null) b.onClick.AddListener(() => _onRestart?.Invoke());
            }
            else
            {
                restartGo = CreateButton(_panelRect, "Restart", Vector2.zero, new Color(0.24f, 0.45f, 0.80f),
                    Loc.Text(LocalizationKey.restart, "RESTART"), () => _onRestart?.Invoke()).gameObject;
            }
            _restartRect = restartGo.GetComponent<RectTransform>();
            _restartRect.anchorMin = _restartRect.anchorMax = new Vector2(0.5f, 0.5f);
            _restartRect.pivot = new Vector2(0.5f, 0.5f);
            _restartRect.anchoredPosition = new Vector2(0f, -420f);
        }

        // Builds the continue button's contents: an ad icon badge on the left plus a two-line
        // "CONTINUE / watch an ad" label. Reuses the button prefab's own text child for the main
        // line when present (repositioned/resized) instead of adding a second, overlapping one —
        // that duplication was the earlier bug (prefab's placeholder text showing through ours).
        private void BuildContinueButtonContents(GameObject buttonGo)
        {
            if (_assets != null && _assets.AdIcon != null)
            {
                GameObject iconGo = new GameObject("AdIcon", typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
                iconGo.transform.SetParent(buttonGo.transform, false);
                RectTransform ir = iconGo.GetComponent<RectTransform>();
                ir.anchorMin = ir.anchorMax = new Vector2(0f, 0.5f);
                ir.pivot = new Vector2(0.5f, 0.5f);
                ir.anchoredPosition = new Vector2(60f, 0f);
                ir.sizeDelta = new Vector2(70f, 70f);
                Image icon = iconGo.GetComponent<Image>();
                icon.sprite = _assets.AdIcon;
                icon.preserveAspect = true;
                icon.raycastTarget = false;
            }

            TextMeshProUGUI existingLabel = buttonGo.GetComponentInChildren<TextMeshProUGUI>();
            if (existingLabel != null)
            {
                RectTransform tr = existingLabel.rectTransform;
                tr.anchorMin = tr.anchorMax = new Vector2(0.5f, 0.5f);
                tr.pivot = new Vector2(0.5f, 0.5f);
                tr.anchoredPosition = new Vector2(50f, 20f);
                tr.sizeDelta = new Vector2(230f, 56f);
                existingLabel.enableAutoSizing = false;
                existingLabel.fontSize = 40f;
                existingLabel.overflowMode = TMPro.TextOverflowModes.Overflow;
                existingLabel.text = Loc.Text(LocalizationKey.continue_ad, "CONTINUE");

                GameObject subGo = new GameObject("SubLabel", typeof(RectTransform), typeof(CanvasRenderer), typeof(TextMeshProUGUI));
                subGo.transform.SetParent(buttonGo.transform, false);
                RectTransform sr = subGo.GetComponent<RectTransform>();
                sr.anchorMin = sr.anchorMax = new Vector2(0.5f, 0.5f);
                sr.pivot = new Vector2(0.5f, 0.5f);
                sr.anchoredPosition = new Vector2(50f, -22f);
                sr.sizeDelta = new Vector2(230f, 36f);
                TextMeshProUGUI sub = subGo.GetComponent<TextMeshProUGUI>();
                sub.font = existingLabel.font;
                sub.fontSize = 22f;
                sub.alignment = TMPro.TextAlignmentOptions.Center;
                sub.color = new Color(1f, 1f, 1f, 0.75f);
                sub.text = Loc.Text(LocalizationKey.continue_ad_sub, "watch an ad");
                sub.raycastTarget = false;
            }
            else
            {
                Text main = CreateLabel(buttonGo.transform, "Label", new Vector2(50f, 20f), 40,
                    Loc.Text(LocalizationKey.continue_ad, "CONTINUE"));
                main.raycastTarget = false;

                Text sub = CreateLabel(buttonGo.transform, "SubLabel", new Vector2(50f, -22f), 22,
                    Loc.Text(LocalizationKey.continue_ad_sub, "watch an ad"));
                sub.color = new Color(1f, 1f, 1f, 0.75f);
                sub.raycastTarget = false;
            }
        }

        private static Text CreateLabel(Transform parent, string name, Vector2 anchoredPos, int fontSize, string value)
        {
            GameObject go = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Text));
            go.transform.SetParent(parent, false);

            RectTransform rect = go.GetComponent<RectTransform>();
            rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);
            rect.pivot = new Vector2(0.5f, 0.5f);
            rect.anchoredPosition = anchoredPos;
            rect.sizeDelta = new Vector2(760f, fontSize + 30f);

            Text text = go.GetComponent<Text>();
            text.font = UiFont.Builtin;
            text.fontSize = fontSize;
            text.alignment = TextAnchor.MiddleCenter;
            text.color = Color.white;
            text.horizontalOverflow = HorizontalWrapMode.Overflow;
            text.verticalOverflow = VerticalWrapMode.Overflow;
            text.raycastTarget = false;
            text.text = value;
            return text;
        }

        private static Button CreateButton(Transform parent, string name, Vector2 anchoredPos, Color color, string label, UnityEngine.Events.UnityAction onClick)
        {
            GameObject go = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
            go.transform.SetParent(parent, false);
            go.GetComponent<Image>().color = color;

            RectTransform rect = go.GetComponent<RectTransform>();
            rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);
            rect.pivot = new Vector2(0.5f, 0.5f);
            rect.anchoredPosition = anchoredPos;
            rect.sizeDelta = new Vector2(620f, 150f);

            Image image = go.GetComponent<Image>();
            image.raycastTarget = true;

            Button button = go.AddComponent<Button>();
            button.targetGraphic = image;
            button.onClick.AddListener(onClick);

            Text text = CreateLabel(rect, "Label", Vector2.zero, 52, label);
            text.raycastTarget = false;
            return button;
        }

        private static void Stretch(RectTransform rect)
        {
            rect.anchorMin = Vector2.zero;
            rect.anchorMax = Vector2.one;
            rect.offsetMin = Vector2.zero;
            rect.offsetMax = Vector2.zero;
            rect.pivot = new Vector2(0.5f, 0.5f);
        }
    }
}
