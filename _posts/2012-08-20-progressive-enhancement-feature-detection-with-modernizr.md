---
title: Progressive Enhancement feature detection with Modernizr
author: Todd Motto
layout: post
permalink: /progressive-enhancement-feature-detection-with-modernizr
---
# 

Detecting features available to the end user is a very clever way of providing a rich and advanced experience to those using modern browsers that support modern features – and that’s where Modernizr comes in. Modernizr is a JavaScript tool that analyses the browser’s user agent property, as well as feature detection, to let us know what a browser can, and cannot, do. Utilising this information, we can then provide the best content back to the end user dependant on their browser’s capabilities.

In this tutorial, I’m going to give you an introduction to Modernizr, and show you a very simple test using it, to show some fancy CSS3 buttons, complete with a simple jQuery button to toggle the functionality, so you’ll see what appears to browsers that don’t support CSS3 gradients. This is a great way to test what end users will see if their browser doesn’t support our advanced functionality.

### Progressive Enhancement

This method of providing an enhanced solution for modern browsers is called Progressive Enhancement, which is a little different to Graceful Degradation. Progressive Enhancement is a solution created that works great across all systems/browsers, and provides advanced features for browsers that can take handle them, such as HSLA colouring, CSS3 transitions/animations/gradients, HTML5 Web Sockets etc.

The opposite is Graceful Degradation – we provide a solution, and provide fallback support (for example using NoScript tags for users without JavaScript). The two are very similar, but offer a different thinking approach to a web project.

The main difference (in a nutshell):  
Progressive Enhancement = Great solution Advanced functionality/features  
Graceful Degradation = Great solution Fallbacks for legacy browsers

### Modernizing with Modernizr

After detecting what user agent and feature support the viewing browser can achieve, Modernizr then tells us what the browser supports by adding those classes into the HTML tag. The below is a copy and paste from my Google Chrome (Version 21). You can see it supports everything, apart from ‘no-touch’ as I used my iMac which clearly doesn’t use touchscreen.

    
    

### The Demo

Check out the Demo below, if your browser supports CSS3, and JavaScript is enabled, you’ll notice you get a nice smooth, round-cornered, gradient blue button, if so – press the blue button and watch it toggle the class in the HTML tag. This will basically remove ‘cssgradients’ from the HTML classes, and our browser will then default back to the non-supported button (for what people with legacy browsers would see).

Now, (pay attention!), for Demo purposes, I am not creating a Progressively-Enhanced button, as you’d see hardly difference and some people will be like, what? So what I’ve done, is simply remove CSS3 styling from the button, when you toggle browser support. This allows you to really see what the end user would see if they were using a legacy browser (and you didn’t provide a great base for your real button, i.e. a button image in the CSS and advanced CSS3 for browsers that support it – be progressive!).

[Demo][1][Download][2] 

### Modernizr CSS

 [1]: http://demo.toddmotto.com/modernizr-buttons/
 [2]: http://demo.toddmotto.com/modernizr-buttons/modernizr-buttons.zip

Check out the source code on the above Demo, you’ll see the button looks like this:

    CSS3 Gradients Enabled
    

Having the Modernizr classnames in our HTML tag allows us to prioritise styling (we’ve all seen how the browser hacks work). Check out the below, our Progressive Enhancements go here, following the ‘cssgradients’ classname:

    .cssgradients .bluebutton {}
    

The above means that when Modernizr renders the page, it will seek these classes from the CSS, and show them to the user, which means you are shown exactly what your browser supports. In a sense, it’s clever stuff.

Now, for browsers that don’t support it, Modernizr simply adds a ‘no’ infront of it, look at this taken from IE9, you’ll see a lot more ‘no’ prefixes.

    

Using the information above, we’d then have our progressive solution at hand to serve for IE9, should they be missing any features/functionality. Please remember this above snippet includes all advanced styles and functionality, whereas when creating your own custom Modernizr build, you just pick the things you are actually using! If your site only uses CSS Gradients, you’d specify this in your custom build, and your HTML tag would look like this:

    
    

### Adding Support

For all those ‘no’ classes above, we will focus on our ‘no-cssgradients’ (perfect example, hey!). Here’s our styling:

    .no-cssgradients .bluebutton {}
    

You’d then add your styles for the non-supported browsers. It’s a lot easier if you simply drop the ‘.no-cssgradients’ from the stylesheet altogether as it works just the same. In the end, we have something that looks like this:

    /* Modernizr Styles, Progressive Enhancement */
    .cssgradients .bluebutton {}
    
    /* Browsers that don't support CSS Gradients */
    .bluebutton {}
    

Please note, this tutorial is a get-started and simple example of Progressive Enhancement through using Modernizr utilising some CSS3 gradient buttons. Download your custom build and get started.

### Modernizr Download

[Modernizr][3] is free to use and download, and you can setup your own custom build depending on which HTML5/CSS3 features you may be using. I usually use a minified version (15KB) of the full custom build, which allows me to easily add more features without going back to Modernizr’s website and adding those new features to my build, re-downloading and uploading.

 [3]: http://modernizr.com/download

### NoScript Extras

When we setup Modernizr, we add our class name ‘no-js’ to the HTML tag like so:

    
    

When the page loads, this gets replaced when the JavaScript renders the page and magically turns into ‘js’. This now comes in really handy when we want to show and hide JavaScript content for users with it enabled/disabled. The ‘regular’ way to show/hide JavaScript content is with  and  tags. Now, using Modernizr – instead of using  tags, we can use CSS to target the non-JavaScript users, and vice-versa.

Using the same methods as before, we target our ‘no-js’ elements and end up with something like this:

    /* Visible for JS Disabled */
    .no-js .classname1 {display:block;}
    
    /* Hidden for JS Enabled */
    .js .classname1 {display:none;}
    

It’s pretty simple. If JavaScript is disabled, the ‘no-js’ will remain as-is and the other classes will not be added, which means we can show content to these users, without the user of  tags. Which is a little more progressive.

As always, you are free to download the Demo and I encourage you to get started with Modernizr. Any questions feel free to leave them below.

[Demo][1][Download][2]