
// hamburger menu

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");
const navMenu = document.querySelector(".navbar-menu");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    nav.classList.remove("active");
  }))
