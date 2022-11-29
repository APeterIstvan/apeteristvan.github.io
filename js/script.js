const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navListEl = document.querySelector(".main-nav-list");

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle("nav-open");
});

navListEl.addEventListener('click', function () {
    headerEl.classList.toggle("nav-open");
});