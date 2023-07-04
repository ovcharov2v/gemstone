import gsap from "gsap"

const linesList = document.querySelectorAll('.animated-line')

if(linesList.length) {
	linesList.forEach((line) => {
		const progress = line.querySelector('.animated-line__progress')
		gsap.to(progress, {
			width: '100%',
			duration: .7,
			scrollTrigger: {
				trigger: progress
			}
		})
	})
}
