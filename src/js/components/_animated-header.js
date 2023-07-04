import gsap from "gsap"

const headerList = document.querySelectorAll('.animated-header')

if (headerList.length) {
	document.addEventListener('loader-complete', () => {
		headerList.forEach((header) => {
			gsap.to(header.querySelector('.animated-header__elem'),  {
				y: 0,
				duration: .7,
				ease: 'circ',
				scrollTrigger: {
					trigger: header
				}
			})
		})
	})
}
