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
		if ( img === undefined ) {
			console.log('fullScreenBackground: No image provided.');
		} else {
			$(div).css({'background-image': "url('" + img + "')"});
		}
	});

};
