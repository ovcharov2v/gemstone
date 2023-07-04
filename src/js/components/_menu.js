import gsap from "gsap"

const menuAnim = gsap.timeline({paused: true})
	.fromTo('.menu',
		{
			xPercent: 100,
		},
		{
			xPercent: 0,
			duration: .3,
			onReverseComplete: () => {
				document.querySelector('.menu').classList.remove('menu--active')
			}
		}
	)

const menuBtnList = document.querySelectorAll('.js-show-menu')

menuBtnList.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (document.body.classList.contains('left-menu-show')) {
			document.body.classList.remove('left-menu-show')
			document.body.style.overflow = ''
			menuAnim.reverse()
		} else {
			document.body.classList.add('left-menu-show')
			document.body.style.overflow = 'hidden'
			document.querySelector('.menu').classList.add('menu--active')
			menuAnim.play()
		}
	})
})

const menuLinks = document.querySelectorAll('.menu__nav-link')
const digitBox = document.querySelector('.menu__counter-digit-list')
const digitList = document.querySelectorAll('.menu__counter-digit')
menuLinks.forEach((link) => {
	link.addEventListener("mouseenter", () => {
		console.log(digitBox.length)
		digitBox.style.transform = `translateY(-${100 * (parseInt(link.dataset.digit) / digitList.length)}%)`
	})
	link.addEventListener("mouseleave", () => {
		digitBox.style.transform = "translateY(0)"
	})
})

