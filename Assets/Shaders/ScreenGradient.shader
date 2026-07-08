// Full-screen background sampled from Assets/Art/back.png by screen-space UV. Using
// screen UV (rather than the quad's own UV) means the visible image does not depend on
// the quad's size/aspect, and — crucially — it matches the Hexa/ShadowGround shader
// pixel-for-pixel so the shadow-catching ground blends into the backdrop with no seam.
Shader "Hexa/ScreenGradient"
{
    Properties
    {
        _MainTex ("Background", 2D) = "white" {}
    }
    SubShader
    {
        Tags { "Queue"="Background" "RenderType"="Opaque" "ForceNoShadowCasting"="True" }

        Pass
        {
            ZWrite On
            Cull Off

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata { float4 vertex : POSITION; };

            struct v2f
            {
                float4 pos    : SV_POSITION;
                float4 screen : TEXCOORD0;
            };

            sampler2D _MainTex;

            v2f vert (appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.screen = ComputeScreenPos(o.pos);
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                float2 uv = i.screen.xy / i.screen.w;
                return tex2D(_MainTex, uv);
            }
            ENDCG
        }
    }
}
