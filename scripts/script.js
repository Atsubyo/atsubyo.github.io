window.onpageshow = (event) => {
  if (event.persisted && window.location.href.endsWith("index.html")) {
    window.location.reload(true);
  }
};

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

document.querySelectorAll(".menu-item").forEach((item, _) => {
  item.addEventListener("animationend", () => {
    item.style.setProperty(
      "transition",
      "opacity 0s ease, transform 0.3s ease"
    );
    item.classList.add("fadeIn-animation-complete");
    setTimeout(() => {
      item.style.setProperty(
        "transition",
        "opacity 0.3s ease, transform 0.3s ease"
      );
    }, 500);
  });
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const backgroundTransition = document.querySelector(
      ".landing-page-container"
    );
    const landingPageContent = document.querySelectorAll(
      ".landing-page-content"
    );
    landingPageContent.forEach((item) => {
      item.style.setProperty("opacity", "0");
    });
    backgroundTransition.style.setProperty("opacity", "1");
    backgroundTransition.style.setProperty(
      "background-image",
      "url('./images/background/purple-watercolor2.jpg')"
    );
    backgroundTransition.style.setProperty("background-size", "cover");
    backgroundTransition.style.setProperty("background-position", "fixed");

    const newUrl = item.getAttribute("href");
    setTimeout(() => {
      window.location.href = newUrl;
    }, 1000);
  });
});

document.querySelectorAll(".circular-link-list-item").forEach((item, _) => {
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
