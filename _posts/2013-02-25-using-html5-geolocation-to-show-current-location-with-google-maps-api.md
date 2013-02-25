---
layout: post
permalink: /using-html5-geolocation-to-show-current-location-with-google-maps-api
title: Using HTML5 Geolocation to show current location with Google Maps API
---

Geolocation is one of the best new HTML5 APIs, so let's see what we can do with it. In a nutshell, Geolocation allows you to give your current location information to the browser. Google use Geolocation a lot, especially for things like Google Maps, you're bound to have seen the popups 'This page would like to use your current location'. If so, you've experienced HTML5 Geolocation.

In this tutorial, we're going to dive into HTML Geolocation and hook the position into Google Maps API, to show our current location on Google Maps! Sounds fun.

<div class="download-box">
	<a href="//toddmotto.com/labs/geolocation-google-api" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo Geolocation, 'Geolocation Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/geolocation-google-api/geolocation-google-api.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download Geolocation, 'Geolocation Download']);">Download</a>
</div>

### Current location
Using JavaScript, we can gather the details of our current location, or whichever device we are on. Please bear in mind though, some ISPs are a little quirky with Geolocation, and sometimes shows you in a different area than you actually are, or not at all. I imagine this is all down to the internet/DNS/ISP/something. But hey, we can still build something with it, and 99% of the time it's fine. Don't blame me, blame the internet. I haven't included any error handling in this script so if it doesn't work for you, try later.

We'll be using the geolocation object, which allows us to gather geographic information from the device. This looks like so:

{% highlight javascript %}
navigator.geolocation;
{% endhighlight %}

Here's how we would gather our current position using JavaScript's getCurrentPosition method and attaching it to the geolocation object:
{% highlight javascript %}
navigator.geolocation.getCurrentPosition();
{% endhighlight %}

We then need to hook this up with our Longtitude and Latitude:

{% highlight javascript %}
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
{% endhighlight %}

Let's take this knowledge above and create a function out of it, hooking it into Google maps!

### Feature detection
First we need to feature detect and find out if the browser supports Geolocation:

{% highlight javascript %}
if(!!navigator.geolocation) {
	// Support
} else {
	// No support
}
{% endhighlight %}

The above if statement uses a double-bang (!!), it's not entirely necessary as it inverts the expression twice, converting the outcome to a boolean, true/false. You can feature detect without the double-bang and achieve the same result, it's just a standard feature detection test that you can easily hook into a boolean later down the line.

With regards to the fallbacks (else statement), as we're not building anything for production environment, I'm just going to provide a dull fallback saying your browser doesn't support Geolocation, this isn't progressive by any means - so if you're going to use Geolocation for production, think about how you could provide a fallback, this might be plotting some default co-ords on a Google Map instead, with the message inside saying their browser doesn't support - but I'll keep it simple.

### Google Maps API v3
Using the Google Maps API v3, we can create a Google Map on the fly and add our current position to it. Here's the API:

{% highlight html %}
<script src="//maps.googleapis.com/maps/api/js?v=3.exp&sensor=true"></script>
{% endhighlight %}

You'll notice the query string at the end of the script source says 'sensor=true', this is necessary for applications that determine the user's location via a sensor.

Merging a simple Google maps basepoint and hooking it into our Geolocation, we are then able to create a function like the below:

{% highlight javascript %}
(function() {

	if(!!navigator.geolocation) {
	
		var map;
	
    	var mapOptions = {
    		zoom: 15,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};
    	
    	map = new google.maps.Map(document.getElementById('google_canvas'), mapOptions);
	
		navigator.geolocation.getCurrentPosition(function(position) {
		
    		var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    		
    		var infowindow = new google.maps.InfoWindow({
    			map: map,
    			position: geolocate,
    			content:
    				'<h1>Location pinned from HTML5 Geolocation!</h1>' +
    				'<h2>Latitude: ' + position.coords.latitude + '</h2>' +
    				'<h2>Longitude: ' + position.coords.longitude + '</h2>'
    		});
    		
    		map.setCenter(geolocate);
    		
		});
		
	} else {
		document.getElementById('google_canvas').innerHTML = 'No Geolocation Support.';
	}
	
})();
{% endhighlight %}

Walking through the function, we run the feature detection, declare the map options, then feed off the navigator to create the location stamp and other details we need. You'll see I've also included some &lt;h1&gt; and &lt;h2&gt; tags for showing the user where we are in terms of exact Longtitude/Latitude using the JavaScript position co-ordinates. These co-ordinates are then created as a variable and passed into Google Maps API's setCenter method, plotting us on the map where we are!

### Handling errors
Should Geolocation fail, or the service be unavailable, we should ideally provide some sort of notification. I haven't done it in this in my example, but here's how you can target different error codes:

{% highlight javascript %}
if (err.code == 0) {
    // Unknown error
}
if (err.code == 1) {
    // Access denied by user
}
if (err.code == 2) {
    // Position unavailable
}
if (err.code == 3) {
    // Timed out
}
{% endhighlight %}

### Periodic updates of Geolocation position
If you're building a cool web app or mobile app, you could use the watchPosition(); JavaScript method instead of getCurrentPosition, as this retrieves periodic updates about the current geographic location of the device. To clear anything being watched, simply use the clearWatch(); method when necessary.

### Browser Support
IE9 and up supports Geolocation, with a good number of earlier modern browser versions supporting it too. Mobiles are pretty great with geolocation, and you could even use the aforementioned watchPosition method and walk about to see your position moving!

<div class="download-box">
	<a href="//toddmotto.com/labs/geolocation-google-api" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo Geolocation, 'Geolocation Demo']);">Demo</a>
	<a href="//toddmotto.com/labs/geolocation-google-api/geolocation-google-api.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download Geolocation, 'Geolocation Download']);">Download</a>
</div>