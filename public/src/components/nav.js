let navToggle = document.querySelector(".nav-toggle");
let navList = document.querySelector(".nav__list");
let title = document.querySelector(".title");
let header = document.querySelector(".header");


navToggle.addEventListener("click", e => {
    navList.classList.toggle("hamburger");
    title.classList.toggle("hamburger-title");
})