using System;
using UnityEngine;
using HexaTest.Config;
using HexaTest.Domain;
using HexaTest.View;

namespace HexaTest.App
{
    public sealed class InputController : MonoBehaviour
    {
        private Camera _cam;
        private GameConfig _cfg;
        private BoardModel _board;
        private BoardView _view;
        private Func<bool> _isBusy;
        private Func<StackView, HexCoord, bool> _place;
        private Action _onGrab;
        private Action _onInvalidDrop;

        private StackView _held;
        private Vector3 _home;
        private HexCoord _hover;
        private bool _hasHover;

        public void Init(Camera cam, GameConfig cfg, BoardModel board, BoardView view,
            Func<bool> isBusy, Func<StackView, HexCoord, bool> place, Action onGrab = null, Action onInvalidDrop = null)
        {
            _cam = cam;
            _cfg = cfg;
            _board = board;
            _view = view;
            _isBusy = isBusy;
            _place = place;
            _onGrab = onGrab;
            _onInvalidDrop = onInvalidDrop;
        }

        private void Update()
        {
            if (_cam == null) return;

            if (Input.GetMouseButtonDown(0)) TryGrab();
            else if (Input.GetMouseButton(0) && _held != null) Drag();
            else if (Input.GetMouseButtonUp(0) && _held != null) Release();
        }

        private void TryGrab()
        {
            if (_isBusy != null && _isBusy()) return;

            Ray ray = _cam.ScreenPointToRay(Input.mousePosition);
            if (!Physics.Raycast(ray, out RaycastHit hit, 100f)) return;

            StackView stack = hit.collider.GetComponentInParent<StackView>();
            if (stack == null || !stack.IsTray) return;

            _held = stack;
            _home = stack.transform.position;
            _onGrab?.Invoke();
        }

        private void Drag()
        {
            if (!ProjectToGround(out Vector3 ground)) return;

            _held.transform.position = ground + Vector3.up * _cfg.dragLift;

            if (TryNearestEmpty(ground, out HexCoord coord))
            {
                if (!_hasHover || !coord.Equals(_hover))
                {
                    if (_hasHover) _view.SetHighlight(_hover, false);
                    _hover = coord;
                    _hasHover = true;
                    _view.SetHighlight(_hover, true);
                }
            }
            else if (_hasHover)
            {
                _view.SetHighlight(_hover, false);
                _hasHover = false;
            }
        }

        private void Release()
        {
            if (_hasHover)
            {
                _view.SetHighlight(_hover, false);
                bool placed = _place != null && _place(_held, _hover);
                if (!placed)
                {
                    _held.transform.position = _home;
                    _onInvalidDrop?.Invoke();
                }
            }
            else
            {
                _held.transform.position = _home;
                _onInvalidDrop?.Invoke();
            }

            _held = null;
            _hasHover = false;
        }

        private bool TryNearestEmpty(Vector3 world, out HexCoord coord)
        {
            coord = default;
            float best = _cfg.snapDistance * _cfg.snapDistance;
            bool found = false;

            foreach (CellModel cell in _board.Cells)
            {
                if (!cell.IsEmpty) continue;
                Vector3 p = _view.WorldOf(cell.Coord);
                float dx = p.x - world.x, dz = p.z - world.z;
                float sqr = dx * dx + dz * dz;
                if (sqr <= best)
                {
                    best = sqr;
                    coord = cell.Coord;
                    found = true;
                }
            }
            return found;
        }

        private bool ProjectToGround(out Vector3 point)
        {
            Ray ray = _cam.ScreenPointToRay(Input.mousePosition);
            Plane plane = new Plane(Vector3.up, Vector3.zero);
            if (plane.Raycast(ray, out float enter))
            {
                point = ray.GetPoint(enter);
                return true;
            }
            point = Vector3.zero;
            return false;
        }
    }
}
