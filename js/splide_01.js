"use strict";

let splide = new Splide(".splide", {
  perPage: 5,
  navigation: false,
  pagination: false,
  arrows: false,
  type: "loop",
  autoScroll: {
    speed: 1,
  },
  breakpoints: {
    420: {
      gap: "-4em",
      perPage: 1,
      autoScroll: {
        speed: 0.7,
      },
    },
    540: {
      gap: "-10em",
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    992: {
      perPage: 3,
    },
    1152: {
      perPage: 4,
    },
    1280: {
      perPage: 5,
    },
  },
});

splide.mount(window.splide.Extensions);
