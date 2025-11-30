singleSliderTouchable("#bootstrapCarousel")
// Slider 1
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





new Swiper('.swiper-container2 ', {
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
        480: { slidesPerView: 1.2, spaceBetween: 20 },
        100:  { slidesPerView: 1.2, spaceBetween: 11, }

        
        // موبایل
    }
});






// Slider 3 (Teachers)
new Swiper('.swiper-container3', {
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 35,
    initialSlide: 0,
    loopedSlides: 6,
    breakpoints: {
        1920: { slidesPerView: 3, loopedSlides: 3 },
        1280: { slidesPerView: 3, loopedSlides: 3 },
        768:  { slidesPerView: 2, loopedSlides: 2 },
        480:  { slidesPerView: 1, loopedSlides: 1 },
        100:  { slidesPerView: 1, loopedSlides: 0.7, }

    }
});
