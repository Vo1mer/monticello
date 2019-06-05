$(document).ready(function () {

    $('.arrow-down').on('click','a', function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

    $('.menu-item').on('click','a', function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

    $('div.slider').slick({
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,


    });

    $('div.slider_news').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: "<a type='button' class='prevButton pull-left'></a>",
        nextArrow: "<a type='button' class='nextButton pull-right'></a>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(".slideA").hide();
    $('button.button-proj1').click(function () {
        $('.slideA').slideToggle("slow");
    });
    $(".slideB").hide();
    $('button.button-proj2').click(function () {
        $('.slideB').slideToggle("slow");
    });




});


var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}
