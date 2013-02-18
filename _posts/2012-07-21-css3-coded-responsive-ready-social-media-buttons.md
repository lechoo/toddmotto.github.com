---
title: CSS3 Coded, Responsive Ready, Social Media Buttons
author: Todd Motto
layout: post
permalink: /css3-coded-responsive-ready-social-media-buttons
---
# 

Social media buttons come in all different shapes and sizes, but let’s face it – some are horrendous, some are huge images, some are blurred images, and they don’t allow for any web development editing. So, my thoughts are, why do they need to be images at all? Here’s some CSS3 coded, responsive ready and scalable social media buttons.

We’ll setup some PHP ‘Foreach’ and ‘Array’ functions, and let the server side scripting take care of our HTML for new buttons. The button shapes we’ll create with code, and the only images we’ll be using are for the individual icons that are inside our buttons.

[Demo][1][Download][2] 

### Button Styles

 [1]: //www.toddmotto.com/labs/css3-social-buttons/
 [2]: //www.toddmotto.com/zipball.php?file=css3-social-buttons

Here’s a screenshot of the image styles I’ve coded, you can also check the [Live Demo][3] out too and have a click around.

 [3]: http://demo.toddmotto.com/coded-social-icons/

![][4]

 [4]: /wp-content/uploads/2012/07/coded-button-styles.png

Using code, we can create our icons to pretty much look like images anyway, if not better. They’re scalable in width, height, and fit nicely anywhere.

Here’s the HTML markup for the RSS button:

    Subscribe
    

And the CSS, which includes the static view, the hover, and the ‘active’ static when clicked:

    ul#coded-social-full li.rss { /* Static Button Look */
    	background:#F08A0E; /* Fallback for Non-CSS3 browsers */
    	background-image:linear-gradient(bottom, #F08A0E 40%, #F29D27 70%);
    	background-image:-o-linear-gradient(bottom, #F08A0E 40%, #F29D27 70%);
    	background-image:-moz-linear-gradient(bottom, #F08A0E 40%, #F29D27 70%);
    	background-image:-webkit-linear-gradient(bottom, #F08A0E 40%, #F29D27 70%);
    	background-image:-ms-linear-gradient(bottom, #F08A0E 40%, #F29D27 70%);
    	box-shadow:0px 1px 2px #999;
    	-webkit-box-shadow:0px 1px 2px #999;
    	-moz-box-shadow:0px 1px 2px #999;
    	border-bottom:1px solid #E36A00; /* It's all in the detail, okay */
    	}
    	
    ul#coded-social-full li.rss:hover { /* Hover Event */
    	background-image:linear-gradient(bottom, #F79A28 40%, #FAA937 70%);
    	background-image:-o-linear-gradient(bottom, #F79A28 40%, #FAA937 70%);
    	background-image:-moz-linear-gradient(bottom, #F79A28 40%, #FAA937 70%);
    	background-image:-webkit-linear-gradient(bottom, #F79A28 40%, #FAA937 70%);
    	background-image:-ms-linear-gradient(bottom, #F79A28 40%, #FAA937 70%);
    }
    
    ul#coded-social-full li.rss:active { /* Active (Pressed) Button */
    	background-image:linear-gradient(bottom, #FF8C00 40%, #F29D27 70%);
    	background-image:-o-linear-gradient(bottom, #FF8C00 40%, #F29D27 70%);
    	background-image:-moz-linear-gradient(bottom, #FF8C00 40%, #F29D27 70%);
    	background-image:-webkit-linear-gradient(bottom, #FF8C00 40%, #F29D27 70%);
    	background-image:-ms-linear-gradient(bottom, #FF8C00 40%, #F29D27 70%);
    }
    ul#coded-social-full li.rss a {
    	color:#FFF;
    }
    
    ul#coded-social-full li.rss a img {
    	width:12px; /* Our downscaled icons forced CSS width */
    	margin:-4px 5px 0 0;
    }
    

### Responsive Ready

Taking the same approach as my previous post on [relative images][5], we use a downscaled icon image (the rss icon) so that if we scale with responsive code, or view on an ultra high resolution device (Retina display), things look perfect. You’ll notice that if you zoom in a few times with your web browser, the RSS button still remains crystal clear. This solves any issues we may have with high resolution devices.

 [5]: /thoughts-on-progressive-and-relative-images

### Dynamic Buttons with PHP

Okay, so to generate the buttons with some ease, let’s setup some PHP using the ‘foreach’ function. We’ll be using the same markup as our HTML above, but making it dynamic.

Here’s our markup with PHP tags instead of hard-coded HTML taken from above.

    '.$info[3].'
    

You’ll notice certain parts of the HTML are replaced with $info – these represent the four strings listed below:

    '.$info[0].' - Class
    '.$info[1].' - Hyperlink
    '.$info[2].' - Image Name
    '.$info[3].' - Word Inside Button
    

We can then declare these from our Arrays, which correspond with the strings above, which are extracted into our buttons into the appropriate parts. The PHP ‘foreach’ function will duplicate the code each time we declare an Array, so for each new button we need to create, all we need to do is setup a new Array like below:

    