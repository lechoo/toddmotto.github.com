---
title: Highlight your Current Page with WordPress Conditionals
author: Todd Motto
layout: post
permalink: /highlight-your-current-page-with-wordpress-conditionals
disqus: http://www.toddmotto.com/highlight-your-current-page-with-wordpress-conditionals
---

Here’s a quick overview on how to highlight your current page in the nav using WordPress PHP Conditional tags. It’s dead easy, and if you prefer hand-coding your navigation, then this is definitely for you. You can use the PHP Conditional tags for a vast amount of other things, and they’re one of the most powerful WordPress functions. Check the [Codex][1] for a more comprehensive overview.

 [1]: http://codex.wordpress.org/Conditional_Tags

### What’s a Conditional?

A conditional is pretty simple. You specify something, and if it meets the criteria, execute whatever you’ve set it up to do. In our case a conditional we want to set up is – ‘If you’re on the homepage, highlight the home button’. This is basically what we are going to tell our code to do.

### When to Use

I rarely use the dynamic Menu system provided by WordPress, it feels too clunky, injects pointless classes into my HTML elements, and it’s not the neatest of code. So I handcode my navigations into the header. If you’re going to code your menu’s by hand, or a secondary sidebar menu somewhere in your site, then you need to apply some dynamic magic to your navigation.

### HTML Structure

Here’s what a basic HTML navigation would look like.

    <nav>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Portfolio</a></li>
			<li><a href="#">Testimonials</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	</nav>

### PHP Conditionals

Here’s where we inject some conditionals to add the ‘current’ class to our current page. PHP is quite easy to read in this sense:

    <?php if (is_front_page()) { echo " class=\"current\""; }?>

This says, if we are on the front/home page, echo (output) the class of ‘current’, and if we aren’t on that page, it ignores it entirely.

Here’s how we’d add it to our navigation, with all other pages in consideration.

    <nav>
		<ul>
			<li<?php if (is_front_page()) { echo " class=\"current\""; }?>><a href="#">Home</a></li>
			<li<?php if (is_page('About')) { echo " class=\"current\""; }?>><a href="#">About</a></li>
			<li<?php if (is_page('Portfolio')) { echo " class=\"current\""; }?>><a href="#">Portfolio</a></li>
			<li<?php if (is_page('Testimonials')) { echo " class=\"current\""; }?>><a href="#">Testimonials</a></li>
			<li<?php if (is_page('Contact')) { echo " class=\"current\""; }?>><a href="#">Contact</a></li>
		</ul>
	</nav>
	
You can see the ‘is_page’ is a little different from the homepage function, but it allows you to specify the page name. You can also use the page URL to specify inside the ‘is_page()’ function. Now we need to add the CSS class for ‘current’.

### CSS

Here’s a really basic way of how we can style the current class, let’s assume all other menu items don’t have a black background, we’ll use black to make sure they stand right out (#000):

    nav ul li a {background:#F60;} // Bright orange
    nav ul li.current a {background:#000;} // Black for current