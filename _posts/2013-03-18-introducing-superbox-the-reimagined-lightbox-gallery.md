---
layout: post
permalink: /introducing-superbox-the-reimagined-lightbox-gallery
title: Introducing SuperBox the re-imagined lightbox gallery
---

SuperBox is a new jQuery plugin I've been composing over the last few days. SuperBox takes the whole 'image' and 'lightbox' one step further, reducing the JavaScript and image load dependence to make lightboxing a thing of the past! Using HTML5 data-* attributes, responsive layouts and jQuery, here's SuperBox.

SuperBox works wonders as a static image gallery, which you can click to reveal a full version of the image. Each image in the demo is the same size, but SuperBox supports any image size.

<div class="download-box">
	<a href="//toddmotto.com/labs/superbox" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo SuperBox, 'SuperBox Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/superbox/superbox.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download SuperBox, 'SuperBox Download']);">Download</a>
</div>

### HTML
The markup is pretty neat and tidy, and to adhere to the CSS challenge faced with building it, SuperBox uses display:inline-block on the elements to display them next to eachother. One &lt;div&gt; will look like the following:

{% highlight html %}
<div class="superbox-list">
	<img src="img/superbox/superbox-thumb-1.jpg" data-img="img/superbox/superbox-full-1.jpg" alt="" class="superbox-img">
</div>
{% endhighlight %}

By default, display:inline-block; creates a gap between elements, which we don't want. So to eradicate this, we can do the following with some HTML comments, which is perfectly acceptable:

{% highlight html %}
<div class="superbox-list">
	<img src="img/superbox/superbox-thumb-1.jpg" data-img="img/superbox/superbox-full-1.jpg" alt="" class="superbox-img">
</div><!--
--><div class="superbox-list">
	<img src="img/superbox/superbox-thumb-2.jpg" data-img="img/superbox/superbox-full-2.jpg" alt="" class="superbox-img">
</div><!--
--><div class="superbox-list">
	<img src="img/superbox/superbox-thumb-3.jpg" data-img="img/superbox/superbox-full-3.jpg" alt="" class="superbox-img">
</div>
{% endhighlight %}

### HTML5 data-* attributes
SuperBox feeds off the data-img custom attribute I've added to display the full image, this means we don't have to rely on more markup as it dynamically appends the data-img source for you.

### CSS
The 'expander' if you'd like to call it that, which expands and displays the current image you've clicked on uses a float, which allows it to fill up the entire row of divs using some clever CSS trickery.

The CSS for each 'box' looks like so, which you can see includes the *display:inline; hack for IE7 fixing:

{% highlight css %}
.superbox-list {
	display:inline-block;
	*display:inline;
	zoom:1;
	width:12.5%;
}
{% endhighlight %}

Each image uses a maximum width property as well, so that it responds fluidly to the width of the viewport.

### Responsive
SuperBox is also responsive, allowing you to use it across any device. The media queries are really basic so you can build and expand upon it to fit within your project.

### jQuery
The jQuery is pretty simple stuff, and at the minute it's a pretty simple lightweight plugin:

{% highlight javascript %}
;(function($) {
		
	$.fn.SuperBox = function(options) {
		
		var superbox      = $('<div class="superbox-show"></div>');
		var superboximg   = $('<img src="" class="superbox-current-img">');
		var superboxclose = $('<div class="superbox-close"></div>');
		
		superbox.append(superboximg).append(superboxclose);
		
		return this.each(function() {
			
			$('.superbox-list').click(function() {
		
				var currentimg = $(this).find('.superbox-img');
				var imgData = currentimg.data('img');
				superboximg.attr('src', imgData);
				
				if($('.superbox-current-img').css('opacity') == 0) {
					$('.superbox-current-img').animate({opacity: 1});
				}
				
				if ($(this).next().hasClass('superbox-show')) {
					superbox.toggle();
				} else {
					superbox.insertAfter(this).css('display', 'block');
				}
				
				$('html, body').animate({
					scrollTop:superbox.position().top - currentimg.width()
				}, 'medium');
			
			});
						
			$('.superbox').on('click', '.superbox-close', function() {
				$('.superbox-current-img').animate({opacity: 0}, 200, function() {
					$('.superbox-show').slideUp();
				});
			});
			
		});
	};
})(jQuery);
{% endhighlight %}

You can then call SuperBox like so:

{% highlight javascript %}
$(function() {
	$('.superbox').SuperBox();
});
{% endhighlight %}

### Browser support
I've tested SuperBox on all modern browsers, IE7, IE8, IE9 and IE10 and it works perfectly. The sizing is a little different in IE7 as by default the plugin is shipped with box-sizing:border-box; which changes the CSS box model for the better. Read up on it if you're unsure about box-sizing.

### Extending SuperBox
At the minute SuperBox is pretty flexible and a perfect platform to build upon. I do plan on updating it to include more features in the near future. Should you have ideas for future plugin additions, feel free to get involved and comment, fork or update it.

<div class="download-box">
	<a href="//toddmotto.com/labs/superbox" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo SuperBox, 'SuperBox Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/superbox/superbox.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download SuperBox, 'SuperBox Download']);">Download</a>
</div>