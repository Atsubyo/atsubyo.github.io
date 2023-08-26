window.addEventListener("scroll", () => {
	const scrollPosition = window.scrollY;
	const viewportHeight = window.innerHeight;
	const navReturnTop = document.querySelector(".nav-return-top");
	const navLinks = document.querySelectorAll(".nav-link");
	const sections = document.querySelectorAll("section");

	if (scrollPosition > viewportHeight / 2) {
		navReturnTop.classList.add("active");
	} else {
		navReturnTop.classList.remove("active");
	}

	let currentSection = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;

		if (scrollPosition >= sectionTop - sectionHeight / 3) {
			currentSection = section.getAttribute("id");
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove("viewing");
		if (link.getAttribute("href").substring(1) === currentSection) {
			link.classList.add("viewing");
		}
	});
});
