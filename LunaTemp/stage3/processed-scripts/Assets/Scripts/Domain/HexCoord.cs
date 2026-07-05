using UnityEngine;

namespace HexaTest.Domain
{
    public readonly struct HexCoord
    {
        public readonly int Q;
        public readonly int R;

        public HexCoord(int q, int r) { Q = q; R = r; }

        public int S => -Q - R;

        public static readonly HexCoord[] Directions =
        {
            new HexCoord(1, 0), new HexCoord(1, -1), new HexCoord(0, -1),
            new HexCoord(-1, 0), new HexCoord(-1, 1), new HexCoord(0, 1),
        };

        public HexCoord Neighbor(int dir)
        {
            HexCoord d = Directions[((dir % 6) + 6) % 6];
            return new HexCoord(Q + d.Q, R + d.R);
        }

        public Vector3 ToWorld(float size)
        {
            float x = size * 1.5f * Q;
            float z = size * Mathf.Sqrt(3f) * (R + Q * 0.5f);
            return new Vector3(x, 0f, z);
        }

        public int DistanceToCenter() => Mathf.Max(Mathf.Abs(Q), Mathf.Abs(R), Mathf.Abs(S));

        public override bool Equals(object obj) => obj is HexCoord h && h.Q == Q && h.R == R;
        public override int GetHashCode() => Q * 31 + R;
        public override string ToString() => $"({Q},{R})";
    }
}
