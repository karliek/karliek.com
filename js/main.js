// clear typekit badge
window.setTimeout(function() {
	$('.typekit-badge').css('display', 'none');
}, 0);

var isMobileWidth = false;

var workTop = $('#work').offset().top,
	contactTop = $('#contact').offset().top,
	aboutTop = $('#about').offset().top;

$(function() {

	var beResponsive = function() {

		var toggleMobileClass = '#skills li, ' +
		                        '#logo-block, ' +
						        '#nav, ' +
							    'header .column, ' +
							    '#header-font, ' + 
							    '#hello-block, ' +
							    '#intro, ' +
							    '#intro-block, ' +
							    'header, ' +
							    '#header-bkgd';

		if ($(window).width() < 860) {
			isMobileWidth = true;
			$(toggleMobileClass).addClass('mobile');
			$('.example div div').removeClass('column');
			// $('.pica div div').removeClass('column');
			$('#subhead').hide();
			$('#header-bkgd').removeAttr('style');
			$('header').removeAttr('style');
		} else {
			isMobileWidth = false;
			$(toggleMobileClass).removeClass('mobile');
			$('.example div div').addClass('column');
			// $('.pica div div').addClass('column');
			$('#subhead').show();
			sizeHeaderByScrollTop($(window).scrollTop());
		}

		if ($(window).width() <= 480) {
			$('#other-work img').addClass('mobile');
			// $('#subhead').hide();
			
		} else {
			$('#other-work img').removeClass('mobile');
			// $('#subhead').show();
			
		}

	};

	// set the responsive handler for resizing
	$(window).on('resize', beResponsive);


	// run it once, in case the original load is narrow
	beResponsive();

	function resetTops() {
		workTop = $('#work').offset().top ,
	    contactTop = $('#contact').offset().top,
	    aboutTop = $('#about').offset().top;
	}

	function navActiveState(windowScrollTop) {

		if (isMobileWidth) {
			windowScrollTop = windowScrollTop + 130;
		} else {
			windowScrollTop = windowScrollTop + 100;
		}

		if (windowScrollTop <= workTop) {
			$('#nav_work, #nav_about, #nav_contact').removeClass('active');
		} else if (windowScrollTop <= aboutTop) {
			$('#nav_work').addClass('active');
			$('#nav_about, #nav_contact').removeClass('active');
		} else if (windowScrollTop <= contactTop) {
			$('#nav_about').addClass('active');
			$('#nav_work, #nav_contact').removeClass('active');
		} else {
			$('#nav_contact').addClass('active');
			$('#nav_work, #nav_about').removeClass('active');
		}
	}

	function sizeHeaderByScrollTop(windowScrollTop) {

		var scrollTopThreshold = 200;
		var headerTop = 135;

		if (isMobileWidth) {
			scrollTopThreshold = null;
			headerTop = 0;
		}

		// if we have a scrollTopThreshold (i.e. not mobile) AND scrollTop
		// is less than it... 
		//
		if (scrollTopThreshold && (windowScrollTop < scrollTopThreshold)) {

			// slide #header-bkgd up until just the right spot
			//
			$('#header-bkgd').css('top', -windowScrollTop);

			// slide header up at half speed
			//
			$('header').css('top', headerTop - windowScrollTop / 2);

		
		// otherwise we've possible loaded further down the page, so set
		// things as if it was at the threshold
		//
		} else if (scrollTopThreshold) {
			$('#header-bkgd').css('top', -scrollTopThreshold);
			$('header').css('top', headerTop - scrollTopThreshold / 2);
		}

	}

	// also, run this once in case it loads narrow
	sizeHeaderByScrollTop($(window).scrollTop());

    $(window).bind('scroll', function () {

	  // get the scroll top
	  //
      var windowScrollTop = $(window).scrollTop();

	  // set active state for nav buttons based on scroll top
	  //
      navActiveState(windowScrollTop);

	  // "shrink" header based on scroll top
	  //
	  sizeHeaderByScrollTop(windowScrollTop);

      // scroll top threshold
      /*
      var num = 160;

      if (windowScrollTop > num) {
        $('header, #intro').addClass('minimized');
        $('#subhead').hide();
      } else {
        $('header, #intro').removeClass('minimized');
      }
      */

	  resetTops();

    });

    function addScrollTo(linkId, targetId) {
    	$("#" + linkId).on('click', function(e) {
    		e.preventDefault();
    		$('html, body').animate({
    			scrollTop: $("#" + targetId).offset().top - 99
    		}, 1000);
    	});
    }

	addScrollTo('nav_work', 'work');
	addScrollTo('nav_about', 'about');
	addScrollTo('nav_contact', 'contact');

});
