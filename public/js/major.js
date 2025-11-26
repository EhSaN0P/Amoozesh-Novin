const isMobile = window.innerWidth < 768;

  // Desktop Tab System
  if (!isMobile) {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active') );

        tab.classList.add('active');
        document.getElementById(tab.dataset.target).classList.add('active');
      });
    });
  }

  // Swiper Initialization
  new Swiper('.desktop-swiper', {
    slidesPerView: 1,
    pagination: { el: '.swiper-pagination', clickable: true }
  });

  if (isMobile) {
    document.querySelector('.desktop-tabs').style.display = 'none';
    document.querySelectorAll('.tab-content').forEach(e => e.style.display = 'none');
    document.querySelector('.mobile-slider').style.display = 'block';

    new Swiper('.mobile-swiper', {
      slidesPerView: 1,
      pagination: { el: '.swiper-pagination', clickable: true }
    });
  }
