/*
*		NexBook Air API
*		date : 20240724
*/
(function(){
	
	var APIURL = null; // import.js의 url 경로
	for( var scripts=document.getElementsByTagName("script"), i=0; i<scripts.length; ++i ){
		var v = scripts[i].src;
		var n = v.lastIndexOf("import.js");
		if (-1 < n) {
			APIURL = v.slice(0, n);
			break;
		}

	}if(!APIURL){ return console.log('url missing : import.js'); }
	

	// jquery
	document.writeln("<script type='text/javascript'	src		= '"+APIURL+"plugins/jquery/2.1.3.min.js'></script>");
	document.writeln("<script type='text/javascript'	src		= '"+APIURL+"plugins/jquery/cookie.js'></script>");
	document.writeln("<script type='text/javascript'	src		= '"+APIURL+"plugins/jquery/mousewheel.min.js'></script>");
	document.writeln("<script type='text/javascript'	src		= '"+APIURL+"plugins/jquery/touch.min.js'></script>");	// for doubleTap, pinch event
	document.writeln("<script type='text/javascript'	src		= '"+APIURL+"plugins/jquery/ba-dotimeout.min.js'></script>");

	document.writeln("<script type='text/javascript'	src		= '"+APIURL+"plugins/jquery/min.js'></script>");
	document.writeln("<script type='text/javascript'	src		= '"+APIURL+"plugins/jquery/jqueryuitouch.js'></script>"); // for mobile draggable + click 
	document.writeln("<link type='text/css'				href	= '"+APIURL+"plugins/jquery/min.css' rel='stylesheet' />");

 	document.writeln("<script type='text/javascript'	src		= '"+APIURL+"plugins/lightslider/js/lightslider.js'></script>");
	document.writeln("<link type='text/css'				href	= '"+APIURL+"plugins/lightslider/css/lightslider.css' rel='stylesheet' />");

	// commons
	document.writeln("<script type='text/javascript'	src	= '"+APIURL+"plugins/pica.min.js'></script>"); // for imageResampling
	document.writeln("<script type='text/javascript'	src	= '"+APIURL+"plugins/yepnope-1.5.4.min.js'></script>");
	document.writeln("<script type='text/javascript'	src	= '"+APIURL+"plugins/croTools.min.js'></script>");
	document.writeln("<script type='text/javascript'	src	= '"+APIURL+"application/core.min.js'></script>");
	document.writeln("<script type='text/javascript'   src = '"+APIURL+"plugins/jquery.storageapi.min.js'></script>"); // Jquery storageapi

	document.writeln("<script type='text/javascript'	src	= '"+APIURL+"plugins/resource.min.js'></script>");
	document.writeln("<script type='text/javascript'	src	= '"+APIURL+"application/components.js'></script>");  
	document.writeln("<link type='text/css'				href	= '"+APIURL+"application/ebook_main.css' rel='stylesheet' />");
	document.writeln("<script type='text/javascript'	src	= '"+APIURL+"application/functions.min.js'></script>");
})();