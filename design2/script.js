window.addEventListener("resize", () => {
	if (window.innerWidth < 800) {
		window.resizeTo(800, window.innerHeight);
	}
	if (window.innerHeight < 600) {
		window.resizeTo(window.innerWidth, 600);
	}
});

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item")).forEach(
	(item, index) => {
		item.onmouseover = () => {
			menu.dataset.activeIndex = index;
		};
	}
);

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item, _) => {
	item.addEventListener("animationend", () => {
		item.classList.add("fadeIn-animation-complete");
	});
	item.addEventListener("click", () => {
		const expandableDiv = document.querySelector(
			"#menu-background-pattern"
		);
		expandableDiv.style.setProperty("width", "100dvw");
		expandableDiv.style.setProperty("opacity", "1");
		// expandableDiv.style.setProperty(
		// 	"background-color",
		// 	"rgb(113, 108, 132)"
		// );
		// setTimeout(() => {
		// 	expandableDiv.style.setProperty("background-image", "none");
		// }, 2000);
	});
});

const circularLinkListItems = document.querySelectorAll(
	".circular-link-list-item"
);

circularLinkListItems.forEach((item, _) => {
	item.addEventListener("animationend", () => {
		item.classList.add("fadeIn-animation-complete");
	});
});

function updateSize(item, borderSize, borderRadius) {
	item.style.setProperty("width", `${borderSize}px`);
	item.style.setProperty("height", `${borderSize}px`);
	item.style.setProperty("border-radius", `${borderRadius}px`);
}

function handleUpdateSize() {
	const circleBorderInner = document.querySelector("#circle-inner");
	const circleBorderCenter = document.querySelector("#circle-center");
	const circleBorderOuter = document.querySelector("#circle-outer");
	const circleMenuSize = document.querySelector(".circular-link-menu");
	const linkItems = document.querySelectorAll(".link-item");

	const borderSize = Math.min(window.innerWidth, window.innerHeight) * 0.4;
	const borderRadius = borderSize / 2;
	updateSize(circleBorderInner, borderSize / 4, borderRadius / 4);
	updateSize(circleBorderCenter, borderSize, borderRadius);
	updateSize(circleBorderOuter, borderSize * 3, borderRadius * 3);
	updateSize(circleMenuSize, borderSize, borderRadius);
	linkItems.forEach((item, _) => {
		item.style.setProperty("--radius", `${borderRadius}px`);
	});
}

handleUpdateSize();
window.addEventListener("resize", handleUpdateSize);
