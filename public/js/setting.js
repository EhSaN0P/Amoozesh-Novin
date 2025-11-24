function singleSliderTouchable(element) {
    const carousel = document.querySelector(element);
    let isDown = false, startX, scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
    });

    carousel.addEventListener('mouseup', () => isDown = false);
    carousel.addEventListener('mouseleave', () => isDown = false);

    carousel.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        const walk = e.pageX - startX;
        if(walk > 50) { bootstrap.Carousel.getInstance(carousel).prev(); startX = e.pageX; }
        if(walk < -50) { bootstrap.Carousel.getInstance(carousel).next(); startX = e.pageX; }
    });
}