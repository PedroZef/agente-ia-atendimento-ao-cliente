document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const counterEl = document.getElementById("counter");
  const progressFill = document.getElementById("progressFill");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");

  let currentIndex = 0;

  function render() {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === currentIndex);
    });
    counterEl.textContent = `Slide ${currentIndex + 1} de ${slides.length}`;
    progressFill.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    render();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    render();
  }

  btnNext.addEventListener("click", nextSlide);
  btnPrev.addEventListener("click", prevSlide);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      nextSlide();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    }
  });

  render();
});