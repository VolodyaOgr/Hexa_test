using System.Collections.Generic;
using UnityEngine;
using HexaTest.Config;
using HexaTest.Domain;

namespace HexaTest.View
{
    public sealed class BoardView : MonoBehaviour
    {
        private GameConfig _cfg;
        private HexAssets _assets;

        private readonly Dictionary<HexCoord, Transform> _tiles = new Dictionary<HexCoord, Transform>();
        private readonly Dictionary<HexCoord, StackView> _stacks = new Dictionary<HexCoord, StackView>();

        public void Build(GameConfig cfg, HexAssets assets, BoardModel board)
        {
            _cfg = cfg;
            _assets = assets;

            BuildPlatform(board);
            BuildTiles(board);
        }

        private void BuildPlatform(BoardModel board)
        {
            Transform root = new GameObject("Platform").transform;
            root.SetParent(transform, false);
            float t = _cfg.baseLayerThickness;

            for (int k = 0; k < _assets.BaseLayerMeshes.Length; k++)
            {
                Transform layer = new GameObject($"Layer_{k}").transform;
                layer.SetParent(root, false);
                layer.localPosition = new Vector3(0f, -t * 0.5f - k * t, 0f);

                Mesh mesh = _assets.BaseLayerMeshes[k];
                Material mat = _assets.BaseLayerMaterials[k];
                foreach (CellModel cell in board.Cells)
                {
                    GameObject go = new GameObject("Slab");
                    go.transform.SetParent(layer, false);
                    go.transform.localPosition = cell.Coord.ToWorld(_cfg.cellSize);
                    go.AddComponent<MeshFilter>().sharedMesh = mesh;
                    go.AddComponent<MeshRenderer>().sharedMaterial = mat;
                }
            }
        }

        private void BuildTiles(BoardModel board)
        {
            Transform root = new GameObject("Tiles").transform;
            root.SetParent(transform, false);

            foreach (CellModel cell in board.Cells)
            {
                GameObject go = new GameObject($"Tile_{cell.Coord}");
                go.transform.SetParent(root, false);
                Vector3 p = WorldOf(cell.Coord);
                go.transform.localPosition = new Vector3(p.x, _cfg.tileRaise, p.z);
                go.AddComponent<MeshFilter>().sharedMesh = _assets.TileMesh;
                go.AddComponent<MeshRenderer>().sharedMaterial = _assets.TileMaterial;
                _tiles[cell.Coord] = go.transform;
            }
        }

        public Vector3 WorldOf(HexCoord c) => c.ToWorld(_cfg.cellSize);

        public void Register(HexCoord c, StackView view) => _stacks[c] = view;

        public StackView GetStack(HexCoord c) => _stacks.TryGetValue(c, out StackView v) ? v : null;

        public void RemoveStack(HexCoord c)
        {
            if (_stacks.TryGetValue(c, out StackView v))
            {
                _stacks.Remove(c);
                if (v != null) Destroy(v.gameObject);
            }
        }

        public void SetHighlight(HexCoord c, bool on)
        {
            if (_tiles.TryGetValue(c, out Transform tile))
                tile.GetComponent<MeshRenderer>().sharedMaterial =
                    on ? _assets.TileHighlightMaterial : _assets.TileMaterial;
        }
    }
}
