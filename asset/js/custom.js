$(document).ready(function() {
    var carpage = $(window);
    var page = $('html, body');


    // package slider active 
    $('.package_slider_active').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        items: 3,
        autoplay: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                
            },
            600:{
               
            },
            1000:{
                
            }
        }
    })

    // testmonial slider area 
    $('.testmonial_slider_active').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive:{
            0:{
                
            },
            600:{
               
            },
            1000:{
                
            }
        }
    })


    


















    
});