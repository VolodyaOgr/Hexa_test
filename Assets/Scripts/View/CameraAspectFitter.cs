using UnityEngine;

namespace HexaTest.View
{
    /// <summary>
    /// Keeps an orthographic camera's framing correct across every screen aspect
    /// (editor, phones, Luna playable ads) without ever cropping content.
    ///
    /// You frame the shot manually in the editor at <see cref="referenceAspect"/>
    /// (position / rotation / zoom). At runtime this component only adjusts
    /// <c>orthographicSize</c> so that BOTH the authored horizontal width and the
    /// authored vertical height stay fully visible — on any aspect it can only zoom
    /// out relative to your reference, never in, so nothing gets cut off.
    /// </summary>
    [RequireComponent(typeof(Camera))]
    [DisallowMultipleComponent]
    public sealed class CameraAspectFitter : MonoBehaviour
    {
        [Tooltip("Aspect (width / height) you framed the camera against in the editor. " +
                 "0.5625 = 9:16 portrait. Set your Game view to this while authoring the shot.")]
        [SerializeField] private float referenceAspect = 1080f / 1920f;

        private Camera _cam;
        private float _refHalfHeight;   // authored vertical half-extent (orthographicSize)
        private float _refHalfWidth;    // authored horizontal half-extent
        private int _lastW = -1;
        private int _lastH = -1;

        private void Awake()
        {
            _cam = GetComponent<Camera>();
            // Capture the authored framing before we ever touch orthographicSize.
            _refHalfHeight = _cam.orthographicSize;
            _refHalfWidth = _refHalfHeight * Mathf.Max(0.0001f, referenceAspect);
            Apply();
        }

        private void Update()
        {
            if (Screen.width != _lastW || Screen.height != _lastH) Apply();
        }

        private void Apply()
        {
            _lastW = Screen.width;
            _lastH = Screen.height;
            if (_cam == null || !_cam.orthographic || _lastH <= 0) return;

            float aspect = (float)_lastW / _lastH;
            // "Contain" fit: never show less than the authored width or height.
            float sizeForWidth = _refHalfWidth / Mathf.Max(0.0001f, aspect);
            _cam.orthographicSize = Mathf.Max(sizeForWidth, _refHalfHeight);
        }
    }
}
