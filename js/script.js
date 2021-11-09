let gamesSlider;
let topicSlider;
let newsSlider;

// Slider settings and Init code
function loadSliders() {
	if ($('.our-games__slider').length) {
		if ($(window).width() > 0 && $(window).width() < 768) { //XSmall
			gamesSlider = $('.our-games__slider').bxSlider({
				minSlides: 1,
				maxSlides: 1,
				slideMargin: 30,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		} else if ($(window).width() > 767 && $(window).width() < 992) { //Med 690
			gamesSlider = $('.our-games__slider').bxSlider({
				minSlides: 2,
				maxSlides: 2,
				slideWidth: 330,
				slideMargin: 30,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		} else if ($(window).width() > 991 && $(window).width() < 1200) { //Large 930
			gamesSlider = $('.our-games__slider').bxSlider({
				minSlides: 3,
				maxSlides: 3,
				slideWidth: 300,
				slideMargin: 15,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		} else if ($(window).width() > 1199) { //Large 1110
			gamesSlider = $('.our-games__slider').bxSlider({
				minSlides: 4,
				maxSlides: 4,
				slideWidth: 266,
				slideMargin: 15,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		}
	}

	if ($('.topics__slider').length) {
		if ($(window).width() > 0 && $(window).width() < 768) { //XSmall
			topicSlider = $('.topics__slider').bxSlider({
				minSlides: 1,
				maxSlides: 1,
				slideMargin: 30,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		} else if ($(window).width() > 767 && $(window).width() < 992) { //Med 690
			topicSlider = $('.topics__slider').bxSlider({
				minSlides: 2,
				maxSlides: 2,
				slideWidth: 330,
				slideMargin: 30,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		} else if ($(window).width() > 991 && $(window).width() < 1200) { //Large 930
			topicSlider = $('.topics__slider').bxSlider({
				minSlides: 3,
				maxSlides: 3,
				slideWidth: 290,
				slideMargin: 30,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		} else if ($(window).width() > 1199) { //XLarge 1110
			topicSlider = $('.topics__slider').bxSlider({
				minSlides: 3,
				maxSlides: 3,
				slideWidth: 350,
				slideMargin: 30,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		}


	}

	if ($('.news__slider').length) {
		if ($(window).width() > 0 && $(window).width() < 768) { //XSmall
			newsSlider = $('.news__slider').bxSlider({
				minSlides: 1,
				maxSlides: 1,
				slideMargin: 30,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		} else if ($(window).width() > 767 && $(window).width() < 992) { //Med 690
			newsSlider = $('.news__slider').bxSlider({
				minSlides: 1,
				maxSlides: 1,
				slideWidth: 690,
				slideMargin: 30,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		} else if ($(window).width() > 991 && $(window).width() < 1200) { //Large 930
			newsSlider = $('.news__slider').bxSlider({
				minSlides: 2,
				maxSlides: 2,
				slideWidth: 450,
				slideMargin: 30,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		} else if ($(window).width() > 1199) { //XLarge 1110
			newsSlider = $('.news__slider').bxSlider({
				minSlides: 2,
				maxSlides: 2,
				slideWidth: 540,
				slideMargin: 30,
				pager: false,
				nextText: '<i class="fas fa-chevron-right slider__control--right"></i>',
				prevText: '<i class="fas fa-chevron-left slider__control--left"></i>'
			});

		}


	}

}

$(window).on("load",function() {


	// Loading screen Spinner detach
	$('.loading-spinner').fadeOut('slow', function() {
		$(this).detach();
		$('body').css('overflow','initial');
	});

	// WOW reveal initializer
	let wow = new WOW({
		boxClass: 'wow-reveal',
		animateClass: 'animate__animated'
	});
	wow.init();

	// BxSlider init call
	loadSliders();

	// Top header bar resizer
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 100 && $(this).width() > 767) {
			$('.djo-home__main-header').addClass('not-in-top');
		} else {
			$('.djo-home__main-header').removeClass('not-in-top');
		}
	});

	// Slider reStart when window resize occurs
	$(window).on('resize', function() {
		gamesSlider.destroySlider();
		topicSlider.destroySlider();
		newsSlider.destroySlider();
		loadSliders();
	});

	// Menu click functionality in mobile
	$('#menu-open').on('click', function() {
		$('.main-header--center').addClass('mobile-active');
		$('.main-header--right').addClass('mobile-active');
		$(this).addClass('inactive');
	});
	$('#menu-close').on('click', function() {
		$('.main-header--center').removeClass('mobile-active');
		$('.main-header--right').removeClass('mobile-active');
		$('#menu-open').removeClass('inactive');
	});

});


