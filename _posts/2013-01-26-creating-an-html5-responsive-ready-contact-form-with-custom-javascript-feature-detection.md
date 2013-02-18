---
title: >
  Contact forms; the HTML5 way. Semantics, inputs, data attributes, javascript
  feature detection
author: Todd Motto
layout: post
permalink: >
  /creating-an-html5-responsive-ready-contact-form-with-custom-javascript-feature-detection
---
# 

Forms are often one of the last quick-finishes to a website, so here’s a great boilerplate to get you kick-started on a standards-compliant, HTML5, CSS3, responsive-ready form with custom JavaScript feature detections.

HTML5 brings many great features that we can start using now, and many of them lie within forms and inputs. Some HTML5 enhancements often require fallbacks for our projects, through polyfills or fallbacks. In this tutorial, we’ll create a contact form that will include the following features:

1.  HTML5 input attributes
2.  HTML5 enhanced input types
3.  HTML5 semantics
4.  HTML5 data-* attributes
5.  Fluid and responsive design
6.  Custom JavaScript feature detection
7.  HTML5 fallback setup

[Demo][1][Download][2]

### Markup

 [1]: //toddmotto.com/labs/html5-contact-form
 [2]: //toddmotto.com/zipball.php?file=html5-contact-form

First we’ll start with the markup, which we’ll first setup a basic form structure. A pretty bulletproof way to ensure form behaviours remain consistent and are easier to work with in CSS, we’ll wrap each form label and input inside it’s own . This acts as our safety net for each form field when manipulating them with styles and even JavaScript.

HTML5 introduces a few new attributes that we can add to our inputs, but first let’s look at our labels. The  element is critical to keeping the user experience of your website easy for users, the last place you want to trip people up is contacting you. So what we do is keep our labels outside of our form inputs as this can be bad for the user’s experience. The issue with keeping labels looking like they’re inside the form field is; when the user starts typing, the meaning of the input is removed and is no longer visible. This is why labels are best kept outside of the inputs, preferably above or beside.

A properly setup label and input looks like this:

    
    	Label
    	
    
    

Alternatively, you can link a form and input like this (using ‘for’ and the ‘id’ to link them):

    Label
    
    

I prefer the first method, as it saves markup and allows more control of the elements.

We wrap the  around the  and  tags, which allows the user to actually ‘click’ on the label text and their cursor will automatically focus on the corresponding input field. Using CSS, we can add a hover style so that when the user hovers over the text, they know they can also click it to focus the input field, as they’re not always easy to focus on. The  tags are added for styling purposes.

Next we can look at the HTML5 placeholder attribute, which allow us to hint more information as to what the field is about and what the user can do with it. Under no circumstances must you simulate the label as the placeholder, sure it’s a lot easier to do, but semantically it isn’t correct and usability is bad. Setting a placeholder can be done like so:

    
    	Label
    	
    
    

Now we’ve enhanced our form a little more, let’s look at the updated HTML5 tabindex attribute. Tabindex predates HTML5, but has limitations as to it’s valid use. The HTML5 tabindex attribute can be used on any element. Using the tabindex allows us to set the order in which the user can tab through the form fields. Logically, these should be set in a chronological order, but for forms that have multiple levels or columns, you could control the order of these should you wish to direct users to certain fields before others. They also help aid mobile experience. Let’s add a tabindex to our form:

    
    	Label
    	
    
    
    	Label
    	
    
    

Required fields are also an important aspect of validation and getting the necessary information from your users. From a usability perspective, you’ll want to hint to the user, preferably next to the label, that the field is required. HTML5 introduces the ‘required’ attribute, which can be added in multiple ways, which all mean the same thing:

    
    
    
    
    

The required attribute triggers behaviour in the browser, instead of the developer having to setup an alert, or text to show the validation error has occurred because the field is required.

Now we’ve got some great fields setup, let’s look how can enhance it further and help out the end user. If your HTML5 form is above the fold, it’s possibly a good idea to use the ‘autofocus’ attribute, to save the user the hassle of having to focus in on your first input field. The page will load with the specified input field automatically focussed. Putting the above together, we can then create a fuller markup like so:

    
    	Label
    	
    
    

Now we’ve added some great attributes to enhance the inputs, let’s look at changing the input types to HTML5 input types to enhance mobile experience too. We have a lot of new input types to play with in HTML5, some we’ll be using are ‘email’, ‘tel’ and ‘url’. This is how they would work in the markup:

    
    	Label
    	
    
    
    	Label
    	
    
    
    	Label
    	
    
    

These three input types tell the browser what to expect in the field, validating it for you on the fly, and do come in really handy when also using a mobile or tablet. On iOS and Android devices (that I’ve tested), we get a relevant keyboard per each input type. For email, we get an ‘@’ symbol, for url we see the ‘.com’ and for tel it switches to a number keypad. The end user definitely feels valued at this point. Here’s a quick preview of each input type corresponding with the keyboards:

