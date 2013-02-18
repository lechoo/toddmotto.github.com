---
title: Using PHP to keep Copyright footer year current
author: Todd Motto
layout: post
permalink: /using-php-to-keep-copyright-footer-year-current
dsq_thread_id:
  - 624590219
---
# 

Here’s the start of the Web Development series as part of the new addition to my Blog, including code tutorials and code snippets free for use. This article includes a small snippet of code that you can add to your site to ensure your footer PHP date is always at the current year. I’m sure the eagle-eyed users of the web are still seeing sites stuck on ‘© 2011 Copyright’ – so here’s a few easy ways to overcome it, forever!

First thing you’ll need is a PHP web page. If your server handles PHP, then use the code below to insert into your website’s footer. Please note this will only work with PHP web pages not static HTML. Read more on [PHP here][1].

 [1]: http://www.php.net

### Single Year Display

You’ll notice this literally just pulls in the current date, and is really easy to implement instead of manually typing the year.

    &copy;  Copyright.

**Gives you:** © 2012 Copyright.

### Website Start and Current Year

Little longer PHP snippet – in which you set the date your website was launched, and let the PHP automatically keep the current year up to date. See below and example for details.

    &copy;  Copyright.

**Gives you:** © 2008-2012 Copyright.