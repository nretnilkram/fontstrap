/*
 * Fontstrap v1.2.5 (https://github.com/nretnilkram/fontstrap)
 * Copyright 2017 Mark Lintern
 * Licensed under MIT (https://github.com/nretnilkram/fontstrap/blob/master/LICENSE)
 */

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
