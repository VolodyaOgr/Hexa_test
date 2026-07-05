using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using HexaTest.View;

namespace HexaTest.UI
{
    public sealed class PackshotView : MonoBehaviour
    {
        private const float ReferenceWidth = 1080f;
        private const float ReferenceHeight = 1920f;

        [Header("Assets")]
        [SerializeField] private Sprite background;
        [SerializeField] private Sprite logo;
        [SerializeField] private Sprite playNow;

        [Header("Reveal")]
        [SerializeField] private float revealStartSize = 120f;
        [SerializeField] private float revealEndPadding = 900f;
        [SerializeField] private float revealDuration = 0.65f;

        [Header("Layout")]
        [SerializeField] private Vector2 logoAnchoredPosition = Vector2.zero;
        [SerializeField] private Vector2 logoSize = new Vector2(760f, 300f);
        [SerializeField] private Vector2 playNowAnchoredPosition = new Vector2(0f, 250f);
        [SerializeField] private Vector2 playNowSize = new Vector2(560f, 170f);

        private RectTransform _maskRect;

        public void Show()
        {
            Show(background, logo, playNow);
        }

        public void Show(Sprite background, Sprite logo, Sprite playNow)
        {
            Build(background, logo, playNow);
            StartCoroutine(Reveal());
        }

        private void Build(Sprite background, Sprite logo, Sprite playNow)
        {
            GameObject canvasGo = new GameObject("PackshotCanvas", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            canvasGo.transform.SetParent(transform, false);

            Canvas canvas = canvasGo.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 1000;

            CanvasScaler scaler = canvasGo.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(ReferenceWidth, ReferenceHeight);
            scaler.matchWidthOrHeight = 0.5f;

            GameObject maskGo = new GameObject("Hex Reveal Mask", typeof(RectTransform), typeof(Image), typeof(Mask));
            maskGo.transform.SetParent(canvasGo.transform, false);
            _maskRect = maskGo.GetComponent<RectTransform>();
            _maskRect.anchorMin = _maskRect.anchorMax = new Vector2(0.5f, 0.5f);
            _maskRect.pivot = new Vector2(0.5f, 0.5f);
            _maskRect.anchoredPosition = Vector2.zero;
            _maskRect.sizeDelta = Vector2.one * revealStartSize;

            Image maskImage = maskGo.GetComponent<Image>();
            maskImage.sprite = CreateHexMaskSprite();
            maskImage.color = Color.white;
            maskGo.GetComponent<Mask>().showMaskGraphic = false;

            GameObject content = new GameObject("Packshot Content", typeof(RectTransform));
            content.transform.SetParent(maskGo.transform, false);
            RectTransform contentRect = content.GetComponent<RectTransform>();
            contentRect.anchorMin = contentRect.anchorMax = new Vector2(0.5f, 0.5f);
            contentRect.pivot = new Vector2(0.5f, 0.5f);
            contentRect.anchoredPosition = Vector2.zero;
            contentRect.sizeDelta = new Vector2(ReferenceWidth, ReferenceHeight);

            Image bg = NewImage("Background", content.transform, background);
            Stretch(bg.rectTransform, 0f);
            bg.preserveAspect = false;

            if (logo != null)
            {
                Image logoImage = NewImage("Logo", content.transform, logo);
                RectTransform rect = logoImage.rectTransform;
                rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);
                rect.pivot = new Vector2(0.5f, 0.5f);
                rect.anchoredPosition = logoAnchoredPosition;
                rect.sizeDelta = logoSize;
                logoImage.preserveAspect = true;
            }

            if (playNow != null)
            {
                Image buttonImage = NewImage("Play Now Button", content.transform, playNow);
                RectTransform rect = buttonImage.rectTransform;
                rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0f);
                rect.pivot = new Vector2(0.5f, 0.5f);
                rect.anchoredPosition = playNowAnchoredPosition;
                rect.sizeDelta = playNowSize;
                buttonImage.preserveAspect = true;
                buttonImage.raycastTarget = true;
                buttonImage.gameObject.AddComponent<Button>();
            }
        }

        private IEnumerator Reveal()
        {
            yield return Tweener.Tween(revealDuration, Easing.OutBack, k =>
            {
                float size = Mathf.Lerp(revealStartSize, GetRevealEndSize(), k);
                _maskRect.sizeDelta = new Vector2(size, size);
            });
            _maskRect.sizeDelta = Vector2.one * GetRevealEndSize();
        }

        private float GetRevealEndSize()
        {
            float diagonal = Mathf.Sqrt(ReferenceWidth * ReferenceWidth + ReferenceHeight * ReferenceHeight);
            return diagonal / 0.45f + revealEndPadding;
        }

        private static Image NewImage(string name, Transform parent, Sprite sprite)
        {
            GameObject go = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
            go.transform.SetParent(parent, false);
            Image image = go.GetComponent<Image>();
            image.sprite = sprite;
            image.raycastTarget = false;
            return image;
        }

        private static void Stretch(RectTransform rect, float inset)
        {
            rect.anchorMin = Vector2.zero;
            rect.anchorMax = Vector2.one;
            rect.offsetMin = new Vector2(inset, inset);
            rect.offsetMax = new Vector2(-inset, -inset);
            rect.pivot = new Vector2(0.5f, 0.5f);
        }

        private static Sprite CreateHexMaskSprite()
        {
            const int size = 256;
            Texture2D texture = new Texture2D(size, size, TextureFormat.RGBA32, false);
            Vector2 center = new Vector2((size - 1) * 0.5f, (size - 1) * 0.5f);
            float radius = size * 0.47f;
            Vector2[] points = new Vector2[6];
            for (int i = 0; i < points.Length; i++)
            {
                float angle = Mathf.Deg2Rad * (60f * i + 30f);
                points[i] = center + new Vector2(Mathf.Cos(angle), Mathf.Sin(angle)) * radius;
            }

            for (int y = 0; y < size; y++)
            {
                for (int x = 0; x < size; x++)
                {
                    bool inside = IsInsidePolygon(new Vector2(x, y), points);
                    texture.SetPixel(x, y, inside ? Color.white : Color.clear);
                }
            }
            texture.Apply();
            return Sprite.Create(texture, new Rect(0f, 0f, size, size), new Vector2(0.5f, 0.5f), 100f);
        }

        private static bool IsInsidePolygon(Vector2 point, Vector2[] polygon)
        {
            bool inside = false;
            for (int i = 0, j = polygon.Length - 1; i < polygon.Length; j = i++)
            {
                bool crosses = polygon[i].y > point.y != polygon[j].y > point.y;
                if (crosses)
                {
                    float x = (polygon[j].x - polygon[i].x) * (point.y - polygon[i].y) /
                              (polygon[j].y - polygon[i].y) + polygon[i].x;
                    if (point.x < x) inside = !inside;
                }
            }
            return inside;
        }
    }
}
