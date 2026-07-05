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
        [Tooltip("Hand height in world units.")]
        [SerializeField] private float handWorldHeight = 1.4f;

        private Camera _cam;
        private GameConfig _cfg;
        private BoardModel _board;
        private Func<Vector3?> _getSource;

        private Image _hand;
        private RectTransform _handRoot;
        private Coroutine _loop;
        private bool _showing;
        private bool _stopped;
        private bool _waitingForDrop;
        private bool _initialized;
        private float _idle;

        public void Init(Camera cam, GameConfig cfg, BoardModel board, Func<Vector3?> getSource)
        {
            _cam = cam; _cfg = cfg; _board = board;
            _getSource = getSource;

            const float pixels = 256f;
            GameObject canvasGo = new GameObject("TutorialHandCanvas", typeof(Canvas));
            canvasGo.transform.SetParent(transform, false);
            Canvas canvas = canvasGo.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.WorldSpace;
            canvas.worldCamera = _cam;
            canvas.sortingOrder = 1000;
            _handRoot = (RectTransform)canvasGo.transform;
            _handRoot.sizeDelta = new Vector2(pixels, pixels);
            _handRoot.localScale = Vector3.one * (handWorldHeight / pixels);

            GameObject imgGo = new GameObject("Hand", typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
            imgGo.transform.SetParent(canvasGo.transform, false);
            RectTransform r = (RectTransform)imgGo.transform;
            r.anchorMin = r.anchorMax = new Vector2(0.5f, 0.5f);
            r.pivot = new Vector2(0.5f, 0.5f);
            r.sizeDelta = new Vector2(pixels, pixels);
            _hand = imgGo.GetComponent<Image>();
            _hand.sprite = baseSprite;
            _hand.preserveAspect = true;
            _hand.raycastTarget = false;
            _hand.enabled = false;
            _initialized = true;
        }

        private void Update()
        {

            if (!_initialized || _stopped || _showing || _waitingForDrop) return;
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

        private void PlaceHand([Bridge.Ref] Vector3 worldPoint)
        {
            _handRoot.rotation = _cam.transform.rotation;

            Vector3 anchor = worldPoint - _cam.transform.up * (handWorldHeight * 0.5f);

            Vector3 camPos = _cam.transform.position;
            float dist = Vector3.Distance(camPos, anchor);
            float pull = Mathf.Min(4f, dist - 1f);
            Vector3 toCam = (camPos - anchor) / Mathf.Max(0.001f, dist);

            _handRoot.position = anchor + toCam * pull;
            float ratio = dist > 0.01f ? (dist - pull) / dist : 1f;
            _handRoot.localScale = Vector3.one * (handWorldHeight / 256f * ratio);
        }
    }
}
