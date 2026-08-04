using TMPro;
using UnityEngine;

namespace HexaTest.UI
{
    // Shared art references for the win/lose popups — assigned once on GameBootstrap and handed
    // to LevelCompleteView/GameOverView, since both are added at runtime (AddComponent) and so
    // have no scene-serialized Inspector slots of their own to drag assets onto directly.
    public sealed class EndScreenAssets
    {
        public GameObject PopupFrame;
        public GameObject ButtonGreen;
        public GameObject ButtonBlue;
        public Sprite StarOn;
        public Sprite StarOff;
        public GameObject StarSparkleVfx;
        public Sprite AdIcon;

        // Cyrillic-capable TMP font asset for text built directly from code (not sourced from a
        // prefab's own TextMeshProUGUI). Unity's built-in legacy WebGL font has no Cyrillic glyphs,
        // so any code-created label that can show Russian text needs this instead.
        public TMP_FontAsset HudFont;
    }
}
