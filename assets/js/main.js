$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        navContainer: "#slider-hero-nav",
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        itemElement:true,
    });

    $('#tenaga-pendidik-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        // dots: false,
       
        navText: [
            '<i class="fa fa-angle-left"><i>',
            '<i class="fa fa-angle-right"><i>'
        ],
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        itemElement:true,
    });







});