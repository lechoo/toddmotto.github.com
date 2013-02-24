/*
	imgShufflr v1.0.0
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/imgShufflr
	
	Copyright 2012 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php

	imgShufflr jQuery Plugin, randomise/shuffle images on pageload
*/
;(function($) {
		
	$.fn.imgShufflr = function(options) {
		
		// imgShufflr settings
		var settings = {
			imgType  : 'inline', // inline or background
			imgs     : ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg"], // Image array
			imgPath  : 'img/shuffle/', // Image directory
			imgAlt   : 'Random Image', // Alternate text on images
			imgTitle : 'Title', // Title text on images
			imgClass : 'shuffled' // Class name for the images
		};
		
		// Load our settings
		if (options) {
			$.extend(settings, options);
		}
		
		// Shuffle, shuffle
		return this.each(function() {
		
			// Define our variables
			var $this = $(this),
				imgs  = settings.imgs,
				img   = imgs[Math.floor(Math.random() * imgs.length)];
			
			// If the settings are inline <img>
			if (settings.imgType === 'inline') {
			
				// Prepend the inline <img> with the following attributes
				$this.prepend(
					$('<img>')
						.attr({
							src   : settings.imgPath + img,
							alt   : settings.imgAlt,
							title : settings.imgTitle,
							class : settings.imgClass
						})
				);
			
			}
			
			// If the settings are background image
			if (settings.imgType === 'background') {
			
				// Load the image into the CSS as a background image
				$this.css({
					'background-image':'url(' + settings.imgPath + img + ')'
				});
			}
			
		});
	};
})(jQuery);