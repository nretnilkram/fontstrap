/*!
 * Fontstrap v1.2.3 (https://github.com/nretnilkram/fontstrap)
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

	var breakPoints = jQuery.extend({
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200
	});

	var options = jQuery.extend({
		width: 25, // percentage
		xsWidth: 75,
		smWidth: 50,
		mdWidth: 33,
		lgWidth: 25,
		xlWidth: 20,
		responsive: true,
		pushContent: false,
		mainBlock: '.offcanvas-main-content',
		triggerEl: '.offcanvas-menu-toggle',
		submenuTrigger: '.submenu-toggle',
		submenuEl: '.submenu'
	}, settings);

	if ( options.width  > 100 || options.width < 0 ) {
		console.log('width option is a percentage and should be between 0 and 100.');
		return false;
	}

	function calculateMenuWidth () {
		var menuWidth = options.width;
		if (options.responsive){
			var windowWidth = $(window).width();
			switch(true) {
				case windowWidth < breakPoints.sm:
					menuWidth = options.xsWidth;
					break;
				case windowWidth < breakPoints.md:
					menuWidth = options.smWidth;
					break;
				case windowWidth < breakPoints.lg:
					menuWidth = options.mdWidth;
					break;
				case windowWidth < breakPoints.xl:
					menuWidth = options.lgWidth;
					break;
				default:
					menuWidth = options.xlWidth;
			}
		}

		return menuWidth;
	}

	var self = $(this)

	$(options.triggerEl).click(function () {
		var menuWidth = calculateMenuWidth();
		if ( self.hasClass('menu-open') ) {
			self.css({ width: 0 });
		  $(options.mainBlock).css({ 'margin-left': 0 });
			self.removeClass('menu-open');
			$(options.mainBlock).removeClass('menu-open');
			if ( options.push ) {
				$(options.mainBlock).removeClass('push');
			}
		} else {
			self.css({ width: menuWidth + "%" });
		  $(options.mainBlock).css({ 'margin-left': menuWidth + "%" });
			self.addClass('menu-open');
			$(options.mainBlock).addClass('menu-open');
			if ( options.push ) {
				$(options.mainBlock).addClass('push');
			}
		}
	});

	self.find(options.submenuTrigger).click(function (e) {
		e.preventDefault(e);
		$(this).siblings().find(options.submenuEl).removeClass('open');
		$(this).find(options.submenuEl).toggleClass('open');
	});

};
