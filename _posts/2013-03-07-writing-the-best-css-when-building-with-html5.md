---
layout: post
permalink: /writing-the-best-css-when-building-with-html5
title: Writing the best CSS when building with HTML5
---

### Becoming HTML agnostic

HTML agnostic means to use as little HTML in your CSS (or none). The key factor here is to _avoid_ becoming markup reliant and _avoid_ declaring qualified names (the element name). Let's take a basic structure for an unordered list navigation:

{% highlight html %}
<ul>
	<li>
		<a href="#">Link</a>
	</li>
	<li>
		<a href="#">Link</a>
	</li>
	<li>
		<a href="#">Link</a>
	</li>
</ul>  		    		
{% endhighlight %}

Here's what you might be used to seeing this to target the above HTML:

{% highlight css %}
ul {}
ul li {}
ul li a {}
{% endhighlight %}
	
These selectors aren't specific enough, they are potentially too complicated and not very efficient, especially when we expand our code. They're not very maintainable either. By default, this will also target the styles of every single &lt;li&gt; element inside your first &lt;ul&gt; - which means we are going to be undoing styles at a later date when adding a nested dropdown.

On becoming HTML agnostic, we can begin to create more classes to represent each element when we need them. Let's rewrite our navigation to become HTML agnostic:

{% highlight html %}
<ul class="nav">
	<li class="nav-item">
		<a href="#">Link</a>
	</li>
	<li class="nav-item">
		<a href="#">Link</a>
	</li>
	<li class="nav-item">
		<a href="#">Link</a>
	</li>
</ul>  		    		
{% endhighlight %}

And the CSS that we can link with our navigation will look like this:

{% highlight css %}
.nav {}
.nav-item {}
.nav-item a {}
{% endhighlight %}
	
Perfect. The new CSS we've created is better for many reasons, the specificity has increased, and will only apply to the elements we tell it, we could change our &lt;ul&gt; to an &lt;ol&gt; and not have to change a single line of CSS. We also didn't have to nest our CSS to target and list elements inside. Our CSS is much more efficient now.

If you're still not sold on the approach, here's a killer example. We'll likely want to add a current item class to our HTML to show the current page, and using a non-agnostic approach is a challenge and we _could_ end up using the hacky !important method to override styles - which again we want to avoid.

Instead of mixing a current item class amongst qualified name selectors, we could keep things very neat and tidy like so:

{% highlight css %}
.nav {}
.nav-item {}
.nav-item a {}
.nav-current {}
{% endhighlight %}

We can see instantly the connection between these, and you can add scalable code instantly.

### HTML5 agnostic

There are so many times that I see developers targeting those new HTML5 elements and styling them individually. This is bad practice when you consider what we've achieved from the above. I'm going to hold my hand up, I used to do it. Those cool new elements look so pretty with no class names - I know.

I've worked on so many coding projects, which at the time I was coding CSS with qualified selectors. Let's look at a simple header section of a website in HTML5:

{% highlight html %}
<header>
	<!-- Content -->
</header>  		    		
{% endhighlight %}

Using qualified selectors, you can then target the HTML like so:

{% highlight css %}
header {}
{% endhighlight %}

Looking at it now, this was really bad. I never do this anymore due to the life of real world development. Briefs change, goalposts move, I've had clients back out from using HTML5 elements back to HTML4, and had to make painstaking (and unncessary) changes to both my HTML _and_ CSS.

With HTML agnostic coding, you can become much more efficient and use your classes. Nothing will change apart from your HTML. CSS is not HTML5 at the end of the day, so you shouldn't write code for it. Let HTML do it's job, and let CSS do it's job.

Here's a much better way of targeting the &lt;header&gt; element:

{% highlight html %}
<header class="header">
	<!-- Content -->
</header>
{% endhighlight %}

We can then become free of relying on our markup for styling like so:

{% highlight css %}
.header {}
{% endhighlight %}

And what happens if we need to revert back to using the well-known &lt;div&gt;? Easy switch back. This isn't the only practicality for this method of coding for HTML5…

### Avoiding qualified name selectors
A lot of developers like to add the qualified name to CSS selectors, this again has no real point to it as the CSS should be specific enough to do it's job properly. Here's an example of using a qualified name alongside a CSS selector:

{% highlight css %}
header.header {}
div#logo {}
div.post {}
{% endhighlight %}

This only lengthens the CSS document and limits the scability of our CSS. At the end of the day, CSS is about building resuable components, not creating static ones that are very limited and difficult to maintain. Dropping the qualified name from your CSS will open you up to more CSS scalability potential.

### Incorrectly used HTML5 elements
Apart from using HTML5 elements in your CSS reset, no other declarations are going to benefit you. HTML5 is a more flexible language, more openly interpreted and you can use elements more than one on a page.

The &lt;header&gt; tag is not just for the top of your website. If you look into HTML5 document outlines, which is the structure of the document, you can see that the spec has changed since HTML4.

What used to be 1 &lt;h1&gt; tag per page (this is a really basic level) has now been changed with HTML5 &lt;section&gt; elements, in which you can divide your page content up and really, you're potentially using multiple &lt;header&gt;, &lt;nav&gt;, &lt;footer&gt;, &lt;section&gt; and &lt;article&gt; elements per page. If you're declaring these elements in your CSS, you're dramatically decreasing the reliability and scalability of your code. Extending websites is all part of the daily lifecycle of a developer, and if you're incorrectly using elements and CSS declarations to begin with, you're setting yourself up for tough changes ahead.

