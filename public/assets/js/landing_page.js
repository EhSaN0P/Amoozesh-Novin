new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 40,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    slidesPerView: 1, // موبایل

    breakpoints: {
        768: {            // تبلت
            spaceBetween: 20,
        },
        1280: {           // لپ‌تاپ
            spaceBetween: 30,
        },
        1920: {           // دسکتاپ بزرگ
            spaceBetween: 40,
        }
    }
});




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




new Swiper('.swiper-container2', {
    loop: true,
    slidesPerView: 1,  // موبایل
    spaceBetween: 15,

    navigation: {
        nextEl: '.sbn2',
        prevEl: '.sbp2',
    },

    breakpoints: {
        480: { slidesPerView: 1.15, spaceBetween: 18 }, // موبایل بزرگ
        768: { slidesPerView: 2, spaceBetween: 25 },    // تبلت
        1280: { slidesPerView: 3, spaceBetween: 35 },   // لپ‌تاپ
        1920: { slidesPerView: 4, spaceBetween: 40 },   // دسکتاپ بزرگ
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
