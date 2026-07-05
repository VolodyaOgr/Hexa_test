using System;
using System.Collections;
using UnityEngine;
using HexaTest.Config;
using HexaTest.Domain;
using HexaTest.Logic;
using HexaTest.View;

namespace HexaTest.App
{
    public sealed class MergeAnimator : MonoBehaviour
    {
        private GameConfig _cfg;
        private BoardModel _board;
        private BoardView _view;

        public bool IsPlaying { get; private set; }

        private int _activeFlips;

        public void Init(GameConfig cfg, BoardModel board, BoardView view)
        {
            _cfg = cfg;
            _board = board;
            _view = view;
        }

        public void Play(System.Collections.Generic.List<MergeStep> plan, Action onComplete)
        {
            StartCoroutine(Run(plan, onComplete));
        }

        private IEnumerator Run(System.Collections.Generic.List<MergeStep> plan, Action onComplete)
        {
            IsPlaying = true;

            for (int i = 0; i < plan.Count; i++)
            {
                float speed = Mathf.Min(Mathf.Pow(1f + _cfg.speedRamp, i), _cfg.maxSpeed);

                if (plan[i] is TransferStep t) yield return Transfer(t, speed);
                else if (plan[i] is ClearStep c) yield return Clear(c, speed);
            }

            IsPlaying = false;
            onComplete?.Invoke();
        }

        private IEnumerator Transfer(TransferStep step, float speed)
        {
            StackView from = _view.GetStack(step.From);
            StackView to = _view.GetStack(step.To);
            CellModel fromCell = _board.Get(step.From);
            CellModel toCell = _board.Get(step.To);
            if (from == null || to == null) yield break;

            float dur = _cfg.flipDuration / speed;
            float stagger = _cfg.flipStagger / speed;
            int maxConcurrent = Mathf.Max(1, _cfg.maxConcurrentFlips);
            int baseSlot = to.DiscCount;

            for (int i = 0; i < step.Count; i++)
            {
                while (_activeFlips >= maxConcurrent) yield return null;

                Transform disc = from.DetachTop();
                if (fromCell.Stack != null) fromCell.Stack.RemoveTop(1);

                Vector3 target = to.SlotWorld(baseSlot + i);
                StartCoroutine(FlipAndLand(disc, target, dur, to, toCell, step.Color));

                if (i < step.Count - 1 && stagger > 0f) yield return new WaitForSeconds(stagger);
            }

            while (_activeFlips > 0) yield return null;

            if (fromCell.IsEmpty) _view.RemoveStack(step.From);
        }

        private IEnumerator FlipAndLand(Transform disc, Vector3 target, float dur,
            StackView to, CellModel toCell, HexColorId color)
        {
            _activeFlips++;
            yield return Flip(disc, target, dur);
            to.AttachTop(disc);
            toCell.Stack.Push(color);
            _activeFlips--;
        }

        private IEnumerator Flip(Transform disc, Vector3 target, float dur)
        {
            Vector3 start = disc.position;
            Vector3 pivot = (start + target) * 0.5f;

            Vector3 dir = target - start; dir.y = 0f;
            Vector3 axis = Vector3.Cross(Vector3.up, dir.sqrMagnitude > 1e-5f ? dir.normalized : Vector3.forward);
            if (axis.sqrMagnitude < 1e-5f) axis = Vector3.right;
            axis.Normalize();

            Vector3 probe = pivot + Quaternion.AngleAxis(90f, axis) * (start - pivot);
            if (probe.y < pivot.y) axis = -axis;

            float done = 0f;
            while (done < 180f)
            {
                float stepAng = dur > 0f ? 180f * (Time.deltaTime / dur) : 180f;
                stepAng = Mathf.Min(stepAng, 180f - done);
                disc.RotateAround(pivot, axis, stepAng);
                done += stepAng;
                yield return null;
            }

            disc.position = target;
        }

        private IEnumerator Clear(ClearStep step, float speed)
        {
            StackView view = _view.GetStack(step.Cell);
            CellModel cell = _board.Get(step.Cell);
            if (view == null) yield break;

            float dur = _cfg.clearDuration / speed;
            float gap = _cfg.discInterval / speed;

            for (int i = 0; i < step.Count; i++)
            {
                Transform disc = view.RemoveTopForClear();
                yield return Downscale(disc, dur);
                Destroy(disc.gameObject);

                if (cell.Stack != null) cell.Stack.RemoveTop(1);
                if (gap > 0f) yield return new WaitForSeconds(gap);
            }

            if (cell.IsEmpty) _view.RemoveStack(step.Cell);
        }

        private static IEnumerator Downscale(Transform disc, float dur)
        {
            Vector3 s0 = disc.localScale;
            float t = 0f;
            while (t < dur)
            {
                t += Time.deltaTime;
                disc.localScale = Vector3.Lerp(s0, Vector3.zero, dur > 0f ? t / dur : 1f);
                yield return null;
            }
            disc.localScale = Vector3.zero;
        }
    }
}
