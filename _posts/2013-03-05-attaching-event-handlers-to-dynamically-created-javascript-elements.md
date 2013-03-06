---
layout: post
permalink: /attaching-event-handlers-to-dynamically-created-javascript-elements
title: Attaching event handlers to dynamically created JavaScript elements
---

When working with JavaScript, you can sometimes need to create new elements on-the-fly, and from that, you'll need to do something with that new element. It might be a click, which more often than not will need to execute a function.

The problem with dynamically created elements, is that they aren't born with the same event handlers as the existing elements. Let's say we have a list of items that you could click on to toggle/add a class name, when a new element is created and appended to that same list - it won't work - the event handler attachment is missing. This tutorial is going to cover a pure JavaScript way of dynamically attaching event handlers to newly created elements, so they merge in seamlessly with your other elements.

<div class="download-box">
	<a href="//toddmotto.com/labs/js-event-handlers" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo JS Event Handlers, 'JS Event Handlers Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/js-event-handlers/js-event-handlers.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download JS Event Handlers, 'JS Event Handlers Download']);">Download</a>
</div>

### Creating some markup
Let's create some HTML to get started from, I am going to take the list scenario into account here, and create a simple &lt;ul&gt; with some links inside:

{% highlight html %}
<ul id="links">
    <li class="dynamic-link">List item 1</li>
    <li class="dynamic-link">List item 2</li>
    <li class="dynamic-link">List item 3</li>
    <li class="dynamic-link">List item 4</li>
</ul>
{% endhighlight %}

### Creating an onclick function
To create an onclick function is simple, we just target our element, and setup a click handler:

{% highlight javascript %}
var element = document.getElementById('id');
element.onclick = function() {
	// onclick stuff
}
{% endhighlight %}

It's good practice to setup functions separately and then call them like so, especially when dealing with loops:

{% highlight javascript %}
var element = document.getElementById('id');

function myFunction() {
	// onclick stuff
}

element.onclick = myFunction; // Assigned
{% endhighlight %}

### Attaching an onclick function

Taking our knowledge from above, we can loop through our HTML and attach the event handler to each &lt;li&gt; tag. 

First I'm going to setup querySelector, a native DOM selector, in a jQuery-style way using the dollar symbol:

{% highlight javascript %}
// querySelector, jQuery style
var $ = function (selector) {
	return document.querySelector(selector);
};
{% endhighlight %}

This allows us to do this to target what we need:
{% highlight javascript %}
$('.className');
{% endhighlight %}

Using querySelector, let's target our #links ID, and then find the list elements inside. We could use $('#links li') but this would require querySelectorAll instead. I've then looped through the array of links, attaching the above 'myFunction' to each element.

{% highlight javascript %}
var links = $('#links').getElementsByTagName('li');
			
// For each <li> inside #links
for (var i = 0; i < links.length; i++) {
	var link = links[i];
	link.onclick = myFunction;
}
{% endhighlight %}

That's great, but let's add a real function called dynamicEvent:

{% highlight javascript %}
function dynamicEvent() {
	this.innerHTML = 'Dynamic event success.';
	this.className += ' dynamic-success';
}

// Assign it like so (this will be inside the loop)
link.onclick = dynamicEvent;
{% endhighlight %}

So far we've attached an onclick event handler to each static item on the page, which is easy. When we click on them now, they will run the dynamicEvent function and the text will change to 'Dynamic event success.'.

### Dynamically creating elements
Now we want to dive deeper and create a new &lt;li&gt; element using JavaScript, with some text inside, and append it to the #link unordered list. This would be easily done like so:

{% highlight javascript %}
var li = document.createElement('li');
$('#links').appendChild(li);
{% endhighlight %}

Nice and easy, I've created a new element and appended it to our #links ID - no problem. But there is a problem! Simply appending the new list item will not magically allow me to click on it and run a function, which is often a problem when creating new elements. The link will do nothing, unless we create it and attach an event handler as well. AJAX also has this problem, pulling new information off the server will have no JavaScript readiness attached to it.

### Attaching the event dynamically
This is a lot simpler than you think, in our function that will create our new element, we need to attach the event handler, and function we want to assign to it, this can be done like so:

{% highlight javascript %}
// Create the new element
var li = document.createElement('li');
li.className = 'dynamic-link'; // Class name
li.innerHTML = dynamicValue; // Text inside
$('#links').appendChild(li); // Append it
li.onclick = dynamicEvent; // Attach the event!
{% endhighlight %}

All done. But let's put it into a more practical use. "What can I use it for?" - anything! I ran into this when creating jResize and my browser-based responsive development tool (though I cheated a bit with jQuery so here's the JavaScript way).

### Practical usage
In the demo I've setup, you'll see the existing list of items, give one or two a click and watch the text change and a nice icon appear. Voila! Now, the next step is to create your own element, which I've created a nice little script and small form to do exactly that. Simply type a word into the field input, and generate your element. The newly created element will be born with it's onclick function attached.

### Keeping functions outside the loop
JSLint likes to remind everyone that you shouldn't create functions inside a loop, in some cases it's okay to do, but for this tutorial I totally agree. It will save us from writing duplicated markup when running the function on both the static and dynamically created elements (which is why dynamicEvent is created outside the loop and simply called).

### Demo function
For anyone interested to see how the demo works, utilising the steps above, you can have a look through this and the comments:

{% highlight javascript %}
(function(){
		
	// querySelector, jQuery style
	var $ = function (selector) {
		return document.querySelector(selector);
	};
	
	// Create function outside loop
	function dynamicEvent() {
		this.innerHTML = 'Dynamic event success.';
		this.className += ' dynamic-success';
	}
	
	// Iterate over #links <li>
	// Use querySelector to target #links and then get tag names <li>
	var links = $('#links').getElementsByTagName('li');
	
	// For each <li> inside #links
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		
		// <li> onclick, runAlert function
		link.onclick = dynamicEvent;
	}
	
	// Onsubmit
	$('.generate').onsubmit = function() {
	
		// Grab the input value
		var dynamicValue = $('.generate-input').value;
		
		// If empty value
		if(!dynamicValue) {
		
			alert('Please enter something.');
			
		} else {
		
			// Change the submit value
			$('.generate-submit').value = 'Click your item below!';
			
			// Create the links with the input value as innerHTML
			var li = document.createElement('li');
			li.className = 'dynamic-link';
			li.innerHTML = dynamicValue;
			
			// Append it and attach the event (via onclick)
			$('#links').appendChild(li);
			li.onclick = dynamicEvent;
		}
		
		// Prevent the form submitting
		return false;
	}
})();
{% endhighlight %}

<div class="download-box">
	<a href="//toddmotto.com/labs/js-event-handlers" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo JS Event Handlers, 'JS Event Handlers Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/js-event-handlers/js-event-handlers.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download JS Event Handlers, 'JS Event Handlers Download']);">Download</a>
</div>