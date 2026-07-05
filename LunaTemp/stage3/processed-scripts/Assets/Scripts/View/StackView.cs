using System.Collections.Generic;
using UnityEngine;
using HexaTest.Config;
using HexaTest.Domain;

namespace HexaTest.View
{
    public sealed class StackView : MonoBehaviour
    {
        private GameConfig _cfg;
        private HexAssets _assets;
        private readonly List<Transform> _discs = new List<Transform>();
        private BoxCollider _collider;

        public bool IsTray;

        public int DiscCount => _discs.Count;

        public void Init(GameConfig cfg, HexAssets assets)
        {
            _cfg = cfg;
            _assets = assets;
            _collider = gameObject.AddComponent<BoxCollider>();
        }

        public void Build(StackModel model)
        {
            for (int i = _discs.Count - 1; i >= 0; i--) Destroy(_discs[i].gameObject);
            _discs.Clear();
            foreach (HexColorId color in model.Discs) CreateDisc(color);
            UpdateCollider();
        }

        private Transform CreateDisc(HexColorId color)
        {
            GameObject go = new GameObject("Disc");
            go.transform.SetParent(transform, false);
            go.transform.localPosition = SlotLocalPos(_discs.Count);
            go.AddComponent<MeshFilter>().sharedMesh = _assets.DiscMesh;
            go.AddComponent<MeshRenderer>().sharedMaterial = _assets.MaterialFor(color);
            if (_discs.Count > 0) AddSeparatorBand(go.transform, color);
            _discs.Add(go.transform);
            return go.transform;
        }

        private void AddSeparatorBand(Transform disc, HexColorId color)
        {
            if (_cfg.discSeparatorThickness <= 0f) return;

            GameObject band = new GameObject("Separator Band");
            band.transform.SetParent(disc, false);
            float halfDisc = _cfg.discThickness * 0.5f;
            float halfBand = _cfg.discSeparatorThickness * 0.5f;
            band.transform.localPosition = new Vector3(0f, -halfDisc + halfBand, 0f);
            band.AddComponent<MeshFilter>().sharedMesh = _assets.DiscSeparatorMesh;
            band.AddComponent<MeshRenderer>().sharedMaterial = _assets.SeparatorMaterialFor(color);
        }

        public Vector3 NextSlotWorld() => SlotWorld(_discs.Count);

        public Vector3 SlotWorld(int index) => transform.TransformPoint(SlotLocalPos(index));

        public Transform DetachTop()
        {
            int last = _discs.Count - 1;
            Transform t = _discs[last];
            _discs.RemoveAt(last);
            t.SetParent(null, true);
            UpdateCollider();
            return t;
        }

        public void AttachTop(Transform disc)
        {
            disc.SetParent(transform, true);
            disc.localRotation = Quaternion.identity;
            disc.localPosition = SlotLocalPos(_discs.Count);
            _discs.Add(disc);
            UpdateCollider();
        }

        public Transform RemoveTopForClear()
        {
            int last = _discs.Count - 1;
            Transform t = _discs[last];
            _discs.RemoveAt(last);
            UpdateCollider();
            return t;
        }

        private Vector3 SlotLocalPos(int index) =>
            new Vector3(0f, index * _cfg.discSpacing + _cfg.discThickness * 0.5f, 0f);

        private void UpdateCollider()
        {
            if (_collider == null) return;
            float h = Mathf.Max(_cfg.discThickness, _discs.Count * _cfg.discSpacing);
            _collider.size = new Vector3(_cfg.DiscRadius * 1.7f, h, _cfg.DiscRadius * 1.7f);
            _collider.center = new Vector3(0f, h * 0.5f, 0f);
            _collider.enabled = _discs.Count > 0;
        }
    }
}
