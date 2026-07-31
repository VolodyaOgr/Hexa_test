using System;
using UnityEngine;
using UnityEngine.UI;

namespace HexaTest.UI
{
    /// <summary>
    /// Between-levels win screen, built from code (no scene wiring). Shows the cleared level,
    /// a star rating and a "next" button that advances the progression.
    /// </summary>
    public sealed class LevelCompleteView : MonoBehaviour
    {
        private const float ReferenceWidth = 1080f;
        private const float ReferenceHeight = 1920f;

        private GameObject _root;
        private Text _titleText;
        private Text _starsText;
        private Action _onNext;

        public void Init(Action onNext)
        {
            _onNext = onNext;
            Build();
            Hide();
        }

        public void Show(int level, int stars)
        {
            if (_root == null) Build();
            if (_titleText != null)
                _titleText.text = Loc.Format(LocalizationKey.level_complete_format, "LEVEL {0}\nCOMPLETE!", level);
            if (_starsText != null) _starsText.text = Stars(stars);
            _root.SetActive(true);
        }

        public void Hide()
        {
            if (_root != null) _root.SetActive(false);
        }

        private static string Stars(int stars)
        {
            stars = Mathf.Clamp(stars, 0, 3);
            return new string('★', stars) + new string('☆', 3 - stars);
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

            GameObject dim = NewImage("Dim", canvasGo.transform, new Color(0f, 0f, 0f, 0.72f));
            Stretch(dim.GetComponent<RectTransform>());
            dim.GetComponent<Image>().raycastTarget = true;

            GameObject panel = NewImage("Panel", canvasGo.transform, new Color(0.13f, 0.22f, 0.18f, 0.98f));
            RectTransform panelRect = panel.GetComponent<RectTransform>();
            panelRect.anchorMin = panelRect.anchorMax = new Vector2(0.5f, 0.5f);
            panelRect.pivot = new Vector2(0.5f, 0.5f);
            panelRect.sizeDelta = new Vector2(840f, 900f);

            _titleText = CreateLabel(panelRect, "Title", new Vector2(0f, 300f), 76,
                Loc.Format(LocalizationKey.level_complete_format, "LEVEL {0}\nCOMPLETE!", 1));
            _starsText = CreateLabel(panelRect, "Stars", new Vector2(0f, 90f), 110, "★★★");
            _starsText.color = new Color(1f, 0.86f, 0.25f);

            CreateButton(panelRect, "Next", new Vector2(0f, -200f),
                new Color(0.20f, 0.62f, 0.30f),
                Loc.Text(LocalizationKey.next, "NEXT"), () => _onNext?.Invoke());
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
            GameObject go = NewImage(name, parent, color);
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

        private static GameObject NewImage(string name, Transform parent, Color color)
        {
            GameObject go = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
            go.transform.SetParent(parent, false);
            go.GetComponent<Image>().color = color;
            return go;
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
