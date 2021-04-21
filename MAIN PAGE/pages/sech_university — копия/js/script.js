jQuery(document).ready(function() {

    // AlertHide

    $('.alert-button').click(function() {
        $('.alert-new').removeClass('active')
    });

    // Header menu modal

    $('.header__menubutton').click(function() {
        $('.header__menu_modal').toggleClass('unactive')
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

    // Job cards chenge orientation

    var mode = 'list'


    $('.jobminiblock').click(function() {

        if (mode == 'list') {
            $('.big-card').toggleClass('mini-card')
            $('.imgactive').toggleClass('unactive')
            $('.imgunactive').toggleClass('unactive')
            $('.withoutbr').toggleClass('unactive')
            $('.withbr').toggleClass('unactive')
            mode = 'tables'
        }

    });

    $('.jobbigblock').click(function() {

        if (mode == 'tables') {
            $('.big-card').toggleClass('mini-card')
            $('.imgactive').toggleClass('unactive')
            $('.imgunactive').toggleClass('unactive')
            $('.withoutbr').toggleClass('unactive')
            $('.withbr').toggleClass('unactive')
            mode = 'list'
        }

    });

});

const defaultSelect = () => {
    const element = document.querySelector('.fullperiod');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: "",
    });
};

defaultSelect();

const multiDefault = () => {
    const elements = document.querySelectorAll('.multiDefault');
    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            itemSelectText: "",
            classNames: {
                containerOuter: 'modify__choice',
                containerInner: 'modify__inner',
                input: 'choices__input',
                inputCloned: 'choices__input--cloned',
                list: 'choices__list',
                listItems: 'choices__list--multiple',
                listSingle: 'choices__list--single',
                listDropdown: 'choices__list--dropdown',
                item: 'choices__item',
                itemSelectable: 'modify__item--selectable',
                itemDisabled: 'choices__item--disabled',
                itemOption: 'choices__item--choice',
                group: 'choices__group',
                groupHeading: 'choices__heading',
                button: 'choices__button',
                activeState: 'is-active',
                focusState: 'is-focused',
                openState: 'is-open',
                disabledState: 'is-disabled',
                highlightedState: 'is-highlighted',
                selectedState: 'is-selected',
                flippedState: 'is-flipped',
                selectedState: 'is-highlighted',
            }
        });
    });
}

multiDefault();