// clear typekit badge
window.setTimeout(function() {
	$('.typekit-badge').css('display', 'none');
}, 0);

var beResponsive = function() {
	if ($(window).width() < 840) {
		$('#skills li').addClass('mobile');
	} else {
		$('#skills li').removeClass('mobile');
	}
};

// set the responsive handler for resizing
$(window).on('resize', beResponsive);

$(function() {

	// run it once, in case the original load is narrow
	beResponsive();

});