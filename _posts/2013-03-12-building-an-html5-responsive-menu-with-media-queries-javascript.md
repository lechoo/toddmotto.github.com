---
layout: post
permalink: /building-an-html5-responsive-menu-with-media-queries-javascript
title: Building an HTML5 responsive menu with media queries and JavaScript
---

### Responsive menus

Responsive navigation menus come in all different shapes and sizes, you might recall my post on [creating a dynamic select menu](http://toddmotto.com/creating-a-responsive-dynamic-mobile-navigation-from-pure-javascript/) from an existing menu, which is one method. So let's visit another. The 'in-page' navigation.

<div class="download-box">
	<a href="//toddmotto.com/labs/responsive-nav" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo Responsive Nav, 'Responsive Nav Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/responsive-nav/responsive-nav.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download Responsive Nav, 'Responsive Nav Download']);">Download</a>
</div>

### What is 'in-page' navigation?
Depending on your project, a dynamic &lt;select&gt; menu may not be entirely appropriate, there is a massive debate on which way to steer your projects, so let's open the door for another option. In-page navigation is basically restyling your menu in such a way that it's responsive, but also looks like part of the design whilst delivering an awesome mobile and touch experience. I say touch because some menus deliver a nice mobile experience, but the rendering jutters and in a way puts a downer on the experience. Mobile experience is meant to be fast and efficient, so let's cut the junk and build something that really delivers a solution.

### Simplicity is key
There's no point serving up tonnes of JavaScript to deliver a responsive menu solution, especially using jQuery, as this gives us a few things to worry about. The juttering as the menu expands/collapses, and the performance when actually loading the page.

### Creating our desktop navigation
Let's break out the HTML5 elements and create a neat and basic menu:

{% highlight html %}
<nav class="nav">
	<ul class="nav-list">
		<li class="nav-item"><a href="#">Home</a></li>
		<li class="nav-item"><a href="#">About</a></li>
		<li class="nav-item"><a href="#">Services</a></li>
		<li class="nav-item"><a href="#">Portfolio</a></li>
		<li class="nav-item"><a href="#">Testimonials</a></li>
		<li class="nav-item"><a href="#">Contact</a></li>
	</ul>
</nav>	
{% endhighlight %}

Here I've used a nice naming convention on our navigation, unordered list and items inside. This gives us nice and easy CSS targeting.

### Creating the desktop navigation
I'll take you through my responsive workflow a little, and depending on your project and how you're setting up your media queries, this may differ to you slightly.

First I am going to add some basic styling to the nav:

{% highlight css %}
.nav {
	position:relative;
	display:inline-block;
	font-size:14px;
	font-weight:900;
}
.nav-list {
	
}
.nav-item {
	float:left;
	*display:inline;
	zoom:1;
}
.nav-item a {
	display:block;
	padding:15px 20px;
	color:#FFF;
	background:#34495E;
}
.nav-item:first-child a {
	border-radius:5px 0 0 5px;
}
.nav-item:last-child a {
	border-radius:0 5px 5px 0;
}
.nav-item a:hover {
	background:#2C3E50;
}
{% endhighlight %}
	
You'll notice .nav has the 'display:inline-block' property, this is so it centralises in the page for the demo, and isn't entirely necessary for production.

This sets out a nice deep grey/blue coloured navigation for us to work with on the desktop. Done. But now we need a mobile navigation.

### Mobile navigation
Now we've established a basepoint for our navigation, we need to think mobile and tablet. Our navigation items at the minute are inline to eachother, but this needs to change for mobile.

To get the navigation to sit ontop of eachother, we need to create a new CSS rule using media queries, to tell the browser/device that anything iPad and under needs to show the navigation elements ontop of eachother - stacked!

This doesn't require much fiddling, but we've introduced a media query:

{% highlight css %}
@media only screen and (min-width: 320px) and (max-width: 768px) {
	.nav {
		width:100%;
	}
	.nav-item {
		width:100%;
		float:none;
	}
}
{% endhighlight %}
	
Depending on the design of your project, you might need to use different media queries, but essentially, this media query saves us from undoing/redoing later styles that we need to re-apply. It tells the browser two things; 1) any styles above 320px, use this styles, and 2) don't show these styles to anything above 768px, which is anything larger than iPad. This is a pretty good use of the min-width and max-width CSS3 media queries as you can achieve a lot with very little.

What the above CSS does is change our inline navigation items into full-width and stacked items, just what we need.

### Expanding and collapse
Mobile navigations are there to save room, so I don't believe in showing the full navigation (unless you've really got the room), I'd rather show off the design and functionality of the awesome menu though with some clever JavaScript.

First we need to create an element to click on, which will act as the popular 'three-line' menu approach which is pretty iconic when it comes to mobile users, so it's a safe bet:

