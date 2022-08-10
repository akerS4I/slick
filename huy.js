$(document).ready(function () {
    $('.slider-center').slick({
        centerMode: true,
        centerPadding: '8%',
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        lazyLoad: 'progressive',
        infinite: false,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3,
              adaptiveHeight: true,
              autoplay: true,
              autoplaySpeed: 2000,
              dots: true,
              lazyLoad: 'progressive',
              infinite: false,
              initialSlide: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
              adaptiveHeight: true,
              autoplay: true,
              autoplaySpeed: 2000,
              dots: true,
              lazyLoad: 'progressive',
              infinite: false,
              initialSlide: 1,
            }
          }
        ]
      });
});