
/**   skin07 **/
var eBookSkinLayout = {};
var skinVer = "2";     
eBookSkinLayout.objects = [
	
	{ type:"window"		, id:"modal_wrap"	,   children:[		
		{ type:"window"		, 'class':"bg_modal", title:"POPUP BACKGROUND"  },
		{ type:"window"		, 'class':"btn_closemodal", title:"CLOSE",  children:[
			{ type:"text"		, text:"CLOSE"	}
			]},
	]},

	// pc
	{ type:"window"		, id:"background" ,	'class':"skin07"},
	{ type:"logo"		, id:"top_logo"			, src:"logo.png"	,visible:"pc"		, title:"Logo"	},			

	// Mobile  top 
	{ type:"window"		, id:"top_window_m"			, 'class':"mainobjects", visible:"mobile", children:[
		{ type:"logo"		, id:"top_logo"				, src:"logo.png"					, title:"LOGO"	},
		{ type:"window"		, id:"top_center"				, 'class':"mainobjects", children:[
			{ type:"home" 		, id:"home_btn"				, 'class':"topobjects_m langicon "	,  'data-text'  : 'home', src:"home.svg"	, title:"HOME"	},
			{ type:"image"		, id:"top_search_btn_m"		, 'class':"topobjects_m langicon", 'data-text' : 'search', src:"search.svg"		, title:"SEARCH"			, click:"eFnc.wndToggle('#searchlist_window')"		},
			{ type:"image"		, id:"top_menu_btn_m"		, 'class':"topobjects_m langicon", 'data-text' : 'menu', src:"menu.svg"		, title:"MENU"			, click:"eFnc.wndmenuslide('#menu_window_m')"		},

			{ type:"window"		, id:"menu_window_m"			, 'class':"mainobjects togglewnd"		, children:[
				{ type:"window"		, id:"menu_contents_m"			, 'class':"mainobjects"		, children:[
					{ type:"window"		, id:"menu_tablelist_btn", 'class' : "menuitem"	, 'data-text' : 'contents' 	, click:"eFnc.wndToggle('#tablelist_window')&eFnc.wndmenuslide('#menu_window_m')"	,  children:[
						{ type:"image"		, 'class':"menuobjects", src:"list.svg"	, title:"CONTENTS"			},
						]},
					{ type:"window"		,  id:"menu_bookmark_btn"	, 'class' : "menuitem"		,  'data-text'  : 'bookmark' 	, click:"eFnc.wndToggle('#bookmarklist_window')&eFnc.wndmenuslide('#menu_window_m')" , children:[
						{ type:"image"		,'class':"menuobjects", src:"bookmark.svg"	, title:"BOOKMARK"				},
						]},
					{ type:"window"		, id:"menu_slide_btn"	,'class' : "menuitem"	,  'data-text'  : 'autoslide' 	, click:"eFnc.runSlideShow()&eFnc.wndmenuslide('#menu_window_m')"	,  children:[
						{ type:"image"		,  'class':"menuobjects", src:"slide.svg"			, title:"AUTOSLIDE"		},
						]},
					{ type:"window"		,  id:"menu_thumb_btn"	,'class' : "menuitem"	,  'data-text'  : 'thumnail' 	, click:"eFnc.wndToggle('#thumbnail_window')&eFnc.wndmenuslide('#menu_window_m')"	,  children:[
						{ type:"image"		, 'class':"menuobjects", src:"thumb.svg"	, title:"THUMNAIL"				},
						]},
					{ type:"window"		, id:"menu_draw_btn"	, 'class':"menuitem "	,  'data-text' : 'drawing',  click:"eFnc.runDrawing()&eFnc.wndmenuslide('#menu_window_m')"	 , children:[
						{ type:"image"		,   'class':"menuobjects", src:"draw.svg" , title:"DRAWING",  },  
						]},

					{ type:"window"		, id:"menu_pdf_down"	, 'class' : "menuitem"		,  'data-text'  : 'pdf_down' 	, click:"eFnc.pdfDown()&eFnc.wndmenuslide('#menu_window_m')",  children:[
						{ type:"image"		, 'class':"menuobjects", src:"pdf.svg"				, title:"PDF DOWNLOAD"},
						]},

					{ type:"window"		,  id:"menu_snsbtn", 'class':"menuitem ",  'data-text' : 'sns',  click:"eFnc.wndToggle('#snswrap')"	, children:[ 
						{ type:"image"	, 'class' : "menuobjects ",  src:"sns.svg" , title:"SNS"   },  
					]},
					{ type:"window" , id: "snswrap", children:[
						{ type:"window" , id: "snsbox", children:[
							{ type:"window"	, 'class': "tit_sns menuitem ", 'data-text' : 'sns', title:"SNS "},
							{ type:"image"		, 'class' : "btn_cls_sns menuitem "	,   src:"close.svg" ,   click:"eFnc.wndToggle('#snswrap')" }, 
							{ type:"window" , 'class' : "linkbox", children:[
								{type : "input", id : "linkInput"  },
								{type: "window" , id:"copyLink", 'class' : "langicon menuitem"	, 'data-text' : 'copyLink', title:"COPY LINK"},
							]},
							{ type:"window" , 'class' :'left', children:[
								{ type:"window" , 'class' :'sns_icons', children:[
									{ type:"window"		, id:"menu_twitter"	 , 'class' : "langicon"		,  'data-text'  : 'twitter',  click:"eFnc.sendSNS('twitter')" ,  children:[
										{ type:"image" 		, 'class':"menuobjects", src:"twitter.svg"			, title:"TWITTER"			},
									]},
									{ type:"window"		, id:"menu_facebook"	 ,'class' : "langicon"	, 'data-text'  : 'facebook',   click:"eFnc.sendSNS('facebook')",  children:[
										{ type:"image" 		, 'class':"menuobjects", src:"facebook.svg"		, title:"FACEBOOK"		},
									]},
									{ type:"window"		, id:"menu_kakaotalk"		, 'class' : "langicon"		, 'data-text'  : 'kakao',   click:"eFnc.sendSNS('kakaotalk')",  children:[
										{ type:"image" 		, 'class':"menuobjects", src:"kakaotalk.svg"		, title:"KAKAOTALK"		},
									]},
								]},
							]},
							{ type:"window" , 'class' :'right', children:[
								{ type:"window"	, id:"qrcode", 'class': "hint--bottom qrcode langicon", title:"QR CODE",  'data-text'  : 'qrcode' },		
							]},
						]},
					]},  /* snswrap pop end */
					]},
				]},
			]},
	]},

 	{ type:"arrowsvg_prev"		, id:"page_prev_btn"	, visible:"pc", title:"PREV PAGE", click:"eFnc.gotoPrev()"},
	{ type:"arrowsvg_next"		, id:"page_next_btn"	,  visible:"pc", title:"NEXT PAGE", click:"eFnc.gotoNext()"},
	
	{ type:"pageview"	, id:"pageview"	, visible:"pc"			},
	{ type:"pageview"	, id:"pageview_m"	, visible:"mobile"	},

	// pc bottom 
	{ type:"window"		, id:"bottom_window"	, visible:"pc"	, children:[
			{ type:"window"		, id:"menu_contents"	, 'class':"mainobjects"		, children:[
				{ type:"window"		, id:"menu_wrap"	, 'class':"mainobjects"		, children:[
				

					{ type:"window"		, id:"menu_left"	, 'class':"mainobjects"		, children:[
						{ type:"window"	,  'class':"hint--top menuitem langicon"	,  'data-text' : 'home',  title:"HOME",  children:[						
							{ type:"home" , id:"home_btn",	 'class':""	,  src:"home.svg"	},
						]},
						{ type:"window"		, id:"menu_tablelist_btn"	, 'class':"hint--top menuitem langicon"	,  'data-text' : 'contents', title : "목차",  children:[
							{ type:"image"	, 'class' : " "	, src:"list.svg" ,  click:"eFnc.wndToggle('#tablelist_window')&eFnc.wndHide('.togglewnd')"	 },  
						]},
						{ type:"window"		, id:"menu_bookmark_btn", 'class':"hint--top menuitem langicon"	,  'data-text' : 'bookmark',  children:[
						{ type:"image"		,'class' : " "	,  src:"bookmark.svg" ,  click:"eFnc.wndToggle('#bookmarklist_window')&eFnc.wndHide('.togglewnd')"	 },  
						]},
	
						{ type:"window"		, id:"menu_searchlist_btn"	,  'class':"hint--top menuitem langicon"	,  'data-text' : 'search',  children:[
						{ type:"image"		, src:"search2.svg" , title:"SEARCH",  click:"eFnc.wndToggle('#searchlist_window')&eFnc.wndHide('.togglewnd')"	 },  
						]},
	
						{ type:"window"		, id:"menu_slide_btn"	,  'class':"hint--top menuitem langicon"	,  'data-text' : 'autoslide',  children:[
						{ type:"image"		, src:"slide.svg" , title:"AUTOSLIDE", click:"eFnc.runSlideShow()&eFnc.wndHide('.togglewnd')" },  
						]},
	
						{ type:"window"		,  id:"menu_print_btn"	,  'class':"hint--top menuitem langicon"	,  'data-text' : 'print',  children:[
						{ type:"image"		,src:"print.svg" , title:"PRINT", click:"eFnc.runPrint()", },  
						]},
						{ type:"window"		, id:"menu_thumb_btn"	, 'class':"hint--top menuitem langicon"	,  'data-text' : 'thumnail',  children:[
						{ type:"image"		,  src:"thumb.svg" , title:"THUMNAIL", click:"eFnc.wndToggle('#thumbnail_window')&eFnc.wndHide('.togglewnd')"	 },  
						]},
						{ type:"window"		, id:"menu_pdf_down"	,  'class':"hint--top menuitem langicon"	,  'data-text' : 'pdf_down',  children:[
						{ type:"image"		, src:"pdf.svg" , title:"PDF DOWNLOAD",  click:"eFnc.pdfDown()",	 },  
						]},
						{ type:"window"		,  id:"menu_memo_btn"	, 'class':"hint--top menuitem langicon"	,  'data-text' : 'memo',  children:[
						{ type:"image"		,src:"memo.svg" , title:"MEMO", click:"eFnc.runMemo()&eFnc.wndHide('.togglewnd')"	 },  
						]},
						{ type:"window"		, id:"menu_draw_btn"	, 'class':"hint--top menuitem langicon"	,  'data-text' : 'drawing',  children:[
						{ type:"image"		,  src:"draw.svg" , title:"DRAWING",  click:"eFnc.runDrawing()&eFnc.wndHide('.togglewnd')"  },  
						]},
						{ type:"window"		,  id:"pageview_btn",  'class':"hint--top menuitem langicon"	,  'data-text' : 'viewtype',  children:[
							{ type:"image"	,src:"double_page.svg" , title:"Page view", click:"eFnc.PageViewbtn('single')"},
						]},
						{ type:"window"		,  'class':"hint--top menuitem langicon"	,  'data-text' : 'fullscreen',  children:[
						{ type:"image" 	,  'class':" fullscreen_btn "	, src:"fullscreen.svg"	, title:"FULL SCREEN"	, click:"eFnc.fullscreenToggle()&eFnc.wndHide('.togglewnd')"},			
						]},

						{ type:"window"		, id:"menu_sns"	,   children:[ 
							{ type:"window"		, 'class':"hint--top menuitem langicon",  'data-text' : 'sns',   children:[ 
							{ type:"image"		, id:"menu_snsbtn"	,'class' : " "	,   src:"sns.svg" , alt:"SNS",  click:"eFnc.wndToggle('#snswrap')"	  },  
						]},
					
						{ type:"window" , id: "snswrap", children:[
							{ type:"window" , id: "snsbox", children:[
								{ type:"window"	, 'class': "tit_sns menuitem ", 'data-text' : 'sns', title:"SNS "},
								{ type:"image"		, 'class' : "btn_cls_sns menuitem "	,   src:"close.svg" ,   click:"eFnc.wndToggle('#snswrap')" }, 
								{ type:"window" , 'class' : "linkbox", children:[
									{type : "input", id : "linkInput"  },
									{type: "window" , id:"copyLink", 'class' : "langicon menuitem"	, 'data-text' : 'copyLink', title:"COPY LINK"},
								]},
								{ type:"window" , 'class' :'left', children:[
									{ type:"window" , 'class' :'sns_icons', children:[
										{ type:"window"		, id:"menu_twitter"	 , 'class' : "langicon"		,  'data-text'  : 'twitter',  click:"eFnc.sendSNS('twitter')" ,  children:[
											{ type:"image" 		, 'class':"menuobjects", src:"twitter.svg"			, title:"TWITTER"			},
										]},
										{ type:"window"		, id:"menu_facebook"	 ,'class' : "langicon"	, 'data-text'  : 'facebook',   click:"eFnc.sendSNS('facebook')",  children:[
											{ type:"image" 		, 'class':"menuobjects", src:"facebook.svg"		, title:"FACEBOOK"		},
										]},
										{ type:"window"		, id:"menu_kakaotalk"		, 'class' : "langicon"		, 'data-text'  : 'kakao',   click:"eFnc.sendSNS('kakaotalk')",  children:[
											{ type:"image" 		, 'class':"menuobjects", src:"kakaotalk.svg"		, title:"KAKAOTALK"		},
										]},
									]},

								]},
								{ type:"window" , 'class' :'right', children:[
									{ type:"window"	, id:"qrcode", 'class': "hint--bottom qrcode langicon", title:"QR CODE",  'data-text'  : 'qrcode' },		
								]},
							]},
						]},
					]},  /*sns end */
									
					

					]},
					{ type:"window"		,id:"pagenation" , 	  children:[					
						{ type:"window"	, id:"quick_first_btn"	, 'class':"hint--top quickobjects langicon"		,'data-text'  : 'first_page', children:[
							{ type:"image"	,  src:"btn_first.svg"		, title:"FIRST PAGE"		, click:"eFnc.gotoPage(1)"	}					
						]},
						{ type:"window" ,id:"quick_prev_btn"		, 'class':"hint--top quickobjects langicon"	, 'data-text'  : 'prev_page',  children:[
							{ type:"image",  src:"btn_prev.svg"		, title:"PREV PAGE",	 click:"eFnc.gotoPrev()"	},
						]},
						{ type:"input"	, id:"quick_page",				'class':""	, onKeypress : "javascript:if(event.keyCode==13) eFnc.gotoPageClick('#quick_page')"  },

						{ type:"window" , id:"quick_next_btn"		, 'class':"hint--top quickobjects langicon"		,  'data-text'  : 'next_page',	children:[
							{ type:"image"	, src:"btn_next.svg"		, title:"NEXT PAGE"	, click:"eFnc.gotoNext()"	},
						]},
						{ type:"window" , id:"quick_last_btn"		, 'class':"hint--top quickobjects langicon"		, 'data-text'  : 'last_page', children:[
							{ type:"image",			src:"btn_last.svg"		, title:"END PAGE"		, click:"eFnc.gotoPage(-1)"	},
						]},

					]},
					{ type : "window" , id : "rightcol", children: [
						{ type:"window"		, id:"search_window"		, 'class':"", children:[
							{ type:"input"		, id:"search_text",	'placeholder' : 'Search', 'class':"", onKeypress : "javascript:if(event.keyCode==13) eFnc.searchByInput('#search_text')"	},
							{ type:"image"		, id:"search_text_btn"	, 'class':"hint--top menuobjects langicon",  'data-text'  : 'search', src:"search.svg"		, title:"SEARCH"			, click:"eFnc.searchByInput('#search_text')"		},
							]},
						{ type:"window"		, id:"booklist"	 ,  children:[
								{ type : "booklist" , 'class':"mainobjects langicon" ,'data-text' : 'lastebook', title: "View Book LIST", click:"eFnc.wndmenuslide('ul')"},
								{ type:"image"	, 'class' : "iconarrow", src:"previous_issue.svg",click:"eFnc.wndToggle('ul')" }	,
						]},
					]},


			]},

		]},



	]},

	// Mobile bottom
	{ type:"window"		, id:"bottom_window_m"	, 'class':"mainobjects"	, visible:"mobile"	, children:[
 			{ type : "window", id : 'mo_zoom',children : [
				{ type : "window", 'class' : 'zoomin', children : [
					{ type:"image"	, 'class' : "", src:"zoom_in.svg" }
				]},
				{ type : "window", 'class' : 'zoomout', children : [
					{ type:"image"	, 'class' : "", src:"zoom_out.svg"}
				]},
			]},
 			{ type:"window"		,id:"pagenation" , 	  children:[					
				{ type:"image"		, id:"quick_prev_btn"		, 'class':"quickobjects langicon"	, 'data-text'  : 'prev_page',  src:"btn_prev.svg"		, title:"PREV PAGE",	 click:"eFnc.gotoPrev()"	},
				{ type:"window"		,id:"page_num" , 	  children:[					
					{ type:"pagenum"	, id:"quick_pagenum_area"		},
					{ type:"text"		, id:"quick_pagenum_slash"	, 'class':"quicktexts"	, text:"/"	, tabindex:-1	},
					{ type:"pagetotal", id:"quick_pagetotal_area"	},
				]},
 				{ type:"input"		, id:"quick_page",			'class':""	, onKeypress : "javascript:if(event.keyCode==13) eFnc.gotoPageClick('#quick_page')"  }, 
				{ type:"image"		, id:"quick_next_btn"		, 'class':"quickobjects langicon"	, 'data-text'  : 'next_page',	 src:"btn_next.svg"		, title:"NEXT PAGE"	, click:"eFnc.gotoNext()"	},
			]},
			{ type:"window"	, children:[
			{ type:"window"	, id:"booklist"	, 'class':"mainobjects" ,title: "View Book LIST", children:[
				{ type : "booklist" , 'class':"mainobjects langicon" ,'data-text' : 'lastebook', title: "View Book LIST", click:"eFnc.wndmenuslide('ul')"},
				
			]},
			]},

	]},

	{ type:"tablelist"		, id:"tablelist_window"			,	draggable:true, resizable:true	},
	{ type:"bookmarklist"	, id:"bookmarklist_window"	,	draggable:true, resizable:true	},
	{ type:"searchlist"		, id:"searchlist_window"		,	draggable:true, resizable:true	},
	{ type:"thumblist"		, id:"thumbnail_window"	},
	{ type:"indexTab"		, id:"bookclip_pc"	,	draggable:false, resizable:false	},
];
eFnc.showLoading();