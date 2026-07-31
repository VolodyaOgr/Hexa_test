using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using HexaTest.View;

namespace HexaTest.UI
{
    /// <summary>
    /// Between-levels win screen, built from code (no scene wiring). Shows the cleared level,
    /// a star rating and a "next" button that advances the progression. Stars pop in one at a
    /// time with a sparkle burst; the panel and button bounce in with an overshoot ease.
    /// </summary>
    public sealed class LevelCompleteView : MonoBehaviour
    {
        private const float ReferenceWidth = 1080f;
        private const float ReferenceHeight = 1920f;

        private GameObject _root;
        private CanvasGroup _dimGroup;
        private RectTransform _panelRect;
        private Transform _glow;
        private Action<string> _setTitle;
        private readonly Image[] _starIcons = new Image[3];
        private RectTransform _buttonRect;
        private Action _onNext;
        private EndScreenAssets _assets;
        private Coroutine _intro;
        private Coroutine _idlePulse;
        private Coroutine _glowSpin;

        public void Init(Action onNext, EndScreenAssets assets)
        {
            _onNext = onNext;
            _assets = assets;
            Build();
            Hide();
        }

        public void Show(int level, int stars)
        {
            if (_root == null) Build();
            _setTitle?.Invoke(Loc.Format(LocalizationKey.level_complete_format, "LEVEL {0}\nCOMPLETE!", level));
            _root.SetActive(true);

            StopIntro();
            _intro = StartCoroutine(PlayIntro(Mathf.Clamp(stars, 0, 3)));
        }

        public void Hide()
        {
            StopIntro();
            if (_root != null) _root.SetActive(false);
        }

        private void StopIntro()
        {
            if (_intro != null) { StopCoroutine(_intro); _intro = null; }
            if (_idlePulse != null) { StopCoroutine(_idlePulse); _idlePulse = null; }
            if (_glowSpin != null) { StopCoroutine(_glowSpin); _glowSpin = null; }
        }

        private IEnumerator PlayIntro(int stars)
        {
            _dimGroup.alpha = 0f;
            _panelRect.localScale = Vector3.zero;
            foreach (Image star in _starIcons) if (star != null) star.transform.localScale = Vector3.zero;
            if (_buttonRect != null) _buttonRect.localScale = Vector3.zero;

            yield return Tweener.Tween(0.18f, Easing.Linear, k => _dimGroup.alpha = k);
            yield return Tweener.Tween(0.32f, Easing.OutBack, k => _panelRect.localScale = Vector3.one * k);

            if (_glow != null && _glowSpin == null) _glowSpin = StartCoroutine(SpinForever(_glow));

            for (int i = 0; i < _starIcons.Length; i++)
            {
                bool filled = i < stars;
                Image star = _starIcons[i];
                if (star != null)
                {
                    star.sprite = filled ? _assets?.StarOn : _assets?.StarOff;
                    if (filled) SpawnSparkle(star.transform);
                    Transform st = star.transform;
                    float target = filled ? 1f : 0.8f;
                    yield return Tweener.Tween(0.24f, Easing.OutBack, k => st.localScale = Vector3.one * k * target);
                }
                yield return new WaitForSeconds(0.1f);
            }

            if (_buttonRect != null)
            {
                yield return Tweener.Tween(0.22f, Easing.OutBack, k => _buttonRect.localScale = Vector3.one * k);
                _idlePulse = StartCoroutine(IdlePulse(_buttonRect));
            }
        }

        private void SpawnSparkle(Transform anchor)
        {
            if (_assets == null || _assets.StarSparkleVfx == null) return;
            GameObject fx = Instantiate(_assets.StarSparkleVfx, anchor.parent);
            RectTransform fr = fx.GetComponent<RectTransform>();
            if (fr != null) fr.position = anchor.position;
            else fx.transform.position = anchor.position;
            Destroy(fx, 1.5f);
        }

        private static IEnumerator IdlePulse(Transform t)
        {
            while (true)
            {
                yield return Tweener.Tween(0.55f, Easing.InOutQuad, k => t.localScale = Vector3.one * Mathf.Lerp(1f, 1.07f, k));
                yield return Tweener.Tween(0.55f, Easing.InOutQuad, k => t.localScale = Vector3.one * Mathf.Lerp(1.07f, 1f, k));
            }
        }

