using UnityEngine;

namespace HexaTest.UI
{
    /// <summary>
    /// Resolves Unity's built-in dynamic font once, so code-built UI always renders in a
    /// WebGL build without relying on TMP essentials being imported. Unity 2022 ships it as
    /// "LegacyRuntime.ttf"; older versions expose it as "Arial.ttf".
    /// </summary>
    public static class UiFont
    {
        private static Font _cached;

        public static Font Builtin
        {
            get
            {
                if (_cached != null) return _cached;
                _cached = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
                if (_cached == null) _cached = Resources.GetBuiltinResource<Font>("Arial.ttf");
                return _cached;
            }
        }
    }
}
