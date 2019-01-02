/*
 * Fontstrap v2.8.2 (https://github.com/nretnilkram/fontstrap)
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

	$window.on('beforeunload', function() {
		$(window).scrollTop(0);
	});

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
