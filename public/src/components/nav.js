let navToggle = document.querySelector(".nav-toggle");
let navList = document.querySelector(".nav__list");
let header = document.querySelector(".header");


navToggle.addEventListener("click", e => {
    navList.classList.toggle("hamburger");
})