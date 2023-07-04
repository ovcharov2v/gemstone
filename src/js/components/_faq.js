import gsap from "gsap"

const accordionItems = document.querySelectorAll(".faq__elem")

if (accordionItems.length) {
	accordionItems.forEach((itemAccordion) => {
		const accordionTitle = itemAccordion.querySelector(".faq__title-box")
		const accordionContent = itemAccordion.querySelector(".faq__content")

		accordionTitle.addEventListener("click", () => {
			if (!itemAccordion.classList.contains("faq__elem--active")) {
				const accordionItemsActive = document.querySelectorAll(".faq__elem--active")
				accordionItemsActive.forEach(itemAccordionActive => {
					const accordionContent = itemAccordionActive.querySelector(".faq__content")
					itemAccordionActive.classList.remove("faq__elem--active")
					gsap.to(accordionContent, {
						duration: .5,
						height: 0,
						display: "none",
						autoAlpha: 0,
						ease: "expo.inOut"
					})
				})

				itemAccordion.classList.add("faq__elem--active")
				gsap.set(accordionContent, {height: "auto", display: "block", autoAlpha: 1})
				gsap.from(accordionContent, {
					duration: .5,
					height: 0,
					display: "none",
					autoAlpha: 0,
					ease: "expo.inOut"
				})

			} else {
				itemAccordion.classList.remove("faq__elem--active")
				gsap.to(accordionContent, {duration: .5, height: 0, display: "none", autoAlpha: 0, ease: "expo.inOut"})
			}
		})
	})
}


