---
title: Meet Conditionizr, the conditional free legacy, retina, script and style loader.
author: Todd Motto
layout: post
permalink: /meet-conditionizr-the-conditional-free-legacy-retina-script-and-style-loader
disqus: http://www.toddmotto.com/meet-conditionizr-the-conditional-free-legacy-retina-script-and-style-loader
---

After much debate about a way forward past conditional statements, retina detection, and legacy content serving, [Mark Goodyear][1] and I have been working hard on a proposed solution: Conditionizr.

 [1]: //twitter.com/markgdyr

Conditionizr is a clever tool for front-end development that detects the end-users browser and pixel ratio, allowing you to serve specific conditional JavaScript and CSS files they need.

<div class="download-box">
	<a href="//conditionizr.com" onclick="_gaq.push(['_trackEvent', 'Click', 'conditionizr.com', 'conditionizr.com']);">Conditionizr</a>
	<a href="//github.com/conditionizr/conditionizr/archive/master.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download Conditionizr', 'Conditionizr Download']);">Download</a>
	<a href="//github.com/conditionizr/conditionizr" onclick="_gaq.push(['_trackEvent', 'Click', 'Fork Conditionizr', 'Conditionizr Fork']);">Fork</a>
</div>

Why you’ll love Conditionizr:

### Conditional free HTML tags

With legacy browsers, we often see Conditionial statements wrapped around our HTML element, so the browser can use the HTML tag relevant to the browser. Conditionizr steps in to take this conditional approach one step further, detecting those IE versions, and adds the relevant class-name to the HTML tag. This means no more conditional statements on the HTML tag. Conditionizr automates the process.

### Conditional loading

Combined with class name additions, Conditionizr has an integrated script and style loading facility, allowing you to specify which scripts and styles you’d like to load for which browser. For example, a user browsing with IE7 would first receive an ‘ie7′ HTML class, then receive the ie7.js and ie7.css files that Conditionizr automatically serves. Conditionizr also has a built-in custom script loader.

### Custom scripts and polyfills

Having an optional script and stylesheet per legacy browser is fantastic, but what about a custom script? This could be a polyfill, such as HTML5 Shim, which you simply specify from a local or Google CDN source, and Conditionizr simply loads it right in when the relevant browser is in use.

### Less than IE version loader

Alongside specific IE script and style loader, we’ve included an optional setting to specify a ‘less than IE’ version. This means that you could load a polyfill or certain script that you would like to apply to all ‘less than’ versions. If you were to declare ‘IE9′ as your less than, it would apply a ‘lt-ie9′ class for IE6, IE7 and IE8. Any scripts would also apply to these browser versions.

### Retina loading and classes

Conditionizr automatically detects a retina device and tells the browser instantly, adding a ‘retina’ class. For devices that aren’t retina, it adds a ‘no-retina’ class. Hook your retina optimisations for CSS directly from the HTML tag. You can optionally load retina specific scripts and stylesheets too.

### Markup free

Conditionizr is markup free, just simply include the plugin in your page, and let it work it’s magic. Conditionizr requires very little configuration, as it’s built on jQuery making the process seamless. Conditionizr comes with a few simple options, giving you the ability to turn scripts, styles, custom scripts on and off, and lots of other tools in just a few minutes. The conditional scripts and styles are served dynamically, keeping markup smart and clean.

### Cross browser bonus classes

Even modern browsers can give you the odd quirk, and built-in to Conditionizr is not only legacy browser, but modern browser detection and HTML class additions. For instance, those browsing with Google Chrome, will receive a ‘chrome’ class. This feature was integrated to cover all bases when developing, and over coming strenuous browser quirks.

### Cross platform bonus classes

Browsers on different platforms may give you slightly different CSS quirks, so we haven’t stopped there, Conditionizr detects the four main popular operating systems, Mac OS X, Windows, Linux and Unix, adding their CSS classes to help you out should you ever need it.

### Automated flexible Loading

Once configured, Conditionizr only loads what the end-user needs. The built-in browser detector and script/style loader work together automatically, you just need to make sure the files for loading are present on the server. Conditionizr will instantly know which scripts and styles to load, and if any custom scripts are specified, and send them straight to the user.

### Modernizr Compatible

Conditionizr integrates easily with Modernizr, combining the HTML classes to make your project development easier. Conditionizr takes a Modernizr-based approach with HTML classes, so we ensured it worked alongside the library. Combined with Modernizr, it’s the ultimate tool for front-end web development.

### Against browser-sniffing? Read on.

Browser sniffing is often considered unreliable, and Conditionizr was built to overcome this goal – we wanted to build a browser tool that people could actually use, that was a reliable delivery method for serving legacy content. The core functionality within Conditionizr is detecting and serving Internet Explorer legacy scripts and styles. With this in mind, we needed to bulletproof the detection process as much as possible, using a similar method to the way Google Analytics detects browsers. Combined with official Microsoft recommendations for Internet Explorer version detectioning, we set out to build a valuable front-end tool for any web project.

What Conditionizr does not do, is provide a replacement for front-end feature detection technologies for HTML5/CSS3 such as Modernizr. We advise running the two JavaScripts alongside eachother, giving you a progressive enhancement approach to front-end, and a sophisticated loading mechanism for catering for your Internet Explorer loading. If we can rely on JavaScript for feature detection and optimisation, then we can, without a doubt, rely on JavaScript for legacy content serving and retina detection. Instead of letting legacy formatting take over your markup – get started with Conditionizr.

Conditional statements are ancient, and their place amongst the powers of HTML5 just aren’t right – and this sparked the idea of a smarter approach. We’re in an age where we need to be moving forward and making use of excelling JavaScript libraries such as jQuery, Modernizr and hundreds more open-source development tools, and that’s why Conditionizr was built on JavaScript and jQuery. Questioning the fact that some users disable JavaScript, we think is no longer an issue. Users shouldn’t browse with JavaScript off, expecting the best web experience. As the saying goes – don’t watch a video casette and expect HD. The same applies with UA sniffing (User Agent) as people often deem it as unreliable as the UA is user-configurable (if they know how). The same applies here, if people are going to tamper with their browser, to trick the code – then they’re making a conscious decision to potentially receive unreliable content. The percentage of whom change their UA is extremely low.

Conditionizr simplifies the process of making conditional statements work, through a clever dynamic script and style loader. Through our robust JavaScript code, we’ve created a powerful, optimised plugin that makes development faster, easier and cleaner. Conditionizr automatically detects the browser in use, and serves up content that the browser needs. For instance, if you need to target each version of Internet Explorer, currently your code is going to be extremely clotted. With Conditionizr, it’s invisible. The only extra piece of markup is the inclusion of Conditionizr in your page.

<div class="download-box">
	<a href="//conditionizr.com" onclick="_gaq.push(['_trackEvent', 'Click', 'conditionizr.com', 'conditionizr.com']);">Conditionizr</a>
	<a href="//github.com/conditionizr/conditionizr/archive/master.zip" onclick="_gaq.push(['_trackEvent', 'Click', 'Download Conditionizr', 'Conditionizr Download']);">Download</a>
	<a href="//github.com/conditionizr/conditionizr" onclick="_gaq.push(['_trackEvent', 'Click', 'Fork Conditionizr', 'Conditionizr Fork']);">Fork</a>
</div>