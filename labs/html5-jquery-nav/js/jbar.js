/*
	jBar v1.0.0
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/jBar

	The jBar plugin, a simple and lightweight notification banner.
*/

;(function ($) {

	$.jBar = function(options) {
	
		// jBar Defaults
		var defaults = {
			type             : 'fixed', // Fixed/Static
			delay            : '1000', // In milliseconds
            backgroundColor  : '#DB5903', // Background Color
            borderColor      : '#FFF', // Background Color
            buttonTextColor  : '#FFF', // Button Text
            buttonColor      : '#333', // Button Color
            buttonColorHover : '#222', // Button Color Hover
            calltoAction     : 'jBar Plugin! A simple and lightweight notification banner.', // Call to action text
            buttonText       : 'Download it!', // Button Text
            buttonLink       : 'http://www.toddmotto.com' // Hyperlink from button
		};
		
		// jBar Options
		var options = $.extend(defaults, options);
		
		// Shorten Option Names
	    var type             = options.type,
	    	delay            = options.delay,
	    	backgroundColor  = options.backgroundColor,
	    	borderColor      = options.borderColor,
	    	buttonTextColor  = options.buttonTextColor,
	    	buttonColor      = options.buttonColor,
	    	buttonColorHover = options.buttonColorHover,
	    	calltoAction     = options.calltoAction,
	    	buttonText       = options.buttonText,
	    	buttonLink       = options.buttonLink;

		// jBar Markup
		var jbar_html = '<div id="jbar" class="jbar">' + '<span class="jbar-cta">'
					  + '<p class="text">' + calltoAction + '<a href="' + buttonLink + '">'
					  + buttonText + '</a></p>' + '<p class="downarrow"><img src="img/arrow-up.png" class="jtrigger arrow" alt="Arrow Up"></p>'
					  + '</span></div>' + '<span class="jribbon"><img src="img/arrow-down.png" class="arrow jtrigger" alt="Arrow Down"></span>';

	    // jBar Styles
	    var styles = '<style>' + '.jbar{background:' + backgroundColor + ';top:0;left:0;right:0;height:46px;z-index:999998;color:#FFF;border-bottom:3px solid ' + borderColor + ';display:none;}'
	    		   + '.jbar-cta{display:block;max-width:1280px;margin:0 auto;padding:5px;}'
	    		   + '.jribbon{padding:5px 2px 0;z-index:999999;top:0;right:4%;display:none;width:38px;text-align:center;background:' + backgroundColor + ';border:3px solid #FFF;'
	    		   + 'border-top:none;box-shadow:0 2px 5px #333;color:#FFF;cursor:pointer;border-radius:0 0 3px 3px;}' 
	    		   + '.downarrow{top:11px;right:4%;width:50px;text-align:center;position:absolute;}' + '.jribbon:hover{cursor:pointer;}' 
	    		   + '.text{display:block;padding:7px 0;font-weight:900;text-align:center;}' + '.text a{font-weight:500;text-decoration:none;color:' 
	    		   + buttonTextColor + ';margin:0 10px;padding:5px 10px;background:' + buttonColor + ';border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;}' 
	    		   + '.text a:hover{background:' + buttonColorHover + ';}.arrow{cursor:pointer;}.fixed{position:fixed;}.static{position:absolute;}</style>';
	    	
	    // Append Styles to <head>
		$('head').append(styles);

		// Prepend jBar to <body>
		$('body').prepend(jbar_html);

		// Options 'Top' and 'Fixed' are selected
		if (type == 'fixed') {
		
			// Add class 'position-top-fixed'
			$('#jbar').addClass('position-top fixed');
			$('.jribbon').addClass('fixed');
			
			// Initial Animation
	        $('body').prepend('<div id="jbar-push" style="height:46px;display:none;" />');
	        $('#jbar, #jbar-push').delay(delay).slideDown(300);
	        
	        // User Animation
	        $('.jtrigger').click(function(){
	        	$('#jbar-push').slideToggle();
	        	$('#jbar').slideToggle();
	        	$('.jribbon').slideToggle(200);
	        });
	        
		}
		
		// Options 'Top' and 'Static' are selected
		if (type == 'static') {
		
			// Add class 'position-top-fixed'
			$('#jbar').addClass('position-top');
			$('.jribbon').addClass('static');
			
			// Initial Animation
	        $('#jbar').delay(delay).slideDown(300);
	        
	        // User Animation
	        $('.jtrigger').click(function(){
	        	$('#jbar').slideToggle();
	        	$('.jribbon').slideToggle(200);
	        });
			
		}

    };

})(jQuery);