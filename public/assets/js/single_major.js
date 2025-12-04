
// Slider 1
new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.sbn1',
        prevEl: '.sbp1',
    },

    breakpoints: {
        480: {       // موبایل بزرگ
            slidesPerView: 1,
            spaceBetween: 16,
        },
        768: {       // تبلت
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1280: {      // لپ‌تاپ
            slidesPerView: 3,
            spaceBetween: 35,
        },
        1920: {      // دسکتاپ بزرگ
            slidesPerView: 4,
            spaceBetween: 40,
        }
    }
});





// Slider 3 (Teachers)
new Swiper('.swiper-container3', {
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 32,
    initialSlide: 0,
    loopedSlides: 6,
    breakpoints: {
        1920: { slidesPerView: 3, loopedSlides: 3 },
        1280: { slidesPerView: 2.5, loopedSlides: 2.5 },
        768:  { slidesPerView: 2, loopedSlides: 2 },
        480:  { slidesPerView: 1.2, loopedSlides: 1.2 },
        100:  { slidesPerView: 1, loopedSlides: 1, }

    }
});








 // Tabs Logic
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(tab => tab.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      t.classList.add('active');
      document.getElementById(t.dataset.target).classList.add('active');
    });
  });

  // Swiper Setup
  const swipers = document.querySelectorAll('.mySwiper');
  swipers.forEach(sw => {
    new Swiper(sw, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: { el: '.swiper-pagination', clickable: true },

    });
  });