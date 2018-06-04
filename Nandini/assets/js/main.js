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

	//owl carousel tesimonial
    $('.owl-carousel-testimonial').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    items:1,
	    autoplay:true,
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






    //magnific popup video
    $('#youtube-video').magnificPopup({
    	type:'iframe',
    	iframe: {
		  patterns: {
		    youtube: {
		      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

		      id: 'v=', 

		      src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
		    }
		  },

		  srcAction: 'iframe_src', 
		}
    });

    //Skill Bar
    $('.skillbar').skillBars({
  		// options here
	});


    //Counter
	$('.counter-number').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});


	//Mixitup active
	var mixer = mixitup('.portfolio-content');

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


}(jQuery));