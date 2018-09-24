;(function($) {
	// Header on scroll
	const header = $('.header');
	const nav = $('.navbar-collapse .navbar-nav');
    const mq = window.matchMedia( "(max-width: 991px)" );

	const windowHeight = $(window).height()/2;
	const arrowup = $('.arrow-up');
	const headerHeight = header.outerHeight();

    if (mq.matches) { // If media query matches
        nav.css({'background-color' : 'rgba(0,0,0, .4)'})
    }

    // arrowup.css("display", "none");
	function onScroll(e) {
	    let pos = $(window).scrollTop();
        header.addClass( "move-header" );

	    if (pos > headerHeight + 100) {
	        header.css({
	            'position': 'fixed',
	            'top' : `-${headerHeight}px`,
	            'background': 'rgba(149,225,211, 0.7)'
	        });
	        nav.css({'background': 'transparent'});
            arrowup.css({
                'display': 'block'
            });
	    }
	    if (pos > windowHeight) {
	        header.css({
	            'top' : '0',
	            'transition' : 'top .3s ease-out'
	        });
	    }

	    if (pos < headerHeight + 100) {
	        header.css({
	            'position': 'absolute',
	            'top' : '0',
	            'background': 'transparent',
	            'transition' : 'none'
	        });
            if (mq.matches) { // If media query matches
                nav.css({'background-color' : 'rgba(0,0,0, .4)'})
            }
            header.removeClass( "move-header" );
            arrowup.css({
                'display': 'none'
            });
	    }
	}

	$(window).on('scroll', onScroll);

})(jQuery);
