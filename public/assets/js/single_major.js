new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 4,  // تعداد اسلایدهای نمایش داده شده روی دسکتاپ
    spaceBetween: 30,  // فاصله بین اسلایدها
    navigation: {
        nextEl: '.sbn1',
        prevEl: '.sbp1',
    },
    breakpoints: {
        1920: { slidesPerView: 4, spaceBetween: 40 }, // دسکتاپ بزرگ
        1280: { slidesPerView: 3, spaceBetween: 35 }, // لپ‌تاپ
        768: { slidesPerView: 2, spaceBetween: 25 },  // تبلت
        480: { slidesPerView: 1.2, spaceBetween: 20 }, // موبایل
        100:  { slidesPerView: 1, spaceBetween: 10, centeredSlides: false }

        
    }

});

  
new Swiper('.swiper-container3', {
    loop: true,
    initialSlide: 2,
    spaceBetween: 35,
    centeredSlides: true,   // دسکتاپ

    breakpoints: {
        1920: { slidesPerView: 3 },
        1280: { slidesPerView: 3 },
        768:  { slidesPerView: 2 },

        480:  { 
            slidesPerView: 1,
            centeredSlides: true,   // موبایل هم باید روشن باشه
            initialSlide: 0         // موبایل همیشه باید ۰ باشه
        },

        100:  { 
            slidesPerView: 0.7,
            centeredSlides: true,
            initialSlide: 0
        }
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