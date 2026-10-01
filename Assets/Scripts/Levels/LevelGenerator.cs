using System.Collections.Generic;
using UnityEngine;
using HexaTest.Domain;
using HexaTest.Logic;

namespace HexaTest.Levels
{
    /// <summary>
    /// Builds guaranteed-clearable levels by reverse-simulation.
    ///
    /// We construct a level backwards from the empty (already-won) board: for each planned clear
    /// we drop <c>clearCount</c> discs of a colour onto an empty cell C, then split them between a
    /// piece the player will place on C and same-colour runs pushed onto C's neighbours (these are
    /// exactly the discs that will transfer INTO C forward, then clear). Whatever discs remain on the
    /// board become the seed; the recorded placements (reversed) become one valid forward solution.
    ///
    /// Because the real <see cref="MergeResolver"/> is greedy and cascades, a reverse plan is not
    /// self-evidently valid, so every candidate is REPLAYED forward through the real resolver and
    /// accepted only if the board ends empty. On failure we retry with fresh randomness; a
    /// non-overlapping-cluster fallback guarantees generation always succeeds.
    /// </summary>
    public static class LevelGenerator
    {
        private const int MaxAttempts = 400;

        public static int ColorsForLevel(int level)
        {
            if (level == 1) return 3;  // Hardcode L1 to 3 colors for consistent tutorial.
            return Mathf.Clamp(3 + level / 3, 3, 8);
        }
        public static int ClearsForLevel(int level)  => Mathf.Clamp(2 + level, 2, 7);

        /// <summary>Deterministic per level: same level number → same puzzle.</summary>
        public static LevelSpec Generate(int level, int boardRadius, int clearCount, int paletteSize)
        {
            int colorCount = Mathf.Min(ColorsForLevel(level), paletteSize);
            int clears = ClearsForLevel(level);

            for (int attempt = 0; attempt < MaxAttempts; attempt++)
            {
                var rng = new System.Random(level * 92821 + attempt);
                var colors = PickColors(rng, colorCount, paletteSize);

                if (TryBuildReverse(rng, boardRadius, clearCount, colors, clears, level, out var spec)
                    && VerifySpec(spec, clearCount))
                {
                    spec.Level = level;
                    return spec;
                }
            }

            // Fallback: independent non-overlapping clusters — trivially solvable, always succeeds.
            var fb = BuildClusterFallback(new System.Random(level * 92821 + 777),
                boardRadius, clearCount, PickColors(new System.Random(level * 6151), colorCount, paletteSize), clears);
            fb.Level = level;
            return fb;
        }

        // ---- reverse construction ---------------------------------------------------------------

        private static bool TryBuildReverse(System.Random rng, int radius, int clearCount,
            List<HexColorId> colors, int clears, int level, out LevelSpec spec)
        {
            // Level 1 stays a single-colour-stack tutorial; from level 2 on we allow stacking a
            // colour on top of a different colour's run, producing multi-layer starting stacks.
            bool allowMultiColor = level >= 2;

            BoardModel board = BoardModel.BuildHexagon(radius);
            var coords = new List<HexCoord>();
            foreach (var c in board.Cells) coords.Add(c.Coord);

            var reversed = new List<(LevelPiece, HexCoord)>();
            var pieceSize = new Dictionary<HexColorId, int>();

            for (int i = 0; i < clears; i++)
            {
                HexColorId col = i < colors.Count ? colors[i] : colors[rng.Next(colors.Count)];

                // C must be an empty cell (so it is empty forward at placement time).
                var empties = new List<HexCoord>();
                foreach (var c in coords) if (board.Get(c).IsEmpty) empties.Add(c);
                if (empties.Count == 0) break;
                HexCoord center = empties[rng.Next(empties.Count)];

                // Neighbours we may push `col` onto: empty, already topped with `col` (extend the run),
                // or — from level 2 on — topped with a different colour (stacks `col` on top, creating
                // a genuine multi-colour layered stack the player must peel through).
                var pushable = new List<CellModel>();
                foreach (var nb in board.Neighbors(center))
                    if (nb.IsEmpty || nb.Stack.TopColor == col || allowMultiColor) pushable.Add(nb);
                Shuffle(rng, pushable);

                // Split clearCount between the placed piece and neighbour transfers (the rest).
                // Biasing most discs onto neighbours keeps the STARTING board visibly full — the point
                // of a "clear the board" puzzle — while pieces stay small, satisfying drops. From level
                // 2 on we bias even harder toward neighbours so starting stacks read as deep/layered.
                // Every piece of one colour has the SAME size within a level (chosen on the colour's
                // first use). Differently sized stacks of one colour read as "some of them can't
                // be enough" and made levels look unsolvable to players; the forward replay below
                // still proves the level clears with the uniform sizes.
                int pieceMax = allowMultiColor ? 4 : 6;
                int placed;
                if (pushable.Count == 0)
                {
                    placed = clearCount;
                    if (pieceSize.TryGetValue(col, out int fixedSize) && fixedSize != placed)
                    {
                        spec = null;
                        return false;
                    }
                }
                else if (!pieceSize.TryGetValue(col, out placed))
                    placed = Mathf.Min(clearCount, rng.Next(2, pieceMax));
                pieceSize[col] = placed;
                int t = clearCount - placed; // discs seeded onto neighbours

                int idx = 0;
                int remaining = t;
                while (remaining > 0 && idx < pushable.Count)
                {
                    int take = (idx == pushable.Count - 1) ? remaining : rng.Next(1, remaining + 1);
                    CellModel nb = pushable[idx];
                    if (nb.Stack == null) nb.Stack = new StackModel();
                    nb.Stack.PushRange(col, take);
                    remaining -= take;
                    idx++;
                }
                // If we could not place all t on neighbours, fold the rest into the placed piece.
                placed += remaining;

                var discs = new List<HexColorId>();
                for (int d = 0; d < placed; d++) discs.Add(col);
                reversed.Add((new LevelPiece(discs), center));
            }

            spec = SnapshotSeed(board, radius, clearCount);
            for (int i = reversed.Count - 1; i >= 0; i--)
            {
                spec.Bag.Add(reversed[i].Item1);
                spec.SolutionCells.Add(reversed[i].Item2);
            }
            return spec.Bag.Count > 0 && spec.Seed.Count > 0;
        }

