/*!
 * Fontstrap v1.2.2 (https://github.com/nretnilkram/fontstrap)
 * Copyright 2017 Mark Lintern
 * Licensed under MIT (https://github.com/nretnilkram/fontstrap/blob/master/LICENSE)
 */
if ( typeof _  != "function" ) {
	console.log('Lodash was not found and is required by the fontstrap jQuery plugins.');
	var no_lodash = true;
}

/*
* Global helpers for jQuery plugins.
*/

var elementMissing = function (sel, methodName) {
	if ( sel.length === 0 ) {
		console.log('Element does not exist. Did not execute ' + methodName + '. Please check the selector.');
		return true;
	} else {
		return false;
	}
};

/*
* offcanvasMenu takes a menu and turns it into an offcanvas menu.
*/

jQuery.fn.offcanvasMenu = function(settings) {

	if ( no_lodash ) {
		console.log('Lodash was not found and is required by the alignBlocks plugin.');
		return false;
	}

	if (elementMissing($(this), "offcanvasMenu()")) { return false; }

	var options = jQuery.extend({
		width: 25, // percentage
		mainBlock: '.offcanvas-main-content',
		triggerEl: '.offcanvas-menu-toggle'
	}, settings);

	if ( options.width  > 100 ) {
		console.log('width option is a percentage and should be between 0 and 100.');
		return false;
	}

	var self = $(this)

	$(options.triggerEl).click(function () {
		if ( self.hasClass('menu-open') ) {
			self.css({ width: 0 });
		  $(options.mainBlock).css({ 'margin-left': 0 });
			self.removeClass('menu-open');
			$(options.mainBlock).removeClass('menu-open');
		} else {
			self.css({ width: options.width + "%" });
		  $(options.mainBlock).css({ 'margin-left': options.width + "%" });
			self.addClass('menu-open');
			$(options.mainBlock).addClass('menu-open');
		}
	});

};
