var swiperOne = new Swiper('.mySwiper', {
		slidesPerView: 1,
		loop: true,
		initialSlide: 2,
	}),
	swiperTwo = new Swiper('.swiper-container', {
		loop: true,
		slidesPerView: 5,
		spaceBetween: 0,
		autoplay: {
		  delay: 0,
		  disableOnInteraction: false,
		},
		speed: 2000,
	});

const navImgContainers = document.querySelectorAll('.comments_nav__img_w');
const navDataBlocks = document.querySelectorAll('.comments_nav__data');

navImgContainers.forEach((imgContainer, index) => {
	imgContainer.addEventListener('click', () => {
		swiperOne.slideToLoop(index);

		navImgContainers.forEach(el => el.classList.remove('active'));
		navDataBlocks.forEach(dataEl => dataEl.classList.remove('active'));

		imgContainer.classList.add('active');
		if (navDataBlocks[index]) {
			navDataBlocks[index].classList.add('active');
		}
	});
});

swiperOne.on('slideChange', () => {
	const activeIndex = swiperOne.realIndex;
	navImgContainers.forEach((el, index) => {
		const isActive = index === activeIndex;
		el.classList.toggle('active', isActive);
		if (navDataBlocks[index]) {
			navDataBlocks[index].classList.toggle('active', isActive);
		}
	});
});
