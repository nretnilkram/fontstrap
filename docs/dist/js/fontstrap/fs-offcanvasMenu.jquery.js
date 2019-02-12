/*
 * Fontstrap v2.10.0 (https://github.com/nretnilkram/fontstrap)
 * Copyright 2019 Nretnil Kram
 * Licensed under MIT (https://github.com/nretnilkram/fontstrap/blob/master/LICENSE)
 */

if ( typeof _  != "function" ) {
	console.log('Lodash was not found and is required by the fontstrap jQuery plugins.');
	var no_lodash = true;
}

$('.js-trigger').click(function (event) {
	event.preventDefault();
});

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
		xsWidth: 100,
		smWidth: 50,
		mdWidth: 33,
		lgWidth: 25,
		xlWidth: 20,
		responsive: true,
		pushContent: false,
		mainBlock: '.offcanvas-main-content',
		triggerEl: '.offcanvas-menu-toggle',
		submenuTrigger: '.submenu-toggle',
		submenuEl: '.submenu',
		lockToggle: '.menu-lock-toggle',
		cookieName: 'menuLocked'
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

	var open = function (duration) {
		var menuWidth = calculateMenuWidth();
		self.animate({ width: menuWidth + "%" }, duration);
		$(options.mainBlock).animate({ 'margin-left': menuWidth + "%" }, duration);
		$('.fixed-top, .fixed-bottom').animate({ 'left': menuWidth + "%" }, duration); // Fix for items that are fixed to the top or bottom of page
		self.addClass('menu-open');
		$(options.mainBlock).addClass('menu-open menu-open-' + menuWidth);
		if ( options.push ) {
			$(options.mainBlock).addClass('push');
		}
	}

	var close = function (duration) {
		var menuWidth = calculateMenuWidth();
		$(options.mainBlock).animate({ 'margin-left': 0 }, duration);
		$('.fixed-top, .fixed-bottom').animate({ 'left': 0 }, duration); // Fix for items that are fixed to the top or bottom of page
		self.animate({ width: 0 }, duration);
		self.removeClass('menu-open');
		var openClasses = ['menu-open', 'menu-open-' + options.width, 'menu-open-' + options.xsWidth, 'menu-open-' + options.smWidth, 'menu-open-' + options.mdWidth, 'menu-open-' + options.lgWidth, 'menu-open-' + options.xlWidth]
		$(options.mainBlock).removeClass(openClasses.join(' '));
		if ( options.push ) {
			$(options.mainBlock).removeClass('push');
		}
	}

	$(options.triggerEl).on('click', function () {
		if ( self.hasClass('menu-open') ) {
			close();
		} else {
			open();
		}
	});

	self.find(options.submenuTrigger + ' > a').click(function (e) {
		e.preventDefault(e);
		$(this).parent().siblings().find(options.submenuEl).removeClass('open');
		$(this).parent().find(options.submenuEl).toggleClass('open');
		$(this).parent().siblings().find('a').removeClass('active');
		$(this).toggleClass('active');
	});

	self.find(options.lockToggle).on('click', function (e) {
		e.preventDefault(e);
		console.log($(this).hasClass('locked'));
		if ($(this).hasClass('locked')) {
			$(this).removeClass('locked');
			var unlocked = $('<i>').addClass('fa fa-unlock');
			$(this).find('.fa-lock').remove();
			$(this).append(unlocked);
			storage.save(options.cookieName, false);
		} else {
			$(this).addClass('locked');
			var locked = $('<i>').addClass('fa fa-lock');
			$(this).find('.fa-unlock').remove();
			$(this).append(locked);
			storage.save(options.cookieName, true);
		}
	});

	if (storage.get(options.cookieName)) {
		$(options.lockToggle).addClass('locked');
		var locked = $('<i>').addClass('fa fa-lock');
		$(options.lockToggle).find('.fa-unlock').remove();
		$(options.lockToggle).append(locked);
		open(0);
	}

	var throttled_open = _.throttle(open, 250);

	$(window).resize(function () {
		if (self.hasClass('menu-open')) {
			throttled_open(0);
		}
	});

};
