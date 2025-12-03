let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = slides.length - 1; // stop di slide terakhir
  }
  showSlide(currentSlide);
}