---
title: jResize Plugin, for one window responsive development
author: Todd Motto
layout: post
permalink: /jresize-plugin-for-one-window-responsive-development
--- 

jResize is a responsive web development tool, built in jQuery to assist the workflow of developers on responsive projects. There are various tools for responsive development, iframes at different widths embedded in the page, and the tedious resizing of the browser. So here’s a different approach which grabs all your HTML, and resizes it inside the browser when you click the width you want. It’s dead simple.

#### Updated! Use jResize in the browser too, without installation: [Browser Development][1]

<div class="download-box">
	<a href="//www.toddmotto.com/labs/jresize" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo jResize', 'jResize Demo']);">Demo</a>
	<a href="//www.github.com/toddmotto/jResize/archive/master.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download jResize', 'jResize Download']);">Download</a>
	<a href="//github.com/toddmotto/jResize" onclick="_gaq.push(['_trackEvent', 'Click', 'Fork jResize', 'jResize Fork']);">Fork</a>
</div>

Let’s talk you through the plugin.

 [1]: http://www.toddmotto.com/labs/responsive/

### jQuery Options

First we declare our Plugin defaults, to which are some popular viewport widths. Any you specify in the plugin will overwrite these.

    $.jResize.defaults = {
          viewPortSizes   : ["320px", "480px", "540px", "600px", "768px", "960px", "1024px", "1280px"],
          backgroundColor : '444',
          fontColor       : 'FFF'
    }
    
    options = $.extend({}, $.jResize.defaults, options);
    

### Variables/Arrays

Here we define some variables for background color, font color and an array for the viewport widths. 

‘var resizer’ is our first variable, which as you can see we create an HTML structure from, with some inline styles, so we need nothing more than just pure jQuery and no stylesheets. In here, we create a div which contains an empty unordered list.

    var resizer = "<div class="viewports" style="position:fixed;top:0;left:0;right:0;overflow:auto;z-index:9999;background:#" + options.backgroundColor + ";color:#" + options.fontColor + ";box-shadow:0 0 3px #222;"><ul class="viewlist">" + "</ul><div style="clear:both;"></div></div>";
    

These are our viewport widths (hence the name), which get pulled in from the Plugin’s options. Any width sizes you specify will end up here.

    var viewPortWidths = options.viewPortSizes;
    

This just defines some inline styles for our list elements which we’ll call later.

    var viewPortList = "display:inline-block;cursor:pointer;text-align:center;width:100px;border-right:1px solid #555;padding:10px 5px;"
    

### Wrapping the HTML

To be able to resize the webpage inside the browser, we need to wrap all your HTML inside an empty div. We could piggyback off the body tag, but creating our own markup to resize is better.

Using jQuery’s ‘wrapInner’ and targeting the body tag, this allows us to wrap absolutely everything inside our div tag with an ID of ‘resizer’. Now we’ve got hold of all the HTML inside our newly created tag, this sets us up perfectly.

    $('body').wrapInner('<div id="resizer" />');
    

### Prepending the Plugin

jQuery’s ‘before’ function allows us to insert content before a targeted element. We don’t want to put our navigation inside our resizer div, as this will resize, so using ‘before’ allows us to inject our navigation after the body tag, but before the resizer content wrap. Here you see we call our ‘resizer’ variable, and use CSS margin, zero auto to center all content.

    $('#resizer').css({margin: '0 auto'}).before(resizer);
    

### Looping the Array and ViewPort widths

Here’s where things get awesome. We loop through our array, which we’ve setup to be a little bit smart. Our specified viewport widths act as a width animator and also a classname, which allows us to have super control with minimal code. Using jQuery’s ‘each’ function (similar to PHP foreach), we then target our unordered list element from our variables above (.viewlist) and append a list item for each variable.

This basically means, if we set 320px as a variable, it will become a class for us to hook onto for clicking, and act as a width that feeds in to automatically make the browser this width.

    $.each(viewPortWidths, function (go, className) {
        $('.viewlist').append($(''   className   ''));
        $('.'   className   '').click(function () {
            $('#resizer').animate({
                width: ''   className   ''
            }, 300);
        });
    });
    

### Animated Entrance

We declare a height variable, which gets the outerHeight value from our viewlist, which would equal the height of our plugin. From this we hide the viewports (our navigation) then use the ‘slideDown’ function to show the nav. We then use our height variable, to animate the exact height of the nav, and add a top margin to our resizer div, which holds our content. This allows our plugin to push down the page content and also remain fixed in position.

    var height = $('.viewlist').outerHeight();
    $('.viewports').hide().slideDown('300');
    $('#resizer').css({margin: '0 auto'}).animate({marginTop : height});
    

### Reset

Also included is a reset button, which drops all widths you’ve manipulated with jResize. We prepend a separate list element for this as it’s not part of our array. This also has a custom class of ‘reset’.

    $('.viewlist').prepend('<li class="reset" style="' + viewPortList + '">Reset</li>');

Using the custom class of ‘reset’, we can then ensure that when the user clicks, it drops all pixel width styling to our resizer. We can’t really remove our width specifically from an inline style, so here we’ll just declare the content to flow to ‘auto’ which drops all styling – allowing or content to go back to normal without refreshing the page.

    $('.reset').click(function () {
        $('#resizer').css({
            width: 'auto'
        });
    });
    

### Using and calling jResize

Simply include jresize.js in your page (in the download) and call it like so:

    <script src="js/jresize.js"></script>
	<script>
	$(function() {
		$.jResize({
			viewPortSizes   : ['320px', '480px', '540px', '600px', '768px', '960px', '1024px', '1280px'], // ViewPort Widths
			backgroundColor : '444', // HEX Code
			fontColor       : 'FFF' // HEX Code
		});
	});
	</script>

### Scrollbars

Nothing major, just thinking in terms of scrollbars. Mac OS X (which I use) tends not to have scrollbars that are visible or take up content space, so if you’re using a browser such as FireFox, or a Windows machine where scrollbars are standard, you might wish to widen each width accordingly (probably best to inspect element and get an exact width of the pixels, but usually around 15-20px extra to cater for scrolling).

<div class="download-box">
	<a href="//www.toddmotto.com/labs/jresize" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo jResize', 'jResize Demo']);">Demo</a>
	<a href="//www.github.com/toddmotto/jResize/archive/master.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download jResize', 'jResize Download']);">Download</a>
	<a href="//github.com/toddmotto/jResize" onclick="_gaq.push(['_trackEvent', 'Click', 'Fork jResize', 'jResize Fork']);">Fork</a>
</div>