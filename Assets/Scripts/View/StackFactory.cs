using UnityEngine;
using HexaTest.Config;
using HexaTest.Domain;

namespace HexaTest.View
{
    public sealed class StackFactory
    {
        private readonly GameConfig _cfg;
        private readonly HexAssets _assets;

        public StackFactory(GameConfig cfg, HexAssets assets)
        {
            _cfg = cfg;
            _assets = assets;
        }

        public StackView Create(string name, StackModel model, Vector3 worldPos, Transform parent)
        {
            GameObject go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.position = worldPos;
            StackView view = go.AddComponent<StackView>();
            view.Init(_cfg, _assets);
            view.Build(model);
            return view;
        }
    }
}
