/* Hamburger menu */

$(function () {
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
	});
});

$(function ($) {
	$('.scrollable').click(function (e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $(target).offset().top,
		}, 1000);
		$('.navbar-collapse').collapse('hide');
		$('.navbar-toggle').removeClass('active');
	});
});

$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

/* Scroll spy */

$(function () {
	var sectionsToWatch = [];
	var menuItems = $('.navbar-right').eq(0).find('li');
	$(menuItems).each(function () {
		if ($(this).find('a').length) {
			sectionsToWatch.push($(this).find('a').attr('href').replace('#', ''));
		}
	});
	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

		var scrollTopOffset = $(document).scrollTop();

		$(sectionsToWatch).each(function (k, v) {
			if ($('#' + v).length && scrollTopOffset >= $('#' + v).offset().top - $('.navbar-fixed-top').height()) {
				$('.navbar-right li').removeClass('active');
				var x = $('.navbar-right li').find('a[href="#' + v + '"]');
				x.parent('li').addClass('active');
			}
		});
	});
});

/* Counter on scroll */
$(function () {
	var a = 0;
	$(window).scroll(function () {

		var oTop = $('#counter').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
						countNum: countTo
					},

					{

						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
							//alert('finished');
						}

					});
			});
			a = 1;
		}
	});
});
