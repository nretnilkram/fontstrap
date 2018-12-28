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
