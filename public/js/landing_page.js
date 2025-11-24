singleSliderTouchable("#bootstrapCarousel")


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
        480: { slidesPerView: 1.2, spaceBetween: 20 } // موبایل
    }
});


new Swiper('.swiper-container2', {
    loop: true,
    slidesPerView: 4,  // تعداد اسلایدهای نمایش داده شده روی دسکتاپ
    spaceBetween: 30,  // فاصله بین اسلایدها
    navigation: {
        nextEl: '.sbn2',
        prevEl: '.sbp2',
    },
    breakpoints: {
        1920: { slidesPerView: 4, spaceBetween: 40 }, // دسکتاپ بزرگ
        1280: { slidesPerView: 3, spaceBetween: 35 }, // لپ‌تاپ
        768: { slidesPerView: 2, spaceBetween: 25 },  // تبلت
        480: { slidesPerView: 1.2, spaceBetween: 20 } // موبایل
    }
});


new Swiper('.swiper-container3', {
    loop: true,
    slidesPerView: 4,  // تعداد اسلایدهای نمایش داده شده روی دسکتاپ
    spaceBetween: 30,  // فاصله بین اسلایدها
    navigation: {
        nextEl: '.sbn3',
        prevEl: '.sbp3',
    },
    breakpoints: {
        1920: { slidesPerView: 4, spaceBetween: 40 }, // دسکتاپ بزرگ
        1280: { slidesPerView: 3, spaceBetween: 35 }, // لپ‌تاپ
        768: { slidesPerView: 2, spaceBetween: 25 },  // تبلت
        480: { slidesPerView: 1.2, spaceBetween: 20 } // موبایل
    }
});

