






document.addEventListener('DOMContentLoaded', function () {
    const roomsContainer = document.querySelector('.rooms__container');
    const mediaQuery1200 = window.matchMedia('(max-width: 1220px)');
    const mediaQuery800 = window.matchMedia('(max-width: 768px)');
    const mediaQuery500 = window.matchMedia('(max-width: 500px)');

    function handleViewportChange() {
        if (mediaQuery1200.matches) {
            // Если ширина вьюпорта меньше или равна 1220px
            roomsContainer.style.overflow = 'hidden';
        } else {
            roomsContainer.style.overflow = '';
        }

        const paginationDots = document.querySelector('.slider-rooms__dotts');
        if (paginationDots) {
            if (mediaQuery500.matches) {
                // Если ширина вьюпорта меньше или равна 500px
                paginationDots.style.position = 'absolute';
                paginationDots.style.transform = 'translateX(-50%)';
                paginationDots.style.left = '70%';
                paginationDots.style.bottom = '20px';
            } else if (mediaQuery800.matches) {
                // Если ширина вьюпорта меньше или равна 768px
                paginationDots.style.position = 'absolute';
                paginationDots.style.transform = 'translate(-50%, 0)';
                paginationDots.style.left = '85%';
                paginationDots.style.bottom = '20px';
            } else {
                // Убираем стили, если ширина вьюпорта больше 800px
                paginationDots.style.position = 'absolute';
                paginationDots.style.transform = 'translate(400px, -30px)';
                paginationDots.style.left = '';
                paginationDots.style.bottom = '';
            }
        }
    }

    // Проверка начального состояния вьюпорта
    handleViewportChange();

    // Добавление слушателя для отслеживания изменений размера вьюпорта
    mediaQuery1200.addListener(handleViewportChange);
    mediaQuery800.addListener(handleViewportChange);
    mediaQuery500.addListener(handleViewportChange);

    // Проверка наличия элемента слайдера
    const sliderRoomsElement = document.querySelector('.slider-rooms');
    if (sliderRoomsElement) {
        // выполняем остальной код
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            observer: true,
            observeParents: true,
            slidesPerView: "auto",
            speed: 800,
            spaceBetween: 24,
            watchOverflow: true,
            loopAdditionalSlides: 5,
            preloadImages: false,
            parallax: true,
            pagination: {
                el: '.slider-rooms__dotts',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-rooms .slider-arrows_next',
                prevEl: '.slider-rooms .slider-arrows_prev',
            },
        });

        // Проверка состояния пагинации
        handleViewportChange();
    }
});





