const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

openMenuBtn.addEventListener("click", () => {
    sideMenu.classList.add("open");
    overlay.classList.add("show");
});

closeMenuBtn.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
});

//carousel1
const carousel = document.querySelector('.carousel-wrapper');
const leftBtn = document.getElementById('carousel-left');
const rightBtn = document.getElementById('carousel-right');

rightBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: 384,
        behavior: 'smooth'
    });
});

leftBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: -384,
        behavior: 'smooth'
    });
});

//carousel2
const carousel2 = document.querySelector('.carousel-wrapper_2');
const leftBtn2 = document.getElementById('carousel-left_2');
const rightBtn2 = document.getElementById('carousel-right_2');

rightBtn2.addEventListener('click', () => {
    carousel2.scrollBy({
        left: 384,
        behavior: 'smooth'
    });
});

leftBtn2.addEventListener('click', () => {
    carousel2.scrollBy({
        left: -384,
        behavior: 'smooth'
    });
});

//carousel3
const carousel3 = document.querySelector('.carousel-wrapper_3');
const leftBtn3 = document.getElementById('carousel-left_3');
const rightBtn3 = document.getElementById('carousel-right_3');

rightBtn3.addEventListener('click', () => {
    carousel3.scrollBy({
        left: 384,
        behavior: 'smooth'
    });
});

leftBtn3.addEventListener('click', () => {
    carousel3.scrollBy({
        left: -384,
        behavior: 'smooth'
    });
});