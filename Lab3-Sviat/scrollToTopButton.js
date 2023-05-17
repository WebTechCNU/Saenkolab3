const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Показує кнопку, коли сторінка прокручена на 2/3 від висоти браузера
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 1.5) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Прокручує сторінку вгору при натисканні кнопки
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
