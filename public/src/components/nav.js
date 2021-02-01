let navToggle = document.querySelector(".nav-toggle");
let navList = document.querySelector(".nav__list");
let header = document.querySelector(".header");

// mobile
let m_navToggle = document.querySelector(".m_nav-toggle");
let m_navList = document.querySelector(".m_nav__list");

navToggle.addEventListener("click", e => {
    navList.classList.toggle("hamburger");
})

// m_navToggle.addEventListener("click", e => {
//     m_navList.classList.toggle("m_hamburger");
// })