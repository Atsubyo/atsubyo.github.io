window.addEventListener("scroll", () => {
	const scrollPosition = window.scrollY;
	const viewportHeight = window.innerHeight;
	const navReturnTop = document.querySelector(".nav-return-top");

	if (scrollPosition > viewportHeight / 2) {
		navReturnTop.classList.add("active");
	} else {
		navReturnTop.classList.remove("active");
	}
});
