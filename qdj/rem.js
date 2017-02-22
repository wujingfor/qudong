
var html=document.documentElement;
	html.style.fontSize=20*html.clientWidth/320+'px';
	window.onresize=function(){
		html.style.fontSize=20*html.clientWidth/320+'px';
	};	