var swiper = new Swiper(".hot-topic-swiper", {
    cssMode: true,
    navigation: {
      nextEl: ".hot-topic-next",
      prevEl: ".hot-topic-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
  
// swiper for gallery
var swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
   
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView:2,
      spaceBetween:20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 1068px
    1068: {
      slidesPerView: 3,
      spaceBetween:20,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  
    slidesPerGroup: 2,
    loop: true,
  loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".gallery-next",
      prevEl: ".gallery-prev",
  },
 
});

