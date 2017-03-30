$('.js-trigger').click(function (event) {
	event.preventDefault();
});

jQuery.fn.fullScreenBackground = function(settings){

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
