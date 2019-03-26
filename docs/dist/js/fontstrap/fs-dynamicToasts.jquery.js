/*
 * Fontstrap v2.11.0 (https://github.com/nretnilkram/fontstrap)
 * Copyright 2019 Nretnil Kram
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
 * Helpers for dynamicToasts
 */

function now() {
	return Math.floor(Date.now() / 1000);
}

function since(initTime) {
	var diff = now() - parseInt(initTime);
	var value = diff;
	var label = 'sec';
	if ( diff > (60 * 60 * 24) ) { // days
		value = _.floor(diff / (60 * 60 * 24));
		label = 'day'
	} else if ( diff > (60 * 60) ) { // hours
		value = _.floor(diff / (60 * 60));
		label = 'hr'
	} else if ( diff > 59 ) { // mins
		value = _.floor(diff / 60)
		label = 'min';
	}
	if ( value > 1 ) {
		label += 's'
	}
	if ( value == 0 ) {
		return 'now'
	}
	return value + ' ' + label + ' ago';
}

var intervals = [];

function updateTime(element) {
	if ( $('.' + element + ':visible').length > 0 ) {
		$('.' + element + ':visible').updateToasts();
	} else {
		stopUpdate();
	}
}

function startUpdate(element, interval) {
	intervals.push(setInterval(updateTime, interval, element));
}

function stopUpdate() {
	_.each(intervals, function (i) {
		clearInterval(i);
	});
	intervals = [];
}

jQuery.fn.updateToasts = function(settings) {
	if (elementMissing($(this), "updateToasts()")) { return false; }

	if ( no_lodash ) {
		console.log('Lodash was not found and is required by the updateToasts plugin.');
		return false;
	}

	var options = jQuery.extend({
	}, settings);

	$(this).each(function (x, toast) {
		$(toast).find('.time-since').html(since($(toast).data('toast-time')));
	})
};

jQuery.fn.dynamicToasts = function(settings) {
	if (elementMissing($(this), "dynamicToasts()")) { return false; }

	if ( no_lodash ) {
		console.log('Lodash was not found and is required by the dynamicToasts plugin.');
		return false;
	}

	var positions = jQuery.extend({
		right: 'ml-auto',
		left: 'mr-auto'
	});

	var options = jQuery.extend({
		message: 'Fontstrap Toast',
		headerText: 'Fontstrap',
		customClass: 'fs-toast',
		delay: 2000,
		updateInterval: 5000,
		autohide: true,
		position: 'right'
	}, settings);

	var toast = $('<div>').addClass('toast ' + options.customClass + ' ' + positions[options.position]).attr('data-autohide', options.autohide).attr('data-delay', options.delay).attr('data-toast-time', now());

	// Build Bootstrap 4 toast
	var toastHeader = $('<div>').addClass('toast-header');
	toastHeader.append($('<img>').attr('src','../dist/img/favicon.png').addClass("rounded mr-2").attr('width', '20px'));
	toastHeader.append($('<strong>').addClass('mr-auto').html(options.headerText));
	toastHeader.append($('<small>').addClass('text-muted time-since').html('now'));
	toastHeader.append($('<button>').attr('data-dismiss', 'toast').addClass('ml-2 mb-1 close').attr('type', 'button').append($('<span>').html('&times;')));

	var toastBody = $('<div>').addClass('toast-body').html(options.message);

	toast.append(toastHeader).append(toastBody);

	$(this).append(toast);
	$(toast).toast('show');
	updateTime(options.customClass);
	stopUpdate();
	startUpdate(options.customClass, options.updateInterval);
};