        // ---- fallback: non-overlapping clusters -------------------------------------------------

        private static LevelSpec BuildClusterFallback(System.Random rng, int radius, int clearCount,
            List<HexColorId> colors, int clears)
        {
            BoardModel board = BoardModel.BuildHexagon(radius);
            var free = new List<HexCoord>();
            foreach (var c in board.Cells) free.Add(c.Coord);
            Shuffle(rng, free);

            var spec = new LevelSpec { BoardRadius = radius, ClearCount = clearCount };
            int made = 0;
            var used = new HashSet<HexCoord>();

            foreach (var center in free)
            {
                if (made >= clears) break;
                if (used.Contains(center)) continue;

                var nbrs = new List<HexCoord>();
                foreach (var nb in board.Neighbors(center))
                    if (!used.Contains(nb.Coord)) nbrs.Add(nb.Coord);
                if (nbrs.Count == 0) continue;

                HexColorId col = made < colors.Count ? colors[made] : colors[rng.Next(colors.Count)];
                Shuffle(rng, nbrs);
                // Fixed neighbour count => every piece has the same size (clearCount - nUse).
                const int nUse = 2;
                if (nbrs.Count < nUse) continue;
                int t = Mathf.Min(clearCount - 1, nUse); // at least 1 per neighbour
                // distribute t discs across nUse neighbours (>=1 each)
                int[] amt = new int[nUse];
                for (int k = 0; k < nUse; k++) amt[k] = 1;
                for (int extra = t - nUse; extra > 0; extra--) amt[rng.Next(nUse)]++;

                used.Add(center);
                for (int k = 0; k < nUse; k++)
                {
                    used.Add(nbrs[k]);
                    var discs = new List<HexColorId>();
                    for (int d = 0; d < amt[k]; d++) discs.Add(col);
                    spec.Seed.Add(new LevelSeedCell { Coord = nbrs[k], Discs = discs });
                }
                var piece = new List<HexColorId>();
                for (int d = 0; d < clearCount - t; d++) piece.Add(col);
                spec.Bag.Add(new LevelPiece(piece));
                spec.SolutionCells.Add(center);
                made++;
            }
            return spec;
        }

        // ---- forward-replay verification --------------------------------------------------------

        /// <summary>
        /// Replays the known solution through the real resolver and confirms the board ends empty.
        /// This is a cheap check of ONE specific solution — not a general solver.
        /// </summary>
        public static bool VerifySpec(LevelSpec spec, int clearCount)
        {
            if (spec.Bag.Count != spec.SolutionCells.Count) return false;

            BoardModel board = BoardModel.BuildHexagon(spec.BoardRadius);
            foreach (var s in spec.Seed)
            {
                CellModel cell = board.Get(s.Coord);
                if (cell == null) return false;
                cell.Stack = new StackModel();
                cell.Stack.Set(s.Discs);
            }

            var resolver = new MergeResolver();
            for (int i = 0; i < spec.Bag.Count; i++)
            {
                HexCoord at = spec.SolutionCells[i];
                if (!board.TryGet(at, out CellModel cell) || !cell.IsEmpty) return false;
                cell.Stack = new StackModel();
                cell.Stack.Set(spec.Bag[i].Discs);
                resolver.Resolve(board, at, clearCount);
            }

            foreach (var cell in board.Cells)
                if (!cell.IsEmpty) return false;
            return true;
        }

        // ---- helpers ----------------------------------------------------------------------------

        private static LevelSpec SnapshotSeed(BoardModel board, int radius, int clearCount)
        {
            var spec = new LevelSpec { BoardRadius = radius, ClearCount = clearCount };
            foreach (var cell in board.Cells)
            {
                if (cell.IsEmpty) continue;
                var discs = new List<HexColorId>(cell.Stack.Discs);
                spec.Seed.Add(new LevelSeedCell { Coord = cell.Coord, Discs = discs });
            }
            return spec;
        }

        private static List<HexColorId> PickColors(System.Random rng, int count, int paletteSize)
        {
            var pool = new List<int>();
            for (int i = 0; i < paletteSize; i++) pool.Add(i);
            Shuffle(rng, pool);
            var res = new List<HexColorId>();
            for (int i = 0; i < count && i < pool.Count; i++) res.Add((HexColorId)pool[i]);
            return res;
        }

        private static void Shuffle<T>(System.Random rng, IList<T> list)
        {
            for (int i = list.Count - 1; i > 0; i--)
            {
                int j = rng.Next(i + 1);
                (list[i], list[j]) = (list[j], list[i]);
            }
        }
    }
}
