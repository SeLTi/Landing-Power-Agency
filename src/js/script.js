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


const navButton = document.querySelector('.nav_btn');
const navCloseButton = document.querySelector('.nav_close');
const headerNav = document.querySelector('.nav');
const body = document.querySelector('.body');
const navLinks = document.querySelectorAll('.nav a');

navButton.addEventListener('click', () => {
	headerNav.classList.toggle('active');
	body.classList.toggle('body--overflow_hidden');
});

navCloseButton.addEventListener('click', () => {
	headerNav.classList.remove('active');
	body.classList.remove('body--overflow_hidden');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		headerNav.classList.remove('active');
		body.classList.remove('body--overflow_hidden');
	});
});
