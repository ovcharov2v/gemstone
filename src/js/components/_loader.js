const loader = document.querySelector('.loader')

setTimeout(() => {
	loader.classList.add('loader--hide')

	setTimeout(() => {
		loader.classList.add('loader--hidden')
		const evt = new Event('loader-complete')
		document.dispatchEvent(evt)
	}, 900)

}, 2000)


