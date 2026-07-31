using System;
using UnityEngine;
using HexaTest.Domain;

namespace HexaTest.Config
{
    [Serializable]
    public class GameConfig
    {
        [Header("Board")]
        [Tooltip("Ring radius of the hex board. 2 => 19 cells (matches reference).")]
        public int boardRadius = 2;
        [Tooltip("Center-to-center spacing of board cells. Equals the tessellation size.")]
        public float cellSize = 1.0f;

        [Header("Hex disc geometry")]
        [Tooltip("Disc circumradius as a fraction of cellSize. 1.0 => neighbors touch exactly (dist=√3·R).")]
        [Range(0.8f, 1f)] public float discFill = 0.98f;
        [Tooltip("Disc height — larger reads as more 3D/chunky.")]
        public float discThickness = 0.16f;
        [Tooltip("Vertical gap between stacked discs (keep ~= thickness so they touch).")]
        public float discSpacing = 0.16f;
        [Tooltip("Thin darker band near the bottom of each disc so stacked levels stay readable.")]
        public float discSeparatorThickness = 0.026f;
        [Range(0f, 1f)] public float discSeparatorDarken = 0.28f;
        [Range(0f, 1f)] public float discRound = 0.3f;
        public int cornerSegments = 3;
        [Tooltip("How many same-color discs collapse and clear.")]
        public int clearCount = 10;

        [Header("Cell tile (packed, thin seam shows the platform underneath)")]
        [Tooltip("Tile radius as a fraction of cellSize. <1 leaves a thin outline seam.")]
        [Range(0.7f, 1f)] public float tileInset = 0.95f;
        public float tileThickness = 0.12f;
        [Range(0f, 1f)] public float tileRound = 0.25f;
        [Tooltip("How far the tile top sits above the platform top (y=0). Keep >= tileThickness/2.")]
        public float tileRaise = 0.07f;

        [Header("Board platform (layered edge)")]
        [Tooltip("The platform is built from the same cells, so its silhouette matches exactly.")]
        [Range(0f, 1f)] public float baseRound = 0.12f;
        public float baseLayerThickness = 0.04f;
        [Tooltip("How much wider (world units) each lower layer is — the visible rim sliver. Keep small.")]
        public float edgeRim = 0.05f;
        [Tooltip("Platform layers top -> bottom. Length = number of layers (reference ~3).")]
        public Color[] baseLayerColors =
        {
            new Color(0.55f, 0.66f, 0.83f),
            new Color(1.00f, 1.00f, 1.00f),
            new Color(0.38f, 0.50f, 0.70f),
        };

        [Header("Interaction")]
        public float snapDistance = 0.82f;
        [Tooltip("How high a grabbed stack floats above the board so it never blends into it.")]
        public float dragLift = 0.6f;
        [Tooltip("How fast a released stack glides into its cell, in world units/second. Higher = snappier magnet-in; lower = a slower, floatier pull.")]
        public float magnetSpeed = 6f;

        [Header("Tray")]
        [Tooltip("How far below the board center the tray sits (world units).")]
        public float trayDistance = 7f;
        public float traySpacing = 2.4f;

        [Header("Level timer")]
        [Tooltip("Fixed seconds added to the timer on level 1 before per-piece time.")]
        public float timerStartBonusSeconds = 28f;
        [Tooltip("Fixed seconds added to the timer on pressured late levels before per-piece time.")]
        public float timerEndBonusSeconds = 8f;
        [Tooltip("Seconds per bag piece on level 1. Early levels should feel almost untimed.")]
        public float timerStartSecondsPerPiece = 24f;
        [Tooltip("Seconds per bag piece on pressured late levels.")]
        public float timerEndSecondsPerPiece = 8f;
        [Tooltip("Level at which the timer reaches its late-game pressure values.")]
        public int timerFullPressureLevel = 25;

        [Header("Merge animation")]
        [Tooltip("Seconds to flip one disc onto a neighbor at speed x1.")]
        public float flipDuration = 0.24f;
        [Tooltip("Delay before launching the next disc in a run (enables overlap).")]
        public float flipStagger = 0.09f;
        [Tooltip("How many discs may be mid-flight at once (reference ~2).")]
        public int maxConcurrentFlips = 2;
        [Tooltip("Seconds to downscale one disc during a clear at speed x1.")]
        public float clearDuration = 0.11f;
        [Tooltip("Pause between consecutive discs in a clear.")]
        public float discInterval = 0.04f;
        [Tooltip("Quadratic speed-ramp coefficient: multiplier = 1 + speedRamp * stepIndex^2. Small values keep short combos near normal speed and only ramp up on long cascades.")]
        public float speedRamp = 0.02f;
        [Tooltip("Upper cap on the accumulated speed multiplier.")]
        public float maxSpeed = 8f;

        [Header("Colors")]
        public Color tileColor = new Color(0.66f, 0.76f, 0.90f, 1f);
        public Color[] palette =
        {
            new Color(0.30f, 0.82f, 0.28f),
            new Color(0.93f, 0.22f, 0.78f),
            new Color(0.99f, 0.82f, 0.15f),
            new Color(0.92f, 0.20f, 0.18f),
            new Color(0.28f, 0.82f, 0.88f),
            new Color(0.20f, 0.45f, 0.92f),
            new Color(0.55f, 0.30f, 0.85f),
            new Color(0.97f, 0.97f, 0.97f),
        };

        public float DiscRadius => cellSize * discFill;
        public float TileRadius => cellSize * tileInset;

        public Color ColorOf(HexColorId id)
        {
            int i = (int)id;
            return (palette != null && i >= 0 && i < palette.Length) ? palette[i] : Color.gray;
        }
    }
}
