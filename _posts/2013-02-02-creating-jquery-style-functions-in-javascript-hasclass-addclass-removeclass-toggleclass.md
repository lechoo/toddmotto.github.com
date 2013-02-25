---
title: Creating jQuery-style functions in JavaScript, hasClass, addClass, removeClass, toggleClass
author: Todd Motto
layout: post
permalink: /creating-jquery-style-functions-in-javascript-hasclass-addclass-removeclass-toggleclass
disqus: http://www.toddmotto.com/creating-jquery-style-functions-in-javascript-hasclass-addclass-removeclass-toggleclass
---

jQuery is a pretty cool framework, it has it’s uses, it’s pretty reliable, but remember: it’s written with JavaScript. It’s not a language by itself, it’s not a magical tool, nor the answer to our prayers. It doesn’t make front-end animation/AJAX/DOM maniuplating easy, it makes you think less and miss out on vital knowledgable. What happened before jQuery?

<div class="download-box">
	<a href="//toddmotto.com/labs/reusable-js" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo Reusable JS, 'Reusable JS Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/reusable-js/reusable-js.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download Reusable JS, 'Reusable JS Download']);">Download</a>
</div>

jQuery makes you as a developer reliant on a framework, and (I’m going to say it!)… lazy, to some extent. I’d succumbed to being lazy, and at times have included the mighty jquery.js file for a few simple lines of code. What an idiot.

I believe to fully master your front-end development you must learn the workings behind it, find out how jQuery works. For too long I’ve relied on jQuery as a supplement to get my jobs done, and from it my vanilla/raw JavaScript has suffered. I’m slowly phasing jQuery out, and focusing more on my JavaScript skills to become fully framework agnostic. My blog is now totally jQuery-free.

### Reasons why I (and you) shouldn’t rely on jQuery:

1.  You didn’t write it
2.  You don’t understand it
3.  It’s a *lot* of code
4.  It’s not a standard (no governing body)
5.  You have no control over it’s future
6.  It’s not a best-practice
7.  Even jQuery has it’s bugs
8.  What if a future job doesn’t allow/use it?
9.  You can only do your job with a framework?
10. It conflicts with other libraries/software (don’t tell me $.noConflict() is bulletproof)
11. You’re probably not even using a huge % of the library
12. JavaScript is in-fact more similar than you think to jQuery

So what does this tell us? We don’t want to write our own scripts (or know how), we don’t get it if we even tried, we’d rather include a huge framework that we don’t understand to get a job done, it’s not a standard practice or web standard. It’s got its own bugs, and creating without jQuery – you’re screwed. Wasted resources as we’re including stuff we don’t need too.

### Reasons to use jQuery

1.  It saves time
2.  Does the hard work for me
3.  Cross-browser support is pretty good
4.  Makes life and selectors easy

I can’t think of that many more reasons to use jQuery; it saves time, does the job for us, cross-browser support already nailed, makes selectors and my life real easy.

Weighing up the two on paper – we all sound very lazy. I’m writing this post because of many observations I’ve seen from around the web development community. I’ve seen people posting ‘use jQuery’ to countless raw JavaScript forum posts, support questions, and it’s killing JavaScript. Any syntax or DOM references I want to lookup in Google, I have to wade through countless jQuery pages and filter out what I really need. It’s the total opposite of what should be happening.

This is where this post comes in, and I hope to inspire some people to start creating their own raw JavaScript functions, jQuery-style, that they can reuse at any time, with ease. Here’s a few to get you started.

### Checking for ‘hasClass’

We’ll start with hasClass, typically in jQuery this looks like so:

    $(element).hasClass(className);

With it’s usage potentially something like this:

    if ($('html').hasClass('ie6')) {
          // Do something crazy
    } else {
          // Phew
    }

So we want to create our own hasClass now. We don’t want to know it ‘just works’. Here’s my stab at creating a nice hasClass function, that is reusable throughout any raw JavaScript project:

    function hasClass(elem, className) {
    	return new RegExp(' '   className   ' ').test(' '   elem.className   ' ');
    }

This uses a simple RegEx test, to ‘scan’ for our class name. Don’t know what RegEx is? It stands for RegularExpression, look it up – task 1!

