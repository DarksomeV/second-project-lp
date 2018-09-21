;(function($) {
	// Header on scroll
	const header = $('.header');

	const windowHeight = $(window).height()/2;
	const arrowup = $('.arrow-up');
	const headerHeight = header.outerHeight();

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
            header.removeClass( "move-header" );
            arrowup.css({
                'display': 'none'
            });
	    }
	}

	$(window).on('scroll', onScroll);

})(jQuery);
