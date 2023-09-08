document.querySelectorAll(".nav-link").forEach((item, _) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    if (!item.classList.contains("viewing")) {
      window.location.href = item.getAttribute("href");
    }
  });
});

document.querySelectorAll(".card").forEach((item, _) => {
  item.addEventListener("click", (event) => {
    if (event.target.classList.contains("flip-front")) {
      item.classList.add("card-flipped");
      setTimeout(() => {
        item
          .querySelector(".card-front")
          .style.setProperty("visibility", "hidden");
        item
          .querySelector(".card-back")
          .style.setProperty("visibility", "visible");
      }, 100);
    } else if (event.target.classList.contains("flip-back")) {
      item.classList.remove("card-flipped");
      setTimeout(() => {
        item
          .querySelector(".card-front")
          .style.setProperty("visibility", "visible");
        item
          .querySelector(".card-back")
          .style.setProperty("visibility", "hidden");
      }, 100);
    }
  });
});
