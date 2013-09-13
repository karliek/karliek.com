// clear typekit badge
window.setTimeout(function() {
	$('.typekit-badge').css('display', 'none');
}, 0);

var beResponsive = function() {
	if ($(window).width() < 860) {
		$('#skills li, #logo-block, #nav, header .column, #header-font, #hello-block, #intro, #intro-block').addClass('mobile');
		$('.example div div').removeClass('column');
		// $('.pica div div').removeClass('column');
	} else {
		$('#skills li, #logo-block, #nav, header .column, #header-font, #hello-block, #intro, #intro-block').removeClass('mobile');
		$('.example div div').addClass('column');
		// $('.pica div div').addClass('column');
	}

	if ($(window).width() <= 480) {
		$('#other-work img').addClass('mobile');
		$('#subhead').hide();
		
	} else {
		$('#other-work img').removeClass('mobile');
		$('#subhead').show();
		
	}

};

// set the responsive handler for resizing
$(window).on('resize', beResponsive);

$(function() {

	// run it once, in case the original load is narrow
	beResponsive();

	var workTop = $('#work').offset().top,
	    contactTop = $('#contact').offset().top,
	    aboutTop = $('#about').offset().top;

	function resetTops() {
		workTop = $('#work').offset().top,
	    contactTop = $('#contact').offset().top,
	    aboutTop = $('#about').offset().top;
	}

	function navActiveState(windowScrollTop) {
		windowScrollTop = windowScrollTop + 145;
		if (windowScrollTop < workTop) {
			$('#nav_work, #nav_about, #nav_contact').removeClass('active');
		} else if (windowScrollTop < aboutTop) {
			$('#nav_work').addClass('active');
			$('#nav_about, #nav_contact').removeClass('active');
		} else if (windowScrollTop < contactTop) {
			$('#nav_about').addClass('active');
			$('#nav_work, #nav_contact').removeClass('active');
		} else {
			$('#nav_contact').addClass('active');
			$('#nav_work, #nav_about').removeClass('active');
		}
	}

    $(window).bind('scroll', function () {
		var windowScrollTop = $(window).scrollTop();
		navActiveState(windowScrollTop);

		// scroll top threshold
		var num = 200;

		if (windowScrollTop > num) {
			$('header').addClass('minimized');
			// $('.nav').addClass('fixed');
			// $('.header-font').addClass('header-font-minimized');
			// $('.circle').addClass('circle-minimized');
			// $('header').addClass('header-minimized');
			$('#subhead').hide();
			// $('.example.hello').addClass('hello-minimized');

		} else {
			$('header').removeClass('minimized');
			// $('.nav').removeClass('fixed');
			// $('.header-font').removeClass('header-font-minimized');
			// $('.circle').removeClass('circle-minimized');
			// $('header').removeClass('header-minimized');
			$('#subhead').show();
		}
		
	});

    function addScrollTo(linkId, targetId) {
    	$("#" + linkId).on('click', function(e) {
    		e.preventDefault();
    		$('html, body').animate({
    			scrollTop: $("#" + targetId).offset().top - 120
    		}, 1000);
    	});
    }

	addScrollTo('nav_work', 'work');
	addScrollTo('nav_about', 'about');
	addScrollTo('nav_contact', 'contact');

});