/* Hamburger menu */

		$(function() { 
			$(".navbar-toggle").on("click", function () {
    		$(this).toggleClass("active");
			});
		});

		$(function($) {
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

/* Gallery lightbox */
		
	$(function() {
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
	});

/* View more button */
		
		$(function() {
			$("#btn-show-hide1").click(function() {
				$(this).html($(this).text() == 'show less' ? 'view more' : 'show less');
				$("#show-hide1").slideToggle('slow');
			});
		});

		$(function() {
			$("#btn-show-hide2").click(function() {
				$(this).html($(this).text() == 'show less' ? 'view more' : 'show less');
				$("#show-hide2").slideToggle('slow');
			});
		});

/* Scroll spy */
		
    $(function () {
        var sectionsToWatch = [];
        var menuItems = $('.navbar-right').eq(0).find('li');
        $(menuItems).each(function () {          sectionsToWatch.push($(this).find('a').attr('href').replace('#', ''));
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