---
title: Browser-based responsive development tool, viewport resizing, custom widths
author: Todd Motto
layout: post
permalink: /browser-based-responsive-development-tool-viewport-resizing-custom-widths
disqus: http://www.toddmotto.com/browser-based-responsive-development-tool-viewport-resizing-custom-widths
---

Designing in the browser is increasingly popular, especially with responsive websites. Having a reliable and simple viewport resizer is key to any responsive developer’s workflow. From the popularity of my [jResize plugin][1], I’ve created an enhanced, browser-based version that requires no downloading or installations.

 [1]: //www.toddmotto.com/jresize-plugin-for-one-window-responsive-development

Just load your website up, add any custom widths you wish to use, or use the ones I’ve included, which are an array of popular viewport widths, and get developing.

<div class="download-box">
	<a href="//www.toddmotto.com/labs/responsive" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo Responsive Tool, 'Responsive Tool Demo']);">Demo</a>
</div>

### Feature: ViewPort resizing

Choose from amongst the most popular viewport widths to scale your responsive sites and develop with ease.

### Feature: Scrollbar detection for pixel perfection

Scrollbars add to the width of the resized document, which in some cases can be unreliable. In the development tool, there’s a scrollbar width detection script which appends any extra widths you need. On Mac OS X, using browsers such as Chrome, Safari, scrollbars are invisible, which means that the viewport width is reduced to exactly 320px. For windows and browsers like FireFox, they have scrollbars, the width is added onto the 320px. For instance if the scrollbar width is 15px (such as on Mac), you’ll end up width an appended 320px 15px = 335px – leaving a perfect document width of 320px.

### Feature: Custom viewport widths

Add custom widths on the fly and test them alongside the most popular viewports.

### The main script

Here’s the main script, for those wishing to see how it works.

{% highlight javascript %}
// ViewPort script
(function() {
	// Create the iFrame
	var iframe    = document.createElement('iframe');
	
	// Get the current document height and width
	var docHeight = $(document).height() - 118;
	var docWidth  = $(document).width();
	
	// iFrame attributes
	iframe.src    = '//toddmotto.com';
	iframe.className = 'viewport';
	iframe.height = docHeight;
	iframe.width  = docWidth;
	
	// Append to body
	document.body.appendChild(iframe);
	
	// New URL submit
	$('#url').submit(function() {
	
		// Get the input value (URL)
		var inputValue = document.getElementById('input').value;
		
		// If the input doesn't have a value, show error
		// Else, update the input value with the new source
		if(!inputValue) {
			document.getElementById('input').className = 'warning';
			return false;
		} else {
			// If the input doesn't contain http:// - add it!
			if(inputValue.substr(0,7) != 'http://'){
				iframe.src = 'http://'   inputValue;
			} else {
				iframe.src = inputValue;
			}

		return false;
		} 
	});
	
	// New width submit
	$('#addwidth').submit(function() {
	
		// Get the input value (Submit)
		var inputValue = document.getElementById('pixel').value;
		
		// If the input doesn't have a value, show error
		// Else, create a new list element and append data-* attribute
		if(!inputValue) {
			document.getElementById('pixel').className = 'warning';
			return false;
		} else {
			// Check if any letters are in the value
			// Append li attributes with custom width
			if(isNaN(inputValue)) {
				alert('Numbers only please, don't add the 'px'');
			} else {
				var li = document.createElement('li');
				li.setAttribute('data-width', inputValue);
				li.className = 'custom-width';
				li.innerHTML = inputValue   'px';
				document.getElementById('viewports').appendChild(li);
			}
			return false;
		} 
	});
	
	// Scrollbar test
	var scrollBars = document.createElement('div');
	scrollBars.className = 'scroll-test';
	document.body.appendChild(scrollBars);
	
	// Find the scrollbar width
	var scrollbarWidth = scrollBars.offsetWidth - scrollBars.clientWidth;
	document.body.removeChild(scrollBars);
	
	// Using jQuery on for dynamic element click events
	$('body').on('click', '#viewports li', function() {
		
		// For any list item add/remove 'active' class
		$(this).addClass('active').siblings().removeClass('active');
		
		// If the class is the reset button, reset the width
		// Else, animate the viewport and add any scrollbar widths
		if($(this).hasClass('reset')) {
			$(iframe).css({'display': 'block'}).animate({width: docWidth}, 'slow');
		} else {
			var dataWidth = this.getAttribute('data-width');
			var fullWidth =  dataWidth    scrollbarWidth;
			$(iframe).css({'display': 'block'}).animate({width: fullWidth}, 'slow');
		}
	});
	
	// Onload remove the ajax loader
	window.onload = function() {
		document.getElementById('ajax').remove();
	}
})();
{% endhighlight %}    

### HTML5 and JavaScript

The ViewPort resizer works best on HTML5/CSS3 supported browsers. If you spot any errors, or suggestions for improvement then please leave your thoughts via a comment below.

<div class="download-box">
	<a href="//www.toddmotto.com/labs/responsive" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo Responsive Tool, 'Responsive Tool Demo']);">Demo</a>
</div>