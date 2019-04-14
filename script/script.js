$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(400).fadeOut('slow');
});


var swiper = new Swiper( '.swiper-container.two', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 3000,
    },
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows : false,
    }
} );

//Анімація чисел
$(document).ready(function() { // загрузка сторінки
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1350) {//при скролі до 1350
            $(function() {
                var numb_start_1 = $(".funfact_main__1").text();// берем початкове число число
                var numb_start_2 = $(".funfact_main__2").text();
                var numb_start_3 = $(".funfact_main__3").text();
                var numb_start_4 = $(".funfact_main__4").text();
                $({numberValue: numb_start_1}).animate({numberValue: 7890}, {
                    duration: 800, // Скорість аніації
                    easing: "linear",
                    step: function(val) {
                        $(".funfact_main__1").html(Math.ceil(val)); // Блок, де треба зміни ти
                    }
                });
                $({numberValue: numb_start_2}).animate({numberValue: 1000000}, {
                    duration: 800, // Скорість аніації
                    easing: "linear",
                    step: function(val) {
                        $(".funfact_main__2").html(Math.ceil(val));
                    }
                });
                $({numberValue: numb_start_3}).animate({numberValue: 1509}, {
                    duration: 800, // Скорість аніації
                    easing: "linear",
                    step: function(val) {
                        $(".funfact_main__3").html(Math.ceil(val));
                    }
                });
                $({numberValue: numb_start_4}).animate({numberValue: 5972}, {
                    duration: 800, // Скорість аніації
                    easing: "linear",
                    step: function(val) {
                        $(".funfact_main__4").html(Math.ceil(val));
                    }
                });
            });
        }
    });
});

//Поява блоку
var offset = 500;
$(window).scroll(function(){
    var scrolltop = $(this).scrollTop();
    $('.main_mackbook.hide').each(function(){
        if(scrolltop >= $(this).offset().top - offset) {
            $(this).removeClass('hide');
        }
    });
});
