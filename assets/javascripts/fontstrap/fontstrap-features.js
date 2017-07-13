/*!
 * Fontstrap v1.2.0 (https://github.com/nretnilkram/fontstrap)
 * Copyright 2017 Mark Lintern
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

	var options = jQuery.extend({
		countPerRow: 4,
		block: '.list-item',
		spaceBetween: 0
	}, cleanSettings(settings));

	var tracker = buildTracker(options.countPerRow),
	$self = $(this),
	fullWidth = $self.width(),
	colWidth = _.floor(fullWidth / options.countPerRow),
	blockWidth = _.floor(colWidth - ((2 * options.spaceBetween) / (options.countPerRow - 1)));

	$self.find(options.block).each(function (x, item) {
		var column = nextColumn(tracker),
		previousHeight = tracker[column],
		left = column === 0 ? 0 : _.floor((column * blockWidth) + (options.spaceBetween * column));

		tracker[column] = previousHeight + $(this).outerHeight( true );
		$(this).css({ 'position': 'absolute', 'top': previousHeight + 'px', 'left': left + 'px', 'width': blockWidth + 'px' });
	});

	$self.css({ 'position': 'relative', 'height': newHeight(tracker) + 'px' });
};
