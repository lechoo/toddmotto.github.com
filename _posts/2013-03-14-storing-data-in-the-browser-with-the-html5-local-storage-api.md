---
layout: post
permalink: /storing-data-in-the-browser-with-the-html5-local-storage-api
title: Storing data in the browser with the HTML5 localStorage API
---

HTML5 localStorage is an HTML5 API that allows us to save string data in the browser. localStorage is part of the web storage specification, it also has a sister called sessionStorage which is slightly different - but very similar. localStorage stores the data and has no expiration - it's persistent, whereas sessionStorage is limited to the session only, meaning when you close your browser - it's gone. In this tutorial we're going to create a small localStorage app that autosaves your data in the browser.

<div class="download-box">
	<a href="//toddmotto.com/labs/html5-local-storage" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo HTML5 localStorage, 'HTML5 localStorage Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/html5-local-storage/html5-local-storage.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download HTML5 localStorage, 'HTML5 localStorage Download']);">Download</a>
</div>

### JavaScript detection
Before doing anything, it's probably wise to detect whether the browser supports localStorage (this even includes sessionStorage):

{% highlight javascript %}
// localStorage detection
function supportsLocalStorage() {
	return typeof(Storage)!== 'undefined';
}

// Run the support check
if (!supportsLocalStorage()) {
	// No HTML5 localStorage Support
} else {
	// HTML5 localStorage Support
}
{% endhighlight %}

### Setting, getting and clearing
localStorage comes with a few different JavaScript methods, let's look at some:

For setting data, we need to do the following:

{% highlight javascript %}
localStorage.setItem('dataName', 'somevalue');
{% endhighlight %}

For getting our data:

{% highlight javascript %}
localStorage.getItem('dataName');
{% endhighlight %}

For removing the data:

{% highlight javascript %}
localStorage.removeItem('dataName');
{% endhighlight %}

And for clearing the entire localStorage (not just the individual item):

{% highlight javascript %}
localStorage.clear();
{% endhighlight %}

### HTML
Let's create some HTML for testing localStorage:

{% highlight html %}
<textarea class="localstorage"></textarea>
<button class="clear">Clear localStorage</button>
<button class="empty">Empty localStorage</button>
{% endhighlight %}

We then need to hook into our textarea to start saving the data:

{% highlight javascript %}
var demo = document.querySelector('.localstorage');
{% endhighlight %}

We can then start saving data with it by hooking into the textarea's value:

{% highlight javascript %}
localStorage.setItem('autosave', demo.value);
{% endhighlight %}

The above sets an item called 'autosave' which then uses the value of the textarea. But this won't work or update itself, so what we need to do is set an interval to update it every second (1000). This can be done like so:

{% highlight javascript %}
setInterval(function() {
	localStorage.setItem('autosave', demo.value);
}, 1000);
{% endhighlight %}

### Catching errors
localStorage has a quota in which you can hit and no longer store further data, so we need to clear it. I'm not sure on the exact figure, but I've read it's around 5MB of data storage for Chrome, FireFox, Opera, and 10MB for Internet Explorer, which beats a Cookie handsdown at just 4KB quota. To catch any errors and alert the user, we need to use the 'try' and 'catch' methods:

{% highlight javascript %}
try {
	setInterval(function() {
		localStorage.setItem('autosave', demo.value);
	}, 1000);
} catch (e) {
	if (e == QUOTA_EXCEEDED_ERR) {
		alert('Quota exceeded!');
	}
}
{% endhighlight %}

You can see I've added the 'setInterval' inside the 'try' section, which it will keep updating the data every second until it hits the quota limit. It would be good practice when developing to clear the localStorage data after the required actions are completed (such as storing form data).

### Clearing localStorage
There are two ways we can rid the browser of localStorage, using the aforementioned 'setItem' and 'getItem' methods:

{% highlight javascript %}
localStorage.removeItem('autosave'); // Remove the autosave
localStorage.clear(); // Clear all data
{% endhighlight %}

### Running a localStorage script
Putting the above together, we can create a really simple localStorage app that we can type into, it saves our data periodically (once a second) and also the option to wipe the data altogether, or just remove the item itself. Let's go through it, comments are coded inline:

{% highlight javascript %}
(function() {
	
	// Grab the textarea
	var demo = document.querySelector('.localstorage');
	
	// localStorage feature detect
	function supportsLocalStorage() {
		return typeof(Storage)!== 'undefined';
	}
	
	// Run the detection with inverted expression
	if (!supportsLocalStorage()) {
	
		// Change the value to inform the user of no support
		demo.value = 'No HTML5 localStorage support, soz.';
		
	} else {
	
		// Try this
		try {
		
			// Set the interval and autosave every second
			setInterval(function() {
				localStorage.setItem('autosave', demo.value);
			}, 1000);

		} catch (e) {
		
			// If any errors, catch and alert the user
			if (e == QUOTA_EXCEEDED_ERR) {
				alert('Quota exceeded!');
			}
		}
		
		// If there is data available
		if (localStorage.getItem('autosave')) {
		
			// Retrieve the item
			demo.value = localStorage.getItem('autosave');
		}
		
		// Clear button, onclick handler
		document.querySelector('.clear').onclick = function() {
			demo.value = '';
			localStorage.removeItem('autosave');
		};
		
		// Empty button, onclick handler
		document.querySelector('.empty').onclick = function() {
			demo.value = '';
			localStorage.clear();	
		};
		
	}
	
})();
{% endhighlight %}

The above function is a really simple usage of the localStorage API, but you can see it's potential. If you visit the demo, type anything you want and providing your browser supports HTML5 localStorage, you can refresh the page as much as you want, close the browser and come back to it - and it'll still be there. If your browser doesn't support it, you'll get a note saying so.

### Browser support
The web storage API was implemented a few years back now, and as such was integrated into IE8 (and obviously IE9). This makes it even better when working with it, as we can all start to move away from supporting IE7. IE8 is actually a blessing on a few levels compared to IE7, it's still a massively popular browser world-wide, but it supports things like querySelector, localStorage, and also CSS such as box-sizing:border-box - all things modern development thrives upon. It's not all doom and gloom, see the silver linings.

### Impressive localStorage
Those times you've filled out forms, the internet dies, or you accidentally refreshed, gone back, an error occured and wiped the form - gone! What's even better is that you can even turn off your computer, disconnect from the internet - everything - and it'll still be there when you come back. Try it on the demo, type anything you want, refresh, reboot, have a play - and download should you feel you can use it in any of your projects.

<div class="download-box">
	<a href="//toddmotto.com/labs/html5-local-storage" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo HTML5 localStorage, 'HTML5 localStorage Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/html5-local-storage/html5-local-storage.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download HTML5 localStorage, 'HTML5 localStorage Download']);">Download</a>
</div>