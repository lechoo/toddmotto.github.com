---
title: Create a simple jQuery hover call-to-action box
author: Todd Motto
layout: post
permalink: /create-a-simple-jquery-hover-call-to-action-box
disqus: http://www.toddmotto.com/create-a-simple-jquery-hover-call-to-action-box
---

Here’s a quick and easy tutorial on how to create a small call to action box using two images, some CSS and jQuery. Article includes a free download for implementation on your own website.

<div class="download-box">
	<a href="//toddmotto.com/labs/hover-box" onclick="_gaq.push(['_trackEvent', 'Click', 'jQuery Hover Box Demo', 'jQuery Hover Demo Button']);">Demo</a>
	<a href="//toddmotto.com/labs/hover-box/hover-box.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'jQuery Hover Box Download', 'jQuery Hover Box Download Button']);">Download</a>
</div>

### How It Works
In the markup, we specify two images with the same absolute positioning. This allows ‘Image 1′ to overlap ‘Image 2′ so that it is hidden underneath. ‘Image 1′ is the original image, whereas ‘Image 2′ is a replica of the first image, but with a Gaussian Blur and button applied. Using jQuery, ‘Image 1′ is hidden upon hover over, which shows the second image. Hovering off again does the exact opposite.

### HTML
Using an outer ‘div’ to wrap our images, inside we include our hyperlink (to wherever your call to action goes to) and our two overlapping images. Note the first image has a class called ‘static’ and the second, a class called ‘blur’. This is so we know which image is which. Static image is the one we see upon page load, and the blur, is our blurred image. These were both created using Photoshop.

{% highlight html %}
<div id="blur">
	<a href="#">
	<img src="img/hover-box-1.jpg" class="static">
	</a>
	<img src="img/hover-box-2.jpg" class="blur">
</div>
{% endhighlight %}

### CSS
In the CSS we need to use relative positioning on the surrounding ‘div’ so that any elements inside that we position ‘absolute’ behave correctly.

{% highlight css %}
/* Containing Element */
#blur {
	position:relative;
}

/* Static Image Shown Before Hover */
#blur img.static {
	position:absolute;
	left:0;
	top:0;
	z-index:1;
}

/* Image Shown Upon Hover */
#blur img.blur {
	position:absolute;
	left:0;
	top:0;
}
{% endhighlight %}

### jQuery
Using a simple jQuery hover function we set the top image (which we’ve specified as “img.static”) to reduce it’s opacity to ’0′ (zero) upon hover. The “350″ is the timing delay in between (which you can change!), so it slowly fades instead of an instant zero opacity.

{% highlight javascript %}
$(function(){
	$("img.static").hover(
	function() {
		$(this).stop().animate({"opacity": "0"}, 350);
	},
	function() {
		$(this).stop().animate({"opacity": "1"}, 350);
	});
});
{% endhighlight %}
    
<div class="download-box">
	<a href="//toddmotto.com/labs/hover-box" onclick="_gaq.push(['_trackEvent', 'Click', 'jQuery Hover Box Demo', 'jQuery Hover Demo Button']);">Demo</a>
	<a href="//toddmotto.com/labs/hover-box/hover-box.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'jQuery Hover Box Download', 'jQuery Hover Box Download Button']);">Download</a>
</div>