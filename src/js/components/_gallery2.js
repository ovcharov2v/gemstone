import Swiper, {Pagination} from 'swiper';

const sliderElem = document.querySelector('.gallery2__slider')

if (sliderElem) {
	const slider = new Swiper(sliderElem.querySelector('.swiper'), {
		slidesPerView: 1.1,
		spaceBetween: 30,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		touchStartPreventDefault: false,
		breakpoints: {
			320: {
				slidesPerView: 1.1,
				spaceBetween: 30
			},
			768: {
				slidesPerView: 1.7,
				spaceBetween: 60
			}
		}
	})

	const progressValue = sliderElem.querySelector('.gallery2__progress-value')

	slider.on('transitionStart', function () {
		progressValue.style.width = `${slider.progress * 100}%`
	})
}
