let cursor = null
document.addEventListener('mousemove', e => {
	const area = e.target.closest('[data-cursor]')
	if (area) {
		console.log(area.dataset.cursor)
		const newCursor = document.querySelector(`.cursor--${area.dataset.cursor}`)
		if (cursor && cursor !== newCursor) {
			cursor.classList.remove('cursor--active')
		}
		cursor = newCursor
		cursor.classList.add('cursor--active')
		cursor.style.left = e.pageX + 'px'
		cursor.style.top = e.pageY + 'px'
	} else {
		if (cursor) {
			cursor.classList.remove('cursor--active')
			cursor = null
		}
	}
})
