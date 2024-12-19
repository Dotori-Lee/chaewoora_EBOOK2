/*		Component Action 	||   20240819   **/

eBookCore.components.action = function (container, data) { // container : DIV

	//{ type:"action", id:"Interaction11435134959473", name:"액션1", height:"16", width:"17", y:"574", x:"900", dispatcher:"Link11435050004029", event:"onRelease", target:"Mp3Player11435050111825", action:"toggleVisible",  },

	var addEl = $("<div/>")
		.attr({
			'class': 'ebookpagecomp',
			'name': data.name,
			'id': data.id,
		})
		.css({
			'position': 'absolute',
			'visibility': 'hidden',
		});

	container.append(addEl); 
}

/*		Component Audio  	 */
eBookCore.components.audio = function (container, data) { // container : DIV

	var addEl = $("<audio controls>")
		.attr({
			'class': 'ebookpagecomp',
			'id': data.id,
			'alt': data.name,
			'src': eBookCore.path.contents + data.musicURL,
			'type': "audio/mpeg",
		})
		.css({
			'position': 'absolute',
			//'border-width'	: data.borderWidth +'px',
		});

	container.prepend(addEl);

	// -----------------------------------------------------------------------------
	audioFactory.add(
		new audioElement(addEl.attr('class'), addEl.attr('id'), data.name, addEl.attr('src'))
	);
}

// -----------------------------------------------------------------------------
var audioFactory = {
	audios: [],
	count: function () { return this.audios.length; },
	getByIndex: function (index) {
		var audioElement;	//	undefined
		try {
			audioElement = this.audios[index];
		} catch (error) {
			console.log("[" + error.name + "]" + " " + error.message);
		} finally {
			return audioElement;
		}
	},
	getById: function (id) {
		var audioElement;	//	undefined
		try {
			for (i = 0; i < this.audios.length; i++) {
				if (id == this.audios[i].getId()) {
					audioElement = this.audios[i];
					break;
				}
			}
		} catch (error) {
			console.log("[" + error.name + "]" + " " + error.message);
		} finally {
			return audioElement;
		}
	},
	add: function (audioElement) {
		try {
			//	console.log( audioElement );
			if (audioElement === undefined) {
				console.log("audioElement is undefined");
			} else {
				this.audios[this.audios.length] = audioElement;
			}
		} catch (error) {
			console.log("[" + error.name + "]" + " " + error.message);
		}
	},
	remove: function (index) {
		try {
			delete this.audios[index];
		} catch (error) {
			console.log("[" + error.name + "]" + " " + error.message);
		}
	},
	removeAll: function () { /** do something */; }
};

// Constructor function for audio objects
function audioElement(cls, id, name, src) {
	this.cls = cls;
	this.id = id;
	this.name = name;
	this.src = src;
	this.getClass = function () { return this.cls; };
	this.getId = function () { return this.id; };
	this.getName = function () { return this.name; };
	this.getSrc = function () { return this.src; };
	this.getDom = function () { return $('#' + this.getId())[0]; };
	//	this.getDom = function() { return $('#' + this.getId()).get(0); };
	this.getJquery = function () { return $(this.getDom()); };
	this.getTagName = function () { return this.getJquery().prop("tagName"); };
	this.canPlay = function () { /** do something */; };
	this.isPlaying = function () { return !this.getDom().paused; }
	this.isMute = function () { return this.getDom().muted; }
	this.togglePlay = function () { !this.isPlaying() ? this.getDom().play().catch() : this.getDom().pause(); }
	this.toggleMute = function () { this.getDom().muted = !this.isMute(); }
}
// -----------------------------------------------------------------------------


/*		Component Image  	 */

