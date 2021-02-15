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

});