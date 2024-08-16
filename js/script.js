(function($) {
    "use strict";
    /* ================ Revolution Slider. ================ */
    if ($('.tp-banner').length > 0) {
        $('.tp-banner').show().revolution({
            delay: 6000,
            startheight: 600,
            startwidth: 1140,
            hideThumbs: 1000,
            navigationType: 'none',
            touchenabled: 'on',
            onHoverStop: 'on',
            navOffsetHorizontal: 0,
            navOffsetVertical: 0,
            dottedOverlay: 'none',
            fullWidth: 'on'
        });
    }
    if ($('.tp-banner-full').length > 0) {
        $('.tp-banner-full').show().revolution({
            delay: 6000,
            hideThumbs: 1000,
            navigationType: 'none',
            touchenabled: 'on',
            onHoverStop: 'on',
            navOffsetHorizontal: 0,
            navOffsetVertical: 0,
            dottedOverlay: 'none',
            fullScreen: 'on'
        });
    }

    /* ================ testimonials ================ */
    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                700: {
                    items: 2,
                    nav: false
                },
                1170: {
                    items: 2,
                    nav: true,
                    loop: false
                }
            }
        });
    });

    /* ================ sticky fix ================ */
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }

        //Check to see if the window is top if not then display button
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }

        //Click event to scroll to top
        $('.scrollToTop').on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

      
    });
  })(jQuery);