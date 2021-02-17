jQuery(document).ready(function() {

    // AlertHide

    $('.alert-button').click(function() {
        $('.alert-new').removeClass('active')
    });

    // Slider

    $('.slides').slick({
        vertical: true,
        verticalSwiping: true,
        dots: true,

        appendArrows: $('.arrows'),
        prevArrow: '<div class="arrows__up"></div>',
        nextArrow: '<div class="arrows__down"></div>',

        appendDots: $('.dots'),

    });


    // Counter

    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

            {

                duration: 8000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });

    });

    //WhoTabs

    $('.whotabs-triggers__item').click(function(e) {
        e.preventDefault();

        $('.whotabs-triggers__item').removeClass('whotabs-triggers__item--active');
        $('.whotabs-content__item').removeClass('whotabs-content__item--active');

        $(this).addClass('whotabs-triggers__item--active');
        $($(this).attr('href')).addClass('whotabs-content__item--active');
    });

    $('.whotabs-triggers__item:first').click();

    //NewsTabs

    $('.tabs-triggers__item').click(function(e) {
        e.preventDefault();

        $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
        $('.tabs-content__item').removeClass('tabs-content__item--active');

        $(this).addClass('tabs-triggers__item--active');
        $($(this).attr('href')).addClass('tabs-content__item--active');
    });

    $('.tabs-triggers__item:first').click();

});