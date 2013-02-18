---
title: Overriding the Default Text Selection Colour
author: Todd Motto
layout: post
permalink: /overriding-the-default-text-selection-colour
dsq_thread_id:
  - 
---
# 

Add something different to your website by overriding the default text selection colour (boring blue and no text styling) when highlighting words/images on your website. Check out the demo below by highlighting the paragraphs, and add the code to your own website. 

Select each paragraph below to see the demonstration in effect:  
Note: Will not work in IE6, IE7, IE8, but you’re good on Safari/Chrome (WebKit), Mozilla FireFox (Gecko) and IE9 (Ergh).



### Green Selection

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum tortor scelerisque arcu eleifend rhoncus. Nulla non risus non arcu interdum scelerisque. Curabitur dapibus, mi id pretium laoreet, dui nulla consequat felis, sed sollicitudin nibh ante eget justo. Fusce eget risus nulla, lobortis sodales leo. Cras id nulla ligula. Duis sed pellentesque metus. Donec pellentesque, lorem sed dapibus interdum, justo nisi consequat magna, id molestie urna metus id purus.



### Purple Selection

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum tortor scelerisque arcu eleifend rhoncus. Nulla non risus non arcu interdum scelerisque. Curabitur dapibus, mi id pretium laoreet, dui nulla consequat felis, sed sollicitudin nibh ante eget justo. Fusce eget risus nulla, lobortis sodales leo. Cras id nulla ligula. Duis sed pellentesque metus. Donec pellentesque, lorem sed dapibus interdum, justo nisi consequat magna, id molestie urna metus id purus.



### Blue Selection

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum tortor scelerisque arcu eleifend rhoncus. Nulla non risus non arcu interdum scelerisque. Curabitur dapibus, mi id pretium laoreet, dui nulla consequat felis, sed sollicitudin nibh ante eget justo. Fusce eget risus nulla, lobortis sodales leo. Cras id nulla ligula. Duis sed pellentesque metus. Donec pellentesque, lorem sed dapibus interdum, justo nisi consequat magna, id molestie urna metus id purus.



You get the point. So here’s the code to add to your CSS to implement your default text selection colour.

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

    
    Your paragraph text here.
    

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