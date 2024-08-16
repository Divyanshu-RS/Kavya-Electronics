(function ($) {

  	"use strict";

    /*==== Loader ====*/   
    $('.preloader').fadeOut(1000); // set duration in brackets  


    /*==== Nav ====*/
    $('.navbar-collapse a').on('click',function(){
    	$(".navbar-collapse").collapse('hide');
    });

    
	  /* ================ Counter ================ */
        $('.counter-item').appear(function() {
            $('.counter-number').countTo();
        });
		
	/*==== Sticky ====*/
	$("#header").sticky({topSpacing:0});
	
    /*==== Owl Carousel ====*/
    var owl = $(".testimonialsList");
      owl.owlCarousel({
        autoPlay: 6000,
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        Speedfast: 200,
    });
	
	/*==== Clients ====*/
	var owl = $(".owl-clients");
      owl.owlCarousel({
		autoPlay: 6000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,3],
		itemsTablet: [768,3],
		itemsTabletSmall: false,
		itemsMobile : [479,2],
		Speedfast: 200,
    });	

    /*==== Smoothscroll ====*/    
	$('#home a, .custom-navbar a').on('click', function(event) {
		var $anchor = $(this);
		  $('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 49
		}, 1000);
		  event.preventDefault();
	});	
	
	/* ==== Revolution Slider ==== */
	if($('.tp-banner').length > 0){
		$('.tp-banner').show().revolution({
			delay:6000,
			startheight:750,
			startwidth: 1170,
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
	
	
})(jQuery);