/*!
 * Fontstrap v1.2.3 (https://github.com/nretnilkram/fontstrap)
 * Copyright 2017 Mark Lintern
 * Licensed under MIT (https://github.com/nretnilkram/fontstrap/blob/master/LICENSE)
 */
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
* Helpers for alignBlocks
*/

var buildTracker = function (count) {
	object = {};
	_.times(count, function (i) {
		object[i] = 0;
	});
	return object;
};

var newHeight = function (tracker) {
	var high = 0;
	_.each(tracker, function(a){
		if (a > high) {
			high = a;
		}
	});
	return high;
};

var nextColumn = function (tracker) {
	var column = 0;
	var low = tracker[0];
	_.each(tracker, function(a, b){
		if (b === 0 || a < low) {
			low = a;
			column = b;
		}
	});
	return column;
};

var cleanSettings = function (settings) {
	if ( !_.isUndefined(settings.spaceBetween) && _.isString(settings.spaceBetween) ) {
		settings.spaceBetween = parseInt(settings.spaceBetween.trim('px').trim('em').trim('rem'));
	}
	return settings;
};

/*
* alignBlocks takes a set of blocks, divs, and aligns them in a container so that no space is wasted.
*/

jQuery.fn.alignBlocks = function(settings) {

	if ( no_lodash ) {
		console.log('Lodash was not found and is required by the alignBlocks plugin.');
		return false;
	}

	if (elementMissing($(this), "alignBlocks()")) { return false; }

	var breakPoints = jQuery.extend({
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200
	});

	var options = jQuery.extend({
		countPerRow: 4,
		countPerRowXs: 1,
		countPerRowSm: 2,
		countPerRowMd: 3,
		countPerRowLg: 4,
		countPerRowXl: 5,
		responsive: true,
		block: '.list-item',
		spaceBetween: 0
	}, cleanSettings(settings));

	var columns = options.countPerRow;
	if (options.responsive){
		var windowWidth = $(window).width();
		switch(true) {
			case windowWidth < breakPoints.sm:
				columns = options.countPerRowXs;
				break;
			case windowWidth < breakPoints.md:
				columns = options.countPerRowSm;
				break;
			case windowWidth < breakPoints.lg:
				columns = options.countPerRowMd;
				break;
			case windowWidth < breakPoints.xl:
				columns = options.countPerRowLg;
				break;
			default:
				columns = options.countPerRowXl;
		}
	}

	var tracker = buildTracker(columns),
	$self = $(this),
	fullWidth = $self.width(),
	colWidth = _.floor(fullWidth / columns),
	blockWidth = (columns > 1) ? _.floor(colWidth - ((options.spaceBetween * (columns - 1)) / columns)) : colWidth;

	$self.find(options.block).each(function (x, item) {
		var column = nextColumn(tracker),
		previousHeight = tracker[column],
		left = column === 0 ? 0 : _.floor((column * blockWidth) + (options.spaceBetween * column));

		tracker[column] = previousHeight + $(this).outerHeight( true );
		$(this).css({ 'position': 'absolute', 'top': previousHeight + 'px', 'left': left + 'px', 'width': blockWidth + 'px' });
	});

	$self.css({ 'position': 'relative', 'height': newHeight(tracker) + 'px' });
};
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
* fullScreenBackground will take the block and make it the full viewing window along with CSS that accomanies.
*/

jQuery.fn.fullScreenBackground = function(settings){

	if ( no_lodash ) {
		console.log('Lodash was not found and is required by the fullScreenBackground plugin.');
		return false;
	}

	if (elementMissing($(this), "fullScreenBackground()")) { return false; }

	var options = jQuery.extend({
		dataImageVar: 'image'
	}, settings);

	var divs = $(this);

	_.each(divs, function (div) {
		var img = $(div).data(options.dataImageVar);
		$(div).css({'background-image': "url('" + img + "')"});
	});

};
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
			$('.fixed-top, .fixed-bottom').css({ 'left': 0 }); // Fix for items that are fixed to the top or bottom of page
			self.removeClass('menu-open');
			$(options.mainBlock).removeClass('menu-open');
			if ( options.push ) {
				$(options.mainBlock).removeClass('push');
			}
		} else {
			self.css({ width: menuWidth + "%" });
		  $(options.mainBlock).css({ 'margin-left': menuWidth + "%" });
			$('.fixed-top, .fixed-bottom').css({ 'left': menuWidth + "%" }); // Fix for items that are fixed to the top or bottom of page
			self.addClass('menu-open');
			$(options.mainBlock).addClass('menu-open');
			if ( options.push ) {
				$(options.mainBlock).addClass('push');
			}
		}
	});

	self.find(options.submenuTrigger + ' > a').click(function (e) {
		e.preventDefault(e);
		$(this).parent().siblings().find(options.submenuEl).removeClass('open');
		$(this).parent().find(options.submenuEl).toggleClass('open');
	});

};
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
* keepAtTop will keep the block, like a navbar, on the top of the screen when scrolling down past the block.  Or if the block is above the screen when page is loaded.
*/

jQuery.fn.keepAtTop = function(settings){

	if (elementMissing($(this), "keepAtTop()")) { return false; }

	var $window = $(window),
	$el = $(this),
	elHeight = $el.outerHeight(),
	elTop = $el.offset().top;

	var options = jQuery.extend({
		test: function () {
			if ($window.scrollTop() > elTop) {
				$el.addClass('stick-to-top');
				$('body').css({'padding-top': elHeight + 'px'});
			} else {
				$el.removeClass('stick-to-top');
				$('body').css({'padding-top': ''});
			}
		}
	}, settings);

	$window.scroll(function() {
		options.test();
	});

	options.test();

};

/*
* keepAtBottom will keep the block, like a navbar, on the bottom of the screen when scrolling up past the block.  Or if the block is below the screen when page is loaded.
*/

jQuery.fn.keepAtBottom = function(settings){

	if (elementMissing($(this), "keepAtBottom()")) { return false; }

	var $window = $(window),
	$el = $(this),
	elHeight = $el.outerHeight(),
	elTop = $el.offset().top,
	elBottom = elTop + elHeight,
	wHeight = $window.height();

	var options = jQuery.extend({
		test: function () {
			if ($window.scrollTop() < (elBottom - wHeight)) {
				$el.addClass('stick-to-bottom');
				$('body').css({'padding-bottom': elHeight + 'px'});
			} else {
				$el.removeClass('stick-to-bottom');
				$('body').css({'padding-bottom': ''});
			}
		}
	}, settings);

	$window.scroll(function() {
		options.test();
	});

	options.test();

};

/*
* keepOnScreen is a combination of keepAtTop and keepAtBottom. It will keep the block, like a navbar, on the top when scrolling down past the block and at the bottom when scrolling up past the block.
*/

jQuery.fn.keepOnScreen = function(settings){

	if (elementMissing($(this), "keepOnScreen()")) { return false; }

	var $window = $(window),
	$el = $(this);

	var options = jQuery.extend({
		reset: function () {
			$el.removeClass('stick-to-bottom');
			$el.removeClass('stick-to-top');
			$el.keepAtTop();
			$el.keepAtBottom();
		}
	}, settings);

	$el.keepAtTop();
	$el.keepAtBottom();

	$window.resize(function () {
		options.reset();
	});

};
