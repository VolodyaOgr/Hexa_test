using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using HexaTest.Logic;
using HexaTest.View;

namespace HexaTest.UI
{
    public sealed class TimerHudView : MonoBehaviour
    {
        [Header("Timing")]
        [SerializeField] private float duration = 25f;
        [Tooltip("Remaining fraction at which the alarm stage begins (watch pops, radial grows).")]
        [SerializeField] private float alarmThreshold = 0.25f;
        [SerializeField] private float alarmPulseScaleUpDuration = 0.22f;
        [SerializeField] private float alarmPulseScaleDownDuration = 0.18f;
        [SerializeField] private float alarmPulseInterval = 0.6f;
        [SerializeField] private float alarmPulseScale = 1.08f;
        [SerializeField] private float alarmPulseScaleStep = 0.03f;
        [SerializeField] private float alarmPulseMaxScale = 1.22f;
        [SerializeField] private float endThrowDuration = 1.2f;
        [SerializeField] private float endThrowSettleDuration = 0.2f;
        [SerializeField] private float endThrowVerticalAmplitude = 18f;
        [SerializeField] private float endThrowHorizontalAmplitude = 5f;
        [SerializeField] private float endThrowFrequency = 34f;

        [Header("Colors")]
        [SerializeField] private Gradient fillGradient;
        [SerializeField] private Color trackAlarmColor = new Color(0.85f, 0.15f, 0.15f);
        [Tooltip("Assign Assets/Resources/HexUIAlphaTint — recolors overlays by sprite alpha (no multiply).")]
        [SerializeField] private Material alphaTintMaterial;

        [Header("Wired references (assign in scene)")]
        [SerializeField] private Image fillImage;
        [SerializeField] private Image trackImage;
        [SerializeField] private Image timerBgImage;
        [SerializeField] private Image timerNippleImage;
        [SerializeField] private RectTransform watchRect;
        [SerializeField] private RectTransform timerRootRect;
        [SerializeField] private Image watchImage;
        [SerializeField] private RectTransform needleRect;
        [SerializeField] private Image radialImage;

        public event Action Expired;

        private readonly GameTimer _timer = new GameTimer();
        private const float NeedleUpAngle = -8f;
        private Coroutine _popLoop;
        private bool _running;
        private bool _alarm;
        private bool _ended;
        private Vector3 _baseTimerScale = Vector3.one;
        private Vector3 _baseNeedleScale = Vector3.one;
        private float _currentPulseScale;
        private Image _timerBgOverlay;
        private Image _timerNippleOverlay;
        private Image _trackOverlay;
        private Image _fillOverlay;
        private Material _alphaTintMaterial;

        private RectTransform AnimatedTimerRect => timerRootRect != null ? timerRootRect : watchRect;

        public void Begin()
        {
            EnsureTimerFillOverlay();
            _timer.Begin(duration);
            _running = true;
            SetTimerFill(1f, EvaluateFillColor());
            if (radialImage != null) { radialImage.fillAmount = 0f; radialImage.enabled = false; }
        }

        private void Update()
        {
            if (!_running || _ended) return;

            bool justExpired = _timer.Tick(Time.deltaTime);
            float remaining = _timer.Remaining01;

            if (fillImage != null)
            {
                SetTimerFill(remaining, EvaluateFillColor());
            }

            if (needleRect != null)
                needleRect.localEulerAngles = new Vector3(0f, 0f, NeedleUpAngle + 360f * _timer.Progress01);

            if (!_alarm && remaining <= alarmThreshold) EnterAlarm();
            if (_alarm && radialImage != null)
                radialImage.fillAmount = Mathf.Clamp01(_timer.Progress01 - (1f - alarmThreshold));

            if (justExpired) { _ended = true; StartCoroutine(EndSequence()); }
        }

        private void EnterAlarm()
        {
            _alarm = true;
            if (radialImage != null) radialImage.enabled = true;
            CaptureAlarmBaseState();
            if (AnimatedTimerRect != null) _popLoop = StartCoroutine(WatchPopLoop());
        }