eBookCore.components.image = function (container, data) { // container : DIV

	// var rgbaBorderColor	= croTools.hexToRGBA( data.borderColor.substr(0,8).replace("0x","#") , data.borderColor.substr(9)	);

	let opacityValue = parseFloat(data.opacity);  // opacity value
	if (opacityValue > 1) {
		opacityValue = opacityValue / 100;
	}

	var addEl = $("<img>")
		.attr({
			'class': 'ebookpagecomp',
			'id': data.id,
			'alt': data.name,
			'src': eBookCore.path.contents + data.normalImage,
		})
		.css({
			'position': 'absolute',
			'width': '0px',
			'height': '0px',
			'border-width': data.borderWidth + 'px',
			'opacity': opacityValue,
		});

	{	
		var _link = data.link.split("|");
		if ((_link[0] == 'address' && 0 < _link[2].length) || (_link[0] == 'popup' && 0 < _link[6].split("(_-__-_)")[0].length) || _link[0] == 'page') {
			addEl.css('cursor', 'pointer');
		}
	}

	// rollover img 
	if (0 < data.rolloverImage.lastIndexOf(".")) {
		addEl.attr({
			'onmouseover': "this.src='" + eBookCore.path.contents + data.rolloverImage + "'",
			'onmouseout': "this.src='" + eBookCore.path.contents + data.normalImage + "'",
		});
	}

	container.append(addEl);
}

/*		Component ImageSlider  	 */

eBookCore.components.imageSlider = function (container, data, page) {


	if ($('#' + data.id + '_').attr("data-status") === "run" ||
		$('#' + data.id + '_').attr("data-status") === "pending") return;

	var divTag = $("<div>").attr({
		'class': 'ebookpagecomp clearfix ebookslidercomp',
		'id': data.id
	}).css({
		'position': 'absolute',
		'max-width': '600px'
	});
	var ulTag = $("<ul>").attr({
		'class': 'gallery list-unstyled cS-hidden',
		'id': data.id + "_",
		'data-page': page,
		'data-refresh': (new Date()).getTime(),
		'data-status': 'pending'
	});

	var LIMITED = 10;							//	const LIMITED = 10;
	var IMAGES_PATH = eBookCore.path.contents;	//	const IMAGES_PATH = eBookCore.path.contents;
	for (i = 0; i < LIMITED; i++) {
		var fileName = (i === 0 ? data.normalImage : eval('data.normalImage' + i));
		if (fileName !== undefined && fileName.length > 0) {
			var liTag = $("<li>");
			var imgTag = $("<img>");
			imgTag.attr('src', IMAGES_PATH + fileName).appendTo(liTag);

			var linkName = (i === 0 ? data.link : eval('data.link' + i));
			if (linkName !== undefined && linkName.length > 0 && linkName.toLowerCase() !== "address|_blank|".toLowerCase()) {
				imgTag.attr('data-link', linkName).css('cursor', 'pointer');
			}
			ulTag.append(liTag);
		}
	}
	container.prepend(divTag.append(ulTag));
}
/** --------------------------------------------------- */


/*		Component Link  240611	 */

eBookCore.components.link = function (container, data) { // container : DIV


	//{ type:"link", id:"Link11435050004029", name:"링크1", height:"211", width:"329", y:"130", x:"720", backgroundColor:"0xffffff,0", rolloverColor:"0xffffff,0", borderColor:"0x000000,0", borderWidth:"1", link:"address|_blank|http://www.ebook.co.kr/",  },

	// color RGBA
	var rgbaBgColor = croTools.hexToRGBA(data.backgroundColor.substr(0, 8).replace("0x", "#"), data.backgroundColor.substr(9));
	var rgbaBorderColor = croTools.hexToRGBA(data.borderColor.substr(0, 8).replace("0x", "#"), data.borderColor.substr(9));

	var addEl = $("<div/>")
		.attr({
			'class': 'ebookpagecomp',
			'name': data.name,
			'id': data.id,
		})
		.css({
			'position': 'absolute',
			'cursor': 'pointer',
			'background-color': rgbaBgColor,
			'border-style': 'solid',      
			'border-color': rgbaBorderColor,
			'border-width': data.borderWidth + 'px',
			'border-top-left-radius': data.radius_TL + 'px',
			'border-top-right-radius': data.radius_TR + 'px',
			'border-bottom-right-radius': data.radius_BR + 'px',
			'border-bottom-left-radius': data.radius_BL + 'px',

		});

	container.append(addEl);
	
}