### Use more classes and limit ID's
Think of your HTML and CSS as a comparison, how big is one document compared to the other? Over the last year, I've been using a lot more classes in my HTML. I like to think of it as some weighing scales, and how in reality, CSS does a _lot_ more work than the HTML. So let's add more classes to our HTML - and let it do some of the work!

This doesn't mean creating an Object-Orientated CSS solution for every segment of the website, but using a lot more classes. Here's one example of how I previously coded my logo:

{% highlight html %}
<div id="logo">
	<a href="/">
		<img src="img/logo.svg" alt="Logo">
	</a>
</div>
{% endhighlight %}

And the accompanying CSS:

{% highlight css %}
#logo {}
#logo a {}
#logo a img {}
{% endhighlight %}

This was nearly acceptable, as using an ID meant the declaration was safe as you can only use one ID per document. But what isn't efficient are the selectors, they're nested again and for no good reason. Let's go agnostic, and add more classes, and let our HTML do some of the hard work:

{% highlight html %}
<div class="logo">
	<a href="/" class="logo-link">
		<img src="img/logo.svg" alt="Logo" class="logo-img">
	</a>
</div>
{% endhighlight %}

Now, the HTML is taking on an entity by itself, and this will help our CSS find it much faster, without all our nested selectors. I've dropped the ID and used a class, this is much safer too for when scaling our websites that may require more than one declaration. So let's convert this to CSS:

{% highlight css %}
.logo {}
.logo-link {}
.logo-img {}
{% endhighlight %}

Much cleaner, much more readable and much more manageable! When it comes to making changes in future this will be much more simple.

### Multiple line CSS
For years I used to write single line code, because it was much nicer to write as I could quickly scan up and down the stylesheet with ease and see where I was. With the introduction of HTML5, comes CSS3 vendor prefixes, longer syntaxed code, it has become a messy situation to try achieve neat code nowadays.

I appreciate everyone has their own coding style, but for readability and management purposes, writing clean CSS by using a multiple line syntax has been a far better choice and transition for me.

What I used to write:

{% highlight css %}
.posts-list {list-style:none;}
.post {border-bottom:1px solid #EEE;margin:0 340px 0 0;}
.post a {border-left:8px solid #CCC;display:block;font-size:16px;}
.post a:hover {border-left:8px solid #2BA6CB;}
{% endhighlight %}

At first this looks nice and neat, but when you're working on a more complicated project, it can have a negative effect in terms of being able to read it. CSS doesn't always have a few declarations inside, it can have several lines worth, which when it comes to maintaining is a downfall to this approach. At least with multiple lined CSS, you've got that consistency approach:

{% highlight css %}
.posts-list {
	list-style:none;
}
.post {
	border-bottom:1px solid #EEE;
	margin:0 340px 0 0;
}
.post a {
	border-left:8px solid #CCC;
	display:block;
	font-size:16px;
}
.post a:hover {
	border-left:8px solid #2BA6CB;
}
{% endhighlight %}

### Using better class names
Presentational class names can be good and bad. If you're using an OOCSS approach, and have a set of different coloured buttons, it's understandable to create presentational class names, such as 'blue' or 'green'. Generally, a class name should be there to represent the role it plays in the markup, whilst providing readability.

When providing a notification (perhaps saving your profile), you could display a nice green success box to the user, which using presentational class names would look like so:

{% highlight css %}
.green-alert {
	background:green;
	border:1px solid darkgreen;
}
{% endhighlight %}

CSS properties are technically variables, and can change, that's why presentational class names aren't great. For instance, you could change the border colour and it would no longer be red, but in the markup, the code is told otherwise. A better solution could be this:

{% highlight css %}
.alert-success {
	background:green;
	border:1px solid darkgreen;
}
{% endhighlight %}

You could then imagine the parent element of the 'alert-success' class being called 'alert', with an interchangable class name inside, for example:

{% highlight css %}
.alert {
	/* Create the alert box */
}
.alert-success {
	background:green;
	border:1px solid darkgreen;
}
.alert-fail {
	background:red;
	border:1px solid darkred;
}
{% endhighlight %}

### Create your own coding style
It takes a while, but creating your own coding style is well worth investing some time in. I'm always adapting new techniques and evolving my style, but it's set quite clearly. You might have gauged some of it from this article.

Naming conventions: using a naming convention that shows a relationship between elements. You may have noticed I create a parent element with a name, and all child elements feed off it using the parent name as a prefix. For example, a blog post in a feed may look like so:

{% highlight html %}
<article class="post">
	<h3 class="post-title">Post title</h3>
	<img src="post-img" alt="Post Thumbnail">
	<div class="post-content">
		<!-- Text here -->
	</div>
</article>
{% endhighlight %}

This makes it really easy when working with the CSS, as you can visually see the relationship of the elements without knowing the HTML! The CSS I would write for this:

{% highlight css %}
.post {

}
.post-title {

}
.post-img {

}
.post-content {

}
{% endhighlight %}

For reusable objects such as buttons, call to actions, and other UI elements, you may wish to take a more OOCSS approach.

Whitespace: This takes up a little room in your CSS document, and so I stack my CSS directly on top of the previous declaration so there's no whitespace above or below declarations. You can see above that the end brace ends and the next class name begins directly underneath. You can also see the structure of your page much clearer in this instant too.