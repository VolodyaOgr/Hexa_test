using System.IO;
using UnityEditor;
using UnityEngine;

namespace HexaTest.EditorTools
{

    public static class HexaMaterialBuilder
    {
        private const string Dir = "Assets/Resources";
        private const string BasePath = "Assets/Resources/HexBaseMaterial.mat";
        private const string TintPath = "Assets/Resources/HexUIAlphaTint.mat";

        [MenuItem("Hexa/Create Runtime Materials")]
        public static void CreateRuntimeMaterials()
        {
            if (!Directory.Exists(Dir)) { Directory.CreateDirectory(Dir); AssetDatabase.Refresh(); }

            var lit = Shader.Find("Standard");
            SaveMaterial(BasePath, lit, m => { m.enableInstancing = true; m.SetFloat("_Glossiness", 0.25f); });

            var tint = Shader.Find("Hexa/UIAlphaTint");
            if (tint == null) Debug.LogError("[Hexa] Shader 'Hexa/UIAlphaTint' not found — check Assets/Shaders/UiAlphaTint.shader.");
            else SaveMaterial(TintPath, tint, null);

            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            Debug.Log("[Hexa] Runtime materials ready (HexBaseMaterial, HexUIAlphaTint).");
        }

        private static void SaveMaterial(string path, Shader shader, System.Action<Material> configure)
        {
            if (shader == null) return;
            var existing = AssetDatabase.LoadAssetAtPath<Material>(path);
            if (existing != null)
            {
                existing.shader = shader;
                configure?.Invoke(existing);
                EditorUtility.SetDirty(existing);
            }
            else
            {
                var mat = new Material(shader);
                configure?.Invoke(mat);
                AssetDatabase.CreateAsset(mat, path);
            }
        }
    }
}
