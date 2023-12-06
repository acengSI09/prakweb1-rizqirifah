$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        navText: [
            "<li class='fas fa-angle-left'><i>",
            "<li class='fas fa-angle-right'><i>"
        ],
        navContainer: "#slider-hero-nav",
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        itemElement:true,
    });







});