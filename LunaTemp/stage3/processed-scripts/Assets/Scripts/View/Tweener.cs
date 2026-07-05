using System;
using System.Collections;
using UnityEngine;

namespace HexaTest.View
{
    public static class Easing
    {
        public static float Linear(float t) => t;
        public static float OutQuad(float t) => 1f - (1f - t) * (1f - t);
        public static float InOutQuad(float t) => t < 0.5f ? 2f * t * t : 1f - Mathf.Pow(-2f * t + 2f, 2f) * 0.5f;

        public static float OutBack(float t)
        {
            const float c1 = 1.70158f;
            const float c3 = c1 + 1f;
            float p = t - 1f;
            return 1f + c3 * p * p * p + c1 * p * p;
        }
    }

    public static class Tweener
    {
        public static IEnumerator Tween(float duration, Func<float, float> ease, Action<float> onStep)
        {
            if (duration <= 0f) { onStep(1f); yield break; }

            float t = 0f;
            while (t < duration)
            {
                t += Time.deltaTime;
                onStep(ease(Mathf.Clamp01(t / duration)));
                yield return null;
            }
            onStep(1f);
        }

        public static IEnumerator PingPong(float halfPeriod, Func<float, float> ease, Action<float> onStep)
        {
            while (true)
            {
                yield return Tween(halfPeriod, ease, onStep);
                yield return Tween(halfPeriod, ease, k => onStep(1f - k));
            }
        }
    }
}
