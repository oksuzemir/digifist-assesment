window.addEventListener("load", function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 2.25,
    spaceBetween: 32,
    slideActiveClass: "active",
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination: {
      el: ".pagination",
      clickable: true,
    },
    breakpoints: {
      1450: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1080: {
        slidesPerView: 2.25,
        spaceBetween: 40,
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 10,
      },

      200: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
    },
  });
});
