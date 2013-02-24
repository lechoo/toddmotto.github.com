/*
	Bounce(this) v1.0.0
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/bounceThis
	
	Copyright 2013 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php

	BounceThis jQuery Plugin, super simple bouncing headers.
*/
;(function($) {
		
	$.fn.bounceThis = function (options) {
		
		// Create our default settings
		var settings = {
			bounceHeight: '20px',
			dropDownSpeed: 300,
			delay: 400
		};
		
		// Load our settings
		if(options) {
			$.extend(settings, options);
		}
		
		// Run it, run it
		return this.each(function () {
		
			// Create a variable for $(this)
			var $this = $(this),
			
				// Grab our item's height, passing 'true' on outerHeight includes margins
				itemheight = $this.outerHeight(true);
				
			// Wrap the targeted element in a <div>
			// This allows us to use absolute positioning
			// On the child without losing the element's natural height
			$this.wrap('<div class="bounceThis" />');
			
			// Target our newly created element, give it the exact height as the targeted element
			// We do this to mimic it's physical space when animating
			// Position it relative, to setup more relative positioning on the child element
			$('.bounceThis').css({
				height: itemheight,
				position: 'relative'
			});
			
			// Hide the element
			$this.hide();
			
			// Remove from view whilst hidden, equivalent to element height
			$this.animate({
				top: "-" + itemheight
			},
				// After negative animation on the invisible element, add position relative
				// Show the element to make it visible again, but offscreen still
				function () {
					$(this).css({
						position: 'relative'
					}).show();
				}
			);
			
			// Delay by user settings
			// Animate at the declared bounceHeight
			$this.delay(settings.delay).animate({
				top: settings.bounceHeight
			},
			
			// Animate it at our declared dropDownSpeed
			// This speed applies to both animations
			settings.dropDownSpeed,

			// Run the last animation to bring it to the top again
			function () {
				$this.animate({
					top: 0
				});
			});
		});
	};
})(jQuery);