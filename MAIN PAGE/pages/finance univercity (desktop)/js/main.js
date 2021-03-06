$(document).ready(function() {
    $('.slider-slides').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        centerPadding: '60px',
        // autoplay: true,
        pauseOnFocus: true,
        appendArrows: $('.forarrows'),
        prevArrow: '<button type="button" class="left-arrow"><div class="la-arrow"></div></button>',
        nextArrow: '<button type="button" class="right-arrow"><div class="ra-arrow"></div></button>',
    });

    $(".big-news__items").slick({
        infinite: true,
        slidesToScroll: 1,
        // autoplay: true,
        dots: true,
        fade: true,
        speed: 500,
        pauseOnFocus: true,
        appendArrows: $('.news__arrows'),
        prevArrow: '<button type="button" class="left-arrow2"><div class="la-arrow"></div></button>',
        nextArrow: '<button type="button" class="right-arrow2"><div class="ra-arrow"></div></button>',
        appendDots: $('.news__dots'),
    });

    $(".calendar__slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        variableWidth: true,
        appendArrows: $('.calendar__arrows'),
        prevArrow: '<button type="button" class="left-arrow3"><div class="la-arrow"></div></button>',
        nextArrow: '<button type="button" class="right-arrow3"><div class="ra-arrow"></div></button>',

        responsive: [{
                breakpoint: 1530,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1465,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1205,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,

                }
            }
        ]
    });

    // ModalOpen

    $(function() {
        $('.menu-btn').click(function() {
            $('.menu__modal').toggleClass('menu__modal-active')
            $('body').toggleClass('body-active')
            $('.menu-icon').toggleClass('menuicon-unactive')
            $('.menuicon-cross').toggleClass('menuicon-cross-active')
            $('.menu-par').toggleClass('menu-par-active')
            $('.menu-btn').toggleClass('menu-btn-modal-active')
        });
    });

    // ModalActive

    $(function() {
        $('.menu-btn').hover(function() {
            $('.menuicon-cross-active').toggleClass('menuicon-cross-active-hvr')
        });
    });

    // ModalLinks

    $(function() {
        $('.modal-a__1').hover(function() {
            $('.in-1').addClass('modal-menu-in-active')
            $('.in-2').addClass('modal-menu-in-active')

            $('.modal__arrow_1').addClass('modal__arrow-active')

            $('.modal-a').addClass('modal-a-opacity')
            $('.modal-a__1').toggleClass('modal-a-opacity')

            $('.in-3').removeClass('modal-menu-in-active')
            $('.in-4').removeClass('modal-menu-in-active')
            $('.in-5').removeClass('modal-menu-in-active')
            $('.in-6').removeClass('modal-menu-in-active')
            $('.in-7').removeClass('modal-menu-in-active')
            $('.in-8').removeClass('modal-menu-in-active')
            $('.in-9').removeClass('modal-menu-in-active')
            $('.in-10').removeClass('modal-menu-in-active')
            $('.in-11').removeClass('modal-menu-in-active')
            $('.in-12').removeClass('modal-menu-in-active')
            $('.in-13').removeClass('modal-menu-in-active')
            $('.in-14').removeClass('modal-menu-in-active')
            $('.in-15').removeClass('modal-menu-in-active')
            $('.in-16').removeClass('modal-menu-in-active')
            $('.in-17').removeClass('modal-menu-in-active')
            $('.in-18').removeClass('modal-menu-in-active')
            $('.in-19').removeClass('modal-menu-in-active')
            $('.in-20').removeClass('modal-menu-in-active')
            $('.in-21').removeClass('modal-menu-in-active')
            $('.in-22').removeClass('modal-menu-in-active')

            $('.modal__arrow_2').removeClass('modal__arrow-active')
            $('.modal__arrow_3').removeClass('modal__arrow-active')
            $('.modal__arrow_4').removeClass('modal__arrow-active')
            $('.modal__arrow_5').removeClass('modal__arrow-active')
            $('.modal__arrow_6').removeClass('modal__arrow-active')
            $('.modal__arrow_7').removeClass('modal__arrow-active')
            $('.modal__arrow_8').removeClass('modal__arrow-active')
            $('.modal__arrow_9').removeClass('modal__arrow-active')
            $('.modal__arrow_10').removeClass('modal__arrow-active')
            $('.modal__arrow_11').removeClass('modal__arrow-active')
        });
    });

    $(function() {
        $('.modal-a__2').hover(function() {
            $('.in-3').addClass('modal-menu-in-active')
            $('.in-4').addClass('modal-menu-in-active')

            $('.modal__arrow_2').addClass('modal__arrow-active')

            $('.modal-a').addClass('modal-a-opacity')
            $('.modal-a__2').toggleClass('modal-a-opacity')

            $('.in-1').removeClass('modal-menu-in-active')
            $('.in-2').removeClass('modal-menu-in-active')
            $('.in-5').removeClass('modal-menu-in-active')
            $('.in-6').removeClass('modal-menu-in-active')
            $('.in-7').removeClass('modal-menu-in-active')
            $('.in-8').removeClass('modal-menu-in-active')
            $('.in-9').removeClass('modal-menu-in-active')
            $('.in-10').removeClass('modal-menu-in-active')
            $('.in-11').removeClass('modal-menu-in-active')
            $('.in-12').removeClass('modal-menu-in-active')
            $('.in-13').removeClass('modal-menu-in-active')
            $('.in-14').removeClass('modal-menu-in-active')
            $('.in-15').removeClass('modal-menu-in-active')
            $('.in-16').removeClass('modal-menu-in-active')
            $('.in-17').removeClass('modal-menu-in-active')
            $('.in-18').removeClass('modal-menu-in-active')
            $('.in-19').removeClass('modal-menu-in-active')
            $('.in-20').removeClass('modal-menu-in-active')
            $('.in-21').removeClass('modal-menu-in-active')
            $('.in-22').removeClass('modal-menu-in-active')

            $('.modal__arrow_1').removeClass('modal__arrow-active')
            $('.modal__arrow_3').removeClass('modal__arrow-active')
            $('.modal__arrow_4').removeClass('modal__arrow-active')
            $('.modal__arrow_5').removeClass('modal__arrow-active')
            $('.modal__arrow_6').removeClass('modal__arrow-active')
            $('.modal__arrow_7').removeClass('modal__arrow-active')
            $('.modal__arrow_8').removeClass('modal__arrow-active')
            $('.modal__arrow_9').removeClass('modal__arrow-active')
            $('.modal__arrow_10').removeClass('modal__arrow-active')
            $('.modal__arrow_11').removeClass('modal__arrow-active')
        });
    });

    $(function() {
        $('.modal-a__3').hover(function() {
            $('.in-5').addClass('modal-menu-in-active')
            $('.in-6').addClass('modal-menu-in-active')

            $('.modal__arrow_3').addClass('modal__arrow-active')

            $('.modal-a').addClass('modal-a-opacity')
            $('.modal-a__3').toggleClass('modal-a-opacity')

            $('.in-1').removeClass('modal-menu-in-active')
            $('.in-2').removeClass('modal-menu-in-active')
            $('.in-3').removeClass('modal-menu-in-active')
            $('.in-4').removeClass('modal-menu-in-active')
            $('.in-7').removeClass('modal-menu-in-active')
            $('.in-8').removeClass('modal-menu-in-active')
            $('.in-9').removeClass('modal-menu-in-active')
            $('.in-10').removeClass('modal-menu-in-active')
            $('.in-11').removeClass('modal-menu-in-active')
            $('.in-12').removeClass('modal-menu-in-active')
            $('.in-13').removeClass('modal-menu-in-active')
            $('.in-14').removeClass('modal-menu-in-active')
            $('.in-15').removeClass('modal-menu-in-active')
            $('.in-16').removeClass('modal-menu-in-active')
            $('.in-17').removeClass('modal-menu-in-active')
            $('.in-18').removeClass('modal-menu-in-active')
            $('.in-19').removeClass('modal-menu-in-active')
            $('.in-20').removeClass('modal-menu-in-active')
            $('.in-21').removeClass('modal-menu-in-active')
            $('.in-22').removeClass('modal-menu-in-active')

            $('.modal__arrow_1').removeClass('modal__arrow-active')
            $('.modal__arrow_2').removeClass('modal__arrow-active')
            $('.modal__arrow_4').removeClass('modal__arrow-active')
            $('.modal__arrow_5').removeClass('modal__arrow-active')
            $('.modal__arrow_6').removeClass('modal__arrow-active')
            $('.modal__arrow_7').removeClass('modal__arrow-active')
            $('.modal__arrow_8').removeClass('modal__arrow-active')
            $('.modal__arrow_9').removeClass('modal__arrow-active')
            $('.modal__arrow_10').removeClass('modal__arrow-active')
            $('.modal__arrow_11').removeClass('modal__arrow-active')
        });
    });

    $(function() {
        $('.modal-a__4').hover(function() {
            $('.in-7').addClass('modal-menu-in-active')
            $('.in-8').addClass('modal-menu-in-active')

            $('.modal__arrow_4').addClass('modal__arrow-active')

            $('.modal-a').addClass('modal-a-opacity')
            $('.modal-a__4').toggleClass('modal-a-opacity')

            $('.in-1').removeClass('modal-menu-in-active')
            $('.in-2').removeClass('modal-menu-in-active')
            $('.in-3').removeClass('modal-menu-in-active')
            $('.in-4').removeClass('modal-menu-in-active')
            $('.in-5').removeClass('modal-menu-in-active')
            $('.in-6').removeClass('modal-menu-in-active')
            $('.in-9').removeClass('modal-menu-in-active')
            $('.in-10').removeClass('modal-menu-in-active')
            $('.in-11').removeClass('modal-menu-in-active')
            $('.in-12').removeClass('modal-menu-in-active')
            $('.in-13').removeClass('modal-menu-in-active')
            $('.in-14').removeClass('modal-menu-in-active')
            $('.in-15').removeClass('modal-menu-in-active')
            $('.in-16').removeClass('modal-menu-in-active')
            $('.in-17').removeClass('modal-menu-in-active')
            $('.in-18').removeClass('modal-menu-in-active')
            $('.in-19').removeClass('modal-menu-in-active')
            $('.in-20').removeClass('modal-menu-in-active')
            $('.in-21').removeClass('modal-menu-in-active')
            $('.in-22').removeClass('modal-menu-in-active')

            $('.modal__arrow_1').removeClass('modal__arrow-active')
            $('.modal__arrow_2').removeClass('modal__arrow-active')
            $('.modal__arrow_3').removeClass('modal__arrow-active')
            $('.modal__arrow_5').removeClass('modal__arrow-active')
            $('.modal__arrow_6').removeClass('modal__arrow-active')
            $('.modal__arrow_7').removeClass('modal__arrow-active')
            $('.modal__arrow_8').removeClass('modal__arrow-active')
            $('.modal__arrow_9').removeClass('modal__arrow-active')
            $('.modal__arrow_10').removeClass('modal__arrow-active')
            $('.modal__arrow_11').removeClass('modal__arrow-active')
        });
    });

    $(function() {
        $('.modal-a__5').hover(function() {
            $('.in-9').addClass('modal-menu-in-active')
            $('.in-10').addClass('modal-menu-in-active')

            $('.modal__arrow_5').addClass('modal__arrow-active')

            $('.modal-a').addClass('modal-a-opacity')
            $('.modal-a__5').toggleClass('modal-a-opacity')

            $('.in-1').removeClass('modal-menu-in-active')
            $('.in-2').removeClass('modal-menu-in-active')
            $('.in-3').removeClass('modal-menu-in-active')
            $('.in-4').removeClass('modal-menu-in-active')
            $('.in-5').removeClass('modal-menu-in-active')
            $('.in-6').removeClass('modal-menu-in-active')
            $('.in-7').removeClass('modal-menu-in-active')
            $('.in-8').removeClass('modal-menu-in-active')
            $('.in-11').removeClass('modal-menu-in-active')
            $('.in-12').removeClass('modal-menu-in-active')
            $('.in-13').removeClass('modal-menu-in-active')
            $('.in-14').removeClass('modal-menu-in-active')
            $('.in-15').removeClass('modal-menu-in-active')
            $('.in-16').removeClass('modal-menu-in-active')
            $('.in-17').removeClass('modal-menu-in-active')
            $('.in-18').removeClass('modal-menu-in-active')
            $('.in-19').removeClass('modal-menu-in-active')
            $('.in-20').removeClass('modal-menu-in-active')
            $('.in-21').removeClass('modal-menu-in-active')
            $('.in-22').removeClass('modal-menu-in-active')

            $('.modal__arrow_1').removeClass('modal__arrow-active')
            $('.modal__arrow_2').removeClass('modal__arrow-active')
            $('.modal__arrow_3').removeClass('modal__arrow-active')
            $('.modal__arrow_4').removeClass('modal__arrow-active')
            $('.modal__arrow_6').removeClass('modal__arrow-active')
            $('.modal__arrow_7').removeClass('modal__arrow-active')
            $('.modal__arrow_8').removeClass('modal__arrow-active')
            $('.modal__arrow_9').removeClass('modal__arrow-active')
            $('.modal__arrow_10').removeClass('modal__arrow-active')
            $('.modal__arrow_11').removeClass('modal__arrow-active')
        });
    });

    $(function() {
        $('.modal-a__6').hover(function() {
            $('.in-11').addClass('modal-menu-in-active')
            $('.in-12').addClass('modal-menu-in-active')

            $('.modal__arrow_6').addClass('modal__arrow-active')

            $('.modal-a').addClass('modal-a-opacity')
            $('.modal-a__6').toggleClass('modal-a-opacity')

            $('.in-1').removeClass('modal-menu-in-active')
            $('.in-2').removeClass('modal-menu-in-active')
            $('.in-3').removeClass('modal-menu-in-active')
            $('.in-4').removeClass('modal-menu-in-active')
            $('.in-5').removeClass('modal-menu-in-active')
            $('.in-6').removeClass('modal-menu-in-active')
            $('.in-7').removeClass('modal-menu-in-active')
            $('.in-8').removeClass('modal-menu-in-active')
            $('.in-9').removeClass('modal-menu-in-active')
            $('.in-10').removeClass('modal-menu-in-active')
            $('.in-13').removeClass('modal-menu-in-active')
            $('.in-14').removeClass('modal-menu-in-active')
            $('.in-15').removeClass('modal-menu-in-active')
            $('.in-16').removeClass('modal-menu-in-active')
            $('.in-17').removeClass('modal-menu-in-active')
            $('.in-18').removeClass('modal-menu-in-active')
            $('.in-19').removeClass('modal-menu-in-active')
            $('.in-20').removeClass('modal-menu-in-active')
            $('.in-21').removeClass('modal-menu-in-active')
            $('.in-22').removeClass('modal-menu-in-active')

            $('.modal__arrow_1').removeClass('modal__arrow-active')
            $('.modal__arrow_2').removeClass('modal__arrow-active')
            $('.modal__arrow_3').removeClass('modal__arrow-active')
            $('.modal__arrow_4').removeClass('modal__arrow-active')
            $('.modal__arrow_5').removeClass('modal__arrow-active')
            $('.modal__arrow_7').removeClass('modal__arrow-active')
            $('.modal__arrow_8').removeClass('modal__arrow-active')
            $('.modal__arrow_9').removeClass('modal__arrow-active')
            $('.modal__arrow_10').removeClass('modal__arrow-active')
            $('.modal__arrow_11').removeClass('modal__arrow-active')
        });
    });

    $(function() {
        $('.modal-a__7').hover(function() {
            $('.in-13').addClass('modal-menu-in-active')
            $('.in-14').addClass('modal-menu-in-active')

            $('.modal__arrow_7').addClass('modal__arrow-active')

            $('.modal-a').addClass('modal-a-opacity')
            $('.modal-a__7').toggleClass('modal-a-opacity')

            $('.in-1').removeClass('modal-menu-in-active')
            $('.in-2').removeClass('modal-menu-in-active')
            $('.in-3').removeClass('modal-menu-in-active')
            $('.in-4').removeClass('modal-menu-in-active')
            $('.in-5').removeClass('modal-menu-in-active')
            $('.in-6').removeClass('modal-menu-in-active')
            $('.in-7').removeClass('modal-menu-in-active')
            $('.in-8').removeClass('modal-menu-in-active')
            $('.in-9').removeClass('modal-menu-in-active')
            $('.in-10').removeClass('modal-menu-in-active')
            $('.in-11').removeClass('modal-menu-in-active')
            $('.in-12').removeClass('modal-menu-in-active')
            $('.in-15').removeClass('modal-menu-in-active')
            $('.in-16').removeClass('modal-menu-in-active')
            $('.in-17').removeClass('modal-menu-in-active')
            $('.in-18').removeClass('modal-menu-in-active')
            $('.in-19').removeClass('modal-menu-in-active')
            $('.in-20').removeClass('modal-menu-in-active')
            $('.in-21').removeClass('modal-menu-in-active')
            $('.in-22').removeClass('modal-menu-in-active')

            $('.modal__arrow_1').removeClass('modal__arrow-active')
            $('.modal__arrow_2').removeClass('modal__arrow-active')
            $('.modal__arrow_3').removeClass('modal__arrow-active')
            $('.modal__arrow_4').removeClass('modal__arrow-active')
            $('.modal__arrow_5').removeClass('modal__arrow-active')
            $('.modal__arrow_6').removeClass('modal__arrow-active')
            $('.modal__arrow_8').removeClass('modal__arrow-active')
            $('.modal__arrow_9').removeClass('modal__arrow-active')
            $('.modal__arrow_10').removeClass('modal__arrow-active')
            $('.modal__arrow_11').removeClass('modal__arrow-active')
        });
    });

    $(function() {
        $('.modal-a__8').hover(function() {
            $('.in-15').addClass('modal-menu-in-active')
            $('.in-16').addClass('modal-menu-in-active')

            $('.modal__arrow_8').addClass('modal__arrow-active')

            $('.modal-a').addClass('modal-a-opacity')
            $('.modal-a__8').toggleClass('modal-a-opacity')

            $('.in-1').removeClass('modal-menu-in-active')
            $('.in-2').removeClass('modal-menu-in-active')
            $('.in-3').removeClass('modal-menu-in-active')
            $('.in-4').removeClass('modal-menu-in-active')
            $('.in-5').removeClass('modal-menu-in-active')
            $('.in-6').removeClass('modal-menu-in-active')
            $('.in-7').removeClass('modal-menu-in-active')
            $('.in-8').removeClass('modal-menu-in-active')
            $('.in-9').removeClass('modal-menu-in-active')
            $('.in-10').removeClass('modal-menu-in-active')
            $('.in-11').removeClass('modal-menu-in-active')
            $('.in-12').removeClass('modal-menu-in-active')
            $('.in-13').removeClass('modal-menu-in-active')
            $('.in-14').removeClass('modal-menu-in-active')
            $('.in-17').removeClass('modal-menu-in-active')
            $('.in-18').removeClass('modal-menu-in-active')
            $('.in-19').removeClass('modal-menu-in-active')
            $('.in-20').removeClass('modal-menu-in-active')
            $('.in-21').removeClass('modal-menu-in-active')
            $('.in-22').removeClass('modal-menu-in-active')

            $('.modal__arrow_1').removeClass('modal__arrow-active')
            $('.modal__arrow_2').removeClass('modal__arrow-active')
            $('.modal__arrow_3').removeClass('modal__arrow-active')
            $('.modal__arrow_4').removeClass('modal__arrow-active')
            $('.modal__arrow_5').removeClass('modal__arrow-active')
            $('.modal__arrow_6').removeClass('modal__arrow-active')
            $('.modal__arrow_7').removeClass('modal__arrow-active')
            $('.modal__arrow_9').removeClass('modal__arrow-active')
            $('.modal__arrow_10').removeClass('modal__arrow-active')
            $('.modal__arrow_11').removeClass('modal__arrow-active')
        });
    });

    $(function() {
        $('.modal-a__9').hover(function() {
            $('.in-17').addClass('modal-menu-in-active')
            $('.in-18').addClass('modal-menu-in-active')

            $('.modal__arrow_9').addClass('modal__arrow-active')

            $('.modal-a').addClass('modal-a-opacity')
            $('.modal-a__9').toggleClass('modal-a-opacity')

            $('.in-1').removeClass('modal-menu-in-active')
            $('.in-2').removeClass('modal-menu-in-active')
            $('.in-3').removeClass('modal-menu-in-active')
            $('.in-4').removeClass('modal-menu-in-active')
            $('.in-5').removeClass('modal-menu-in-active')
            $('.in-6').removeClass('modal-menu-in-active')
            $('.in-7').removeClass('modal-menu-in-active')
            $('.in-8').removeClass('modal-menu-in-active')
            $('.in-9').removeClass('modal-menu-in-active')
            $('.in-10').removeClass('modal-menu-in-active')
            $('.in-11').removeClass('modal-menu-in-active')
            $('.in-12').removeClass('modal-menu-in-active')
            $('.in-13').removeClass('modal-menu-in-active')
            $('.in-14').removeClass('modal-menu-in-active')
            $('.in-15').removeClass('modal-menu-in-active')
            $('.in-16').removeClass('modal-menu-in-active')
            $('.in-19').removeClass('modal-menu-in-active')
            $('.in-20').removeClass('modal-menu-in-active')
            $('.in-21').removeClass('modal-menu-in-active')
            $('.in-22').removeClass('modal-menu-in-active')

            $('.modal__arrow_1').removeClass('modal__arrow-active')
            $('.modal__arrow_2').removeClass('modal__arrow-active')
            $('.modal__arrow_3').removeClass('modal__arrow-active')
            $('.modal__arrow_4').removeClass('modal__arrow-active')
            $('.modal__arrow_5').removeClass('modal__arrow-active')
            $('.modal__arrow_6').removeClass('modal__arrow-active')
            $('.modal__arrow_7').removeClass('modal__arrow-active')
            $('.modal__arrow_8').removeClass('modal__arrow-active')
            $('.modal__arrow_10').removeClass('modal__arrow-active')
            $('.modal__arrow_11').removeClass('modal__arrow-active')
        });
    });

    $(function() {
        $('.modal-a__10').hover(function() {
            $('.in-19').addClass('modal-menu-in-active')
            $('.in-20').addClass('modal-menu-in-active')

            $('.modal__arrow_10').addClass('modal__arrow-active')

            $('.modal-a').addClass('modal-a-opacity')
            $('.modal-a__10').toggleClass('modal-a-opacity')

            $('.in-1').removeClass('modal-menu-in-active')
            $('.in-2').removeClass('modal-menu-in-active')
            $('.in-3').removeClass('modal-menu-in-active')
            $('.in-4').removeClass('modal-menu-in-active')
            $('.in-5').removeClass('modal-menu-in-active')
            $('.in-6').removeClass('modal-menu-in-active')
            $('.in-7').removeClass('modal-menu-in-active')
            $('.in-8').removeClass('modal-menu-in-active')
            $('.in-9').removeClass('modal-menu-in-active')
            $('.in-10').removeClass('modal-menu-in-active')
            $('.in-11').removeClass('modal-menu-in-active')
            $('.in-12').removeClass('modal-menu-in-active')
            $('.in-13').removeClass('modal-menu-in-active')
            $('.in-14').removeClass('modal-menu-in-active')
            $('.in-15').removeClass('modal-menu-in-active')
            $('.in-16').removeClass('modal-menu-in-active')
            $('.in-17').removeClass('modal-menu-in-active')
            $('.in-18').removeClass('modal-menu-in-active')
            $('.in-21').removeClass('modal-menu-in-active')
            $('.in-22').removeClass('modal-menu-in-active')

            $('.modal__arrow_1').removeClass('modal__arrow-active')
            $('.modal__arrow_2').removeClass('modal__arrow-active')
            $('.modal__arrow_3').removeClass('modal__arrow-active')
            $('.modal__arrow_4').removeClass('modal__arrow-active')
            $('.modal__arrow_5').removeClass('modal__arrow-active')
            $('.modal__arrow_6').removeClass('modal__arrow-active')
            $('.modal__arrow_7').removeClass('modal__arrow-active')
            $('.modal__arrow_8').removeClass('modal__arrow-active')
            $('.modal__arrow_9').removeClass('modal__arrow-active')
            $('.modal__arrow_11').removeClass('modal__arrow-active')
        });
    });

    $(function() {
        $('.modal-a__11').hover(function() {
            $('.in-21').addClass('modal-menu-in-active')
            $('.in-22').addClass('modal-menu-in-active')

            $('.modal__arrow_11').addClass('modal__arrow-active')

            $('.modal-a').addClass('modal-a-opacity')
            $('.modal-a__11').toggleClass('modal-a-opacity')

            $('.in-1').removeClass('modal-menu-in-active')
            $('.in-2').removeClass('modal-menu-in-active')
            $('.in-3').removeClass('modal-menu-in-active')
            $('.in-4').removeClass('modal-menu-in-active')
            $('.in-5').removeClass('modal-menu-in-active')
            $('.in-6').removeClass('modal-menu-in-active')
            $('.in-7').removeClass('modal-menu-in-active')
            $('.in-8').removeClass('modal-menu-in-active')
            $('.in-9').removeClass('modal-menu-in-active')
            $('.in-10').removeClass('modal-menu-in-active')
            $('.in-11').removeClass('modal-menu-in-active')
            $('.in-12').removeClass('modal-menu-in-active')
            $('.in-13').removeClass('modal-menu-in-active')
            $('.in-14').removeClass('modal-menu-in-active')
            $('.in-15').removeClass('modal-menu-in-active')
            $('.in-16').removeClass('modal-menu-in-active')
            $('.in-17').removeClass('modal-menu-in-active')
            $('.in-18').removeClass('modal-menu-in-active')
            $('.in-19').removeClass('modal-menu-in-active')
            $('.in-20').removeClass('modal-menu-in-active')

            $('.modal__arrow_1').removeClass('modal__arrow-active')
            $('.modal__arrow_2').removeClass('modal__arrow-active')
            $('.modal__arrow_3').removeClass('modal__arrow-active')
            $('.modal__arrow_4').removeClass('modal__arrow-active')
            $('.modal__arrow_5').removeClass('modal__arrow-active')
            $('.modal__arrow_6').removeClass('modal__arrow-active')
            $('.modal__arrow_7').removeClass('modal__arrow-active')
            $('.modal__arrow_8').removeClass('modal__arrow-active')
            $('.modal__arrow_9').removeClass('modal__arrow-active')
            $('.modal__arrow_10').removeClass('modal__arrow-active')
        });
    });

    // ModalFlat

    $(function() {
        $('.menu__modal').click(function() {
            $('.modal-menu-in').removeClass('modal-menu-in-active')
            $('.modal-a').removeClass('modal-a-opacity')
            $('.modal__arrow').removeClass('modal__arrow-active')
        });
    });

    // HeadButtonsHover

    $(function() {
        $('.login-btn').hover(function() {
            $('.login-icon').toggleClass('login-icon-hvr')
        });

        $('.exclude-btn').hover(function() {
            $('.exclude-icon').toggleClass('exclude-icon-hvr')
        });

        $('.menu-btn').hover(function() {
            $('.menu-icon').toggleClass('menu-icon-hvr')
        });
    });

    // FooterBtnHover

    $(function() {
        $('.footer__btn').hover(function() {
            $('.fbtn').toggleClass('fbtn-hvr')
        });
    });

    // DownBtnsHover

    $(function() {
        $('.db-1').hover(function() {
            $('.phvr_1').toggleClass('phvr_1-hvr')
        });

        $('.db-2').hover(function() {
            $('.phvr_2').toggleClass('phvr_2-hvr')
        });

        $('.db-3').hover(function() {
            $('.phvr_3').toggleClass('phvr_3-hvr')
        });

        $('.db-4').hover(function() {
            $('.phvr_4').toggleClass('phvr_4-hvr')
        });
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

    //SearchModal

    $(function() {
        $('.search-btn').click(function() {
            $('.search-modal').addClass('search-modal-active')
            $('.search-modal__bg').addClass('search-modal-active')
        });
    });

    //SearchModalClose

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            $('.search-modal').removeClass('search-modal-active');
        }
    });

});