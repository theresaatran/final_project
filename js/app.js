/* ==================== MENU ==================== */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show-menu');
});

navClose.addEventListener('click', function() {
    navMenu.classList.remove('show-menu');
});

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('show-menu');
    });
});


/* ==================== SWIPER ==================== */
const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    speed: 800,
    parallax: true,
    effect: 'fade',

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',

        formatFractionCurrent: (number) => { return '0' + number; },
        formatFractionTotal: (number) => { return '0' + number; } 
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
});

