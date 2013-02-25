---
title: Flawless clickable drop-down navigation
author: Todd Motto
layout: post
permalink: /flawless-clickable-drop-down-navigation
disqus: http://www.toddmotto.com/flawless-clickable-drop-down-navigation
---

In this tutorial I’ll show you how to create a superb clickable drop-down navigation, using jQuery and of course complete with CSS fallbacks. These types of drop-downs are great for Web Apps, websites and backends which you don’t want to implement a hover-only system.

It’s all about the user experience and journey around the site. Here I’ll show you how to create a really smart clickable drop-down navigation, in which you can click any negative space to close it again.

Full browser support, Chrome, FireFox, Safari, Opera, IE7, IE8, IE9. The function executes perfectly in IE6 too.

<div class="download-box">
	<a href="//toddmotto.com/labs/clickable-dropdown" onclick="_gaq.push(['_trackEvent', 'Click', 'Clickable Dropdown Demo', 'Clickable Dropdown Demo Button']);">Demo</a>
	<a href="//toddmotto.com/labs/clickable-dropdown/clickable-dropdown.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Clickable Dropdown Download', 'Clickable Dropdown Download Button']);">Download</a>
</div>

We’ll be using a markup similar to the way a drop-down menu navigation works, an unordered list, with a list inside, with an unordered list containing our items inside the drop-down.

Here’s the markup:

    <div class="click-nav">
		<ul class="no-js">
			<li>
				<a href="#" class="clicker"><img src="img/i-1.png" alt="Icon">Profile</a>
				<ul>
					<li><a href="#"><img src="img/i-2.png" alt="Icon">Dashboard</a></li>
					<li><a href="#"><img src="img/i-3.png" alt="Icon">Settings</a></li>
					<li><a href="#"><img src="img/i-4.png" alt="Icon">Privacy</a></li>
					<li><a href="#"><img src="img/i-5.png" alt="Icon">Help</a></li>
					<li><a href="#"><img src="img/i-6.png" alt="Icon">Sign out</a></li>
				</ul>
			</li>
		</ul>
	</div>
	
Let’s go through the structure.

### HTML

We start with a div with the class click-nav, this is required for two reasons, to make it easier for you to position in your website as the drop-down has a wrap, and more importantly, our jQuery is going to use it as a hook for our animating.

You’ll notice the first ul contains a class no-js, this takes a Modernizr-style approach and replaces the no-js with js if the browser is running JavaScript. This allows our CSS to hook off no-js for fallbacks, and if JavaScript is enabled – we let jQuery do the work.

The first menu item is what will be our clickable element, aptly named clicker, with our small icon and text inside. Inside the same element, we have our unordered list, which will be the drop-down list of items.

### CSS

The CSS is minimal here, a great foundation for customising. No messy background images either, keeping it clean. Our click-nav class controls the width of the drop-down. Our .click-nav ul li is positioned relative, to allow the the absolute positioning for the ul nested inside. I’ve used left:0;right:0; here, so that it fills the entire width of the drop-down without adjusting anymore widths. An active class has also been included, for styling purposes when the navigation is clicked.

You’ll also see the fallbacks underneath, using a simple CSS hover to display our navigation. Accessibility is key.

    <style>
    .click-nav {margin:100px auto;width:200px;}
    .click-nav ul {position:relative;font-weight:900;}
    .click-nav ul li {position:relative;list-style:none;cursor:pointer;}
    .click-nav ul li ul {position:absolute;left:0;right:0;}
    .click-nav ul .clicker {position:relative;background:#2284B5;color:#FFF;}
    .click-nav ul .clicker:hover,.click-nav ul .active {background:#196F9A;}
    .click-nav img {position:absolute;top:9px;left:12px;}
    .click-nav ul li a {transition:background-color 0.2s ease-in-out;-webkit-transition:background-color 0.2s ease-in-out;
    -moz-transition:background-color 0.2s ease-in-out;display:block;padding:8px 10px 8px 40px;background:#FFF;color:#333;text-decoration:none;}
    .click-nav ul li a:hover {background:#F2F2F2;}
    
    /* Fallbacks */
    .click-nav .no-js ul {display:none;}
    .click-nav .no-js:hover ul {display:block;}
    </style>

### jQuery

Here’s where we get started with our clickable script.

    <script>
	$(function () {
		$('.click-nav > ul').toggleClass('no-js js');
		$('.click-nav .js ul').hide();
		$('.click-nav .js').click(function(e) {
			$('.click-nav .js ul').slideToggle(200);
			$('.clicker').toggleClass('active');
			e.stopPropagation();
		});
		$(document).click(function() {
			if ($('.click-nav .js ul').is(':visible')) {
				$('.click-nav .js ul', this).slideUp();
				$('.clicker').removeClass('active');
			}
		});
	});
	</script>

To begin, we target our ‘no-js’ element (the ‘ul’) inside click-nav, using a special CSS selector to only target the first child, not the other unordered list as well. We then toggle the classes no-js js, this removes the no-js class (as it’s present in the DOM already), and adds js. Now we know the user is running JavaScript. (If they’re not, no jQuery will run and CSS fallbacks kick in.)

Secondly, we hide our .js ul, the enabled items to hide them.

Then we get clever with our click event, using a slideToggle function alongside toggleClass to slideDown/slideUp our drop-down and addClass/removeClass active. The most integral part here is stopPropagation, which is similar to return false;, but using return false; would disable all links within our drop-down from being clicked on. This also prevents the full toggles to complete, allow for the second click the fire the second part of the toggle.

There are two ways to ‘close’ the drop-down. Simply click the button again to drop it down, and also to provide a better user experience, you can click absolutely anywhere inside the webpage to close it. You’ll see we’ve setup $(document) as our click object.

Once the document is clicked, it’s best to run a small test. Using a JavaScript if statement, we check that if the .js ul (our drop-down) is :visible (a jQuery selector), we can then execute the function if it’s visible. We slideUp our drop-down to remove it from view, and remove the active class as it’s no longer in use.

<div class="download-box">
	<a href="//toddmotto.com/labs/clickable-dropdown" onclick="_gaq.push(['_trackEvent', 'Click', 'Clickable Dropdown Demo', 'Clickable Dropdown Demo Button']);">Demo</a>
	<a href="//toddmotto.com/labs/clickable-dropdown/clickable-dropdown.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Clickable Dropdown Download', 'Clickable Dropdown Download Button']);">Download</a>
</div>