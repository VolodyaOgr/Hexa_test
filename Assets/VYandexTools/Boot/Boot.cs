using System.Collections;
using Agava.YandexGames;
using GameAnalyticsSDK;
using Kimicu.YandexGames;
using UnityEngine;
using UnityEngine.Localization;
using UnityEngine.Localization.Settings;
using UnityEngine.SceneManagement;
using Billing = Kimicu.YandexGames.Billing;
using WebApplication = Kimicu.YandexGames.WebApplication;
using YandexGamesSdk = Kimicu.YandexGames.YandexGamesSdk;

namespace DefaultNamespace.Yandex
{
    public class Boot : MonoBehaviour
    {
        private const string DefaultLocaleCode = "en";
        private const float BootStepTimeoutSeconds = 8f;

        private static IEnumerator WaitUntilRoutine(System.Func<bool> predicate)
        {
            yield return new WaitUntil(predicate);
        }

#if UNITY_EDITOR
        [SerializeField] private string locale = "ru";

#endif
        private bool _billingSuccses;

        private IEnumerator Start()
        {
            yield return YandexGamesSdk.Initialize();
#if UNITY_WEBGL && !UNITY_EDITOR
            yield return Cloud.Initialize();
#endif
            yield return LocalizationSettings.InitializationOperation;
            SetLanguage();

            Advertisement.Initialize();
            WebApplication.Initialize(OnStopGame);
            GameAnalytics.Initialize();
#if !UNITY_EDITOR
            yield return RunWithTimeout(WaitUntilRoutine(() => GameAnalytics.Initialized), BootStepTimeoutSeconds);
            yield return RunWithTimeout(WaitUntilRoutine(GameAnalytics.IsRemoteConfigsReady), BootStepTimeoutSeconds);
#endif
            yield return RunWithTimeout(Billing.Initialize(), BootStepTimeoutSeconds);
            if (Billing.Initialized)
                yield return RunWithTimeout(Consume(), BootStepTimeoutSeconds);

            SaveSystem.Instance.Init();
            Advertisement.ShowInterstitialAd();
            LoadScene();
        }

        private IEnumerator Consume()
        {
            Billing.GetPurchasedProducts(UpdateProductCatalog);
            yield return new WaitUntil(() => _billingSuccses);
        }

        // Any of these WaitUntil gates (Billing catalog fetch, GameAnalytics init/remote config)
        // can hang forever if the underlying service errors or is unconfigured (e.g. missing
        // GameAnalytics game/secret key, hasPayments=false with no catalog in console) — the SDKs
        // never release their flag on the error path. Bound each so Boot can't freeze on a black screen.
        private IEnumerator RunWithTimeout(IEnumerator routine, float timeoutSeconds)
        {
            bool done = false;
            IEnumerator Wrapped()
            {
                yield return routine;
                done = true;
            }

            StartCoroutine(Wrapped());

            float elapsed = 0f;
            while (!done && elapsed < timeoutSeconds)
            {
                elapsed += Time.unscaledDeltaTime;
                yield return null;
            }

            if (!done)
                Debug.LogWarning("[Boot] Boot step timed out, continuing without it.");
        }

        private void UpdateProductCatalog(GetPurchasedProductsResponse response)
        {
            _billingSuccses = true;
            PurchasedProduct[] purchaseProducts = response.purchasedProducts;

            var countProducts = purchaseProducts.Length;
            for (var i = 0; i < countProducts; i++)
            {
                var product = purchaseProducts[i];
                if (product.productID.Equals(PurchaseIndexes.NoAD.ToString()))
                    SaveSystem.SaveData.NoAds = true;


                Billing.ConsumeProduct(product.purchaseToken);
            }
        }

        private void SetLanguage()
        {
#if UNITY_EDITOR
            string lang = HexaTest.UI.LocalizationTestOverride.HasLocaleCode
                ? HexaTest.UI.LocalizationTestOverride.LocaleCode
                : locale;
#else
             string lang = YandexGamesSdk.Environment.i18n.lang;
#endif
            LocalizationSettings.SelectedLocale = GetAvailableLocale(lang);
        }

        private static Locale GetAvailableLocale(string lang)
        {
            var locales = LocalizationSettings.AvailableLocales;
            Locale selectedLocale = locales.GetLocale(lang);

            if (selectedLocale != null)
                return selectedLocale;

            selectedLocale = locales.GetLocale(DefaultLocaleCode);
            if (selectedLocale != null)
                return selectedLocale;

            return locales.Locales.Count > 0 ? locales.Locales[0] : null;
        }

        private static void OnStopGame(bool value)
        {
            AudioListener.volume = value ? 1 : 0;
            AudioListener.pause = !value;
            Time.timeScale = value ? 1 : 0;
        }


        private void LoadScene() => SceneManager.LoadScene(sceneBuildIndex: 1);


        internal enum PurchaseIndexes
        {
            NoAD
        }
    }
}
