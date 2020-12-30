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