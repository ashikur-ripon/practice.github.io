(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


		// youtube video
/* 		$('.our-story-area').YTPlayer({
			fitToBackground: true,
			videoId: 'LSmgKRx5pBo'
		}); */
				
		// magnefic popup
		$('.video-play-icon').magnificPopup({type:'video'});


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	