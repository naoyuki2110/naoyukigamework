const swiper = new Swiper('.top-latestinfo .swiper', {
    // Optional parameters
    loop: true,
    speed: 600,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-1',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });