using UnityEngine;
using HexaTest.Config;
using HexaTest.Domain;

namespace HexaTest.View
{
    public sealed class HexAssets
    {
        public readonly Mesh DiscMesh;
        public readonly Mesh DiscSeparatorMesh;
        public readonly Mesh TileMesh;
        public readonly Material TileMaterial;
        public readonly Material TileHighlightMaterial;

        public readonly Mesh[] BaseLayerMeshes;
        public readonly Material[] BaseLayerMaterials;

        private readonly Material[] _colorMaterials;
        private readonly Material[] _separatorMaterials;

        public HexAssets(GameConfig cfg)
        {
            DiscMesh = HexMeshBuilder.BuildRounded(cfg.DiscRadius, cfg.discThickness, cfg.discRound, cfg.cornerSegments);
            DiscSeparatorMesh = HexMeshBuilder.BuildRounded(
                cfg.DiscRadius * 1.012f,
                cfg.discSeparatorThickness,
                cfg.discRound,
                cfg.cornerSegments);
            TileMesh = HexMeshBuilder.BuildRounded(cfg.TileRadius, cfg.tileThickness, cfg.tileRound, cfg.cornerSegments);

            Shader shader = Shader.Find("Standard");
            TileMaterial = MakeMaterial(shader, cfg.tileColor);
            TileHighlightMaterial = MakeMaterial(shader, Color.Lerp(cfg.tileColor, Color.white, 0.5f));

            _colorMaterials = new Material[cfg.palette.Length];
            _separatorMaterials = new Material[cfg.palette.Length];
            for (int i = 0; i < _colorMaterials.Length; i++)
            {
                _colorMaterials[i] = MakeMaterial(shader, cfg.palette[i]);
                _separatorMaterials[i] = MakeMaterial(shader, Color.Lerp(cfg.palette[i], Color.black, cfg.discSeparatorDarken));
            }

            int layers = cfg.baseLayerColors != null ? cfg.baseLayerColors.Length : 0;
            BaseLayerMeshes = new Mesh[layers];
            BaseLayerMaterials = new Material[layers];
            for (int k = 0; k < layers; k++)
            {
                float radius = cfg.cellSize + k * cfg.edgeRim;
                BaseLayerMeshes[k] = HexMeshBuilder.BuildRounded(radius, cfg.baseLayerThickness, cfg.baseRound, cfg.cornerSegments);
                BaseLayerMaterials[k] = MakeMaterial(shader, cfg.baseLayerColors[k]);
            }
        }

        public Material MaterialFor(HexColorId id)
        {
            int i = (int)id;
            return (i >= 0 && i < _colorMaterials.Length) ? _colorMaterials[i] : TileMaterial;
        }

        public Material SeparatorMaterialFor(HexColorId id)
        {
            int i = (int)id;
            return (i >= 0 && i < _separatorMaterials.Length) ? _separatorMaterials[i] : TileMaterial;
        }

        private static Material MakeMaterial(Shader shader, Color c)
        {
            Material m = new Material(shader) { color = c };
            m.SetFloat("_Glossiness", 0.25f);
            m.enableInstancing = true;
            return m;
        }
    }
}
