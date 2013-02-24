---
title: How to (easily) use Cufon font replacement
author: Todd Motto
layout: post
permalink: /how-to-easily-use-cufon-font-replacement
---

Cufón font replacement is an easy way to embed custom fonts on the web. There are many ways to embed fonts onto a website, Cufón is just one method. I find it to be one of the best ways, depending on the project. Here’s a quick ‘how-to’ on embedding those custom fonts you love.

Note: Using @font-face is a much better and easier alternative to Cufon, and doesn't rely on JavaScript

### Simple Steps

It only takes a few minutes to get Cufón working on your website:

1.  Download Cufón
2.  Generate JavaScript Font
3.  Upload to Server and Code Setup
4.  Use jQuery to load Cufón
5.  Choosing what to Cufón

The rest of this article takes you through the above steps, hopefully as clearly as possible – and I’ve also included a free download pack at the end with everything setup for you, should you wish to fast track this tutorial/keep for future purposes.

### 1. Download Cufon

Visit [Cufón’s website][3] and download the latest version to your computer (preferably in a nice new folder for this project). Currently the latest version is 1.09i which now supports the latest release of Internet Explorer. Probably best to call this file ‘cufon.js’.

 [3]: http://cufon.shoqolate.com/generate/

### 2. Generate JavaScript Font

For this Tutorial we’ll be using ChunkFive, free from [FontSquirrel][4]. Once you’ve got a font file which you love/need to use (TrueType [TTF], OpenType [OTF], Printer Font Binary [PFB] and PostScript fonts are supported), we need to whip it into JavaScript.

 [4]: http://www.fontsquirrel.com

Visit [Cufón’s website][3] again and scroll down a touch. You’ll notice there are some upload fields to upload your font. Follow the instructions for that, accept the Terms and stuff, and download your JavaScript font. Now we’re all set.

### 3. Upload to Server and Code Setup

Taking Cufon.js (Step 1) and our custom font (Step 2) we need to reference the scripts in our HTML file.

    <!-- Include Cufon.js -->
	<script src="assets/js/cufon.js"></script>
	
	<!-- Include Chunkfive Custom Font -->
	<script src="assets/js/ChunkFive_400.font.js"></script>

### 4. Use jQuery to load Cufon

Seeing as you’re more than likely to be using jQuery on your website, we may as well make use of jQuery’s selector engine. Grab the latest version of [jQuery here][5] or find it on Google’s CDN.

 [5]: http://www.jquery.com "Latest version of jQuery!"

    <!-- Load jQuery from Google CDN -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	
	<script>
		Cufon.replace('Replace this stuff!');
	</script>    

### 5. Choosing what to Cufon

Now we’ve got our code setup to call the Cufón, we need to tell it what to replace so we can get it working. This is done through targeting HTML with (or without) CSS classes. Cufón isn’t really that great for body text, so we don’t want to Cufón everything on the page, just our headings.

Option 1: If you are going to want all your website headings to be Cufónized, then we need to add something a little like the below. This tells Cufón to replace all our h1,h2,h3,h4,h5 tags. Which means we don’t have to worry about manually selecting which headings (with CSS classes/id’s) we’d like to Cufónized.

    <script>
		$(function(){
			Cufon.replace('h1,h2,h3,h4,h5');
		});
	</script>

Option 2: Create a custom class (for example .cufon) that we can add to HTML elements that need a touch of Cufónism. This may look like so:

    <script>
		$(function(){
			Cufon.replace('.cufon');
		});
	</script>
	
	<h1 class="cufon">Awesome Cufón Heading</h1>
	<h1>Not-so Awesome Heading</h1>

### Final Look

Putting all that together (and in the correct load order) you’ll end up with this as a finished product. Demo is free for download below.

    <!-- Load jQuery from Google CDN -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	
	<!-- Include Cufon.js -->
	<script src="assets/js/cufon.js"></script>
	
	<!-- Include Chunkfive Custom Font -->
	<script src="assets/js/ChunkFive_400.font.js"></script>
	
	<script>
		$(function(){
			Cufon.replace('h1,h2,h3,h4,h5');
		});
	</script>

Check out the EULAs of all fonts you use to ensure they allow for Web Embedding.