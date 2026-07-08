using System.Collections.Generic;
using UnityEngine;

namespace HexaTest.View
{
    public static class HexMeshBuilder
    {
        public static Mesh Build(float radius, float thickness) => BuildRounded(radius, thickness, 0f, 1);

        public static Mesh BuildRounded(float radius, float thickness, float round01, int cornerSegments)
        {
            List<Vector2> ring = BuildRing(radius, Mathf.Clamp01(round01), Mathf.Max(1, cornerSegments));
            return BuildPrism(ring, thickness, includeCaps: true);
        }

        // For thin bands sandwiched against another hex's flat face (e.g. the disc
        // separator ring, which sits with its bottom flush against the disc's own
        // bottom cap): a full cap fan there is never actually seen — only the side
        // wall peeks out past the parent's edge — and it lands exactly coplanar with
        // the neighboring cap, causing z-fighting. Skip the caps for these.
        public static Mesh BuildRoundedSideOnly(float radius, float thickness, float round01, int cornerSegments)
        {
            List<Vector2> ring = BuildRing(radius, Mathf.Clamp01(round01), Mathf.Max(1, cornerSegments));
            return BuildPrism(ring, thickness, includeCaps: false);
        }

        private static List<Vector2> BuildRing(float radius, float round, int segments)
        {
            Vector2[] corners = new Vector2[6];
            for (int i = 0; i < 6; i++)
            {
                float a = Mathf.Deg2Rad * (60f * i);
                corners[i] = new Vector2(radius * Mathf.Cos(a), radius * Mathf.Sin(a));
            }

            List<Vector2> ring = new List<Vector2>();
            if (round <= 0.0001f)
            {
                ring.AddRange(corners);
                return ring;
            }

            float t = radius * 0.5f * round;
            for (int i = 0; i < 6; i++)
            {
                Vector2 c = corners[i];
                Vector2 prev = corners[(i + 5) % 6];
                Vector2 next = corners[(i + 1) % 6];
                Vector2 p1 = c + (prev - c).normalized * t;
                Vector2 p2 = c + (next - c).normalized * t;
                for (int j = 0; j <= segments; j++)
                {
                    float u = j / (float)segments;
                    ring.Add(QuadBezier(p1, c, p2, u));
                }
            }
            return ring;
        }

        private static Vector2 QuadBezier([Bridge.Ref] Vector2 a, [Bridge.Ref] Vector2 b, [Bridge.Ref] Vector2 c, float u)
        {
            float iu = 1f - u;
            return iu * iu * a + 2f * iu * u * b + u * u * c;
        }

        private static Mesh BuildPrism(List<Vector2> ring, float thickness, bool includeCaps)
        {
            int n = ring.Count;
            float half = thickness * 0.5f;
            List<Vector3> verts = new List<Vector3>();
            List<int> tris = new List<int>();
            List<Vector3> normals = new List<Vector3>();

            if (includeCaps)
            {
                int topCenter = verts.Count; verts.Add(new Vector3(0, half, 0)); normals.Add(Vector3.up);
                int topRing = verts.Count;
                for (int i = 0; i < n; i++) { verts.Add(new Vector3(ring[i].x, half, ring[i].y)); normals.Add(Vector3.up); }
                for (int i = 0; i < n; i++) { tris.Add(topCenter); tris.Add(topRing + (i + 1) % n); tris.Add(topRing + i); }

                int botCenter = verts.Count; verts.Add(new Vector3(0, -half, 0)); normals.Add(Vector3.down);
                int botRing = verts.Count;
                for (int i = 0; i < n; i++) { verts.Add(new Vector3(ring[i].x, -half, ring[i].y)); normals.Add(Vector3.down); }
                for (int i = 0; i < n; i++) { tris.Add(botCenter); tris.Add(botRing + i); tris.Add(botRing + (i + 1) % n); }
            }

            // Flat-shaded side quads, one per ring edge, each with its own true face
            // normal. Sharing a single "radial from hex center" normal across the
            // rounded-corner segments (the previous approach) is only correct for a
            // true circle; on a hex it points off-surface at the corners and produces
            // broken-looking shading exactly where the fillet faces the camera.
            for (int i = 0; i < n; i++)
            {
                Vector2 p0 = ring[i];
                Vector2 p1 = ring[(i + 1) % n];
                Vector3 top0 = new Vector3(p0.x, half, p0.y);
                Vector3 top1 = new Vector3(p1.x, half, p1.y);
                Vector3 bot0 = new Vector3(p0.x, -half, p0.y);
                Vector3 bot1 = new Vector3(p1.x, -half, p1.y);
                Vector3 faceNormal = Vector3.Cross(top1 - top0, bot0 - top0).normalized;

                int a = verts.Count; verts.Add(top0); normals.Add(faceNormal);
                int b = verts.Count; verts.Add(top1); normals.Add(faceNormal);
                int c = verts.Count; verts.Add(bot0); normals.Add(faceNormal);
                int d = verts.Count; verts.Add(bot1); normals.Add(faceNormal);
                tris.Add(a); tris.Add(c); tris.Add(b);
                tris.Add(b); tris.Add(c); tris.Add(d);
            }

            Mesh mesh = new Mesh { name = "Hex" };
            mesh.SetVertices(verts);
            mesh.SetNormals(normals);
            mesh.SetTriangles(tris, 0);
            mesh.RecalculateBounds();
            return mesh;
        }
    }
}
