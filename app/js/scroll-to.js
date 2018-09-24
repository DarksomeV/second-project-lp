;(function($) {
	// Scroll to element
	const scrollBtn = $('[data-scroll]');

	function onScroll(e) {
        const activeLink = $('.nav-item.active');
	    e.preventDefault();
	    let target = $(this).attr('data-scroll');
        activeLink.removeClass('active');
	    // e.target.closest('.nav-item').classList.add( "active" );
	    let dist = $(target).offset().top;
	    $('html, body').animate({scrollTop: dist}, 1000, 'swing');
        // e.target.closest('.nav-item').classList.remove( "active" );
        // setTimeout(this.closest('.nav-item').classList.remove('active'), 3000);
	}


	scrollBtn.on('click', onScroll);

})(jQuery);
