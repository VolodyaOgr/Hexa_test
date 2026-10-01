using System;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace VYandexTools.Review.Scripts
{
    /// <summary>
    /// Попап оценки игры. Живёт в Boot-сцене (DontDestroyOnLoad) на СОБСТВЕННОМ Canvas, поэтому
    /// при показе поверх игровой сцены обязан сам обеспечить себе верх UI-стека.
    ///
    /// Почему: у Overlay-канвасов с одинаковым sortingOrder порядок отрисовки и рейкаста задаётся
    /// порядком регистрации канвасов. Канвас из Boot создаётся раньше канвасов игровой сцены, так что
    /// при sortingOrder 0 игровой UI оказывается выше и забирает клик первым. Любая полноэкранная
    /// невидимая зона ввода игры (джойстик, свайп-контроллер, Image с alpha 0 и Raycast Target) съедает
    /// pointer-down над попапом — окно видно, но кнопки не нажимаются и закрыть его нельзя.
    /// </summary>
    [RequireComponent(typeof(Canvas))]
    public class ReviewCanvas : MonoBehaviour
    {
        /// <summary>Запас над самым верхним чужим канвасом.</summary>
        private const int SortingOrderMargin = 10;

        /// <summary>Нижняя граница: даже если в сцене нет канвасов, попап должен быть заведомо сверху.</summary>
        private const int MinSortingOrder = 1000;

        /// <summary>Потолок Unity для sortingOrder (short).</summary>
        private const int MaxSortingOrder = 32767;

        [SerializeField] private GameObject root;
        [SerializeField] private Button closeButton;
        [SerializeField] private Button reviewButton;

        public event Action OnReviewButtonClick;
        public event Action OnCloseButtonClick;

        public bool IsOpened => root.activeSelf;

        private Canvas _canvas;
        private GraphicRaycaster _raycaster;

        private void Awake()
        {
            _canvas = GetComponent<Canvas>();
            _raycaster = GetComponent<GraphicRaycaster>();
            if (_raycaster == null)
                _raycaster = gameObject.AddComponent<GraphicRaycaster>();
        }

        private void Start()
        {
            closeButton.onClick.AddListener(CloseButton);
            reviewButton.onClick.AddListener(ReviewButton);
        }

        public void Show()
        {
            BringToFront();
            EnsureEventSystem();
            root.SetActive(true);
        }

        public void Hide() => root.SetActive(false);

        /// <summary>
        /// Поднимает канвас попапа над всем UI игры: считает максимальный sortingOrder среди активных
        /// канвасов сцены и встаёт выше. Вызывается на каждый Show — состав канвасов зависит от сцены.
        /// </summary>
        private void BringToFront()
        {
            if (_canvas == null) return;

            var target = MinSortingOrder;
#if UNITY_2023_1_OR_NEWER
            var canvases = FindObjectsByType<Canvas>(FindObjectsSortMode.None);
#else
            var canvases = FindObjectsOfType<Canvas>();
#endif
            foreach (var canvas in canvases)
            {
                if (canvas == _canvas || !canvas.isActiveAndEnabled) continue;

                var order = canvas.sortingOrder + SortingOrderMargin;
                if (order > target) target = order;
            }

            _canvas.overrideSorting = true; // на случай, если префаб окажется вложен в чужой канвас
            _canvas.sortingOrder = Mathf.Clamp(target, MinSortingOrder, MaxSortingOrder);
            _canvas.enabled = true;
            if (_raycaster != null) _raycaster.enabled = true;
        }

        /// <summary>
        /// Страховка от «окно не кликается, потому что EventSystem нет вовсе»: попап может быть показан
        /// в сцене без EventSystem (например, в Boot до загрузки игровой сцены). Создаём временный —
        /// без DontDestroyOnLoad, чтобы он умер вместе со сценой и не конфликтовал с EventSystem игры.
        /// </summary>
        private static void EnsureEventSystem()
        {
            if (EventSystem.current != null && EventSystem.current.isActiveAndEnabled) return;

#if UNITY_2023_1_OR_NEWER
            if (FindFirstObjectByType<EventSystem>() != null) return;
#else
            if (FindObjectOfType<EventSystem>() != null) return;
#endif

            var go = new GameObject("EventSystem (Review)");
            go.AddComponent<EventSystem>();

            // Новый Input System не работает со StandaloneInputModule (и наоборот), поэтому модуль
            // выбираем по факту наличия сборки — без жёсткой зависимости на пакет в коде кита.
            var inputSystemModule = Type.GetType("UnityEngine.InputSystem.UI.InputSystemUIInputModule, Unity.InputSystem");
            if (inputSystemModule != null)
                go.AddComponent(inputSystemModule);
            else
                go.AddComponent<StandaloneInputModule>();
        }

        private void ReviewButton()
        {
            OnReviewButtonClick?.Invoke();
        }

        private void CloseButton()
        {
            Hide();
            OnCloseButtonClick?.Invoke();
        }
    }
}
