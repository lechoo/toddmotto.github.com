---
title: How to utilise Google Analytics onClick Tracking
author: Todd Motto
layout: post
permalink: /how-to-utilise-google-analytics-onclick-tracking
disqus: http://www.toddmotto.com/how-to-utilise-google-analytics-onclick-tracking
---

Collecting data on how web users scurry through our websites is a great performance indicator as well as an interesting statistic provider. Google Analytics offers a pretty awesome feature which allows you to track outbound and on-page click events. Using some inline Javascript provided by Google, you can setup your onclick tracking instantly and see results straight away. 

### Overview

First of all, if you’re not using Google Analytics, get on over [here][1] and setup a free account. Your Google Analytics code snippet should look like this:

 [1]: http://www.google.com/analytics

{% highlight html %}
<script>
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-XXXXXXXX-XX']);
	_gaq.push(['_trackPageview']);
	
	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
</script>
{% endhighlight %}

### What’s this onclick Tracking stuff?

Onclick Tracking is already built into your Google Analytics account, we just need to hook it up to your website. It’s got a lot of benefits, for tracking downloads, specific button clicks (such as how many people click your Logo instead of Home), and other data you may wish to track such as new launches and promotions. It works by placing a small specific piece of code on the links you’d like to track – when they’re (you guessed it) – clicked. To integrate your onclick tracking, make sure your Analytics snippet (above) has this piece of code:

{% highlight javascript %}
_gaq.push(['_trackPageview']);
{% endhighlight %}

The trackPageview function sets the account up for pushing event data to your Google Analytics account.

So where do we use it? And how? The easiest way to integrate your onclick functionality is inside a hyperlink. You’ll need to pay special attention to the wording you place inside your onclick functions though, as this feeds directly back into Google Analytics and starts churning out results.

{% highlight javascript %}
onclick="_gaq.push(['_trackEvent', '', '', '']);"
{% endhighlight %}

The above piece of code is the inline JavaScript that we need to use for tracking, but it needs to be setup correctly in order to get results. You’ll notice the quotation marks near the end are empty, this is because we need to set a few fields for data collecting.

The piece of code below was taken from the Download button from my previous article which includes a Free Download link, you can see it in the flesh [here][2] if you [Inspect Element][3] on the button (end of the article). So here’s what the inline JavaScript looks like inside the working Download hyperlink:

 [2]: /creative-and-professional-cv-resume-download
 [3]: http://getfirebug.com

{% highlight html %}
<a href="/downloads/CVDownload.zip" class="download" onclick="_gaq.push(['_trackEvent', 'Click', 'CV Pack Download', 'CV Zip Downloads']);">Download</a>
{% endhighlight %}

You’ll notice I’ve populated the end fields (quotations) with the Events that will be pushed back to my Google Analytics account. The sequence is as follows: 

Click, CV Pack Download, CV Zip Downloads.

Which really means:

Category, Action, and followed by an Optional Label.

### What now?

Copy this snippet of code and use it on any of your hyperlinks:

{% highlight html %}
<a href="" onclick="_gaq.push(['_trackEvent', 'Category', 'Action', 'Extra Label if you like!']);">Click here!</a>
{% endhighlight %}

### Inside Analytics

To access the data inside your Analytics Dashboard, simply hit the sidebar tab ‘Content’ followed by ‘Events’ then ‘Overview’, and you can check out the data you’re collecting with your onclick events there, by Event Category, Action or Label. It’s good to put all Clicks inside one category, to stack them up against each other to see which is getting more attention and which isn’t. You’ll notice that Google Analytics automatically takes care of any outbound link-click tracking too.

### Notes

Your onclick Tracking doesn’t need to be setup in your Analytics Dashboard, wait a day or so after implementing your JavaScript and you will start to see data being pushed into your account.