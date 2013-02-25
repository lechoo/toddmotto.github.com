---
title: 'Fluid-first: creating a future proof fluid and responsive website'
author: Todd Motto
layout: post
permalink: /fluid-first-creating-a-future-proof-fluid-and-responsive-website
disqus: http://www.toddmotto.com/fluid-first-creating-a-future-proof-fluid-and-responsive-website
---

Fluid-first is a way of thinking, then designing, then coding. It’s not media query heavy, it’s not thousands of lines of inherited and overwritten code. It’s a minimalistic approach to create scalable responsive websites with ease. Fluid-first I believe to be desktop-down building, which I much prefer over mobile-first. (Mobile-first is where you code your mobile styles first as a base layer). I want the full picture before I see the snapshot, so desktop down for me.

### 1. Thinking

So what is a fluid-first approach? It’s forgetting about media queries until you really need them, they are a finishing touch to our website core. Media queries aren’t the saviour of the web, flexible content is.

Forget about 320px and other standard pixel benchmarks, these should just be a guide. Take a serious look at some of the most popular resolutions, and those becoming increasingly popular – they’re completely different – and it’s important your site is perfectly scaled at the hands of every resolution and device.

So here’s where fluid-first comes in. And trust me, this speeds up your core development time dramatically – not to mention the performance benefits of reduced code and increased manageability.

### 2. Designing

You’ve got to think ahead for your website design, picture how everything should scale perfectly. Using a fluid-first approach, we’ll aim to create as much of our website as we can, using percentages and not fixed pixels, so our design needs to be adaptive, you need to be able to envision this while you’re creating your layout. Imagine you’ve got 5 items in your navigation, they should all share 20% of the navigation width. Of course, this will look horrible at 320px, but that’s where we add the finishing touches with media queries. But not yet.

’100%’ identifies the screensize, no matter what it is. ’50%’ identifies our two aligned elements, both at 50% width. This would mean they would both fit exactly half the screen. Comparing screen sizes, the mobile width is a lot smaller (obviously not to scale), but our elements would still have to obey our percentage widths. Nothing actually changes between these devices, 50% and 50% is consistent. Getting the right design is imperative to how you’ll code using the fluid-first approach, don’t just design to the screen you’re working on.

### 3. Coding

In the realm of progressive and responsive development, fluid-first is the answer to future proofing your website. Using percentages, we can begin to create clever code, that ultimately becomes so easy to manage and so quick to update.

When starting a web project, we usually start developing our HTML and CSS, and one of the first CSS declarations we make is our content wrapper. This is the key to nailing our fluid-first setup. You might be used to seeing something like this:

{% highlight css %}
.wrapper {width:1000px;}
{% endhighlight %}

But it’s not the 90′s anymore, our screens are bigger. A lot bigger, and also a lot smaller – so let’s make the use of them.

When using our media queries, you might be using/seeing something like this to adjust the wrapper to the viewport we want:

{% highlight css %}
@media only screen and (min-width: 320px) {
	.wrapper {width:320px}
}

@media only screen and (min-width: 480px) {
	.wrapper {width:480px}
}
{% endhighlight %}

None of the above uses a fluid-first approach. We should never manipulate our wrapper inside a media query, or make several declarations of the wrapper. Here’s the best way (I’ve found) to create a brilliantly fluid layout, with one declaration of wrapper. It’s a one-size-fits-all type gem.

{% highlight css %}
.wrapper {
	max-width:1280px;
	width:95%;
	margin:0 auto;	
}
{% endhighlight %}

max-width:1280px; – our max-width declaration means that our wrapper will stop expanding somewhen, which is at 1280px wide. Anything inside 1280px will simply obey to the width of the viewport size, when scaled below 1280px. This means if we were to have two floating elements at 50%, they would compress themselves if your screen size is smaller than 1280px. Our wrapper is what changes the content inside. And inside our wrapper contains more percentage based elements, and inside that, perhaps even a few more percentage based. The depth of percentages within percentages is up to you.

width:95%; – this means that we will only take up 95% of the 100% of our screensize, resulting in 5% left over.

