using System;
using Kimicu.YandexGames;
using Newtonsoft.Json;
using UnityEngine;

public class SaveSystem : Singleton<SaveSystem>
{
    private static bool IsDataLoaded { get; set; }

    private static PlayerSaveData cachedSaveData;

    public static ref PlayerSaveData SaveData
    {
        get
        {
            if (!IsDataLoaded)
                cachedSaveData = LoadPlayerData();

            return ref cachedSaveData;
        }
    }

    private static string lastSavedJson;

    private const string SaveKey = "SaveData";
    private const int SavingPeriod = 4;

    public override void Init()
    {
        if (Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        InvokeRepeating(nameof(SavePlayerData), SavingPeriod, SavingPeriod);
        DontDestroyOnLoad(this);
        base.Init();
    }
    
    private static PlayerSaveData LoadPlayerData()
    {
        string json = LoadJson();

        PlayerSaveData saveData;

        if (!string.IsNullOrEmpty(json) && !string.IsNullOrWhiteSpace(json))
            saveData = JsonConvert.DeserializeObject<PlayerSaveData>(json);
        else
            saveData = new PlayerSaveData
            {
                Money = 0,
                NoAds = false,
                Level = 1,
                BestScore = 0,
            };

        // It is very imporant to add null-checks for any collections you add in future updates
        // Since NewtonsoftJson is creating nulls when reading jsons with no info about collections
        // Old saves deserialize missing int fields as 0, so clamp level progression to level 1.
        if (saveData.Level < 1) saveData.Level = 1;

        IsDataLoaded = true;
        return saveData;
    }

    /// <summary>
    /// Полный сброс прогресса — для тестирования (см. <see cref="SaveResetCheat"/>).
    /// Сбрасывает кэш в памяти И хранилище (Cloud в WebGL-билде, PlayerPrefs в редакторе —
    /// та же ветка, что и обычное сохранение). Сброс кэша обязателен: без него ближайший
    /// автосейв через SavingPeriod секунд просто запишет старые данные обратно.
    /// </summary>
    public static void ResetAllData()
    {
        cachedSaveData = new PlayerSaveData
        {
            Level = 1,
        };
        IsDataLoaded = true;
        lastSavedJson = null;

        SaveCurrent();
        Debug.Log("[SaveSystem] Save data was reset.");
    }

    public void SaveToStorage()
    {
        SaveCurrent();
    }

    public static void SaveCurrent()
    {
        string json = JsonConvert.SerializeObject(cachedSaveData);

        if (json == lastSavedJson)
            return;
        SaveJson(json);
    }

    private void SavePlayerData()
    {
        SaveCurrent();
    }

    private static string LoadJson()
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        return Cloud.GetValue(SaveKey, "");
#else
        return PlayerPrefs.GetString(SaveKey, "");
#endif
    }

    private static void SaveJson(string json)
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        Cloud.SetValue(SaveKey, json, true, () => lastSavedJson = json);
#else
        PlayerPrefs.SetString(SaveKey, json);
        PlayerPrefs.Save();
        lastSavedJson = json;
#endif
    }
}

[Serializable]
public struct PlayerSaveData
{
    // Fill content of your SaveData, it can be anything that Newtonsoft can serialize
    // Example of reactive data:
    private int _cachedMoney;
    public static event Action OnMoneyChanged;

    public int Money
    {
        get => _cachedMoney;
        set
        {
            _cachedMoney = value;
            OnMoneyChanged?.Invoke();
        }
    }

    private bool _noAds;
    public static event Action OnBuyNoAds;

    public bool NoAds
    {
        get => _noAds;
        set
        {
            _noAds = value;
            OnBuyNoAds?.Invoke();
        }
    }

    // Current level in the progression (1-based). Advanced immediately on level complete.
    private int _level;
    public static event Action OnLevelChanged;

    public int Level
    {
        get => _level;
        set
        {
            _level = value;
            OnLevelChanged?.Invoke();
        }
    }

    // Best score shown on the game-over screen.
    private int _bestScore;

    public int BestScore
    {
        get => _bestScore;
        set => _bestScore = value;
    }
}
