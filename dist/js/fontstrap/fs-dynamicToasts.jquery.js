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
jQuery.fn.dynamicToasts = function(settings) {
	if (elementMissing($(this), "dynamicToasts()")) { return false; }

	var positions = jQuery.extend({
		right: 'ml-auto',
		left: 'mr-auto'
	});

	var options = jQuery.extend({
		message: 'Fontstrap Toast',
		headerText: 'Fontstrap',
		customClass: 'fs-toast',
		delay: 2000,
		autohide: true,
		position: 'right'
	}, settings);

	var toast = $('<div>').addClass('toast ' + options.customClass + ' ' + positions[options.position]).data('autohide', options.autohide).data('delay', options.delay);

	var toastHeader = $('<div>').addClass('toast-header');
	toastHeader.append($('<img>').attr('src','../dist/img/favicon.png').addClass("rounded mr-2").attr('width', '20px'));
	toastHeader.append($('<strong>').addClass('mr-auto').html(options.headerText));
	toastHeader.append($('<small>').addClass('text-muted').html('now'));
	toastHeader.append($('<button>').attr('data-dismiss', 'toast').addClass('ml-2 mb-1 close').attr('type', 'button').append($('<span>').html('&times;')));

	var toastBody = $('<div>').addClass('toast-body').html(options.message);

	toast.append(toastHeader).append(toastBody);

	$(this).append(toast);
	$(toast).toast('show');
};
