document.querySelectorAll(".slider-wrapper").forEach(slider => {
        const row = slider.querySelector(".episode-row");
        const left = slider.querySelector(".arrow.left");
        const right = slider.querySelector(".arrow.right");

  left.addEventListener("click", () => {
    row.scrollBy({ left: -400, behavior: "smooth" });
  });

  right.addEventListener("click", () => {
    row.scrollBy({ left: 400, behavior: "smooth" });
  });
});