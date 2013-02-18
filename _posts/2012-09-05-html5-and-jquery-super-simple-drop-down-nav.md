---
title: HTML5 and jQuery Super Simple Drop Down Nav
author: Todd Motto
layout: post
permalink: /html5-and-jquery-super-simple-drop-down-nav
---
# 

How hard is it to find a decent and lightweight navigation that actually works and is easy to implement? The web presents us thousands of options, but often the most simple are the best. It can take time to create your own, especially under deadlines, or alternatively you could chance a plugin.

Here’s a bare-bones, efficient way to create a super simple HTML5 navigation with jQuery drop down. The navigation supports fallbacks as well for users with JavaScript disabled, which is something that a lot of people disregard/forget about when building a navigation. Be [progressive][1], build a solution for all systems and add advanced functionality for those that enable/support it, don’t drop functionality for legacy browsers.

 [1]: /progressive-enhancement-feature-detection-with-modernizr

[Demo][2][Download][3] 

### HTML

 [2]: //www.toddmotto.com/labs/html5-jquery-nav/
 [3]: //www.toddmotto.com/zipball.php?file=html5-jquery-nav

The markup follows a really simple HTML5 setup using the  tag, and unordered lists for the menu items and nested menu items.

    
    	
    		Link 1
    		
    			Link 2
    			
    				Sub-Link 1
    				Sub-Link 2
    				Sub-Link 3
    			
    		
    		
    			Link 3
    			
    				Sub-Link 1
    				Sub-Link 2
    				Sub-Link 3
    				Sub-Link 4
    			
    		
    		Link 4
    		Link 5
    		Link 6
    	
    
    

### CSS

Our CSS needs to be efficient, a lot of plugins you can download (like SuperFish) include tonnes and tonnes of classes, duplicated styles and a lot more – which causes us lots of bother when adding our own styles or trying to trim the CSS. Here’s my stab at a pretty efficient CSS markup (with some really basic styling and hover pseudo elements). I usually build sites from HTML5 Boilerplate, so providing you’ve got a decent CSS reset, you’ll be fine with the following. You’ll also notice there is a ‘.fallback’ class, but we’ll come onto that.

    nav {background:#FFF;float:left;}
    nav ul {text-align:center;}
    nav ul li {float:left;display:inline;}
    nav ul li:hover {background:#E6E6E6;}
    nav ul li a {display:block;padding:15px 25px;color:#444;}
    nav ul li ul {position:absolute;width:110px;background:#FFF;}
    nav ul li ul li {width:110px;}
    nav ul li ul li a {display:block;padding:15px 10px;color:#444;}
    nav ul li ul li:hover a {background:#F7F7F7;}
    nav ul li ul.fallback {display:none;}
    nav ul li:hover ul.fallback {display:block;}
    

### jQuery

The jQuery should be lightweight as we want our navigation to perform really well and our pages to load fast. After including jQuery in your page, here’s our function (which should be included inside a DOM ready function – it’s in the download).

    $('nav li ul').hide().removeClass('fallback');
    $('nav li').hover(
    	function () {
    		$('ul', this).stop().slideDown(100);
    	},
    	function () {
    		$('ul', this).stop().slideUp(100);
    	}
    );
    

### The Function and Fallback

Let’s go through the function. First we target our nav element and the ‘ul’ inside it. We then use jQuery ‘.hide( )’ to hide it, which gets it all ready for some show/hide animation, as well as hiding it from users view.

Secondly, we remove the class ‘fallback’, which is the clever part. The class fallback is for JavaScript Disabled users only, and provides a really simple ‘display:none;’ to ‘display:block;’ on hover events instead of our jQuery animation. And as above – we use ‘.removeClass( )’ to simply remove it, so our navigation drop down works perfectly.

Last, we come to the ‘.hover( )’ function. After targeting the ‘li’ element inside our nav, we then use the ‘.slideDown( )’ and ‘.slideUp( )’ functions to show and hide our navigation when hovered on and off.

### Drop Down Speed Change

To simply change the speed of the dropdown, edit the number at the end of the ‘.slideUp( )’ or ‘.slideDown( )’ functions. By default on the Demo, these are set to (100), which is 1/10th second. Here’s how half a second (500) would look:

    $('ul', this).stop().slideDown(500);
    

### Browser Support

Works perfectly as far as I’ve tested. I’ve even tested IE7, IE8, IE9. IE6 support isn’t included, but the navigation surprisingly works.

[Demo][4][Download][3]

 [4]: http://www.toddmotto.com/labs/html5-jquery-nav/