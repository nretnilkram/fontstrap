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

  var options = jQuery.extend({
  }, settings);

	var $window = $(window),
	$el = $(this),
	elTop = $el.offset().top;

	$window.scroll(function() {
		$el.toggleClass('sticky', $window.scrollTop() > elTop);
	});
};
