






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

































/*

document.addEventListener('DOMContentLoaded', function () {
    const roomsContainer = document.querySelector('.rooms__container');
    const mediaQuery1200 = window.matchMedia('(max-width: 1220px)');
    const mediaQuery800 = window.matchMedia('(max-width: 768px)');

    function handleViewportChange() {
        if (mediaQuery1200.matches) {
            // Если ширина вьюпорта меньше или равна 1220px
            roomsContainer.style.overflow = 'hidden';
        } else {
            roomsContainer.style.overflow = '';
        }

        const paginationDots = document.querySelector('.slider-rooms__dotts');
        if (paginationDots) {
            if (mediaQuery800.matches) {
                // Если ширина вьюпорта меньше или равна 768px
                paginationDots.style.position = 'absolute';
                paginationDots.style.transform = 'translate(-50%, 0)';
                paginationDots.style.left = '90%';
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




































document.addEventListener('DOMContentLoaded', function () {
    const roomsContainer = document.querySelector('.rooms__container');
    const mediaQuery = window.matchMedia('(max-width: 1220px)');

    function handleViewportChange(e) {
        if (e.matches) {
            // Если ширина вьюпорта меньше или равна 1200px
            roomsContainer.style.overflow = 'hidden';
        } else {
            // Если ширина вьюпорта больше 1200px
            roomsContainer.style.overflow = '';
        }
    }

    // Проверка начального состояния вьюпорта
    handleViewportChange(mediaQuery);

    //отслеживания изменений размера вьюпорта
    mediaQuery.addListener(handleViewportChange);

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

        // позиционирования точек пагинации
        const paginationDots = document.querySelector('.slider-rooms__dotts');
        if (paginationDots) {
            paginationDots.style.position = 'absolute';
            paginationDots.style.transform = 'translate(400px, -30px)';
        }
    }
});






document.addEventListener('DOMContentLoaded', function () {
    // Проверяем, существует ли элемент с классом 'slider-rooms'
    const sliderRoomsElement = document.querySelector('.slider-rooms');

    if (sliderRoomsElement) {
        // Если элемент существует, инициализируем Swiper и выполняем остальной код
        const swiper = new Swiper('.swiper-container', {
            loop: true, // Бесконечный слайдер
            navigation: {
                nextEl: '.slider-arrows_next',
                prevEl: '.slider-arrows_prev',
            },
            observer: true,
            observeParents: true,
            slidesPerView: "auto",
            speed: 800,
            spaceBetween: 24,
            loop: true,
            watchOverflow: true,
            loopAdditionalSlides: 5,
            preloadImages: false,
            paralax: true,
            pagination: {
                el: '.slider-rooms__dotts',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-rooms .slider-arrows_next',
                prevEl: '.slider-rooms .slider-arrows_prev',
            },
        });

        // Дополнительный код для позиционирования точек пагинации
        const paginationDots = document.querySelector('.slider-rooms__dotts');
        if (paginationDots) {
            paginationDots.style.position = 'absolute';
            paginationDots.style.transform = 'translate(400px, -30px)';
        }
    }
});



 */



























/*

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Бесконечный слайдер
        navigation: {
            nextEl: '.slider-arrows_next',
            prevEl: '.slider-arrows_prev',
        },
		observer: true,
		observeParents: true,
        slidesPerView: "auto",
		speed: 800,
        spaceBetween: 24,
		loop: true,
		watchOverflow: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		paralax: true,
		pagination: {
            el: '.slider-rooms__dotts',
            clickable: true,
        },
		navigation: {
            nextEl: '.slider-rooms .slider-arrows_next',
            prevEl: '.slider-rooms .slider-arrows_prev',
        },
    });
	const paginationDots = document.querySelector('.slider-rooms__dotts');
    if (paginationDots) {
        paginationDots.style.position = 'absolute';
        paginationDots.style.transform = 'translate(400px, -30px)';
    }
});





document.addEventListener('DOMContentLoaded', function () {
    const dotts = document.querySelector('.slider-rooms__dotts');
    const targetContainer1 = document.querySelector('.rooms__body');
    const targetContainer2 = document.querySelector('.some-other-container'); // Измените на нужный контейнер
    const targetContainer3 = document.querySelector('.yet-another-container'); // Измените на нужный контейнер

    function moveDotts() {
        const viewportWidth = window.innerWidth;

        // Примерные медиазапросы, измените значения и условия по необходимости
        if (viewportWidth >= 1200) {
            if (targetContainer1 && !targetContainer1.contains(dotts)) {
                targetContainer1.appendChild(dotts);
            }
        } else if (viewportWidth >= 768 && viewportWidth < 1200) {
            if (targetContainer2 && !targetContainer2.contains(dotts)) {
                targetContainer2.appendChild(dotts);
            }
        } else {
            if (targetContainer3 && !targetContainer3.contains(dotts)) {
                targetContainer3.appendChild(dotts);
            }
        }
    }

    // Вызов функции при загрузке страницы
    moveDotts();

    // Вызов функции при изменении размера окна
    window.addEventListener('resize', moveDotts);

    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.slider-arrows_next',
            prevEl: '.slider-arrows_prev',
        },
        pagination: {
            el: '.slider-rooms__dotts',
            clickable: true,
        },
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        speed: 800,
        spaceBetween: 24,
        loop: true,
        watchOverflow: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
    });
		const dotts = document.querySelector('.slider-rooms__dotts');
	const targetContainer = document.querySelector('.rooms__body'); // элемент, куда нужно переместить
	targetContainer.appendChild(dotts); //
});
*/