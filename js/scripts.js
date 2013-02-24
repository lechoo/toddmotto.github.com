document.documentElement.className += ' js';

// Responsive, dynamic mobile navigation <select> in raw JS
// toddmotto.com/creating-a-responsive-dynamic-mobile-navigation-from-pure-javascript
var select = document.createElement('select');
var first = document.createElement('option');

first.innerHTML = '- Navigation -';
select.setAttribute('id', 'mobile');
select.appendChild(first);

var nav = document.getElementById('nav');
var loadLinks = function(element, hyphen, level) {

	var e = element;
	var children = e.children;

	for(var i = 0; i < e.children.length; ++i) {

		var currentLink = children[i];

		switch(currentLink.nodeName) {
			case 'A':
				var option = document.createElement('option');
				option.innerHTML = (level++ < 1 ? '' : hyphen) + currentLink.innerHTML;
				option.value = currentLink.href;
				select.appendChild(option);
				break;
			default:
				if(currentLink.nodeName === 'UL') {
					(level < 2) || (hyphen += hyphen);
				}
				loadLinks(currentLink, hyphen, level);
				break;
		}
	}
}

loadLinks(nav, '- ', 0);

nav.appendChild(select);

var mobile = document.getElementById('mobile');

if(mobile.addEventListener) {
	mobile.addEventListener('change', function () {
		window.location.href = mobile.options[mobile.selectedIndex].value;
	});
} else if(mobile.attachEvent) {
	mobile.attachEvent('onchange', function () {
		window.location.href = mobile.options[mobile.selectedIndex].value;
	});
} else {
	mobile.onchange = function () {
		window.location.href = mobile.options[mobile.selectedIndex].value;
	}
}

// Button behind <select> nav
var span = document.createElement('span');
span.className = 'mobile';
nav.appendChild(span);

// SVG custom feature detection and svg to png fallback
// toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script#update
function supportsSVG() {
	return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;	
}
if (supportsSVG()) {
	document.documentElement.className += ' svg';
} else {
	document.documentElement.className += ' no-svg';
	var imgs = document.getElementsByTagName('img');
	var dotSVG = /.*\.svg$/;
	for (var i = 0; i != imgs.length; ++i) {
		if(imgs[i].src.match(dotSVG)) {
			imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
		}
	}
}

// CarbonAds
var z = document.createElement('script');
z.async = z.src = '//engine.carbonads.com/z/20676/azcarbon_2_1_0_HORIZDARK';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(z, s);

// Twitter
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0];
	if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
	js.src="//platform.twitter.com/widgets.js";
	fjs.parentNode.insertBefore(js,fjs);
}}(document,"script","twitter-wjs");

// Facebook SDK
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=252993844735607";
	fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');