// clear typekit badge
window.setTimeout(function() {
	$('.typekit-badge').css('display', 'none');
}, 0);

var beResponsive = function() {
	if ($(window).width() < 960) {
		$('#skills li, #logo-block, #nav, header .column').addClass('mobile');
	} else {
		$('#skills li, #logo-block, #nav, header .column').removeClass('mobile');
	}
};

// var beResponsive = function() {
// 	if ($(window).width() < 960) {
// 		// $('#skills li, #logo-block, #nav, header .column').addClass('mobile');
// 		$('#skills li, header .column').addClass('mobile');
// 	} else {
// 		// $('#skills li, #logo-block, #nav, header .column').removeClass('mobile');
// 		$('#skills li, header .column').removeClass('mobile');
// 	}
// };

// set the responsive handler for resizing
$(window).on('resize', beResponsive);

$(function() {

	// run it once, in case the original load is narrow
	beResponsive();

});