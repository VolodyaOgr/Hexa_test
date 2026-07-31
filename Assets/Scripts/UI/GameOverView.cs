using System;
using UnityEngine;
using UnityEngine.UI;

namespace HexaTest.UI
{
    /// <summary>
    /// End-of-run screen, built from code (no scene wiring). Replaces the old Luna packshot.
    /// Shows the final score and best, a Restart button, and — when rewarded ads are
    /// available — a "watch to continue" button that grants extra room to keep playing.
    /// The rewarded reward is an optional bonus and never blocks restarting (Yandex Req 4.5).
    /// </summary>
    public sealed class GameOverView : MonoBehaviour
    {
        private const float ReferenceWidth = 1080f;
        private const float ReferenceHeight = 1920f;

        private GameObject _root;
        private Text _scoreText;
        private Text _bestText;
        private Action _onRestart;
        private Action _onContinue;
        private Button _continueButton;

        public void Init(Action onRestart, Action onContinue)
        {
            _onRestart = onRestart;
            _onContinue = onContinue;
            Build();
            Hide();
        }

        public void Show(int score, int best, bool continueAvailable)
        {
            if (_root == null) Build();
            if (_scoreText != null) _scoreText.text = Loc.Format(LocalizationKey.score_format, "SCORE  {0}", score);
            if (_bestText != null) _bestText.text = Loc.Format(LocalizationKey.best_format, "BEST  {0}", best);
            if (_continueButton != null) _continueButton.gameObject.SetActive(continueAvailable);
            _root.SetActive(true);
        }

        public void Hide()
        {
            if (_root != null) _root.SetActive(false);
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

            // Dim backdrop covering the whole screen.
            GameObject dim = NewImage("Dim", canvasGo.transform, new Color(0f, 0f, 0f, 0.72f));
            Stretch(dim.GetComponent<RectTransform>());
            dim.GetComponent<Image>().raycastTarget = true;

            // Centered panel.
            GameObject panel = NewImage("Panel", canvasGo.transform, new Color(0.13f, 0.17f, 0.26f, 0.98f));
            RectTransform panelRect = panel.GetComponent<RectTransform>();
            panelRect.anchorMin = panelRect.anchorMax = new Vector2(0.5f, 0.5f);
            panelRect.pivot = new Vector2(0.5f, 0.5f);
            panelRect.sizeDelta = new Vector2(840f, 1040f);

            CreateLabel(panelRect, "Title", new Vector2(0f, 400f), 84,
                Loc.Text(LocalizationKey.game_over_title, "GAME OVER"));
            _scoreText = CreateLabel(panelRect, "Score", new Vector2(0f, 210f), 60,
                Loc.Format(LocalizationKey.score_format, "SCORE  {0}", 0));
            _bestText = CreateLabel(panelRect, "Best", new Vector2(0f, 120f), 48,
                Loc.Format(LocalizationKey.best_format, "BEST  {0}", 0));

            _continueButton = CreateButton(panelRect, "Continue", new Vector2(0f, -60f),
                new Color(0.20f, 0.62f, 0.30f),
                Loc.Text(LocalizationKey.continue_ad, "WATCH AD  +ROOM"), () => _onContinue?.Invoke());
            CreateButton(panelRect, "Restart", new Vector2(0f, -260f),
                new Color(0.24f, 0.45f, 0.80f),
                Loc.Text(LocalizationKey.restart, "RESTART"), () => _onRestart?.Invoke());
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
