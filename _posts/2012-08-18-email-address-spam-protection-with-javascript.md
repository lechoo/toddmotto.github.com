---
title: Email address Spam Protection with JavaScript
author: Todd Motto
layout: post
permalink: /email-address-spam-protection-with-javascript
disqus: http://www.toddmotto.com/email-address-spam-protection-with-javascript
---

This is a simple code snippet to prevent any spambots crawling your Contact pages, finding your email address and sending you automated spam. It’s good to include a text-based email address alongside any contact forms you may have. Here’s a quick tutorial to add some simple JavaScript to your website using the document.write command, which prevents spambots sweeping your site for text-based emails.

### JavaScript

Here’s what you’d need to add instead of typing out an email address. On page load, the document.write command writes our email variable and small function, and outputs our email address. Since I’ve been using it, I’ve had no spam, even across client websites too.

{% highlight javascript %}
var emailAddress = ('name@' + 'yourdomain.com');
document.write('<a href="mailto:' + emailAddress + '">' + emailAddress + '</a>');
{% endhighlight %}

### Disabled JavaScript
For users with JavaScript disabled in their browser, they won’t see an email address, which would definitely be a problem in terms of usability. You could offer two different solutions, a progressive enhancement solution, or using graceful degradation. For purposes of this exercise, we’ll offer a straightforward graceful degradation technique using NoScript. Here’s a few ideas of some solutions, and will all appear for users without JavaScript enabled -

Type out the name without the @ symbol:

{% highlight html %}
    <noscript>name[at]yourdomain.com</noscript>
{% endhighlight %}

Use an image of your email address:

{% highlight html %}
    <noscript><img src="img/email-address.jpg" alt="My Email"></noscript>
{% endhighlight %}

### Integration

All you need to do is include the snippet in your page source, and replace the email address ‘name@’ and ‘yourdomain.com’.