/*		Component Modal popup  20191230  	 */

eBookCore.components.popModal = function (container, data) { // container : DIV

	var addEl = $("<div/>")
		.attr({
			'class': 'ebookpagecomp',
			'name': data.name,
			'id': data.id,
		})
		.css({
			'position': 'absolute',
			'visibility': 'hidden',
		});

	container.append(addEl); // 
}

/*		Component Text  20150703  	 */

eBookCore.components.text = function (container, data) { // container : DIV

	// color rgba 
	var rgbaTextColor = croTools.hexToRGBA(data.textColor.substr(0, 8).replace("0x", "#"), data.textColor.substr(9));
	var rgbaBgColor = croTools.hexToRGBA(data.backgroundColor.substr(0, 8).replace("0x", "#"), data.backgroundColor.substr(9));
	//	var rgbaBorderColor	= croTools.hexToRGBA( data.borderColor.substr(0,8).replace("0x","#")			, data.borderColor.substr(9)			);

	var result = replaceAll(data.text, "||", "\n");

	function replaceAll(str, searchStr, replaceStr) {   
		return str.split(searchStr).join(replaceStr);
	};



	var addEl = $("<textarea>" + result + "</textarea>")
		.attr({
			'class': 'ebookpagecomp',
			'readonly': 'readonly',
			'id': data.id,
		})
		.css({
			'position': 'absolute',
			'overflow': 'auto',
			'font-family': data.font,
			'letter-spacing': data.letterSpacing,
			'text-align': data.align,
			'font-style': (data.italic === 'true' ? 'italic' : 'normal'),
			'font-weight': (data.bold === 'true' ? 'bold' : 'normal'),
			'text-decoration': (data.underline === 'true' ? 'underline' : 'none'),
			'color': rgbaTextColor,
			'background-color': rgbaBgColor,
			//			'border-color'			: rgbaBorderColor,
			'border-width': '0px',
		});

	container.append(addEl); 
}

/*		Component Video		20150709  	 */

eBookCore.components.video = function (container, data) { // container : DIV

	var addEl = $("<video controls >")
		.attr({
			'class': 'ebookpagecomp',
			'id': data.id,
			'alt': data.name,
			'src': eBookCore.path.contents + data.movieURL,
			'type': "video/mp4",
		})
		.css({
			//'position'			: 'absolute',
			//'border-color'		: rgbaBorderColor,
			//'border-width'	: data.borderWidth +'px',
		});

	if (croTools.isIOS()) { // ios tag 
		addEl.attr({ 'webkit-playsinline': '' });
	}

	container.prepend(addEl);
}


eBookCore.components.youtube = function (container, data) { // container : DIV


	// color rgba 
	data.borderColor = "0x000000,100";
	var rgbaBorderColor = croTools.hexToRGBA(data.borderColor.substr(0, 8).replace("0x", "#"), data.borderColor.substr(9));
	//var youtubeURL = data.youtubeURL.replace('https://youtu.be/', '');  

   if (data.youtubeURL.startsWith("https://youtu.be/")) {
        var youtubeURL = data.youtubeURL.replace("https://youtu.be/", "");
    } else if (data.youtubeURL.startsWith("https://www.youtube.com/live/")) {
        var youtubeURL = data.youtubeURL.replace("https://www.youtube.com/live/", "");
    }




	var addEl = $("<div><iframe class=youtube_player src=https://www.youtube.com/embed/" + youtubeURL + "?controls=2&modestbranding=0 frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>")
		.attr({
			'class': 'ebookpagecomp embed_youtube',
			'id': data.id,
		})
		.css({
			'position': 'absolute',
			'cursor': 'pointer',
			'overflow': 'hidden',
			'border-color': rgbaBorderColor,
			'border-width': data.borderWidth + 'px',
		});

	container.append(addEl); 
}

