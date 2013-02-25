---
title: bounceThis plugin, mimics CSS3 keyframes bouncing header animations
author: Todd Motto
layout: post
permalink: /bouncethis-plugin-mimics-css3-keyframes-bouncing-header-animations
disqus: http://www.toddmotto.com/bouncethis-plugin-mimics-css3-keyframes-bouncing-header-animations
---

We all love those slick animated drop-down headers that gracefully drop into the page on-load. This is usually done via some CSS3 keyframes code, but here’s the jQuery version. Here I introduce bounceThis plugin, the cross-browser compatible, super slick and sharp bouncing headers CSS3 keyframes alternative. Who says your client using Internet Explorer can’t see their kick-ass new header?

As much as I love CSS3 keyframes, it's also cool to create things that work consistently for as many devices and platforms as possible, it’s a nice great challenge to emulate some awesome CSS3 goodness and provide a cross-browser consistent plugin. No ‘iPhone’ or ‘Chrome’ only excuses for your clients. And breathe.

Not all projects require some fancy effects, but if yours does, try out the bounceThis plugin, it’s really simple to integrate, only 0.6KB in weight, and so easy to customise your bouncing headers.

Tested in: Chrome, Safari, FireFox, Opera, IE7, IE8, IE9. Good to go.

<div class="download-box">
	<a href="//www.toddmotto.com/labs/bouncethis" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo bounceThis', 'bounceThis Demo']);">Demo</a>
	<a href="//www.toddmotto.com/labs/bouncethis/bouncethis.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download bounceThis', 'bounceThis Download']);">Download</a>
	<a href="//github.com/toddmotto/bounceThis" onclick="_gaq.push(['_trackEvent', 'Click', 'Fork bounceThis', 'bounceThis Fork']);">Fork</a>
</div>

### Markup and Usage

Simply download the script, and call it in your DOM Ready function like so on your header element, you’ll need to ensure jQuery is thrown in there too. Now, let’s be sensible here – not all designs will be setup to make use of the plugin, so take note from the Demo on what style of header it would work best on. Right at the top, in or outside your wrapper container.

{% highlight javascript %}
$('#header').bounceThis();
{% endhighlight %}

Let’s look at the options included and the setup:

{% highlight javascript %}
$(function() {
	$('#header').bounceThis({
		bounceHeight  : '20px',
		dropDownSpeed : 300,
		delay         : 400
	});
});
{% endhighlight %}

The fully commented version is around 2KB, and minified is around 0.6KB only. Now here are the options explained.

bounceHeight – When it drops from the top of the page, you can specify the height of the fall. If you want it to just slide down, with no bouncing effect, simply put ’0px’ as your bounceHeight.

dropDownSpeed – Pretty self explanatory, choose your drop down speed. By default this is 300ms, select your optimum speed.

delay – Set the time you want your bouncing header to drop in. This works best after around 300ms (I’ve opted for 400), as the page should be loaded around then. If your page is heavier on resources, I’d recommend setting the delay a little later, until your content is fully loaded.

### Advice

Run it on DOM Ready. Just copy the demo. Don’t run it on window load, as your header will be visible until your ‘delay’ kicks in to begin the animating.

### How it works

The clockwork behind the plugin, if you’re interested. It’s fully commented as well.

First we start off by creating the plugin, using a semi-colon as a safety net for any unclosed JavaScript elsewhere or other conflictions.

{% highlight javascript %}
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
{% endhighlight %}

Most of the code is commented, but I feel the main parts here to talk about are the outerHeight(true) property, which is passed to include the margins on the selected element as well.

To animate the header we need to effectively &#8216;remove it&#8217;. This posed questions on how to tackle the issue of it&#8217;s physical space being removed. This is where we use jQuery wrap to wrap our element in a  and hook off the outerHeight(true) declaration to effectively clone it&#8217;s physical space. We then position it relative, to allow for no conflicts and more relative positioning inside, which allows us to animate the header nicely, and let it drop into it&#8217;s reserved space.
    
<div class="download-box">
	<a href="//www.toddmotto.com/labs/bouncethis" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo bounceThis', 'bounceThis Demo']);">Demo</a>
	<a href="//www.toddmotto.com/labs/bouncethis/bouncethis.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download bounceThis', 'bounceThis Download']);">Download</a>
	<a href="//github.com/toddmotto/bounceThis" onclick="_gaq.push(['_trackEvent', 'Click', 'Fork bounceThis', 'bounceThis Fork']);">Fork</a>
</div>
