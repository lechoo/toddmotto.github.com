---
title: ViewPort dynamic width calculation, retina and pixel ratio JavaScript widget
author: Todd Motto
layout: post
permalink: /viewport-dynamic-width-calculation-retina-and-pixel-ratio-javascript-widget
---

Dynamically adjusted screen dimensions, retina detection and device pixel ratio. When working on website projects that are responsive, it’s imperative to easily know the exact ViewPort dimensions for calculating media query breakpoints. And what comes with responsive design nowadays? Retina and HiDPi displays.

Simply include this small JavaScript script in your page whilst working on projects, either inside it’s own JS file or in the page source. It’s written in raw JavaScript so no reliance on jQuery for development.

Important: Unless you're going to run this function alongside jQuery (inside a DOM ready function wrapper), you'll need to place the script before the closing &lt;/body&gt; tag.

<div class="download-box">
	<a href="//www.toddmotto.com/labs/viewport-retina" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo ViewPort Resizer', 'ViewPort Resizer Demo']);">Demo</a>
	<a href="//www.toddmotto.com/labs/viewport-retina/viewport-retina.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download ViewPort Resizer', 'ViewPort Resizer Download']);">Download</a>
</div>

### The JavaScript

Here’s a look at the script, wrapped in an immediately-invoked anonymous function.

    <script>
    (function(){
    
    	// Create the ViewPort detector
    	var viewDetector = document.createElement('div');
    	document.getElementsByTagName('body')[0].insertBefore(viewDetector).id = 'viewport-detector';
    
    	// Load and Resize events
    	window.onresize = dynamicResizer;
    	window.onload = dynamicResizer;
    	
    	function dynamicResizer() {
    	    var docWidth = window.innerWidth,
    	    	docHeight = window.innerHeight;
    	    spanDimensions.innerHTML = docWidth   " x "   docHeight;
    	}
    	
    	// Create  and append
    	var spanDimensions = document.createElement('span');
    	spanDimensions.className = 'dimensions';
    	document.getElementById('viewport-detector').appendChild(spanDimensions);
    	
    	// Create  and append
    	var spanRetina = document.createElement('span');
    	spanRetina.className = 'retina';
    	document.getElementById('viewport-detector').appendChild(spanRetina);
    	
    	// Create  and append
    	var spanPixels = document.createElement('span');
    	spanPixels.className = 'pixel-ratio';
    	document.getElementById('viewport-detector').appendChild(spanPixels);
    	
    	spanPixels.innerHTML = 'Pixel Ratio: '   window.devicePixelRatio;
    	
    	// Retina detect
    	if (window.devicePixelRatio >= 2) {
    		spanRetina.innerHTML = 'Retina Device';
    	} else {
    		spanRetina.innerHTML = 'No Retina Device';
    	}
    
    })();
    </script>

First we create the div element which our detection elements will sit inside, there are a series of span classes.

You’ll notice the main function here is the dynamicResizer(), which is present on window.onresize and window.onload. This means the function is executed when the page loads, and is executed when window is beinresized. This is especially great for viewing responsive projects on your smartphone/iPhone/HTC, as the screen width and height is given to you immediately, and you can watch it change when viewing in Portrait or Horizontal mode.

I’ve used the window.innerWidth and window.innerHeight as opposed to document.width and document.height, as the window gives us the total area, including scrollbars.

There is a detection script to check whether the device is a Retina device too, which allows you to optimise your graphics accordingly. As well as Retina detection, if you’re not on Retina, it’ll merely state ‘No Retina Device’ instead.

Alongside Retina, we have a devicePixelRatio detector which will add the pixel ratio into the page. For retina displays, this will show ’2′ showing the pixel density.

### CSS

Here’s the CSS that goes with the widget, you can adopt it to fit your project. It uses position:fixed; to always remain in view. Tweak as you need, I’ve included some nice little icons to make the design more interesting, a semi-transparent background which you can also adjust so you can see some content underneath still.

    <style>
    	#viewport-detector {position:fixed;top:80px;left:0;padding:5px 10px;background:#FFF;background:rgba(255, 255, 255, 0.85);}
    	#viewport-detector span {display:block;padding:2px 0 2px 30px;font:400 12px/1.625 "Helvetica Neue", Helvetica, Arial, sans-serif;}
    	#viewport-detector .dimensions {background:url(img/icon-1.png) no-repeat left center;}
    	#viewport-detector .retina {background:url(img/icon-2.png) no-repeat left center;}
    	#viewport-detector .pixel-ratio {background:url(img/icon-3.png) no-repeat left center;}
    </style>

### Tips

You’ll need the ViewPort meta tag (supplied in the download) to get the width of your responsive page. Here’s the ViewPort tag to copy and paste otherwise:

    <meta name="viewport" content="width=device-width,initial-scale=1.0">

Place the ViewPort meta tag in the head of your document and remember – this script needs to be inside the body tag, not in the head.

<div class="download-box">
	<a href="//www.toddmotto.com/labs/viewport-retina" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo ViewPort Resizer', 'ViewPort Resizer Demo']);">Demo</a>
	<a href="//www.toddmotto.com/labs/viewport-retina/viewport-retina.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download ViewPort Resizer', 'ViewPort Resizer Download']);">Download</a>
</div>