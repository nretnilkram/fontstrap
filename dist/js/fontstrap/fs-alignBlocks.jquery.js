/*
 * Fontstrap v2.8.1 (https://github.com/nretnilkram/fontstrap)
 * Copyright 2018 Mark Lintern
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
