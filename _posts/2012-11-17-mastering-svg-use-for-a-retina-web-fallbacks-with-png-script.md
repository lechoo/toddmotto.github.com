---
title: Mastering SVG use for a retina web, fallbacks with PNG script
author: Todd Motto
layout: post
permalink: /mastering-svg-use-for-a-retina-web-fallbacks-with-png-script
---

SVGs (Scalable Vector Graphics) are the future graphics format of the web, they offer resolution-independent, fully scalable and crystal clear graphics. SVGs use XML to define paths and shapes, to create our graphic. Moving past JPG and PNG, SVG is the answer to Retina (HiDPI) displays, they even look better on standard display.

#### This Script has been updated, jQuery and Modernizr independent: 27.12.2012 – [updated script][1]

This tutorial explains how we can link an SVG through an image element, providing PNG fallbacks with Modernizr and jQuery/JavaScript supports.

 [1]: #update

Consider your options for SVG use, and then realise the full power of them; logos, icons, navigations, patterns, repeating backgrounds, all fully scalable to any size. This saves a bunch of time not having to create doubled-up graphics (@x2) for Retina. We will have to create a PNG version of our SVGs for fallbacks, but they’ll be the exact same size, not @x2 which saves resizing issues.

### HTML5 and SVG

There are a few ways to use SVG, as an , , ,  and last but not least, the  tag – my favourite.

HTML5 spec allows for the use of an SVG inside the  tag, which makes it super easy and fast to get started using SVG, and this is where we’ll go in this tutorial. Here’s what our source code could look like using SVG inside an  tag:

    

Pretty simple. And that’s it.

To create an SVG, you’ll need a vector graphics program like Adobe Illustrator. I recommend creating your SVG ‘to size’ – by this I mean that if your graphic needs to be 100×60 pixels, then use a canvas inside Illustrator at these dimensions, making sure your graphic fills the full width/height.

### SVG Support

Usual story – IE9 does support SVG, but IE6/7/8 do not, and all modern browsers do. So what do we do for these browsers…

### Modernizr Detection

First we need to know whether the browser can support SVG, and for this we’ll be using feature detection with [Modernizr][2]. We could test the features of a browser by doing the following:

 [2]: /progressive-enhancement-feature-detection-with-modernizr

    if (Modernizr.svg) {
        // Supports SVG
    } else {
        // Doesn't support SVG (Fallback)
    }

We declare SVG in our markup (logo.svg), so we don’t want to execute any functions if the browser does support SVG – it’s native. The only time we want to execute something is if it doesn’t support SVG.

### Modernizr SVG Setup

There’s no point including an if or else function to provide a fallback for SVG, as we only want to execute a function if the browser doesn’t support, which is really the else part. Instead of declaring else, we can simply add an ‘!’ to invert the expression, and end up with:

    if (!Modernizr.svg) {
        // Doesn't support SVG (Fallback)
    }

This now essentially means, if the browser doesn’t support SVG, execute this.

### SVG Fallback

Now we’ve setup our Modernizr to provide a fallback method, we need to replace the ‘.svg’ with ‘.png’ to provide an actual fallback solution.

I’ve put together a superb little jQuery script to do exactly that, and will swap all ‘.svg’ on the page with ‘.png’:

    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
    

First targeting an  element, and using a special CSS selector (that searches for any images that contain a source that includes ‘svg’). If so, we then run another function on the source attribute. We use jQuery’s .replace(); function to replace the ‘.svg’ in the filename with ‘.png’. And that’s the job done. All it means is that for any SVG you use, you’ll need to add a PNG fallback. It takes an extra minute at most per image.

### Final Markup

    
    
    
    
    if(!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }
    

### Without jQuery

If you’re not running jQuery, you can use this as a raw JavaScript alternative:

    if (!Modernizr.svg) {
        var imgs = document.getElementsByTagName('img');
        var endsWithDotSvg = /.*.svg$/
        var i = 0;
        var l = imgs.length;
        for(; i != l;   i) {
            if(imgs[i].src.match(endsWithDotSvg)) {
                imgs[i].src = imgs[i].src.slice(0, -3)   "png";
            }
        }
    }

### CSS: SVG as Background

As far as I know, it’s impossible to detect and swap out an SVG as a background image, thankfully Modernizr has an alternative to running a script. When Modernizr loads, it adds all the browser supporting classes to the  tag. You’ll end up with something like this:

    

You’ll notice in there is ‘svg’. I’m using Chrome. If the browser didn’t support SVG, it would add the class ‘no-svg’ This allows us to create a CSS declaration for each, to provide a background fallback like so:

    
    .background-class {} /* Shared properties for detected features */
    .svg .background-class {background:url(img/graphic.svg);} /* SVG feature property */
    .no-svg .background-class {background:url(img/graphic.png);} /* PNG feature property */
    

### Displaying broken images?

Some server setups support SVGs by default, if yours doesn’t, add this to your .htaccess file:  
`AddType image/svg xml svg svgz
AddEncoding gzip svgz`

<h3 id="update">UPDATE: Custom SVG Feature Detection, Without Modernizr and jQuery</h3>

Here’s my SVG feature detection script, which creates an SVG from a NameSpace URI (w3.org/200/svg) and the qualifiedName. It’s entirely Modernizr and jQuery independent, so you can use it without either library. If the browser supports SVG, it adds an ‘svg’ class to the  tag. If SVG isn’t supported, you’ll get a ‘no-svg’ class complete with the fallback script to rip all the (.svg) extensions to (.png). I’ve optimised the JavaScript from the previous iteration too.

    function supportsSVG() {
    	return !! document.createElementNS &#038;&#038; !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;	
    }
    if (supportsSVG()) {
    	document.documentElement.className  = ' svg';
    } else {
    	document.documentElement.className  = ' no-svg';
    	var imgs = document.getElementsByTagName('img'),
    		dotSVG = /.*.svg$/;
    	for (var i = 0; i != imgs.length;   i) {
    		if(imgs[i].src.match(dotSVG)) {
    			imgs[i].src = imgs[i].src.slice(0, -3)   "png";
    		}
    	}
    }

If you’re not fussed about the additional classnames, use this script, which inverts the expression (!) to run if the browser doesn’t support SVG.

    function supportsSVG() {
    	return !! document.createElementNS &#038;&#038; !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;	
    }
    if (!supportsSVG()) {
    	var imgs = document.getElementsByTagName('img'),
    		dotSVG = /.*.svg$/;
    	for (var i = 0; i != imgs.length;   i) {
    		if(imgs[i].src.match(dotSVG)) {
    			imgs[i].src = imgs[i].src.slice(0, -3)   "png";
    		}
    	}
    }