---
title: Thoughts on progressive and relative images
author: Todd Motto
layout: post
permalink: /thoughts-on-progressive-and-relative-images
disqus: http://www.toddmotto.com/thoughts-on-progressive-and-relative-images
---

Image quality and size have been high on my thinking list recently, with responsive media queries (CSS3) coming into popularity and the introduction of the new high resolution viewing devices. This post outlines my thoughts on moving forward with relative images – into a higher resolution web. 

### The issue

At present, most websites are created ‘to size’. Which means any graphics we create, we usually build them to size too – i.e. the design allows for 180px image, so when we code it, we use a 180px image. This is great, but there is a problem…

With the introduction of new high resolution devices, such as the iPhone 4/5, high resolution smartphones, iPad/tablets – and the new MacBook Pro with retina display, images that we create ‘fixed’ (i.e. fit the space they are created for) look poor and blurred.

The web needs to move forward with a focus on relative resolutions, allowing for increased and decreased scaling on high resolutions displays alongside CSS3 media queries. Media queries allow for the contents/images and website layout to change in shape and size depending on the resolution of the device.

### Fixed images versus relative images

A fixed image size is as we’ve described above – we need a specific image size, and we only create it to that size. But what I want to do, is create a bigger image size, and shrink it using basic CSS. Not CSS3. And there is a reason why.

Now, this is where things look the same, but they really aren’t. Take my logo for instance, it’s 140px by 64px in dimension. At least that’s what you think. But [click here][2], this is how big my logo really is. So why is it so big? Because high resolution devices render the images so precisely, that they appear blurry due to pixel ratios. So what we do to counteract this is – create an image bigger than the space we need, and make it smaller. Which means when we zoom in, the image doesn’t blur.

### CSS2 over CSS3

CSS3 is amazing, but we want mass compatibility with this (no background-size hacks). Any decent mobile devices do support CSS3, but that’s not why we’re using CSS2.

This is (was, now updated to SVG) the CSS for my logo:

{% highlight css %}
#logo img {width:140px;}
{% endhighlight %}

This tells any images inside my logo ‘id’ to have a width of 140px (the image used inside the logo id is my logo). I used to use a background image for the logo, but this method is necessary for achieving the desired effect. The real image dimensions for my logo are 500px by 230px.

This is the HTML we use:
{% highlight html %}
<h1 id="logo"><a href="/"><img src="logo.png"></a></h1>
{% endhighlight %}

Using ‘img src’ allows us to have much more control over the manipulation of our image. There is a CSS3 get around if you really want to use background images:

{% highlight css %}
background-size:--px;
{% endhighlight %}  

Just specify the size you need. If you’ve got a fluid responsive website, you can use background-size:contain; instead.

### Final thoughts

By shrinking our oversized images into the necessary space, we can zoom in a few times which caters for our above problem nicely. It’s also a lot easier to control HTML images as opposed to background images when creating responsive layouts. We can use CSS to specify a max-width in our responsive designs. Which means when we are scaling them up and down, the quality won’t deteriorate.

If you’re seeing poorly downscaled images in Internet Explorer, this is due to the way they handle images upon rendering. To set IE straight, add this to your CSS document:

{% highlight css %}
img {-ms-interpolation-mode:bicubic;}
{% endhighlight %}

This tells the browser to always use high-quality bicubic interpolation mode, as this isn’t the default.

I think it’s really important to utilise high resolution graphics, and shrink them – to progressively get ahead and ensure your website looks stunning on all devices. There is of course a slight downside to this, which is increased load times to load the larger graphics – but it’s worth it.