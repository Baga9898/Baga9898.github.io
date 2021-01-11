$(function() {
    $('.menu-open').click(function() {
        $('.menu__buttons').toggleClass('show-menu')
    })
});

$(function() {
    $('.menu-open').click(function() {
        $('.cross__close').addClass('cross__active')
    })
});

$(function() {
    $('.cross__close').click(function() {
        $('.menu__buttons').toggleClass('show-menu')
    })
});

$(function() {
    $('.reverse').click(function() {
        $('.modal-registration').removeClass('active')
        $('.modal-registration').removeClass('regmodal-show')
        $('.modal-login').addClass('modal-show')
        $('.modal-login').removeClass('modal-error')
    })
});

$(function() {
    $('.login__link').click(function() {
        $('.modal-registration').removeClass('regmodal-show')
    })
});

$(function() {
    $('.reglink').click(function() {
        $('.modal-login').removeClass('modal-error')
    })
});