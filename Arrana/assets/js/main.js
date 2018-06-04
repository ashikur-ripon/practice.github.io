$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

   //owl carousel team
    $('.owl-carousel-team').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});

	//owl carousel twitter
    $('.owl-carousel-twitter').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    items:1,
	    autoplay:true,
	});


	//owl carousel testimonial

	//owl carousel hero area
    $('.owl-carousel-testimonial').owlCarousel({
		items: 1,
		loop: true,
    	autoplay:true,
		dots: true,
		nav: false,
	});



	//owl carousel hero area
    $('.owl-carousel-hero').owlCarousel({
		items: 1,
		loop: true,
    	autoplay:true,
		dots: true,
		nav: true,
		navText: ["<i class='fa fa-arrow-left'>",
				  "<i class='fa fa-arrow-right'>"]
	});




	//Portfolio popup
	$('.image-link').magnificPopup({type:'image'});

	//Scroll To Top
	$.scrollUp({
		scrollSpeed: 300,
		animationSpeed: 200,
		scrollImg: true,
	});

	//Sticky Nav
	$(".header-area").sticky({topSpacing:0});


	//company carousel 
		$(".owl-carousel-logo").owlCarousel({
			items: 5,
			loop: true,
			dots: false,
			nav: false,
			autoplay:true,
		});  
	// end company carousel


}(jQuery));