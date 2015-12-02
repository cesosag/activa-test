$(document).on('ready', function(){
	$(".owl-carousel").owlCarousel({
		dotsEach: true,
		items: 1,
		loop: true,
		navText: ['<i class="icon icon-chevron-thin-left"></i>', '<i class="icon icon-chevron-thin-right"></i>'],
		responsive: {
			0: {
				nav: false,
			},
			768: {
				nav: true,
			}
		}
	});
});