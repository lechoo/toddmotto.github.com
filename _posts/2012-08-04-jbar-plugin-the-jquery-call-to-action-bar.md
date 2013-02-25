---
title: jBar Plugin, the jQuery call to action bar
author: Todd Motto
layout: post
permalink: /jbar-plugin-the-jquery-call-to-action-bar
disqus: http://www.toddmotto.com/jbar-plugin-the-jquery-call-to-action-bar
--- 

jBar is a simple and lightweight jQuery notification bar that’s been revisited and rewritten (18.11.2012) as an official plugin, which serves up loads of easy customisable options. The jBar allows you to create a simple call to action and bring it forward for the user to see at the top of your website. The user can then toggle the visibility of the bar by clicking the ribbon.

<div class="download-box">
	<a href="//toddmotto.com/labs/jbar" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo jBar', 'jBar Demo']);">Demo</a>
	<a href="//github.com/toddmotto/jBar/archive/master.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download jBar', 'jBar Plugin Coded Download']);">Download</a>
	<a href="//github.com/toddmotto/jBar" onclick="_gaq.push(['_trackEvent', 'Click', 'Fork jBar', 'jBar Fork']);">Fork</a>
</div>

### Overview

jBar was created to provide a lightweight plugin to replace the restrictions provided by [Hellobar][4] and allow easy implementation and customisation for you or your client’s websites. Hellobar you also have to pay for if you want an unbranded version, which is no fun. There’s nothing like full control over your code.

 [4]: //www.hellobar.com

### Features

The jBar sits at the top of your website, and is fully customisable.

The rest of the options are up to you:

type: ‘fixed’ – Two options for the jBar, fixed or static positioning. Fixed is always there when scrolling, and static remains at the top at all times.

delay: ’1000′ – In milliseconds, change to anything you like.

backgroundColor: ‘#DB5903′ – Use a HEX colour here, use any you like. This is the background colour for the jBar and also the ribbon, so the two match up.

borderColor: ‘#FFF’ – Use a HEX colour here too, change the border colour to suit your website.

buttonTextColor: ‘#FFF’ – Change the button text colour.

buttonColor: ‘#333′ – Change the button’s colour.

backgroundColorHover: ‘#222′ – Hover styles for the button.

calltoAction: ‘jBar Plugin!’ – Add anything you like to display your message.

buttonText: ‘Download it!’ – The text to go inside the button, add anything you like. Shorter the better though.

buttonLink: ‘http://www.toddmotto.com’ – The hyperlink of your button. Send it anywhere.

### Usage
Simply include the plugin file, jQuery (jbar.js) in your page, and customise the options set out below:

{% highlight html %}
<script src="jquery.js"></script>
<script src="jbar.min.js"></script>
<script>
	$(function() {
	    $.jBar({
	        type: 'fixed', // fixed/static (lowercase)
	        delay: '1000', // In milliseconds
	        backgroundColor: '#DB5903', // Background Color
	        borderColor: '#FFF', // Background Color
	        buttonTextColor: '#FFF', // Button Text
	        buttonColor: '#333', // Button Color
	        buttonColorHover: '#222', // Button Color Hover
	        calltoAction: 'jBar Plugin! A simple and lightweight notification banner.', // Call to action text
	        buttonText: 'Download it!', // Button Text
	        buttonLink: 'http://www.toddmotto.com' // Hyperlink from button
	    });
	});
</script>
{% endhighlight %}
### Support

All you need to do is download the source code, and hook up the scripts with your website. If you need some support, feel free to comment and I’ll provide some help.

<div class="download-box">
	<a href="//toddmotto.com/labs/jbar" onclick="_gaq.push(['_trackEvent', 'Click', 'Demo jBar', 'jBar Demo']);">Demo</a>
	<a href="//github.com/toddmotto/jBar/archive/master.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download jBar', 'jBar Plugin Coded Download']);">Download</a>
	<a href="//github.com/toddmotto/jBar" onclick="_gaq.push(['_trackEvent', 'Click', 'Fork jBar', 'jBar Fork']);">Fork</a>
</div>