margin:0 auto; – as our wrapper will be a block level element, this means that we can use ‘auto’ to position the wrapper in the center of the screen, resulting in 2.5% of the leftover 5% each side of our wrapper. So why do this? Any content under 1280px will essentially be ‘touching’ the edge of the browser. Imagine your logo, top left of your website, we don’t want it touching the side of the browser, it needs it’s own space. This 2.5% either side of the wrapper is a perfect amount, and scales down brilliantly.

Now we’ve created the perfect platform for starting the development, it’s up to you how creative you go with your percentages. But hold off the media queries until the core of your website is developed, the header, the page width(s), the footer – get them scaling nicely. Using percentages, these will scale even to your 320px without you declaring a single pixel size. Media queries are then the icing on the cake.

### ViewPort Meta

So what’s next? We’ve created a wrapper so it obeys our percentages, but to ensure it scales properly to any device, we need to add our viewport meta tag to our  section of the site:

{% highlight html %}
<meta name="viewport" content="width=device-width,initial-scale=1.0">
{% endhighlight %}

This ensures that our website scales as it’s meant to, and fit exactly to the screensize, if the code lets us. Initial scale and maximum scale are set the same here (1.0) which locks them the same scale, our 95% of the screen. The ‘user-scalable’ means (you guessed it) is whether we allow the user to scale the content after this by pinching/zooming on the content.

Here’s an example markup, you’ll see how little we change the code using media queries. Of course this is only a very simple level, but imagine changing your column percentages once per media query, to fully optimise for fixed-width and beyond.

{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Fluid-first</title>
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0;">
		<style>
		.wrapper {max-width:1280px;width:95%;margin:0 auto;}
		.column {width:50%;float:left;background:#F1F1F1;}
		@media only screen and (min-width: 320px) {.column {width:100%;}}
		@media only screen and (min-width: 786px) {.column {width:50%;}}
		</style>

	</head>
	<body>
		<div class="wrapper">
			<div class="column">
				<p>Fluid-first</p>
			</div>
			<div class="column">
				<p>Fluid-first</p>
			</div>
		</div>
	</body>
</html>
{% endhighlight %}

### Conclusion

I really see fluid-first pushing the way forward in the way we think about designing and coding websites, to make them scalable. Forget restricting your code to your fixed viewport sizes, it’s simply not enough anymore – use them as a guide on what’s efficient and readable and mostly – best for your layout.

Remember: having fluid code isn’t a fluid-first approach, it’s a lot to do with the thinking and process in which you develop.

Start with your percentages, build your core site structure, and then make the slight tweaks with media queries to finalise. Change those column widths to 100% so they stack nicely, build as you wish. It requires very little media query manipulation and kicks ass on all devices. Initially, this is the first step into creating your fluid-first website, the rest is up to you.

You can see how powerful a tiny media query tweak could be to a percentage, and I feel the less we use media queries and the more we can rely on percentages – the easier our development lives will be. Percentages aren’t limited to pixels, so let your designs expand.

### Finishing touches

For browsers that don’t support media queries, it’s well worth implementing [css3-mediaqueries.js][3], a JavaScript polyfill by Wouter van der Graaf, to make IE5/6/7/8 become responsive. Here’s how to include it in your site: 
[3]: //code.google.com/p/css3-mediaqueries-js/

{% highlight html %}
<!--[if lte IE 8]><script src="js/mediaqueries.min.js"></script><![endif]-->
{% endhighlight %}

Note: If you are using ‘min-device-width’ instead of ‘min-width’, or ‘max-device-width’ instead of ‘max-width’ you’ll need to use ‘if lte IE 10′ instead of IE 8, as IE9/10 do not support min/max-device-width.

### Fluid-first(ing) an existing website

I strongly advise a CSS rebuild if you’re looking to implement fluid percentages and responsive media queries on existing sites. Though depending on the design, is it even feasible to do so, or would a redesign/restructure be in order?

Depending on your code volume too, it would be really time consuming and inefficient to work with your original code. Start a fresh, square one, percentages all the way.

### Getting Semantic

If you’re a semantic geek like me, and you should be, it might be worth revisiting your class names. We’ll be using media queries to adjust the width of our fluid-first layout, so using class names such as ‘one-third’ aren’t going to suffice anymore. I opt for ‘column’, as a column can be on it’s own or stacked beside others.