        private void CaptureAlarmBaseState()
        {
            RectTransform animatedRect = AnimatedTimerRect;
            _baseTimerScale = animatedRect != null ? animatedRect.localScale : Vector3.one;
            _baseNeedleScale = needleRect != null ? needleRect.localScale : Vector3.one;
            _currentPulseScale = alarmPulseScale;
            EnsureAlarmOverlays();
        }

        private IEnumerator WatchPopLoop()
        {
            RectTransform animatedRect = AnimatedTimerRect;
            if (animatedRect == null) yield break;

            while (true)
            {
                float pulseScale = _currentPulseScale;
                yield return Tweener.Tween(alarmPulseScaleUpDuration, Easing.OutBack, k =>
                {
                    ApplyAlarmPulse(k, pulseScale);
                });
                yield return Tweener.Tween(alarmPulseScaleDownDuration, Easing.OutQuad, k =>
                {
                    ApplyAlarmPulse(1f - k, pulseScale);
                });
                _currentPulseScale = Mathf.Min(_currentPulseScale + alarmPulseScaleStep, alarmPulseMaxScale);
                yield return new WaitForSeconds(alarmPulseInterval);
            }
        }

        private void ApplyAlarmPulse(float k, float pulseScale)
        {
            RectTransform animatedRect = AnimatedTimerRect;
            if (animatedRect != null)
                animatedRect.localScale = Vector3.Lerp(_baseTimerScale, _baseTimerScale * pulseScale, k);
            if (needleRect != null)
                needleRect.localScale = Vector3.Lerp(_baseNeedleScale, _baseNeedleScale * pulseScale, k);

            SetOverlayColor(_timerBgOverlay, k);
            SetOverlayColor(_timerNippleOverlay, k);
            SetOverlayColor(_trackOverlay, k);
        }

        private void EnsureAlarmOverlays()
        {
            EnsureAlphaTintMaterial();

            _timerBgOverlay = EnsureOverlay(timerBgImage, _timerBgOverlay, "Alarm Overlay");
            _timerNippleOverlay = EnsureOverlay(timerNippleImage, _timerNippleOverlay, "Alarm Overlay");
            _trackOverlay = EnsureOverlay(trackImage, _trackOverlay, "Alarm Overlay");
        }

        private void EnsureTimerFillOverlay()
        {
            if (fillImage == null) return;
            EnsureAlphaTintMaterial();
            _fillOverlay = EnsureOverlay(fillImage, _fillOverlay, "Fill Color Overlay");
            fillImage.color = Color.clear;
        }

        private void EnsureAlphaTintMaterial()
        {
            if (_alphaTintMaterial != null) return;

            _alphaTintMaterial = alphaTintMaterial != null ? alphaTintMaterial : Resources.Load<Material>("HexUIAlphaTint");
            if (_alphaTintMaterial != null) return;

            Shader shader = Shader.Find("Hexa/UIAlphaTint");
            if (shader != null) _alphaTintMaterial = new Material(shader);
        }

        private Image EnsureOverlay(Image source, Image overlay, string name)
        {
            if (source == null) return null;
            if (overlay != null) return overlay;

            GameObject go = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
            go.transform.SetParent(source.transform, false);
            if (source == trackImage)
                go.transform.SetAsFirstSibling();
            else
                go.transform.SetAsLastSibling();

            RectTransform rect = go.GetComponent<RectTransform>();
            rect.anchorMin = Vector2.zero;
            rect.anchorMax = Vector2.one;
            rect.offsetMin = Vector2.zero;
            rect.offsetMax = Vector2.zero;
            rect.pivot = source.rectTransform.pivot;

            overlay = go.GetComponent<Image>();
            overlay.sprite = source.sprite;
            overlay.type = source.type;
            overlay.preserveAspect = source.preserveAspect;
            overlay.fillCenter = source.fillCenter;
            overlay.fillMethod = source.fillMethod;
            overlay.fillOrigin = source.fillOrigin;
            overlay.fillClockwise = source.fillClockwise;
            overlay.fillAmount = source.fillAmount;
            overlay.raycastTarget = false;
            overlay.material = _alphaTintMaterial;
            UpdateOverlayFill(source, overlay);
            SetOverlayColor(overlay, 0f);
            return overlay;
        }

