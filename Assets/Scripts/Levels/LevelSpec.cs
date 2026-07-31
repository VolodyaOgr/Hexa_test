using System.Collections.Generic;
using HexaTest.Domain;

namespace HexaTest.Levels
{
    /// <summary>One draggable piece from the level's finite bag. Discs are bottom -> top.</summary>
    public sealed class LevelPiece
    {
        public readonly List<HexColorId> Discs;
        public LevelPiece(List<HexColorId> discs) { Discs = discs; }
        public int Count => Discs.Count;
    }

    /// <summary>A pre-placed stack in the level's starting board. Discs are bottom -> top.</summary>
    public sealed class LevelSeedCell
    {
        public HexCoord Coord;
        public List<HexColorId> Discs;
    }

    /// <summary>
    /// A self-contained, provably-clearable puzzle: a seeded board + a finite bag of pieces.
    /// The win condition is emptying every board cell. <see cref="LevelGenerator"/> builds these
    /// by reverse-simulation and verifies each one by forward-replay through the real resolver,
    /// so a full-clear solution is guaranteed to exist.
    /// </summary>
    public sealed class LevelSpec
    {
        public int Level;
        public int BoardRadius;
        public int ClearCount;
        public readonly List<LevelSeedCell> Seed = new List<LevelSeedCell>();
        public readonly List<LevelPiece> Bag = new List<LevelPiece>();

        /// <summary>
        /// One known-good placement per bag piece (<c>Bag[i]</c> is placed on <c>SolutionCells[i]</c>),
        /// proving the level clears. Used for the generator self-check and, later, an optional hint.
        /// The player is free to place pieces elsewhere/in any order — this is one existing solution.
        /// </summary>
        public readonly List<HexCoord> SolutionCells = new List<HexCoord>();

        /// <summary>Total discs on the starting board — the initial "hexes to clear" for the goal HUD.</summary>
        public int SeedDiscCount
        {
            get
            {
                int n = 0;
                for (int i = 0; i < Seed.Count; i++) n += Seed[i].Discs.Count;
                return n;
            }
        }
    }
}
