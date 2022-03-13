$(document).ready(function(){
    $('.top-slider__list').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        cssEase: 'linear',
        adaptiveHeight: true
    });
    $('.shop-slider__list').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        prevArrow: '<button class="slider__prev-arrow"></button>',
        nextArrow: '<button class="slider__next-arrow"></button>',
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1160,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
    });
     $('.slider__content').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slider__prev-arrow slider__prev-arrow--below"></button>',
        nextArrow: '<button class="slider__next-arrow slider__next-arrow--below"></button>',
        cssEase: 'linear',
        dots: true,
        responsive: [
            {
                breakpoint: 1160,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.shop-single__menu-item').on('click', function(){
        const parent = $(this).parent();
        const index = parent.children().index($(this));
        parent.parent().find('.shop-single__tab-item').removeClass('shop-single__tab-item--active');
        parent.parent().find(`.shop-single__tab-item:nth-child(${index+1})`).addClass('shop-single__tab-item--active');
    });
});