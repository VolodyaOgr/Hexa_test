// Replacement for the built-in Standard shader on all board/disc materials.
// Luna compiles custom Assets/ shaders deterministically on every export, while
// built-in shader variants depend on editor-session usage tracking that breaks
// after restarts — Standard/VertexLit were the only shaders ever missing in web
// builds. Surface shader so Unity generates all shadow receive plumbing, and
// addshadow generates our own ShadowCaster pass (no VertexLit fallback).
Shader "Hexa/Lit"
{
    Properties
    {
        _Color ("Color", Color) = (1,1,1,1)
        _SpecColor ("Specular Color", Color) = (0.25, 0.25, 0.25, 1)
        _Glossiness ("Smoothness", Range(0,1)) = 0.42
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" "Queue"="Geometry" }
        LOD 200

        CGPROGRAM
        #pragma surface surf BlinnPhong addshadow exclude_path:deferred exclude_path:prepass noforwardadd nolightmap nodynlightmap nodirlightmap novertexlights
        #pragma target 3.0

        fixed4 _Color;
        half _Glossiness;

        struct Input
        {
            float3 worldPos; // unused; surface shaders require a non-empty Input
        };

        void surf (Input IN, inout SurfaceOutput o)
        {
            o.Albedo = _Color.rgb;
            // BlinnPhong: Specular = exponent scale (pow(nh, Specular*128)),
            // Gloss = highlight intensity. Tuned to sit close to Standard with
            // Metallic 0 / Smoothness ~0.4 on flat pastel colors.
            o.Specular = _Glossiness;
            o.Gloss = 1.0;
            o.Alpha = _Color.a;
        }
        ENDCG
    }
    FallBack Off
}
