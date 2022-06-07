const menuOpen = document.querySelector(".header-tool__menu");
const menuClose = document.querySelector(".header-menu__close");
const menu = document.querySelector(".header-menu");

menuOpen.addEventListener("click", () => {
    menu.classList.add("active");
});

menuClose.addEventListener("click", () => {
    menu.classList.remove("active");
});

document.addEventListener("click", e => {
    if (!menu.contains(e.target) && !e.target.matches(".header-tool__menu")) {
        menu.classList.remove("active");
    };

    console.log(e);
    console.log(e.target);
    console.log(!menu.contains(e.target));
});

// Review slider

let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll(".review-slide");

hideAllSlide = () => {
    slides.forEach(slide => {
       slide.classList.remove("active");
    });
};

showSlide = () => {
    hideAllSlide();
    slides[slide_index].classList.add("active");
};

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1;

prevSlide = () => slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1;


// pause slide when hover slider
let slider = document.querySelector(".review-slider");

slider.addEventListener('mouseover', () => slide_play = false);
slider.addEventListener('mouseleave', () => slide_play = true);

setInterval(() => {
    if (!slide_play) return;
    showSlide();
    nextSlide();
}, 2000);