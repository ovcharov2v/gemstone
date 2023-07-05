import sal from 'sal.js'

document.addEventListener('loader-complete', () => {
	sal({
		selector: '.animation',
		once: true,
		animateClassName: 'animation--complete',
		threshold: .4
	})
})

window.onbeforeunload = function () {
	window.scrollTo(0,0);
}

