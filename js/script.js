const openBtn = document.querySelector(".hero-btn");
const modal = document.querySelector("#modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("is-open");
});

const closeBtn = document.querySelector(".modal-close-btn");
closeBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
});

const openMobileMenu = document.querySelector(".header-mobile-menu");
const closeMobileMenu = document.querySelector(".mobile-menu-close-btn");
const mobileMenu = document.querySelector(".mobile-menu");

openMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});
closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});
