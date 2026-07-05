using UnityEngine;

namespace HexaTest.Logic
{
    public sealed class GameTimer
    {
        public float Duration { get; private set; }
        public float Elapsed { get; private set; }
        public bool Running { get; private set; }

        public float Progress01 => Duration > 0f ? Mathf.Clamp01(Elapsed / Duration) : 1f;

        public float Remaining01 => 1f - Progress01;

        public bool Expired => Elapsed >= Duration;

        public void Begin(float duration)
        {
            Duration = duration;
            Elapsed = 0f;
            Running = true;
        }

        public void Stop() => Running = false;

        public bool Tick(float dt)
        {
            if (!Running) return false;

            Elapsed += dt;
            if (Elapsed >= Duration)
            {
                Elapsed = Duration;
                Running = false;
                return true;
            }
            return false;
        }
    }
}
