/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 16,
	useLogo				: false,
	logoUrl				: "",
	homeUrl				: "",
	useBooklist			: "false",
	
	pageView : {
		type			: "flip",
		side			: "auto",
		duration		: 500,
		cover			: true,
		pagezoom	 	:  "400",
		
		},
	
	pageshadow:false,
	pagearea:true,
	pagesound:"sound1",
	intro:"basic",
	RANDOM:102719,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		],
	
pageContents : [ /** 페이지 컨텐츠 */
		[16,{type:"link", id:"Link_0", name:"noname", visible:"true", x:"230", y:"3897", width:"600", height:"100", backgroundColor:"0x5cd6d5,0", rolloverColor:"0x5cd6d5,0", borderColor:"0x000000,100", borderWidth:"0", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", link:"address|_blank|https://chaewoora.com"}
]],

	
	textList : [ /** 본문 검색 */
		/*1*/	"CHAEWOORARAUM �D PRINTER채우라 라움 3D 프린터 X 3D 채널 사인간판3D Printer Business Department X 3D Sign",
		/*2*/	"ABOUTCHAEWOORAChaewoora is an engineer-founded �D Printing tech startup.Starting from a �D printer development club, we are developing the mostuserfriendly and secure �D printing technology.We are researching and developing �D Printing technology that can be applied inthe interior design ﬁeld, aiming to produce output materials that can actually beused, not just used as prototypes.CHAEWOORA INCHISTORY����������������ￜ��ￜ• Chaewoora Corporation Establishment• GIBO Venture Camp• Pre-Startup Package• Youth Startup Academy• Venture Enterprise Certiﬁcation• Establishment of R&D department• Direct production certiﬁcation• Global Entrepreneurship Academy• Export voucher• Start-up NEST• Korea Nara Marketplace• Wadiz Fuding ����%• Seed investment• Export to Thailand and Japan",
		/*3*/	"OUR SERVICE�D PrintingMarket-�D Printing R&D�D PrinterSales�D Printing SolutionDelivering RAUM �D PrinterSolution Direct delivery ofequiment, materials,programs, and CS forcontinuous productionInteriorMarket-Creating interior itemsLEDSignboardItemProduction�D Printing Interior ItemDelivery of RAUM �D Printedsignboards produced directly�D PrintersEducationMarket-�D Printer Lecture�D PrintingLecture�D Printing LectureLectures using RAUM �D printers,training kits, and�th Industrial Revolution Curriculumￜ��ￜ",
		/*4*/	"RAUM ��� Pro라움 ��� 프로stable printing and comes equipped with a HEPA ﬁlter.This model is suitable for education, parts production,and hobby applications.Complete assembly Low noiseFilament SensorSPECIFICATION���x���x��� (mm)ExtruderSpeed��-���mm/sSlicerMethodDrive MethodNozzleNozzle diameter���x���x��� (mm)FFF(FDM)Core XYSingle NozzleMemoryMicro SDLayer�.�-�.� (mm)GUIMaterialPLA/ABS/etcExtensionLevelingAuto LevelingBedFlexible Texture BedHEPA Filteridea Maker, Cura�.�in Touch screen-HEPA ﬁlterOPSU���wVoltageTouch screenSingle Dual gear��kgUV Curing�.�� (mm)Auto LevelingWeight�.�(mm)Material diameterￜ��ￜChamverBuild VolumePrinter Size��It is a chamber-type model that ensuresgcodeDC ��v",
		/*5*/	"RAUM ��� Signt is a �-in-� nozzle chamber-type model라움 ��� 사인capable of dual-color printing, equippedwith a UV curing module and a HEPA ﬁlter.This model is suitable for education,parts production, hobbies, and interior��signage applications.UV FuctionComplete assembly Low noiseChamverSPECIFICATIONAuto LevelingBuild Volume���x���x��� (mm)ExtruderSpeed��-���mm/sSlicerPrinter SizeMethodDrive MethodNozzle���x���x��� (mm)FFF(FDM)Core XY�in� NozzleTouch screen Filament SensorHEPA FilterMk� Extruder x�Weight��kgMemoryMicro SDLayer�.�-�.� (mm)HEPA ﬁlterOGUIidea Maker, Cura�.�in Touch screenNozzle diameter �.�(mm)UV CuringMaterialPLA/PDS/ABS/etcExtensiongcodeLevelingAuto LevelingVoltageDC ��vMaterial diameter�.�� (mm)BedGlass BedPSU�in� NozzleO���wￜ��ￜ",
		/*6*/	"��RAUM ��� Pro라움 ��� 프로Complete assembly Low noiseFilament SensorSPECIFICATIONAuto LevelingHEPA FilterBuild Volume���x���x���ExtruderMk� Extruder x�Speed��-���mm/sSliceridea Maker, CuraCore XYGUIPrinter SizeMethodDrive MethodNozzleNozzle diameter���x���x���FFF(FDM)Single NozzleMaterial diameter�.�(mm)�.�� (mm)MaterialPLA/ABS/PDS/PETG/etcLevelingAuto LevelingBedￜ��ￜChamverTouch screenFlexible Texture BedWeight��kgMemoryUSBLayer�.��-�.� (mm)UV Curing�.�in Touch screen-HEPA ﬁlterOPSU���wExtensionVoltagegcodeDC ��v",
		/*7*/	"RAUM ��� Sign라움 ��� 사인It is an open-type �-in-� nozzle modelcapable of dual-color and large-scale printing.This model is ideal for signage production,large parts manufacturing, and commercial applications.��� SizeSPECIFICATIONBuild Volume���x���x��Speed��-���mm/sPrinter SizeMethodDrive MethodNozzleNozzle diameterComplete assembly �in� NozzleExtruderMk� Extruder x�Sliceridea Maker, RAUM maker����x����x���WeightFFF(FDM)MemoryMicro SDLayer�.�-�.� (mm)Core XYZ�in� NozzleGUI��kg�.�in Touch screen�.� (mm)UV CuringMaterialPLA/PDS/etcExtensiongcodeLevelingAuto LevelingVoltageDC ��vMaterial diameter �.�� (mm)Bed��Glass BedHEPA ﬁlterPSU--����wￜ��ￜ",
		/*8*/	"RAUM UV라움 유브이The RAUM UV is a dedicated curing unit��for the RAUM ��� Sign model with UV functionality.It is a set model designed for utilizing the UV curing function.��� Size Complete assembly UV FuctionSPECIFICATIONUV Volume���x���x��ControlerTimerCuring Speed��-��((White) ���(Color)FAN���v / AC ��w x�Product SizeWavelengthￜ��ￜ���x���x���UV (���㎚)PowerPSU���v���w",
		/*9*/	"RAUM ��� Sign PlusIt is a chamber-type �-in-� nozzle model라움 ��� 사인플러스capable of dual-color printing, equippedwith a UV curing module and a HEPA ﬁlter.This model is suitable for signage production,��sculptures, large parts manufacturing,and commercial applications.��� Size Complete assembly �in� NozzleUV FuctionSPECIFICATIONBuild VolumePrinter Size���x���x�������x����x���ChamverExtruderWeightAuto LevelingHEPA FilterMk� Extruder x����kgSpeed��-���mm/sSliceridea Maker, RAUM makerDrive MethodCore XYGUI�.�in Touch screenNozzle diameter�.�UV CuringOExtensionGcodeMethodNozzleFFF(FDM)�in� NozzleMaterial diameter �.��MaterialBedLevelingPLA/PDS/ABS/etcGlass BedAuto LevelingMemoryLayerHEPA ﬁlterPSUVoltageMicro SD�.�-�.�O����wDC ��vￜ��ￜ",
		/*10*/	"RAUM Maker라움메이커With just a few clicks, anyone can easilyand conveniently create �D printing ﬁles.This is Chaewoora exclusive software forsignage production.��SW dedicated to making signboardsCreate �D printing ﬁles with automatic modelingprogram typed text, svg logo ﬁlesThe RAUM model selection alone sets the mostideal output value.Powerful compatibility & ease useEasy to create with simple icon selectionIllustration & Corel Production Design FileCompatible / Program Self Text Input Phrases�D svg ﬁleￜ��ￜSignboard Automatic �D ModelingCan be entered CHAEWOORA Oﬃcial YouTubePosts Video on How to Use Slicers",
		/*11*/	"�D Portfolio�D PORTFOLIOBoth general prints and signage prints can bequickly produced according to your desired design,oﬀering exceptional productivity.��These are products printed with the RAUM �D printer.�D Printing�D Channelￜ��ￜ",
		/*12*/	"��RAUM MaterialFILAMENTR-PLA FilamentEco-friendly materials made from raw materials extractedfrom corn starch / General output, PrototypingR-SIGN FilamentDevelopment materials that are strong and have goodelasticity and can be used in outdoor environments. Usedfor molds, signboards, and general output purposesNon-lightingWhiteBlackWhiteRedOrangeYellowGreenBlueGrayBlackWhiteRedOrangeYellowGreenBluePinkPurplelighting��RAUM MaterialLED / UVLED Strap��v LED for Signboard / Letters, available for curveoperationsCool White Natural White Warm White Light PinkRedYellowLemon YellowGreenHot PinkPurpleIce BlueBlueUV AcrylicLiquid acrylic used in sign making /Material needed to make front LED lightemitting partLED Strapￜ��ￜUV Acrylic",
		/*13*/	"��Sales ChannelA SALES CHANNELB�B (Company)B�G (Nara Market)Signboards, sculptures, parts, andprototype equipmentDelivery, SW providedSchools, institutions, military unitsDirect delivery of equipment, signageExhibitionB�C (Customer)Participate in more than �� exhibitions,including machinery, signboards, �Dprinting, etcOnline sales of signboards, �D printersand materials such as Naver, Rakuten,etcￜ��ￜ",
		/*14*/	"Four types of categories�D LED SIGN MAKING CASEA typeB typeC typeD typeￜ��ￜ��",
		/*15*/	"PartnershipPARTNERSHIPPartnerCHAEWOORA is a startup MOU with government agencies andindustry- academic institutions. As a childcare company of the��Seoul Creative Economy Innovation Center and Small andMedium Venture Business Corporation, it continues to carry outgovernment projects and research and development��Contact UsCHAEWOORA농협대학Tel+�� ��-����-����Mailcontact@chaewoora.comHomepagewww.chaewoora.comLocationSamsong Techno Valley A���, ���, Tongil-ro,Deogyang-gu, Goyang-si, Gyeonggi-do,Republic of Korea원당역일산고양시청외곽순환도로 통일로 IC삼송역원흥역(�번출구)지축역창릉천신세계복합쇼핑몰고양대로수색매경 MBN하나로마트창릉동 주민센터SamsongTechnovally은평뉴타운ￜ��ￜ",
		/*16*/	"3D PrinterSignboardEducationAgencySamsong Techno Valley A429, 140, Tongil-ro, Deogyang-gu, Goyang-si,Gyeonggi-do, Republic of KoreaTel : jskim@chaewoora.com / contact@chaewoora.comwww.chaewoora.comHomepageStoreCafeYoutube"],
	
	indexTabList : [ /** 인덱스탭 목록 */
		]
	};