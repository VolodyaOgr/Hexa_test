using UnityEngine;
using UnityEngine.UI;

namespace HexaTest.UI
{
    /// <summary>
    /// Top-of-screen goal readout for the "clear the board" objective: current level, a progress
    /// bar (cleared / total starting hexes) and the remaining-hex count. Built from code with the
    /// built-in font, like the rest of this project's UI, so it needs no scene wiring and always
    /// renders in a WebGL build.
    /// </summary>
    public sealed class GoalHud : MonoBehaviour
    {
        private const float ReferenceWidth = 1080f;
        private const float ReferenceHeight = 1920f;

        private Text _levelText;
        private Text _remainText;
        private RectTransform _fill;

        public void Build()
        {
            GameObject canvasGo = new GameObject("GoalHudCanvas", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            canvasGo.transform.SetParent(transform, false);

            Canvas canvas = canvasGo.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 500;

            CanvasScaler scaler = canvasGo.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(ReferenceWidth, ReferenceHeight);
            scaler.matchWidthOrHeight = 0.5f;

            _levelText = CreateLabel(canvasGo.transform, "Level", new Vector2(0f, -70f), 60,
                Loc.Format(LocalizationKey.level_format, "LEVEL {0}", 1));
            _remainText = CreateLabel(canvasGo.transform, "Remain", new Vector2(0f, -150f), 40,
                Loc.Format(LocalizationKey.remaining_format, "Left: {0}", 0));

            // Timer bar: starts full and shrinks as the level timer runs.
            GameObject bg = NewImage("BarBg", canvasGo.transform, new Color(0f, 0f, 0f, 0.35f));
            RectTransform bgRect = bg.GetComponent<RectTransform>();
            bgRect.anchorMin = bgRect.anchorMax = new Vector2(0.5f, 1f);
            bgRect.pivot = new Vector2(0.5f, 1f);
            bgRect.anchoredPosition = new Vector2(0f, -215f);
            bgRect.sizeDelta = new Vector2(720f, 44f);

            GameObject fill = NewImage("Fill", bg.transform, new Color(0.30f, 0.82f, 0.28f));
            _fill = fill.GetComponent<RectTransform>();
            _fill.anchorMin = new Vector2(0f, 0f);
            _fill.anchorMax = new Vector2(1f, 1f);   // width driven via anchorMax.x in SetTimerRemaining
            _fill.pivot = new Vector2(0f, 0.5f);
            _fill.offsetMin = new Vector2(4f, 4f);
            _fill.offsetMax = new Vector2(4f, -4f);
        }

        public void SetLevel(int level)
        {
            if (_levelText != null)
                _levelText.text = Loc.Format(LocalizationKey.level_format, "LEVEL {0}", level);
        }

        public void SetRemainingCount(int remaining)
        {
            if (_remainText != null)
                _remainText.text = Loc.Format(LocalizationKey.remaining_format, "Left: {0}", Mathf.Max(0, remaining));
        }

        public void SetTimerRemaining(float remaining01)
        {
            if (_fill == null) return;

            float amount = Mathf.Clamp01(remaining01);
            _fill.anchorMax = new Vector2(amount, 1f);

            Image image = _fill.GetComponent<Image>();
            if (image == null) return;

            Color relaxed = new Color(0.30f, 0.82f, 0.28f);
            Color warning = new Color(0.98f, 0.73f, 0.16f);
            Color danger = new Color(0.92f, 0.20f, 0.18f);
            image.color = amount > 0.35f
                ? Color.Lerp(warning, relaxed, Mathf.InverseLerp(0.35f, 1f, amount))
                : Color.Lerp(danger, warning, Mathf.InverseLerp(0f, 0.35f, amount));
        }

        private static Text CreateLabel(Transform parent, string name, Vector2 anchoredPos, int fontSize, string value)
        {
            GameObject go = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Text));
            go.transform.SetParent(parent, false);

            RectTransform rect = go.GetComponent<RectTransform>();
            rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 1f);
            rect.pivot = new Vector2(0.5f, 1f);
            rect.anchoredPosition = anchoredPos;
            rect.sizeDelta = new Vector2(900f, fontSize + 24f);

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

        private static GameObject NewImage(string name, Transform parent, Color color)
        {
            GameObject go = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
            go.transform.SetParent(parent, false);
            Image img = go.GetComponent<Image>();
            img.color = color;
            img.raycastTarget = false;
            return go;
        }
    }
}
