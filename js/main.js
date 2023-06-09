var owl = $('.service-carousel');
owl.owlCarousel({
    items:2,
    loop:true,
    margin:20,
    responsiveClass:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false,
            dots:false
        },
        1000:{
            items:2,
            dots:false,
            nav:false,
            loop:true
        }
    }
});
var owl1 = $('.pricing-content');
owl1.owlCarousel({
    items:2,
    loop:true,
    margin:20,
    responsiveClass:true,
    dots:false,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
});
var owl2 = $('.owl-carousel');
owl2.owlCarousel({
    items:1,
    loop:true,
    margin:20,
    responsiveClass:true,
    dots:false,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});