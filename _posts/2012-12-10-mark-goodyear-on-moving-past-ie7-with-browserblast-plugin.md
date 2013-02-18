---
title: Mark Goodyear on moving past IE7, with BrowserBlast Plugin
author: Todd Motto
layout: post
permalink: /mark-goodyear-on-moving-past-ie7-with-browserblast-plugin
---
# 

I’m Mark Goodyear, a front-end developer and designer from Middlesbrough, UK. I also run a creative agency Big Bite Creative.  
IE has always caused headaches for every developer, and as the web is moving forward with the likes of CSS3 and HTML5, it’s time to fully drop support for IE7.

We all know a site won’t look the same in every browser, but to take advantage of features such as the great box-sizing: border-box; and CSS3, we must keep moving on. IE8 isn’t perfect, but one of the best features is that it supports the border-box model without any polyfills.

[Demo][1][Download][2][Fork][3] 

### What is border-box?

 [1]: //www.toddmotto.com/labs/browserblast/
 [2]: //github.com/markgoodyear/BrowserBlast/archive/master.zip
 [3]: //github.com/markgoodyear/BrowserBlast

If you haven’t heard about it, the border-box model solves a lot of issues with the default box model—especially in responsive design. Another thing it’s great for is when using a grid system. It allows us to write less markup if we need to add any inner borders or padding to a grid box. A perhaps slightly over exaggerated example would be:

Without box-sizing:

    
    .grid_6 { width: 460px; }
    .inner-border { border: 1px solid #000; }
    .inner-padding { padding: 20px; }
    
    
    	
    		
    			Content here
    		
    	
    

Without border-box, if we applied the padding and border on .box the width would grow to 502px—breaking the layout. This is because the total width equals the element width padding borders. In this case; 460px (element width) 40px (left and right padding) 2px (left and right border). This is why the extra divs are needed to keep .box at 460px wide. However with border-box we can do this:

    
    .grid_6 { width: 460px; }
    .box { border: 1px solid #000; padding: 20px; }
    
    
    
    	Content here
    

As the border-box box model’s total width includes the padding and borders, this keeps .box at the width we want when padding and borders are applied. Basically, padding and borders no longer affect the overall width. Awesome. I can see border-box being included in future CSS resets as it makes things a lot simpler.

### Why IE8 

Supporting a browser should be about the user being able to navigate and use the site, not about seeing all the fancy CSS3 features. Sure, whilst it’d be great to see those rounded corners and shadows, it doesn’t affect the overall usability. Utilising border-box can however affect usability in IE7 as columns and alike are likely to fall apart without providing any polyfills. This is why we should advance to a browser that can natively supports border-box.

On a recent project I found myself needing to show a message to IE7 and below users, as using border-box did indeed brake the layout. 

Enter BrowserBlast!

### BrowserBlast

BrowserBlast is a lightweight and fully customisable jQuery plugin to display a warning for users of IE7 and below to let them know their browser isn’t supported anymore. This should hopefully urge them to update to a modern browser. The banner is persistent so it’s not just dismissed and forgotten by the user. We want them to be aware and update.

In some cases, such as client requests, we may need to maintain IE7 support. Not to worry! BrowserBlast includes the option to select which IE version you support to display the warning to lesser browsers. This also means when the time comes for dropping IE8 support we can still utilize this plugin.

To make theming the banner simple to fit in, or stand out if you wish, with your site, I created basic styling options to avoid requiring implementing any additional CSS. If you want to further customisation using your own CSS, simply set customCSS to true. This will ignore any styling in the options so you have full control of how it looks—simply target the #unsupported selector in your CSS. To easily check the styling without needing to disable or keep checking IE, BrowserBlast includes a development mode to make the banner display on all browsers.

Below is an example of usage with all the options:

    
    
    
    
    
    $(function() {
    	$.browserBlast({
    		devMode: false, // Toggle dev mode
    		supportedIE: "8", // Supported IE version
    		customCSS: false, // Use custom CSS
    		fixed: true, // Toggle between a fixed and non-fixed banner
    		linkColor: '#56a119', // Set link color
    		linkHover: '#333', // Set link hover color
    		linkUnderline: true, // Toggle link underline
    		bannerHeight: '40', // Height of banner
    		background: '#FAF4AF', // Background color of banner
    		textColor: '#333', // Text color
    		fontSize: '12px', // Font size
    		fontFamily: 'sans-serif', // Font familiy
    		borderSize: '2', // Border size
    		borderStyle: 'solid', // Border style
    		borderColor: '#D4C790', // Border color
    		warningID: 'unsupported', // Selector ID of banner
    		message: "Hey! Your browser is unsupported. Please &#038;lt7a href='http://browsehappy.com' target='_blank'>upgrade for the best experience." // Set your message, allows HTML
    	});
    });
    

### Summary

As developers we can help strip the last usage of IE7 as much as possible using BrowserBlast, leaving us happy, headache free and to not worry so much about the remaining small percentage of people who are using it.

[Demo][1][Download][2][Fork][3]