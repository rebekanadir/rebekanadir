(function($) {
    "use strict";

    var headerExpanding = {};
    edgtf.modules.headerExpanding = headerExpanding;

	headerExpanding.edgtfOnDocumentReady = edgtfOnDocumentReady;
	headerExpanding.edgtfOnWindowLoad = edgtfOnWindowLoad;
	headerExpanding.edgtfOnWindowResize = edgtfOnWindowResize;
	headerExpanding.edgtfOnWindowScroll = edgtfOnWindowScroll;

    $(document).ready(edgtfOnDocumentReady);
    $(window).load(edgtfOnWindowLoad);
    $(window).resize(edgtfOnWindowResize);
    $(window).scroll(edgtfOnWindowScroll);
    
    /* 
        All functions to be called on $(document).ready() should be in this function
    */
    function edgtfOnDocumentReady() {
	    edgtfExpandingMenu();
    }

    /* 
        All functions to be called on $(window).load() should be in this function
    */
    function edgtfOnWindowLoad() {
    }

    /* 
        All functions to be called on $(window).resize() should be in this function
    */
    function edgtfOnWindowResize() {
    }

    /* 
        All functions to be called on $(window).scroll() should be in this function
    */
    function edgtfOnWindowScroll() {
    }

	/**
	 * Init Expanding Menu
	 */
	function edgtfExpandingMenu() {

		if ($('a.edgtf-expanding-menu-opener').length) {

			var expandingMenuOpener = $( 'a.edgtf-expanding-menu-opener');

			// Open expanding menu
			expandingMenuOpener.on('click',function(e){
				e.preventDefault();

				if (!expandingMenuOpener.hasClass('edgtf-fm-opened')) {
					expandingMenuOpener.addClass('edgtf-fm-opened');
					edgtf.body.addClass('edgtf-expanding-menu-opened');
					$(document).keyup(function(e){
						if (e.keyCode == 27 ) {
							expandingMenuOpener.removeClass('edgtf-fm-opened');
							edgtf.body.removeClass('edgtf-expanding-menu-opened');
						}
					});
				} else {
					expandingMenuOpener.removeClass('edgtf-fm-opened');
					edgtf.body.removeClass('edgtf-expanding-menu-opened');
				}
			});
		}
	}

})(jQuery);