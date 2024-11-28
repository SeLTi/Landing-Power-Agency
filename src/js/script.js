var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	loop: true,
	initialSlide: 2,
});

const navImgContainers = document.querySelectorAll('.comments_nav__img_w');
const navDataBlocks = document.querySelectorAll('.comments_nav__data');

navImgContainers.forEach((imgContainer, index) => {
	imgContainer.addEventListener('click', () => {
		swiper.slideToLoop(index);

		navImgContainers.forEach(el => el.classList.remove('active'));
		navDataBlocks.forEach(dataEl => dataEl.classList.remove('active'));

		imgContainer.classList.add('active');
		if (navDataBlocks[index]) {
			navDataBlocks[index].classList.add('active');
		}
	});
});

swiper.on('slideChange', () => {
	const activeIndex = swiper.realIndex;
	navImgContainers.forEach((el, index) => {
		const isActive = index === activeIndex;
		el.classList.toggle('active', isActive);
		if (navDataBlocks[index]) {
			navDataBlocks[index].classList.toggle('active', isActive);
		}
	});
});