{% highlight javascript %}
var mobile = document.createElement('div');
mobile.className = 'nav-mobile';
document.querySelector('.nav').appendChild(mobile);
{% endhighlight %}

Nice and easy, we create a new &lt;div&gt;, give it 'nav-mobile' as the class name (keeping our naming conventions in check) and using the querySelector to append it. It's pretty safe to use querySelector here as any browser that supports CSS3 media queries I am pretty confident will support querySelector (even IE8 does).

Now we need to style the clickable icon:

{% highlight css %}
.nav-mobile {
	display:none; /* Hide from browsers that don't support media queries */
	cursor:pointer;
	position:absolute;
	top:0;
	right:0;
	background:#34495E url(../img/nav.svg) no-repeat center center;
	height:40px;
	width:40px;
	border-radius:5px;
	-webkit-border-radius:5px;
	-moz-border-radius:5px;
}
{% endhighlight %}
	
I've added these styles in the main area of the CSS, not inside any media queries. This is so that the menu can be styled in the main CSS area, and literally tweaked inside our media queries for easy management. It also benefits us again because if you were to style it inside a media query, older browsers would ignore it leaving it unstyled and randomly placed - which is why it includes 'display:none;' on the element. This method I've found to be the best.

Using an [SVG](http://toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script/) again (pretty confident most browsers will support SVG and media queries, so let's use it) we create a scalable 'three-line' icon. This means we don't have to do any further optimisation for retina displays.

Going back to our media query, we need to tell it to show our mobile icon for our decided viewport widths:

{% highlight css %}
@media only screen and (min-width: 320px) and (max-width: 768px) {
	.nav-mobile {
		display:block;
	}
}
{% endhighlight %}

This simply shows it to the user. But we now we to hide our dropdown list that's still in clear view, our 'nav-list' class:

{% highlight css %}
@media only screen and (min-width: 320px) and (max-width: 768px) {
	.nav-list {
		display:none;
	}
}
{% endhighlight %}
	
Obviously I wouldn't use a separate media query for each one here, but you can see how it works and where we include the declarations.

Now our button is visible, and our navigation list is hidden, let's move on...

### Hello JavaScript
This is where we get more funky and get some things working. As I mentioned above, JavaScript (overloading mobile/tablet devices) can cause bad results when animating (94kb of jQuery anyone?), so let's keep it mega simple for best results.

I basically want to setup a simple click handler on the newly appended and styled button so that it opens and closes our navigation when clicked. To do this, I'm not going to use jQuery or animation techniques, for a really nice experience (and instant) I am literally going to change the styles from 'display:none;' to 'display:block;', and then toggle it back when clicked again.

I'm going to setup a really simple onclick handler to toggle a new 'nav-active' class, but first I need to grab some jQuery-style 'toggleClass' and 'hasClass' functions from [a previous post](http://toddmotto.com/creating-jquery-style-functions-in-javascript-hasclass-addclass-removeclass-toggleclass):

{% highlight javascript %}
// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}
{% endhighlight %}
	
I'll then use the toggleClass method in my onclick handler (using the querySelector again to grab the elements):

{% highlight javascript %}
var mobileNav = document.querySelector('.nav-mobile');
var toggle = document.querySelector('.nav-list');
mobileNav.onclick = function() {
	toggleClass(this, 'nav-mobile-open');
	toggleClass(toggle, 'nav-active');
}
{% endhighlight %}
	
And that's it. JavaScript and mobile performance is amazing, no lagging/juttering as the navigation menu is opened or closed, and we've successfuly created a great foundation to extend a responsive navigation menu for any project.

The great thing about mobile is they also interpret hover as a touch method, which means if you wanted to add hover capabilities to another nested menu (just like a secondary nested dropdown you could get away with using :hover pseudo selectors to display the nested content).

Here's the full script for the above tutorial:

{% highlight javascript %}
(function(){

	// Create mobile element
	var mobile = document.createElement('div');
	mobile.className = 'nav-mobile';
	document.querySelector('.nav').appendChild(mobile);
	
	// hasClass
	function hasClass(elem, className) {
		return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}
	
	// toggleClass
	function toggleClass(elem, className) {
		var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
	    if (hasClass(elem, className)) {
	        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
	            newClass = newClass.replace(' ' + className + ' ', ' ');
	        }
	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    } else {
	        elem.className += ' ' + className;
	    }
	}
	
	// Mobile nav function
	var mobileNav = document.querySelector('.nav-mobile');
	var toggle = document.querySelector('.nav-list');
	mobileNav.onclick = function() {
		toggleClass(this, 'nav-mobile-open');
		toggleClass(toggle, 'nav-active');
	}
})();
{% endhighlight %}

<div class="download-box">
	<a href="//toddmotto.com/labs/responsive-nav" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo Responsive Nav, 'Responsive Nav Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/responsive-nav/responsive-nav.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download Responsive Nav, 'Responsive Nav Download']);">Download</a>
</div>