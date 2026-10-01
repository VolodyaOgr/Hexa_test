using UnityEngine;
using VYandexTools.Review.Scripts;

/// <summary>
/// Отладочный вызов попапа оценки игры: зажать K + O + L и держать ~3 секунды — окно показывается
/// немедленно. Нужен, потому что штатно попап приходит по таймеру `ReviewController.time`
/// (по умолчанию 300 секунд) и только после `ReviewPopup.CanOpen`, который вне WebGL-сборки
/// недоступен вовсе: проверить вёрстку, локализацию и кликабельность окна иначе нечем.
///
/// Показ идёт напрямую через <see cref="ReviewCanvas.Show"/>, в обход таймера и `CanOpen`, —
/// окно появится гарантированно, в любой сцене и в редакторе тоже.
///
/// Почему удержание, а не одно нажатие: чит остаётся и в релизной сборке (иначе им нельзя
/// воспользоваться на черновике Яндекса), поэтому случайное срабатывание должно быть исключено.
/// Зажать три конкретные клавиши и продержать 3 секунды случайно невозможно, а результат виден
/// на экране — если попапа в проекте нет, чит скажет об этом, а не промолчит.
///
/// ⚠️ WebGL: клавиатура доходит до Unity только когда канвас в фокусе. Если комбо не срабатывает
/// на загрузочном экране — кликнуть по игре и повторить.
/// ⚠️ В редакторе кнопка «Оценить игру» бросит `EntryPointNotFoundException`: `ReviewPopup.Open` —
/// это jslib Agava, он существует только в WebGL-сборке. Крестик и вёрстка проверяются нормально.
///
/// Ставится сам, без префабов и правки сцен — специально, чтобы работать в любой игре из коробки.
/// </summary>
public class ReviewCheat : MonoBehaviour
{
    private const KeyCode FirstKey = KeyCode.K;
    private const KeyCode SecondKey = KeyCode.O;
    private const KeyCode ThirdKey = KeyCode.L;

    private const float HoldSeconds = 3f;
    private const float MessageSeconds = 4f;

    private float _heldSeconds;
    private float _messageHideTime;
    private string _message;

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
    private static void Spawn()
    {
        var runner = new GameObject("[ReviewCheat]");
        runner.AddComponent<ReviewCheat>();
        DontDestroyOnLoad(runner);
    }

    /// <summary>
    /// Принудительный показ попапа. Публичный и статический, чтобы дёргать не только читом:
    /// из кнопки отладочного меню игры или из консоли редактора.
    /// </summary>
    /// <returns>false, если попапа нет в сцене (не распакован `Assets/VYandexTools/Review/`
    /// или игра стартовала в обход Boot-сцены).</returns>
    public static bool ShowNow()
    {
#if UNITY_2023_1_OR_NEWER
        var canvas = FindFirstObjectByType<ReviewCanvas>();
#else
        var canvas = FindObjectOfType<ReviewCanvas>();
#endif
        if (canvas == null)
        {
            Debug.LogWarning("[ReviewCheat] ReviewCanvas не найден: запущено в обход Boot-сцены или пакет Review не распакован.");
            return false;
        }

        canvas.Show();
        Debug.Log("[ReviewCheat] Попап оценки игры показан читом (K+O+L).");
        return true;
    }

    private void Update()
    {
        if (!Input.GetKey(FirstKey) || !Input.GetKey(SecondKey) || !Input.GetKey(ThirdKey))
        {
            _heldSeconds = 0f;
            return;
        }

        // Отрицательное значение = уже сработало на этом удержании; ждём, пока клавиши отпустят.
        if (_heldSeconds < 0f)
            return;

        _heldSeconds += Time.unscaledDeltaTime;
        if (_heldSeconds < HoldSeconds)
            return;

        _heldSeconds = -1f;
        _message = ShowNow()
            ? "Review popup forced (K+O+L)."
            : "ReviewCanvas not found in scene.\nStart the game from the Boot scene.";
        _messageHideTime = Time.unscaledTime + MessageSeconds;
    }

    private void OnGUI()
    {
        if (Time.unscaledTime > _messageHideTime)
            return;

        const int width = 320;
        const int height = 60;

        var area = new Rect((Screen.width - width) * 0.5f, 20f, width, height);

        GUI.Box(area, GUIContent.none);
        GUI.Label(new Rect(area.x + 10f, area.y + 10f, width - 20f, height - 20f), _message);
    }
}
