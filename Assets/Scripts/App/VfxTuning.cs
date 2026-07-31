using UnityEngine;

namespace HexaTest.App
{
    // Third-party particle prefabs (Epic Toon FX) are sized/tinted for their own demo scenes;
    // this rescales every ParticleSystem in an instantiated VFX hierarchy uniformly so it reads
    // right at hex-board scale, without having to hand-edit each sub-emitter in the prefab.
    internal static class VfxTuning
    {
        public static void Scale(GameObject fx, float sizeScale, float startAlphaScale)
        {
            foreach (ParticleSystem ps in fx.GetComponentsInChildren<ParticleSystem>(true))
            {
                ParticleSystem.MainModule main = ps.main;
                main.startSizeMultiplier *= sizeScale;
                main.startSpeedMultiplier *= sizeScale;

                ParticleSystem.MinMaxGradient sc = main.startColor;
                if (sc.mode == ParticleSystemGradientMode.Color)
                {
                    Color c = sc.color;
                    c.a *= startAlphaScale;
                    sc.color = c;
                    main.startColor = sc;
                }
                else if (sc.mode == ParticleSystemGradientMode.TwoColors)
                {
                    Color a = sc.colorMin, b = sc.colorMax;
                    a.a *= startAlphaScale;
                    b.a *= startAlphaScale;
                    sc.colorMin = a;
                    sc.colorMax = b;
                    main.startColor = sc;
                }
            }
        }
    }
}