Put into some practical use, we can then put it into practice, without duplicating the RegEx return each time:

    if (hasClass(document.documentElement, 'ie6')) {
    	// Do something crazy
    } else {
    	// Phew
    }

You can see how it’s super simple. Things might look a little backwards here, specifying the element inside the function as opposed to hooking off the selector, but don’t worry – it’s totally cool. document.documentElement refers to the root element of the document, i.e. the  tag. Voila, we did it, it wasn’t *so* hard. You can then reuse this function throughout your code wherever you like to test if something has a class. This also comes in handy now in our addClass function, as we’ll be using it again!

### Adding a class with ‘addClass’

Probably one of the most popular things to do with jQuery, and it’s so underrated as to how easy it really is with raw JavaScript. In jQuery, we’re used to this:

    $(element).addClass(className);

Potential usage again:

    $('.button').click(function() {
    	$(this).addClass('ie6rules');
    });

Again, here’s my stab at creating a nice addClass function, which passes the className directly onto the element’s className attribute:

    function addClass(elem, className) {
    	if (!hasClass(elem, className)) {
    		elem.className  = ' '   className;
    	}
    }

You’ll notice we use our hasClass function again! It checks to see if the element has the class, but it reverts the expression meaning it will run if the element doesn’t have a class. The ‘ ‘ is in-fact adding a space before the class so it doesn’t join another class.

Using a bang (!) you can invert it’s meaning, so technically this means ‘if the element *doesn’t* have the class’. You could then use it like so on a JavaScript click handler:

    document.getElementById('myButton').onclick = function() {
    	addClass(document.documentElement, 'some-class');
    }

Again I used the document.documentElement, as you know this one now.

### Removing a class with ‘removeClass’

Another useful jQuery gizmo, usually seen doing this:

    $(element).removeClass(className);

With some potential use like this:

    if ($('html').hasClass('ie7')) {
    	$('body').removeClass('sanity');
    }

Now we can create a removeClass function, which is a little more complicated, using RegEx again and our earlier hasClass:

    function removeClass(elem, className) {
    	var newClass = ' '   elem.className.replace( /[trn]/g, ' ')   ' ';
    	if (hasClass(elem, className)) {
            while (newClass.indexOf(' '   className   ' ') >= 0 ) {
                newClass = newClass.replace(' '   className   ' ', ' ');
            }
            elem.className = newClass.replace(/^s |s $/g, '');
        }
    }

We can then use it like so:

    document.getElementById('myButton').onclick = function() {
    	removeClass(document.documentElement, 'some-class');
    }

### Adding/removing (toggling) the class with ‘toggleClass’

The toggle functions tend to be my favourites, allowing you to simply add/remove things as you please. With jQuery, this looks like so:

    $(element).toggleClass(className);

A usage example could be as follows:

    $('.button').click(function(){
    	$(this).toggleClass('active');
    });

Which would toggle the class ‘active’ for one click, and toggle it back for the second click. We can then begin to take this and create our own little function that does this for us:

    function toggleClass(elem, className) {
    	var newClass = ' '   elem.className.replace( /[trn]/g, " " )   ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(" "   className   " ") >= 0 ) {
                newClass = newClass.replace( " "   className   " " , " " );
            }
            elem.className = newClass.replace(/^s |s $/g, '');
        } else {
            elem.className  = ' '   className;
        }
    }

Using some more RegEx and our hasClass function again, we can reuse most of the removeClass function and simply provide an else, to then add the class back on if it doesn’t exist! JavaScript is easy when you think about it logically, don’t get lost in the definitions/names of things.

As you can see, we can start to move into a jQuery-free state of mind. What’s also great is that a lot of cross-browser issues that require workarounds occur more in IE7 and IE8, which even jQuery is dropping as of Version 2.0. This makes us think about whether we really need to worry as much about backfilling our code with complex polyfill/compatibility issues when moving forward with our own little functions.

The possibilities are endless for what you decide to create.

<div class="download-box">
	<a href="//toddmotto.com/labs/reusable-js" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo Reusable JS, 'Reusable JS Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/reusable-js/reusable-js.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download Reusable JS, 'Reusable JS Download']);">Download</a>
</div>