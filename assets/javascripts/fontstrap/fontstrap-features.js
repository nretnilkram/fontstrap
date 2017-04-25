$('.js-trigger').click(function (event) {
	event.preventDefault();
});

var elementMissing = function (sel, methodName) {
	if ( sel.length === 0 ) {
		console.log('Element does not exist. Did not execute ' + methodName + '. Please check the selector.');
		return true;
	} else {
		return false;
	}
};

jQuery.fn.fullScreenBackground = function(settings){

	if (elementMissing($(this), "fullScreenBackground()")) { return false; }

	var options = jQuery.extend({
		dataImageVar: 'image'
	}, settings);

	var backgrounds = $(this);

	backgrounds.each(function () {
		var img = $(this).data(options.dataImageVar);
		$(this).css({'background-image': "url('" + img + "')"});
	});

};

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

var buildTracker = function (count) {
	object = {};
	for (i = 0; i < count; i++) {
		object[i] = 0;
	}
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

jQuery.fn.alignBlocks = function(settings) {

	if (elementMissing($(this), "alignBlocks()")) { return false; }

	var options = jQuery.extend({
		countPerRow: 4,
		block: '.list-item',
		'x-margin': 0
	}, settings);

	var tracker = buildTracker(options.countPerRow),
	$self = $(this),
	fullWidth = $self.width(),
	colWidth = fullWidth / options.countPerRow;

	$self.find(options.block).each(function (x, item) {
		var column = nextColumn(tracker);
		var previousHeight = tracker[column];
		tracker[column] = previousHeight + $(this).outerHeight( true );
		$(this).css({ 'position': 'absolute', 'top': previousHeight + 'px', 'left': ( ( column * colWidth ) + ( options['x-margin'] / 2 ) ) + 'px', 'width': ( colWidth - options['x-margin'] ) });
	});

	$self.css({ 'position': 'relative', 'height': newHeight(tracker) + 'px' });
};
