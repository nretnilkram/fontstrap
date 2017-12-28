/*
 * imagePopOut will take the image selector and when click it will open the image in a modal for Larger view.
 */

jQuery.fn.imagePopOut = function(settings){

	if ( no_lodash ) {
		console.log('Lodash was not found and is required by the fullScreenBackground plugin.');
		return false;
	}

	if (elementMissing($(this), "imagePopOut()")) { return false; }

	var options = jQuery.extend({
		width: 75, // percentage
		backdropEl: '.image-pop-out-backdrop',
		imgContainerEl: '.image-pop-out-container'
	}, settings);

	var $self = $(this),
	closeIcon = $('<i>').addClass('fa fa-times')
	closeBtn = $('<button>').addClass('image-pop-out-close-btn btn-sm bg-dark text-white').append(closeIcon);

	if ($('.image-pop-out-backdrop').length == 0) {
		$('body').append($('<div>').addClass('fixed-full image-pop-out-backdrop'));
	}

	if ($('.image-pop-out-container').length == 0) {
		$('body').append($('<div>').addClass('fixed-full image-pop-out-container text-center'));
	}

	// Close on click of background
	$(options.imgContainerEl).click(function () {
		$(options.imgContainerEl).removeClass('open');
		$(options.backdropEl).removeClass('open');
	});

	// Close on click of close button
	$('.image-pop-out-close-btn').click(function () {
		$(options.imgContainerEl).removeClass('open');
		$(options.backdropEl).removeClass('open');
	});

	_.each($self, function (img) {
		$img = $(img);
		$img.addClass('cursor-pointer');
		$img.click(function () {
			var $window = $(window),
			wHeight = $window.height(),
			image = new Image();

			image.src = $(this).attr("src");

			// Add the image
			$(options.imgContainerEl).html($('<div>').addClass('image-pop-out-wrapper').append($('<img>').addClass('pop-out-image').attr('src', image.src)).append(closeBtn));

			// Show the pop out
			$(options.backdropEl).addClass('open');
			$(options.imgContainerEl).addClass('open');

			// Center the image
			var diff =  wHeight - $('.image-pop-out-wrapper').height();
			if ( diff > 0 ){
				var padding = diff / 2;
				$('.image-pop-out-wrapper').css({'margin-top': padding});
			} else {
				$('.pop-out-image').css({'height': wHeight});
			}

			// Do not hide on image click
			$(options.imgContainerEl + ' img').click(function (e) {
				e.stopPropagation();
			});
		});
	});

};
