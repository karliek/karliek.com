// clear typekit badge
window.setTimeout(function() {
	$('.typekit-badge').css('display', 'none');
}, 0);

var beResponsive = function() {
	if ($(window).width() < 920) {
		$('#skills li, #logo-block, #nav').addClass('mobile');
		$('.example div div').removeClass('column');
		// $('.pica div div').removeClass('column');
	} else {
		$('#skills li, #logo-block, #nav').removeClass('mobile');
		$('.example div div').addClass('column');
		// $('.pica div div').addClass('column');
	}
};

// set the responsive handler for resizing
$(window).on('resize', beResponsive);

$(function() {

	// run it once, in case the original load is narrow
	beResponsive();



});