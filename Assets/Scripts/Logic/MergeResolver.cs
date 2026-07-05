using System.Collections.Generic;
using HexaTest.Domain;

namespace HexaTest.Logic
{
    public sealed class MergeResolver
    {
        private const int SafetyCap = 100000;

        public List<MergeStep> Resolve(BoardModel board, HexCoord start, int clearCount)
        {
            List<MergeStep> steps = new List<MergeStep>();
            List<HexCoord> seeds = new List<HexCoord> { start };
            int guard = 0;

            while (seeds.Count > 0)
            {
                RunTransferPhase(board, seeds, steps, ref guard);
                seeds = RunClearPhase(board, clearCount, steps);
            }

            return steps;
        }

        private static void RunTransferPhase(BoardModel board, List<HexCoord> seeds,
            List<MergeStep> steps, ref int guard)
        {
            Queue<HexCoord> queue = new Queue<HexCoord>();
            HashSet<HexCoord> queued = new HashSet<HexCoord>();

            void Enqueue(HexCoord c)
            {
                if (queued.Add(c)) queue.Enqueue(c);
            }

            foreach (HexCoord s in seeds) Enqueue(s);

            while (queue.Count > 0)
            {
                if (++guard > SafetyCap) return;

                HexCoord coord = queue.Dequeue();
                queued.Remove(coord);

                if (!board.TryGet(coord, out CellModel cell) || cell.IsEmpty) continue;

                HexColorId? topColor = cell.Stack.TopColor;
                if (topColor == null) continue;
                HexColorId color = topColor.Value;
                bool pulled = false;

                foreach (CellModel nb in board.Neighbors(coord))
                {
                    if (nb.IsEmpty || nb.Stack.TopColor != color) continue;

                    int k = nb.Stack.TopRunLength();
                    steps.Add(new TransferStep { From = nb.Coord, To = coord, Color = color, Count = k });
                    nb.Stack.RemoveTop(k);
                    cell.Stack.PushRange(color, k);
                    pulled = true;
                    Enqueue(nb.Coord);
                }

                if (pulled) Enqueue(coord);
            }
        }

        private static List<HexCoord> RunClearPhase(BoardModel board, int clearCount, List<MergeStep> steps)
        {
            List<HexCoord> cleared = new List<HexCoord>();

            foreach (CellModel cell in board.Cells)
            {
                if (cell.IsEmpty) continue;

                int run = cell.Stack.TopRunLength();
                if (run < clearCount) continue;

                steps.Add(new ClearStep { Cell = cell.Coord, Color = cell.Stack.TopColor, Count = run });
                cell.Stack.RemoveTop(run);
                if (!cell.IsEmpty) cleared.Add(cell.Coord);
            }

            return cleared;
        }
    }
}
