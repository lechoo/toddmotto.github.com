---
layout: post
permalink: /progressively-enhanced-svg-sprite-icons
title: Progressively enhanced SVG sprite icons
---

You may remember a while back, I coded up some nice CSS3 social media icons, to which I have had to remove from my website due to the fact I cannot run PHP on this Jekyll server, or even wanted to quickly convert them to HTML. Time would be better spent taking action into enhancing those icons, and creating some much better ones with better practices, with performance and retina displays in mind.

Here's what I've learned since creating those previous icons:
<ul>
	<li>Progressive enhancement techniques with JavaScript</li>
	<li>Using an OOCSS method for creating the buttons</li>
	<li>Better CSS techniques, enhanced performance</li>
	<li>Graphic optimisation to limit HTTP requests, increase speed using CSS sprites</li>
	<li>Not relying on 'hacky' techniques</li>
</ul>

So that's where this article is headed, I'm going to talk you through the process of creating the new buttons, and how I've adapted from my previous post.

<div class="download-box">
	<a href="//toddmotto.com/labs/svg-icons" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo SVG Icons, 'SVG Icons Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/svg-icons/svg-icons.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download SVG Icons, 'SVG Icons Download']);">Download</a>
</div>

### Progressive enhancement techniques with JavaScript
Using JavaScript, we can detect things, change the DOM, add classes, remove classes, instruct our CSS on what's going on. Doing this, we can provide a progressive approach to coding, providing a solid base layer, and progressively enhancing that base layer of code for browsers that support it. It's a slightly different way of thinking compared with graceful degradation - but the better choice in some cases, totally dependant on the project.

First thing's first, I love SVG. I've written a few posts on the subject and use it in all my projects. It's just what social icons need, scalability and high performance/compatability. To use SVG, it's probably a good idea to detect if the browser supports it first, as older browsers and IE6/7/8 have no support. So let's setup the detection script for this progressive technique:

{% highlight javascript %}
function supportsSVG() {
    return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;  
}
if (supportsSVG()) {
    // SVG Support
} else {
    // No SVG Support
}
{% endhighlight %}

Then we need to add .svg or .no-svg depending on if the browser supports SVG. Let's do that:

{% highlight javascript %}
function supportsSVG() {
    return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;  
}
if (supportsSVG()) {
    document.documentElement.className += ' svg'; // <html class=" svg">
} else {
    document.documentElement.className += ' no-svg'; // <html class=" no-svg">
}
{% endhighlight %}

This sets us up nicely for a progressive approach. Our base layer of support needs to include a working site in all browsers, so that will be using PNGs instead of SVG for images.

We can then use a .svg or .no-svg class to take priority depending what the browser supports, PNG for .no-svg, and SVG for .svg.

### Using an OOCSS method for creating the buttons
Let's create some markup then, minimising the HTML as much as possible, but making use of more classes. Using an OOCSS technique, we can create an icon like so:

{% highlight html %}
<a href="#" class="s-icon s-icon-twitter"></a>
{% endhighlight %}

This is OOCSS at it's most minimal form, adding a separate class (with some nice naming conventions to show relationship between classes) to help with the construction of the element. The markup is minimal in this instance, helping us easily maintain it in the CSS. Previously, I used an &lt;img&gt; tag for each button, which would result in lots of HTTP requests to download each image.

### Better CSS techniques, enhanced performance
When you get your hands on CSS3, it's amazing, you can make everything super-slick, colourful and looking like a PhotoShop design in seconds. I admittedly went overboard with my previous set of buttons, creating triple the amount of code that I should have. I created a generic state, a hover, and active for each icon, which looked like so:

{% highlight css %}
.buttonName {
	
}
.buttonName:hover {
	
}
.buttonName:active {
	
}
{% endhighlight %}

After each CSS3 declaration on each button name, the CSS was huge. But at the time it didn't really bother me as it was all about diving into CSS3 - but it should have; as performance, speed and managability should be at the forefront of each piece of code you write. Taking this knowledge, I've come up with a better way to do this using the opacity property which is applied to each icon.

This is done like so:
{% highlight css %}
.s-icon:hover {
	opacity:0.7;
}
{% endhighlight %}

Let's look at the full picture though, here's how we can construct an icon now:

{% highlight css %}
.s-icon,
.no-svg .s-icon {
	background-image:url(../img/icons.png);
	background-repeat:no-repeat;
	display:inline-block;
	height:32px;
	width:32px;
	border-radius:3px;
}
{% endhighlight %}

You can see I've added the no-svg, and the generic .s-icon declaration, this just covers us so that even if JavaScript runs or isn't running, the user gets some experience and will default back to PNG.

To achieve our progressively enhanced icons, we need to add the .svg class to the CSS, and feed off the SVG background:
{% highlight css %}
.svg .s-icon {
	background-image:url(../img/icons.svg);
}
{% endhighlight %}

### Graphic optimisation to limit HTTP requests, increase speed using CSS sprites
I've used an SVG/PNG sprite in this instance, which means no individual images, all buttons feed off the same image, and we use a CSS sprite to show different parts of the image using the background-position property on each class name. HTTP requests: 1.

We then manipulate the sprite for each item very easily. To keep CSS sprites manageable, it's best to think about them before creating them. Each icon is fixed at 32px width and 32px height, which I've used in my Illustrator design to create the icons to sit directly in the center of the 32px box. We can move the background sprite and change the background colour in the CSS on each icon, giving us massive flexibility on the icons:

Here's an example of two icons:
{% highlight css %}
.s-icon-twitter {
	background-color:#00C4FC;
	background-position:0px 0px;
}
.s-icon-dribbble {
	background-color:#EE7BFF;
	background-position:-32px 0px;
}
{% endhighlight %}

### Not relying on 'hacky' techniques
The image downscaling technique, a good idea at the time but with terrible output. I say this because of a few things. Creating x2 images is such a bad solution to overcoming retina displays, then downscaling the image to achieve a good 'retina' image. It's a drag on performance, a cheap technique which was popularised at the time, but SVG is the real future of website graphics, creating infinitely scalable graphics that are super-futureproof. Image downscaling is not future proof at all, and when a proper solution comes along, previous techniques will be obselete and not even part of any standard.

<div class="download-box">
	<a href="//toddmotto.com/labs/svg-icons" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo SVG Icons, 'SVG Icons Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/svg-icons/svg-icons.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download SVG Icons, 'SVG Icons Download']);">Download</a>
</div>