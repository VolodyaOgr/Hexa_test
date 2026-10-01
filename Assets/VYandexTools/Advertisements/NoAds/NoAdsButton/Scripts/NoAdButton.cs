using System.Collections;
using System.Linq;
using DefaultNamespace.Yandex;
using Kimicu.YandexGames;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using VYandexTools.Advertisements.NoAds.NoAdsButton.Scripts;

public class NoAdButton : MonoBehaviour
{
    [SerializeField] private Button button;
    [SerializeField] private RawImage priceImage;
    [SerializeField] private TextAdapter priceText;
    
    private void Awake()
    {
        // Subscribe first: a failure below (catalog not loaded) must not leave the button stale.
        PlayerSaveData.OnBuyNoAds += OnBuyNoAds;

        if (SaveSystem.SaveData.NoAds)
        {
            OnBuyNoAds();
            return;
        }

        button.onClick.AddListener(BuyNoAd);

        // The catalog can be empty/null when Billing failed or timed out in Boot; the button must
        // still be shown (the purchase call itself reports errors).
        var catalog = Billing.CatalogProducts;
        if (catalog == null || catalog.Length == 0)
            return;

        var product = catalog.FirstOrDefault(x => x.id == Boot.PurchaseIndexes.NoAD.ToString());
        if (product != null)
            priceText.Text = product.price.ToString();

        var picture = (product ?? catalog[0]).priceCurrencyPicture;
        if (!string.IsNullOrEmpty(picture))
            StartCoroutine(DownloadImage(picture));
    }

    private void OnDestroy() => PlayerSaveData.OnBuyNoAds -= OnBuyNoAds;

    // The SaveData setter raises this event on EVERY NoAds assignment (including loading a save
    // with NoAds=false), so check the actual value before hiding.
    private void OnBuyNoAds()
    {
        if (SaveSystem.SaveData.NoAds)
            button.gameObject.SetActive(false);
    }

    private void BuyNoAd()
    {
        var productId = Boot.PurchaseIndexes.NoAD.ToString();

        Billing.PurchaseProduct(productId, (purchaseProductResponse) =>
        {
            Billing.ConsumeProduct(purchaseProductResponse.purchaseData.purchaseToken);
            SaveSystem.SaveData.NoAds = true;

            // NoAds покупается мимо магазина игры, поэтому событие шлём отсюда — иначе
            // эта покупка не попадёт в аналитику вообще.
            GaEventProvider.PurchaseById(productId, itemType: "NoAds");
        });
    }

    private IEnumerator DownloadImage(string textureUrl)
    {
        UnityWebRequest request = UnityWebRequestTexture.GetTexture(textureUrl);
        yield return request.SendWebRequest();
        if (request.result == UnityWebRequest.Result.ConnectionError ||
            request.result == UnityWebRequest.Result.ProtocolError)
            Debug.Log("Download Image Error");
        else
        {
            var texture = ((DownloadHandlerTexture)request.downloadHandler).texture;
            priceImage.texture = texture;
        }
    }
#if UNITY_EDITOR
    private void OnValidate()
    {
        button ??= GetComponent<Button>();
    }
#endif
}