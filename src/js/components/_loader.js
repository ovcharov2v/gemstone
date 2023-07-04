import gsap from "gsap"

const loader= document.querySelector('.loader')
gsap.to(loader, {
	opacity: 0,
	duration: .3,
	delay: 1,
	onComplete: () => {
		loader.classList.add('loader--hidden')
		const evt = new Event('loader-complete')
		document.dispatchEvent(evt)
	}
})


