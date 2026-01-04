let index = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);

let slider = document.querySelector(".slider");
let autoSlide = setInterval(nextSlide, 3000);

slider.addEventListener("mouseover", () => clearInterval(autoSlide));
slider.addEventListener("mouseout", () => {
  autoSlide = setInterval(nextSlide, 3000);
});

