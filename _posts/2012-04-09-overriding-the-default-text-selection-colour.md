---
title: Overriding the Default Text Selection Colour
author: Todd Motto
layout: post
permalink: /overriding-the-default-text-selection-colour
disqus: http://www.toddmotto.com/overriding-the-default-text-selection-colour
---

Add something different to your website by overriding the default text selection colour (boring blue and no text styling) when highlighting words/images on your website. Check out the demo below by highlighting the paragraphs, and add the code to your own website. 

Note: Will not work in IE6, IE7, IE8, but you’re good on Safari/Chrome (WebKit), Mozilla FireFox (Gecko) and IE9.

Here’s the code to add to your CSS to implement your default text selection colour.

### CSS (Global Colour Change)

    /* IE9  - Also picked up by most modern browsers */
    ::selection {
    	background:#AC2937;
    	color:#FFF;
    	text-shadow:none;
    }
    
    /* Safari & Chrome - Webkit Rendering */
    ::-webkit-selection {
    	background:#AC2937;
    	color:#FFF;
    	text-shadow:none;
    }
    
    /* Mozilla based - Gecko Rendering */	
    ::-moz-selection {
    	background:#AC2937;
    	color:#FFF;
    	text-shadow:none;
    }
    
If you want to highlight different paragraphs like I’ve done above – you can target individual elements like so:

### HTML

    <!-- Green Paragraph -->
    <p class="green-select">Your paragraph text here.</p>
    
### CSS (Specific Area Colour Change)

    /* Green Paragraph Custom Selection Colours */
    p.green-select::selection {
      background:#009E30;
      color:#FFF;
      text-shadow:none;
    }
    
    p.green-select::-webkit-selection {
      background:#009E30;
      color:#FFF;
      text-shadow:none;
    }
    
    p.green-select::-moz-selection {
      background:#009E30;
      color:#FFF;
      text-shadow:none;
    }