![input-types][3]

 [3]: //www.toddmotto.com/wp-content/uploads/2013/01/input-types.jpg

Putting the above together, we can look at the finalised markup, with some heading tags to instruct the user. Instead of using  to submit the form, we’ll use a  element to submit the form. This is better and more flexible as you can have HTML content and images inside the , whereas  is limited to text only.

In terms of browser compatibility, if the browser doesn’t support the HTML5 input type, it will simply degrade itself to a text input type, which saves us creating a fallback.

    
    	Get in touch
    	Fill in the form below, and we'll get back to you within 24 hours.
    	
    		
    			Name: (required)
    			
    		
    	
    	
    		
    			Email: (required)
    			
    		
    	
    	
    		
    			Telephone: (required)
    			
    		
    	
    	
    		
    			Website: (required)
    			
    		
    	
    	
    		
    			Message: (required)
    			
    		
    	
    	
    		Send Email
    	
    
    

### CSS

To style our form, we’ll use some special CSS selectors to target our fields, instead of giving each an ID or class. Though before we get started styling our inputs, we’re going to rework the CSS box-model with a box-sizing declaration.

    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    

The box-sizing:border-box; declaration means that our width now includes any borders and padding. This helps us creating the responsive-ready form at a fluid-width. We’ll be setting the form up with percentages, so that it obeys a 100% width, which means it fits perfectly inside our form wrapper, without box-sizing:border-box; this would be a more complicated situation as form elements tend to be one of the most difficult elements to style. Box-sizing is supported in Internet Explorer 8 and above and is definitely the way forward from a CSS reset perspective. Don’t forget that you’ll also need the viewport meta tag, which is included in the demo and download to let your content fit to the specific screen width.

Back to styling the inputs! Now they’re all setup to perfectly obey 100% widths, no matter the padding or borders, we can add some style using some fancy selectors. Here’s how we can give each form input the same style, no matter the input:

    #contact-form input[type="text"],
    #contact-form input[type="email"],
    #contact-form input[type="tel"],
    #contact-form input[type="url"],
    #contact-form textarea {
    	width:100%;
    	box-shadow:inset 0 1px 2px #DDD, 0 1px 0 #FFF;
    	-webkit-box-shadow:inset 0 1px 2px #DDD, 0 1px 0 #FFF;
    	-moz-box-shadow:inset 0 1px 2px #DDD, 0 1px 0 #FFF;
    	border:1px solid #CCC;
    	background:#FFF;
    	margin:0 0 5px;
    	padding:10px;
    	border-radius:5px;
    }
    

We can then target the  in the same way:

    #contact-form button[type="submit"] {
    	cursor:pointer;
    	width:100%;
    	border:none;
    	background:#991D57;
    	background-image:linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
    	background-image:-moz-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
    	background-image:-webkit-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
    	color:#FFF;
    	margin:0 0 5px;
    	padding:10px;
    	border-radius:5px;
    }
    

CSS3 allows us to style the HTML5 placeholder text colours, which is great for that additional touch. If you’d like to do that you can do the following:

    ::-webkit-input-placeholder {
        color:#888;
    }
    :-moz-placeholder {
        color:#888;
    }
    ::-moz-placeholder {
        color:#888;
    }
    :-ms-input-placeholder {
        color:#888;
    }
    

### JavaScript feature detection

Here we’ll create a few tests with JavaScript to test on whether the browser in use supports some of the attributes we’ve used, which sets us up nicely for creating some fallbacks.

First things first, we need to create a test element:

    
    	// Create input element for testing
    	var input = document.createElement('input');
    
    

Next we’ll create an object called ‘supports’ which we’ll test a few features against:

    
    	// Create input element for testing
    	var input = document.createElement('input');
    	
    	// Create the supports object
    	var supports = {};
    
    

We’ve added a few HTML5 attributes which it’s worth running a feature detection test on, these are;

*   HTML5 ‘autofocus’ attribute
*   HTML5 ‘required’ attribute
*   HTML5 ‘placeholder’ attribute

So let’s add these into our script, and test them against our object.

    
    	// Create input element for testing
    	var input = document.createElement('input');
    	
    	// Create the supports object
    	var supports = {};
    	
    	supports.autofocus   = 'autofocus' in input;
    	supports.required    = 'required' in input;
    	supports.placeholder = 'placeholder' in input;
    
    

We then run the attributes through the input, and can test whether they exist like so:

    
    	// Fallback for autofocus attribute
    	if(supports.autofocus) {
    		// Support
    	} else {
    		// No support
    	}
    
    

