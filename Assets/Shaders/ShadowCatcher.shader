// Opaque "ground" that samples the SAME background image (Assets/Art/back.png) as the
// backdrop, by screen-space UV so it lines up seamlessly, and darkens it where a
// real-time shadow lands. Written as a surface shader with a custom Lighting function
// so Unity handles all the shadow-coordinate/keyword plumbing itself (guaranteed
// correct) instead of a hand-rolled vertex/fragment pass, which — despite compiling
// cleanly — never actually received SHADOWS_SCREEN attenuation in this project.
Shader "Hexa/ShadowGround"
{
    Properties
    {
        _MainTex ("Background", 2D) = "white" {}
        _Strength ("Shadow Strength", Range(0,1)) = 0.45
    }
    SubShader
    {
        Tags { "Queue"="Geometry+1" "RenderType"="Opaque" }

        CGPROGRAM
        // addshadow generates this shader's own ShadowCaster pass, so Luna's depth
        // pre-pass never falls back to the built-in VertexLit shadowcaster (built-in
        // shader variants are unreliable in Luna exports — see Hexa/Lit).
        #pragma surface surf ShadowCatcher noambient noforwardadd addshadow
        #pragma target 3.0

        sampler2D _MainTex;
        fixed _Strength;

        struct Input
        {
            float4 screenPos;
        };

        half4 LightingShadowCatcher(SurfaceOutput s, half3 lightDir, half atten)
        {
            // atten: 1 = fully lit, <1 = in shadow. Blend toward it by _Strength so the
            // ground reads as a darkened patch under shadowed areas, never fully black.
            fixed shade = lerp(1.0, atten, _Strength);
            return fixed4(s.Albedo * shade, 1.0);
        }

        void surf (Input IN, inout SurfaceOutput o)
        {
            float2 uv = IN.screenPos.xy / IN.screenPos.w;
            o.Albedo = tex2D(_MainTex, uv).rgb;
        }
        ENDCG
    }
    FallBack Off
}
