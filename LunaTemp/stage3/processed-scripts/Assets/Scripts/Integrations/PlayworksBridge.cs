using UnityEngine;
#if !UNITY_LUNA
using System;
using System.Reflection;
#endif

namespace HexaTest.Integrations
{

    public static class PlayworksBridge
    {
        private const string FallbackStoreUrl = "";

        public static void InstallFullGame()
        {
#if UNITY_LUNA
            Luna.Unity.Playable.InstallFullGame();
#else
            if (TryCall("Luna.Unity.Playable", "InstallFullGame")) return;
            if (!string.IsNullOrEmpty(FallbackStoreUrl)) Application.OpenURL(FallbackStoreUrl);
#endif
        }

        public static void GameEnded()
        {
#if UNITY_LUNA
            Luna.Unity.LifeCycle.GameEnded();
#else
            TryCall("Luna.Unity.LifeCycle", "GameEnded");
#endif
        }

#if !UNITY_LUNA
        private static bool TryCall(string typeName, string methodName)
        {
            Type type = FindType(typeName);
            if (type == null) return false;

            MethodInfo method = type.GetMethod(
                methodName,
                BindingFlags.Public | BindingFlags.Static,
                null,
                new Type[0],
                null);

            if (method == null) return false;

            try
            {
                method.Invoke(null, null);
                return true;
            }
            catch (Exception exception)
            {
                Debug.LogException(exception);
                return false;
            }
        }

        private static Type FindType(string typeName)
        {
            Type directType = Type.GetType(typeName);
            if (directType != null) return directType;

            Assembly[] assemblies = AppDomain.CurrentDomain.GetAssemblies();
            for (int i = 0; i < assemblies.Length; i++)
            {
                Type type = assemblies[i].GetType(typeName);
                if (type != null) return type;
            }

            return null;
        }
#endif
    }
}
