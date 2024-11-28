// Инициализация основного слайдера
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	loop: true, // Включено зацикливание
	initialSlide: 2, // Начать с третьего слайда
});

// Логика для пользовательской навигации
const navImgContainers = document.querySelectorAll('.comments_nav__img_w'); // Контейнеры для картинок
const navDataBlocks = document.querySelectorAll('.comments_nav__data'); // Блоки данных

navImgContainers.forEach((imgContainer, index) => {
	imgContainer.addEventListener('click', () => {
		// Переключение на соответствующий слайд
		swiper.slideToLoop(index); // slideToLoop корректно переключает слайд в режиме loop

		// Удаляем активный класс у всех элементов
		navImgContainers.forEach(el => el.classList.remove('active')); // Удаляем класс у всех картинок
		navDataBlocks.forEach(dataEl => dataEl.classList.remove('active')); // Удаляем класс у всех данных

		// Добавляем активный класс только текущему элементу
		imgContainer.classList.add('active'); // Добавляем к картинке
		if (navDataBlocks[index]) {
			navDataBlocks[index].classList.add('active'); // Добавляем к соответствующему блоку данных
		}
	});
});

// Синхронизация активного класса при смене слайдов
swiper.on('slideChange', () => {
	const activeIndex = swiper.realIndex; // Получаем индекс текущего реального слайда
	navImgContainers.forEach((el, index) => {
		const isActive = index === activeIndex;
		el.classList.toggle('active', isActive); // Ставим активный класс для картинки
		if (navDataBlocks[index]) {
			navDataBlocks[index].classList.toggle('active', isActive); // Ставим активный класс для .comments_nav__data
		}
	});
});
