$('a.dropdown-toggle').click(function() {

    if($('li.dropdown').hasClass('show')){

        $('a.link-normal').css('color','#fff');

    }

    else {

        $('a.link-normal').css('color','#b3b3b3');

    }

});

/* Carousel */

$(document).ready(function(){

    var carousel = $('.owl-carousel'); 

    carousel.owlCarousel({
        margin:10, 
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    $(".proximo").click(function() {
        carousel.trigger('next.owl.carousel');
    });
    
    $(".anterior").click(function() {
        carousel.trigger('prev.owl.carousel');
    });
    
});