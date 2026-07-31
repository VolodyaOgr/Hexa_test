using UnityEngine;
using UnityEngine.UI;

namespace HexaTest.UI
{
    /// <summary>
    /// Minimal endless-mode score readout, built entirely from code (like the rest of
    /// this project's UI) so it needs no scene wiring. Shows the current run's score and
    /// the saved best. Uses a legacy <see cref="Text"/> with Unity's built-in font so it
    /// always renders in a WebGL build without depending on imported TMP essentials.
    /// </summary>
    public sealed class ScoreHud : MonoBehaviour
    {
        private const float ReferenceWidth = 1080f;
        private const float ReferenceHeight = 1920f;

        private Text _scoreText;
        private Text _bestText;

        public void Build()
        {
            GameObject canvasGo = new GameObject("ScoreHudCanvas", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            canvasGo.transform.SetParent(transform, false);

            Canvas canvas = canvasGo.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 500;

            CanvasScaler scaler = canvasGo.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(ReferenceWidth, ReferenceHeight);
            scaler.matchWidthOrHeight = 0.5f;

            _scoreText = CreateLabel(canvasGo.transform, "Score", new Vector2(0f, -120f), 96, TextAnchor.MiddleCenter);
            _bestText = CreateLabel(canvasGo.transform, "Best", new Vector2(0f, -220f), 48, TextAnchor.MiddleCenter);

            Set(0, 0);
        }

        public void Set(int score, int best)
        {
            if (_scoreText != null) _scoreText.text = score.ToString();
            if (_bestText != null) _bestText.text = Loc.Format(LocalizationKey.best_format, "BEST  {0}", best);
        }

        private static Text CreateLabel(Transform parent, string name, Vector2 anchoredPos, int fontSize, TextAnchor align)
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
            text.alignment = align;
            text.color = Color.white;
            text.horizontalOverflow = HorizontalWrapMode.Overflow;
            text.verticalOverflow = VerticalWrapMode.Overflow;
            text.raycastTarget = false;
            return text;
        }
    }
}
