using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using HexaTest.Config;
using HexaTest.Domain;
using HexaTest.View;

namespace HexaTest.App
{
    public sealed class TutorialController : MonoBehaviour
    {
        [Header("Hand sprites")]
        [SerializeField] private Sprite baseSprite;
        [SerializeField] private Sprite pressSprite;

        [Header("Tuning")]
        [SerializeField] private float idleDelay = 2.5f;
        [SerializeField] private float handScale = 0.5f;

        private Camera _cam;
        private GameConfig _cfg;
        private BoardModel _board;
        private Func<Vector3?> _getSource;

        private Image _hand;
        private RectTransform _handRect;
        private Canvas _canvas;
        private Coroutine _loop;
        private bool _showing;
        private bool _stopped;
        private bool _waitingForDrop;
        private float _idle;

        public void Init(Camera cam, GameConfig cfg, BoardModel board, Func<Vector3?> getSource)
        {
            _cam = cam; _cfg = cfg; _board = board;
            _getSource = getSource;

            GameObject canvasGo = new GameObject("TutorialCanvas", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            canvasGo.transform.SetParent(transform, false);
            _canvas = canvasGo.GetComponent<Canvas>();
            _canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            _canvas.sortingOrder = 2000;

            CanvasScaler scaler = canvasGo.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(1080f, 1920f);
            scaler.matchWidthOrHeight = 0.5f;

            GameObject go = new GameObject("TutorialHand", typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
            go.transform.SetParent(canvasGo.transform, false);
            _handRect = go.GetComponent<RectTransform>();
            _handRect.pivot = new Vector2(0.5f, 0.5f);
            _hand = go.GetComponent<Image>();
            _hand.sprite = baseSprite;
            _hand.preserveAspect = true;
            _hand.raycastTarget = false;
            SetHandSize();
            _hand.enabled = false;
        }

        private void Update()
        {
            if (_stopped || _showing || _waitingForDrop) return;
            _idle += Time.deltaTime;
            if (_idle >= idleDelay) Show();
        }

        public void NotifyGrab()
        {
            _idle = 0f;
            _waitingForDrop = true;
            Hide();
        }

        public void NotifyDropFailed()
        {
            _waitingForDrop = false;
            _idle = 0f;
            Hide();
        }

        public void NotifyPlaced()
        {
            StopForever();
        }

        public void StopForever()
        {
            _stopped = true;
            _waitingForDrop = false;
            Hide();
        }

        private void Show()
        {
            _showing = true;
            _loop = StartCoroutine(GestureLoop());
        }

        private void Hide()
        {
            _showing = false;
            if (_loop != null) StopCoroutine(_loop);
            if (_hand != null) _hand.enabled = false;
        }

        private IEnumerator GestureLoop()
        {
            while (true)
            {
                Vector3? source = _getSource?.Invoke();
                Vector3? target = FindTargetCell();
                if (source == null || target == null)
                {
                    _hand.enabled = false;
                    yield return new WaitForSeconds(0.4f);
                    continue;
                }

                Vector3 a = source.Value, b = target.Value;
                _hand.enabled = true;
                _hand.sprite = baseSprite;
                PlaceHand(a);
                yield return new WaitForSeconds(0.35f);

                _hand.sprite = pressSprite;
                yield return Tweener.Tween(0.8f, Easing.InOutQuad, k => PlaceHand(Vector3.Lerp(a, b, k)));
                yield return new WaitForSeconds(0.35f);

                _hand.sprite = baseSprite;
                yield return new WaitForSeconds(0.4f);
            }
        }

        private Vector3? FindTargetCell()
        {
            CellModel best = null;
            float bestSqr = float.MaxValue;
            foreach (CellModel cell in _board.Cells)
            {
                if (!cell.IsEmpty) continue;
                float sqr = cell.Coord.ToWorld(_cfg.cellSize).sqrMagnitude;
                if (sqr < bestSqr) { bestSqr = sqr; best = cell; }
            }
            if (best == null) return null;

            Vector3 p = best.Coord.ToWorld(_cfg.cellSize);
            return new Vector3(p.x, _cfg.tileRaise + _cfg.tileThickness * 0.5f, p.z);
        }

        private void PlaceHand(Vector3 worldPoint)
        {
            SetHandSize();
            Vector2 screen = RectTransformUtility.WorldToScreenPoint(_cam, worldPoint);
            RectTransform canvasRect = (RectTransform)_canvas.transform;
            RectTransformUtility.ScreenPointToLocalPointInRectangle(canvasRect, screen, null, out Vector2 localPoint);

            float h = _handRect.sizeDelta.y;
            _handRect.anchoredPosition = localPoint - Vector2.up * (h * 0.5f);
            _handRect.localRotation = Quaternion.identity;
        }

        private void SetHandSize()
        {
            if (_hand == null || _hand.sprite == null || _handRect == null) return;
            Vector2 size = _hand.sprite.rect.size * handScale;
            _handRect.sizeDelta = size;
        }
    }
}
