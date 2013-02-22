(function(){
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = '//toddmotto.com/ads/ads.css';
	document.getElementsByTagName('head')[0].appendChild(link);
	
	var carbonContainer = document.createElement('div');
	carbonContainer.id = 'carbonads-container';
	
	var carbonAd = document.createElement('div');
	carbonAd.className = 'carbonad';
	
	var carbonAz = document.createElement('div');
	carbonAz.id = 'azcarbon';
	
	var hide = document.createElement("div");
	hide.className = 'hide-ad';
	
	carbonAd.appendChild(carbonAz);
	carbonContainer.appendChild(hide);
	carbonContainer.appendChild(carbonAd);
	document.body.appendChild(carbonContainer);
	
	var z = document.createElement('script');
	z.async = z.src = '//engine.carbonads.com/z/20676/azcarbon_2_1_0_VERT';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(z, s);
	
	hide.onclick = function() {
		carbonContainer.style.display = 'none';
	}
})();