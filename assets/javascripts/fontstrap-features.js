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
