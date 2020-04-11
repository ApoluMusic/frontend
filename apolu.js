var todasOpcoes = $('.price-option');

var opcoes = Array.prototype.slice.call(todasOpcoes);

var preco = sessionStorage.getItem('preco');

var genero = sessionStorage.getItem('genero');

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

    var generosLista = $('input[name=genero]');

    var generos = Array.prototype.slice.call(generosLista);


    generos.map(genre => {
        if (genre.getAttribute('value') == genero) {
            genre.setAttribute('checked', true)
        }
    })


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


    opcoes.map(opcao => {
        if (opcao.innerHTML.trim() === preco) {
            opcao.setAttribute('data-checked', 'true');
        }
    });

});

$('input[name="genero"]').click(function (e) {
    sessionStorage.setItem('genero', e.target.getAttribute('value').trim())
})

/* Limpar  */


$('.limpar').click(function () {
    var filtroGenero = $('#checkbox-todos')
    filtroGenero.prop('checked', true);

    sessionStorage.removeItem('genero')

    opcoes.map(opcao => {
        opcao.setAttribute('data-checked', 'false');
        sessionStorage.removeItem('preco');
    })
});

/* BPM options */

$('.price-option').click(function ({ target }) {
    var checked = target.getAttribute('data-checked');
    if (checked == 'true') {
        target.setAttribute('data-checked', 'false')
    } else if (checked == 'false') {
        target.setAttribute('data-checked', 'true')
    }
    sessionStorage.setItem('preco', target.innerHTML.trim());
    window.location.reload(true);
})