        private void SetOverlayColor(Image overlay, float alpha)
        {
            if (overlay == null) return;
            if (overlay == _trackOverlay) UpdateOverlayFill(trackImage, overlay);
            else if (overlay == _timerBgOverlay) UpdateOverlayFill(timerBgImage, overlay);
            else if (overlay == _timerNippleOverlay) UpdateOverlayFill(timerNippleImage, overlay);
            overlay.color = new Color(trackAlarmColor.r, trackAlarmColor.g, trackAlarmColor.b, trackAlarmColor.a * alpha);
        }

        private void SetTimerFill(float amount, Color color)
        {
            if (fillImage == null) return;
            EnsureTimerFillOverlay();
            fillImage.fillAmount = amount;
            fillImage.color = Color.clear;
            if (_fillOverlay == null) return;
            UpdateOverlayFill(fillImage, _fillOverlay);
            _fillOverlay.fillAmount = amount;
            _fillOverlay.color = color;
        }

        private Color EvaluateFillColor()
        {
            if (fillGradient != null && fillGradient.colorKeys.Length > 0)
                return fillGradient.Evaluate(_timer.Progress01);
            return Color.white;
        }

        private static void UpdateOverlayFill(Image source, Image overlay)
        {
            if (source == null || overlay == null) return;
            overlay.fillAmount = source.fillAmount;
            overlay.fillMethod = source.fillMethod;
            overlay.fillOrigin = source.fillOrigin;
            overlay.fillClockwise = source.fillClockwise;
        }

        private IEnumerator EndSequence()
        {
            if (_popLoop != null) StopCoroutine(_popLoop);
            ApplyAlarmPulse(0f, _currentPulseScale);
            SetFinalAlarmColor(1f);

            SetTimerFill(1f, EvaluateFillColor());

            RectTransform animatedRect = AnimatedTimerRect;
            Vector2 basePos = animatedRect != null ? animatedRect.anchoredPosition : Vector2.zero;
            Color fillFrom = _fillOverlay != null ? _fillOverlay.color : Color.white;

            Vector2 lastPos = basePos;
            float throwDuration = Mathf.Max(0.01f, endThrowDuration);
            float t = 0f;
            while (t < throwDuration)
            {
                t += Time.deltaTime;
                float k = Mathf.Clamp01(t / throwDuration);
                if (animatedRect != null)
                {
                    float y = Mathf.Sin(t * endThrowFrequency) * endThrowVerticalAmplitude;
                    y += Mathf.Sin(t * endThrowFrequency * 1.73f + 0.8f) * endThrowVerticalAmplitude * 0.35f;
                    float x = Mathf.Sin(t * endThrowFrequency * 0.61f + 1.4f) * endThrowHorizontalAmplitude;
                    lastPos = basePos + new Vector2(x, y);
                    animatedRect.anchoredPosition = lastPos;
                }

                SetFinalAlarmColor(1f);
                SetTimerFill(1f, Color.Lerp(fillFrom, trackAlarmColor, k));
                yield return null;
            }
            if (animatedRect != null)
            {
                yield return Tweener.Tween(Mathf.Max(0.01f, endThrowSettleDuration), Easing.OutQuad, k =>
                {
                    animatedRect.anchoredPosition = Vector2.Lerp(lastPos, basePos, k);
                });
                animatedRect.anchoredPosition = basePos;
            }
            ApplyAlarmPulse(0f, _currentPulseScale);

            Expired?.Invoke();
        }

        private void SetFinalAlarmColor(float alpha)
        {
            SetOverlayColor(_timerBgOverlay, alpha);
            SetOverlayColor(_timerNippleOverlay, alpha);
            SetOverlayColor(_trackOverlay, alpha);
        }
    }
}
