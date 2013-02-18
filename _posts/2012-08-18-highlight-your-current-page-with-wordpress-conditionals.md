---
title: Highlight your Current Page with WordPress Conditionals
author: Todd Motto
layout: post
permalink: /highlight-your-current-page-with-wordpress-conditionals
---
# 

Here’s a quick overview on how to highlight your current page in the nav using WordPress PHP Conditional tags. It’s dead easy, and if you prefer hand-coding your navigation, then this is definitely for you. You can use the PHP Conditional tags for a vast amount of other things, and they’re one of the most powerful WordPress functions. Check the [Codex][1] for a more comprehensive overview.

 [1]: http://codex.wordpress.org/Conditional_Tags

### What’s a Conditional?

A conditional is pretty simple. You specify something, and if it meets the criteria, execute whatever you’ve set it up to do. In our case a conditional we want to set up is – ‘If you’re on the homepage, highlight the home button’. This is basically what we are going to tell our code to do.

### When to Use

I rarely use the dynamic Menu system provided by WordPress, it feels too clunky, injects pointless classes into my HTML elements, and it’s not the neatest of code. So I handcode my navigations into the header. If you’re going to code your menu’s by hand, or a secondary sidebar menu somewhere in your site, then you need to apply some dynamic magic to your navigation.

### HTML Structure

Here’s what a basic HTML navigation would look like.

    
    	
    		Home
    		About
    		Portfolio
    		Testimonials
    		Contact
    	
    
    

### PHP Conditionals

Here’s where we inject some conditionals to add the ‘current’ class to our current page. PHP is quite easy to read in this sense:

    

This says, if we are on the front/home page, echo (output) the class of ‘current’, and if we aren’t on that page, it ignores it entirely.

Here’s how we’d add it to our navigation, with all other pages in consideration.

    
    	
    		>About
    		>Testimonials
    		