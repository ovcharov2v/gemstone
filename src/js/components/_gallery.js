import Swiper from 'swiper';

const galleryLinkList = document.querySelectorAll('[data-gallery]')

if(galleryLinkList.length) {
	galleryLinkList.forEach((galleryLink)=>{
		let gallery = document.querySelector(`#${galleryLink.dataset.gallery}`)
		//let animation = galleryAnim(gallery)
		galleryLink.addEventListener('click', (e)=>{
			e.preventDefault()
			if(gallery) {
				document.body.style.overflow = 'hidden'
				gallery.classList.add('gallery--active')
				setTimeout(() => {
					gallery.classList.add('gallery--animate')
				})
			}
		})
		gallery.addEventListener('click', () => {
			gallery.classList.remove('gallery--animate')
			setTimeout(() => {
				gallery.classList.remove('gallery--active')
			}, 300)
		})
	})
}

const galleryList = document.querySelectorAll('.gallery')
if(galleryList.length) {
	galleryList.forEach((gallery) => {
		const slider = new Swiper(gallery.querySelector('.gallery__slider'), {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
		})

		const nextButton = gallery.querySelector('.gallery__button--next')
		nextButton.addEventListener('click', (e)=>{
			e.preventDefault()
			e.stopPropagation()
			slider.slideNext()
		})

		const prevButton = gallery.querySelector('.gallery__button--prev')
		prevButton.addEventListener('click', (e)=>{
			e.preventDefault()
			e.stopPropagation()
			slider.slidePrev()
		})
	})
}