        private static IEnumerator SpinForever(Transform t)
        {
            while (true)
            {
                t.Rotate(0f, 0f, 12f * Time.deltaTime);
                yield return null;
            }
        }

        private void Build()
        {
            GameObject canvasGo = new GameObject("LevelCompleteCanvas", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
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
                panelGo.GetComponent<Image>().color = new Color(0.13f, 0.22f, 0.18f, 0.98f);
            }
            _panelRect = panelGo.GetComponent<RectTransform>();
            _panelRect.anchorMin = _panelRect.anchorMax = new Vector2(0.5f, 0.5f);
            _panelRect.pivot = new Vector2(0.5f, 0.5f);
            _panelRect.anchoredPosition = Vector2.zero;
            _panelRect.sizeDelta = new Vector2(920f, 1150f);

            _glow = panelGo.transform.Find("BackGlow");

            Transform closeBtn = panelGo.transform.Find("Button_Close");
            if (closeBtn != null) closeBtn.gameObject.SetActive(false);

            TextMeshProUGUI existingTitle = panelGo.transform.Find("Text_Title")?.GetComponent<TextMeshProUGUI>();
            if (existingTitle != null)
            {
                RectTransform tr = existingTitle.rectTransform;
                tr.anchoredPosition = new Vector2(tr.anchoredPosition.x, 210f);
                tr.sizeDelta = new Vector2(tr.sizeDelta.x, 220f);
                existingTitle.text = Loc.Format(LocalizationKey.level_complete_format, "LEVEL {0}\nCOMPLETE!", 1);
                _setTitle = s => existingTitle.text = s;
            }
            else
            {
                Text fallbackTitle = CreateLabel(_panelRect, "Title", new Vector2(0f, 210f), 72,
                    Loc.Format(LocalizationKey.level_complete_format, "LEVEL {0}\nCOMPLETE!", 1));
                _setTitle = s => fallbackTitle.text = s;
            }

            float[] starX = { -190f, 0f, 190f };
            for (int i = 0; i < 3; i++)
            {
                GameObject starGo = new GameObject("Star" + i, typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
                starGo.transform.SetParent(_panelRect, false);
                RectTransform r = starGo.GetComponent<RectTransform>();
                r.anchorMin = r.anchorMax = new Vector2(0.5f, 0.5f);
                r.pivot = new Vector2(0.5f, 0.5f);
                r.anchoredPosition = new Vector2(starX[i], -30f);
                r.sizeDelta = new Vector2(190f, 190f);
                Image img = starGo.GetComponent<Image>();
                img.sprite = _assets != null ? _assets.StarOff : null;
                img.preserveAspect = true;
                starGo.transform.localScale = Vector3.zero;
                _starIcons[i] = img;
            }

            GameObject buttonGo;
            if (_assets != null && _assets.ButtonGreen != null)
            {
                buttonGo = Instantiate(_assets.ButtonGreen);
                buttonGo.transform.SetParent(_panelRect, false);
                Button pbtn = buttonGo.GetComponent<Button>();
                if (pbtn != null) pbtn.onClick.AddListener(() => _onNext?.Invoke());
                TextMeshProUGUI label = buttonGo.GetComponentInChildren<TextMeshProUGUI>();
                if (label != null) label.text = Loc.Text(LocalizationKey.next, "NEXT");
            }
            else
            {
                buttonGo = CreateButton(_panelRect, "Next", Vector2.zero, new Color(0.20f, 0.62f, 0.30f),
                    Loc.Text(LocalizationKey.next, "NEXT"), () => _onNext?.Invoke()).gameObject;
            }
            _buttonRect = buttonGo.GetComponent<RectTransform>();
            _buttonRect.anchorMin = _buttonRect.anchorMax = new Vector2(0.5f, 0.5f);
            _buttonRect.pivot = new Vector2(0.5f, 0.5f);
            _buttonRect.anchoredPosition = new Vector2(0f, -330f);
        }

        private static Text CreateLabel(Transform parent, string name, Vector2 anchoredPos, int fontSize, string value)
        {
            GameObject go = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Text));
            go.transform.SetParent(parent, false);

            RectTransform rect = go.GetComponent<RectTransform>();
            rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);
            rect.pivot = new Vector2(0.5f, 0.5f);
            rect.anchoredPosition = anchoredPos;
            rect.sizeDelta = new Vector2(780f, fontSize * 2 + 40f);

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
