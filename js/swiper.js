"use strict";

let slider_2 = new Swiper(".slider__2", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 5000,

  spaceBetween: 48,

  breakpoints: {
    280: { slidesPerView: 1, slidesPerGroup: 1 },
    728: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 30 },
    1101: { slidesPerView: 3 },
  },
});
