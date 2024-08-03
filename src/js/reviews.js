import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});
