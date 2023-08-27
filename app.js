// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
    nav.classList.toggle("open");
});

document.querySelectorAll(".section-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navMenu.classList.remove("open");
        nav.classList.remove("open");
    })
);




