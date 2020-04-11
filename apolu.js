$('a.dropdown-toggle').click(function () {

    if ($('li.dropdown').hasClass('show')) {

        $('a.link-normal').css('color', '#fff');

    }

    else {

        $('a.link-normal').css('color', '#b3b3b3');

    }

});

$('button.navbar-toggler').click(function () {

    if ($('button.navbar-toggler .icone-menu').hasClass('fechar')) {

        $('button.navbar-toggler .icone-menu').removeClass('fechar');

    }

    else {

        $('button.navbar-toggler .icone-menu').addClass('fechar');

    }

});

/* Carousel */

$(document).ready(function () {

    var carousel = $('.owl-carousel');

    carousel.owlCarousel({
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    $(".proximo").click(function () {
        carousel.trigger('next.owl.carousel');
    });

    $(".anterior").click(function () {
        carousel.trigger('prev.owl.carousel');
    });



});

/* Limpar  */

$('.limpar').click(function () {
    const filtroGenero = $('#checkbox-todos');
    filtroGenero.prop('checked', true);
});

/* BPM options */

$('.price-option').click(function ({ target }) {
    const checked = target.getAttribute('data-checked');
    const options = $('.price-options');
    if (checked == 'true') {
        target.setAttribute('data-checked', 'false')
    } else if (checked == 'false') {
        target.setAttribute('data-checked', 'true')
    }
    localStorage.setItem('price', target.innerHTML.trim());
})