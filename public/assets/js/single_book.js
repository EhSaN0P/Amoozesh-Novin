$(function(){
    $(".lesson-row").on("click", function(){
        $(this).find(".lock").slideToggle();
    });
});






// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const priceBox = document.querySelector(".course-price-box");
    const footer = document.querySelector("footer");

    function updatePriceBoxPosition() {
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        const windowBottom = window.scrollY + window.innerHeight;

        if (windowBottom >= footerTop) {
            // رسید به فوتر
            priceBox.classList.add("sticky-footer");
            priceBox.style.top = (footerTop - priceBox.offsetHeight - 20) + "px"; // 20px فاصله
        } else {
            // هنوز به فوتر نرسیده
            priceBox.classList.remove("sticky-footer");
            priceBox.style.top = "";
        }
    }

    window.addEventListener("scroll", updatePriceBoxPosition);
    window.addEventListener("resize", updatePriceBoxPosition);
});
