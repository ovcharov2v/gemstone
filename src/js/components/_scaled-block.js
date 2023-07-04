import gsap from "gsap"

const blockList = document.querySelectorAll('.scaled-block')

if(blockList.length) {
	blockList.forEach((block) => {
		gsap.fromTo(block, {
			scale: 1.1,
		},{
			scale: 1,
			duration: .4,
			scrollTrigger: {
				trigger: block,
				start: "40% bottom"
			}
		})
	})
}
