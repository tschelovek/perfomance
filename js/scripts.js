$(document).ready(() => {
    /**
     * SLICK
     */
    $('.staff__list').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"><svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="34" transform="matrix(-1 0 0 1 34 34)" fill="#1378BA"/><path d="M37.2797 40.7203L35.9678 39.4084L40.2905 35.0857L25.0857 35.0857L25.0857 33.2359L40.2905 33.2359L35.9678 28.9133L37.2797 27.6014L43.8392 34.1608L37.2797 40.7203Z" fill="white"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34" cy="34" r="34" fill="#1378BA"/><path d="M30.7203 40.7203L32.0322 39.4084L27.7095 35.0857L42.9143 35.0857L42.9143 33.2359L27.7095 33.2359L32.0322 28.9133L30.7203 27.6014L24.1608 34.1608L30.7203 40.7203Z" fill="white"/></svg></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.partners__list').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"><svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="34" transform="matrix(-1 0 0 1 34 34)" fill="#1378BA"/><path d="M37.2797 40.7203L35.9678 39.4084L40.2905 35.0857L25.0857 35.0857L25.0857 33.2359L40.2905 33.2359L35.9678 28.9133L37.2797 27.6014L43.8392 34.1608L37.2797 40.7203Z" fill="white"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34" cy="34" r="34" fill="#1378BA"/><path d="M30.7203 40.7203L32.0322 39.4084L27.7095 35.0857L42.9143 35.0857L42.9143 33.2359L27.7095 33.2359L32.0322 28.9133L30.7203 27.6014L24.1608 34.1608L30.7203 40.7203Z" fill="white"/></svg></button>',
        autoplay: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.target__list').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.case-slider__list').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 2,
        autoplay: false,
        nextArrow: '<button type="button" class="slick-next"><svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="34" transform="matrix(-1 0 0 1 34 34)" fill="#1378BA"/><path d="M37.2797 40.7203L35.9678 39.4084L40.2905 35.0857L25.0857 35.0857L25.0857 33.2359L40.2905 33.2359L35.9678 28.9133L37.2797 27.6014L43.8392 34.1608L37.2797 40.7203Z" fill="white"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34" cy="34" r="34" fill="#1378BA"/><path d="M30.7203 40.7203L32.0322 39.4084L27.7095 35.0857L42.9143 35.0857L42.9143 33.2359L27.7095 33.2359L32.0322 28.9133L30.7203 27.6014L24.1608 34.1608L30.7203 40.7203Z" fill="white"/></svg></button>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });

    /**
     * FANCYBOX
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
    });
});
