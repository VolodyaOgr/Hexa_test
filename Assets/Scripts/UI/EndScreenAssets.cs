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
    }
}