We can of course invert the expression (using a bang – ‘!’) so that it only runs if the browser doesn’t support the attribute:

    
    	// Fallback for autofocus attribute
    	if(!supports.autofocus) {
    		// No support
    	}
    
    

Let’s setup the script for the rest of our feature detections:

    
    	// Create input element for testing
    	var input = document.createElement('input');
    	
    	// Create the supports object
    	var supports = {};
    	
    	supports.autofocus   = 'autofocus' in input;
    	supports.required    = 'required' in input;
    	supports.placeholder = 'placeholder' in input;
    
    	// Fallback for autofocus attribute
    	if(!supports.autofocus) {
    		
    	}
    	
    	// Fallback for required attribute
    	if(!supports.required) {
    		
    	}
    
    	// Fallback for placeholder attribute
    	if(!supports.placeholder) {
    		
    	}
    
    

From this, you can then create a manual fallback for each attribute, for example a fallback for the autofocus attribute may be done by targeting the submit button with JavaScript and forcing the input’s focus:

    
    	// Create input element for testing
    	var input = document.createElement('input');
    	
    	// Create the supports object
    	var supports = {};
    	
    	supports.autofocus   = 'autofocus' in input;
    
    	// Fallback for autofocus attribute
    	if(!supports.autofocus) {
    		document.getElementById('contact-submit').focus();
    	}
    
    

For the ‘required’ attribute, each project will possibly take a different solution, client-side or server-side validation. You can validate with backend code such as PHP, or validate with front-end technology such as jQuery validation scripts or your own custom one.

For the ‘placeholder’ attribute, this one you can either leave as an HTML5-only enhancement, and provide no fallback. It’s not essential as we’ve got the  to take care of the top-level information.

### HTML5 data-* Attributes Submit

Let’s not stop at a boring static send button. Let’s indicate to the user that something they’ve done is working. I like to include my nice little JavaScript snippet that will change the static ‘Send Email’ to ‘…Sending’ upon user click. This is done using HTML5 data-* attributes. Data Attributes are HTML5 compatible, which means we have to access them with JavaScript to get them to work in older browsers. Luckily this is what we’ll be doing anyway. An example of a data-* attribute could be anything you like (just made these up):

    Click here
    
    jQuery Stuff
    

Accessing the data is best done in the most cross-browser way, HTML5 introduces the dataset property, which is lacking feasible support. The best way to access the HTML5 data-* attributes to use the getAttribute(); property, and grab the data-* attribute, for example:

    Username
    
    
    var user = document.getElementById('user');
    userID = user.getAttribute('data-login');
    alert(userID);
    
    

Using this knowledge, we can have a little fun with our Submit button. When a user clicks it for submission, we’ll grab a data-* attribute we’ve added to the Send:

    // Change text inside send button on submit
    var send = document.getElementById('contact-submit');
    if(send) {
    	var dataText = send.getAttribute('data-text');
    	send.onclick = function() {
    		send.innerHTML = dataText;
    	}
    }
    

We then change the text from the send button, to become the data attribute, which also benefits a developer for two reasons, you can change the code’s output without changing the script, so it’s not as hardcoded in the JavaScript.

The above script also checks that the element exists on the page, this prevents any errors being thrown. We use a simple if statement to check if the element exists, and if so, setup the onclick function which simply changes the innerHTML on the send button.

Now we’ve created an awesome HTML5 contact form, ready for integrating into any project, it’s fully extendable, so rip it apart and get to use. You can even update your existing forms with any of the code, HTML, CSS or the JavaScript feature detects. Now we’ve completed our form, let’s wrap our script inside one nice self-invoking function, meaning it is created anonymously and runs immediately. It also keeps it nicely separated from other scripts on the page:

    
    (function() {
    
    	// Create input element for testing
    	var input = document.createElement('input');
    	
    	// Create the supports object
    	var supports = {};
    	
    	supports.autofocus   = 'autofocus' in input;
    	supports.required    = 'required' in input;
    	supports.placeholder = 'placeholder' in input;
    
    	// Fallback for autofocus attribute
    	if(!supports.autofocus) {
    		
    	}
    	
    	// Fallback for required attribute
    	if(!supports.required) {
    		
    	}
    
    	// Fallback for placeholder attribute
    	if(!supports.placeholder) {
    		
    	}
    	
    	// Change text inside send button on submit
    	var send = document.getElementById('contact-submit');
    	if(send) {
    		var dataText = send.getAttribute('data-text');
    		send.onclick = function() {
    			send.innerHTML = dataText;
    		}
    	}
    
    })();
    
    

[Demo][1][Download][2]

#### This article I originally wrote for Onextrapixel.com, and has since been updated with extra features and code since it’s [original publish][4].

 [4]: //www.onextrapixel.com/2013/01/18/creating-an-html5-responsive-ready-contact-form-with-javascript-detection/