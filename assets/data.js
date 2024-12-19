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
	RANDOM:524755,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[16,{type:"link", id:"Link_0", name:"noname", visible:"true", x:"230", y:"3897", width:"600", height:"100", backgroundColor:"0x5cd6d5,0", rolloverColor:"0x5cd6d5,0", borderColor:"0x000000,100", borderWidth:"0", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", link:"address|_blank|https://chaewoora.com"}
]],
	
	textList : [ /** 본문 검색 */
		/*1*/	"CHAEWOORARAUM �D PRINTER채우라 라움 3D 프린터 X 3D 채널 사인간판3D Printer Business Department X 3D Sign",
		/*2*/	"ABOUTCHAEWOORAChaewoora is an engineer-founded 3D Printing tech startup.Starting from a 3D printer development club, we are developing the most userfriendly and secure 3D printing technology.We are researching and developing 3D Printing technology that can be applied inthe interior design field, aiming to produce output materials that can actually beused, not just used as prototypes.CHAEWOORA INC,HISTORY����������������ￜ��ￜ• Chaewoora Corporation Establishment• GIBO Venture Camp• Pre-Startup Package• Youth Startup Academy• Venture Enterprise Certification• Establishment of R&D department• Direct production certification• Global Entrepreneurship Academy• Export voucher• Start-up NEST• Korea Nara Marketplace• Wadiz Fuding 2900%• Seed investment• Export to Thailand and Japan",
		/*3*/	"OUR SERVICE3D PrintingMarket-InteriorMarket-EducationMarket-3D Printing R&DCreating interior items3D Printer Lecture3D PrinterSalesLEDSignboardItemProduction3D PrintingLecture3D Printing Solution3D Printing Interior Item3D Printing LectureDelivering RAUM 3D PrinterSolution Direct delivery ofequiment, materials,programs, and CS forcontinuous productionDelivery of RAUM 3D Printedsignboards produced directly3D PrintersLectures using RAUM 3D printers,training kits, and4th Industrial Revolution Curriculumￜ��ￜ",
		/*4*/	"��RAUM ��� Pro라움 ��� 프로Complete assembly Low noiseFilament SensorSPECIFICATIONￜ��ￜChamverTouch screenAuto LevelingHEPA FilterBuild Volume290x285x350 (mm)ExtruderSingle Dual gearPrinter Size470x490x730 (mm)Weight28kgSpeed60-150mm/sSliceridea Maker, CuraMethodFFF(FDM)MemoryMicro SDDrive MethodCore XYGUI3.5in Touch screenNozzleSingle NozzleLayer0.2-0.8 (mm)Nozzle diameter 0.4 (mm)UV Curing-Material diameter1.75 (mm)HEPA filterOMaterialPLA/ABS/etcExtensiongcodeBedFlexible Texture BedPSU350wLevelingAuto LevelingVoltageDC 24v",
		/*5*/	"��RAUM ��� Sign라움 ��� 사인UV FuctionComplete assembly Low noiseChamverSPECIFICATIONAuto LevelingTouch screen Filament SensorHEPA Filter2in1 NozzleBuild Volume290x285x350(mm)ExtruderMk8 Extruder x2Printer Size470x490x730 (mm)Weight29kgSpeed60-150mm/sSliceridea Maker, RAUM makerMethodFFF(FDM)MemoryMicro SDDrive MethodCore XYGUI3.5in Touch screenNozzle2in1 NozzleLayer0.2-0.8(mm)Nozzle diameter 0.6(mm)UV CuringOMaterial diameter1.75(mm)HEPA filterOMaterialPLA/PDS/ABS/etcExtensiongcodeBedGlass BedPSU350wLevelingAuto LevelingVoltageDC 24vￜ��ￜ",
		/*6*/	"��RAUM ��� Pro라움 ��� 프로Complete assembly Low noiseFilament SensorSPECIFICATIONAuto LevelingHEPA FilterBuild Volume500x500x400ExtruderMk8 Extruder x2Printer Size730x730x1000Weight80kgSpeed60-150mm/sSliceridea Maker, CuraMethodFFF(FDM)MemoryUSBDrive MethodCore XYGUI3.5in Touch screenNozzleSingle NozzleLayer0.2-0.8UV Curing-HEPA filterONozzle diameter 0.6(mm)Material diameter1.75(mm)ￜ��ￜChamverTouch screenMaterialPLA/ABS/PDS/PETG/etcExtensionGcodeBedAluminum BedPSU600wLevelingAuto LevelingVoltageDC 24v",
		/*7*/	"��RAUM ��� Sign라움 ��� 사인800 SizeSPECIFICATIONComplete assembly 2in1 NozzleBuild Volume800x800x80 (mm)ExtruderMk8 Extruder x2Printer Size1230x1150x700(mm)Weight70kgSpeed60-150mm/sSliceridea Maker, RAUM makerMethodFFF(FDM)MemoryMicro SDDrive MethodCore XYZGUI3.5in Touch screenNozzle2in1 NozzleLayer0.2-0.8(mm)Nozzle diameter 0.8(mm)UV Curing-Material diameter1.75(mm)HEPA filter-MaterialPLA/PDS/etcExtensiongcodeBedGlass BedPSU1200wLevelingAuto LevelingVoltageDC 24vￜ��ￜ",
		/*8*/	"��RAUM UV라움 유브이800 SizeSPECIFICATIONUV Volume800x800x60(mm)ControlerTimerProduct Size900x955x230(mm)Power220vCuring Speed(m) 60-90(White) 120(Color)FAN220v / AC 25w x2UV (365㎚)PSU350wWavelengthￜ��ￜComplete assembly UV Fuction",
		/*9*/	"RAUM ��� Sign Plus라움 ��� 사인플러스가능하고 UV 경화모듈, 헤파필터가 장착되어 있습니다.사인제작, 조형물, 대형부품, 상업 분야에적합한 모델입니다.��� 사이즈완조립�in� 노즐챔버형오토레벨링헤파필터UV 기능SPECIFICATION���in�노즐 챔버형 모델로 �가지 색 출력이Build Volume800x800x300(mm)ExtruderMk8 Extruder x2Printer Size(mm)1300x1200x910Weight78kgSpeed60-150mm/sSliceridea Maker, RAUM makerMethodFFF(FDM)MemoryMicro SDDrive MethodCore XYGUI3.5in Touch screenNozzle2in1 NozzleLayer0.2-0.8(mm)Nozzle diameter 0.8(mm)UV CuringOMaterial diameter1.75(mm)HEPA filterOMaterialPLA/PDS/ABS/etcExtensiongcodeBedGlass BedPSU1200wLevelingAuto LevelingVoltageDC 24vￜ��ￜ",
		/*10*/	"��RAUM Maker라움메이커SW dedicated to making signboardsCreate 3D printing files with automatic modelingprogram typed text, svg logo filesThe RAUM model selection alone sets the mostideal output value.Powerful compatibility & ease useEasy to create with simple icon selectionIllustration & Corel Production Design FileCompatible / Program Self Text Input PhrasesCan be entered CHAEWOORA Official YouTubePosts Video on How to Use Slicers2D svg fileￜ��ￜSignboard Automatic 3D Modeling",
		/*11*/	"�D Portfolio�D 포트폴리오��3D Printing3D Channelￜ��ￜ",
		/*12*/	"��RAUM MaterialFilamentR-PLA FilamentEco-friendly materials made from raw materials extractedfrom corn starch / General output, PrototypingR-SIGN FilamentDevelopment materials that are strong and have goodWhiteRedOrangeYellowGreenBlueGrayBlackWhiteRedOrangeYellowGreenBluePinkPurple조명용elasticity and can be used in outdoor environments. Usedfor molds, signboards, and general output purposes비조명용WhiteBlack��RAUM MaterialLED / UVLED Strap12v LED for Signboard / Letters, available for curveoperationsCool White Natural White Warm White Light PinkRedYellowLemon YellowGreenHot PinkPurpleIce BlueBlueUV AcrylicLiquid acrylic used in sign making /Material needed to make front LED lightemitting partLED Strapￜ��ￜUV Acrylic",
		/*13*/	"��Sales Channel판매 채널B�B (Company)Signboards, sculptures, parts, andprototype equipmentDelivery, SW providedExhibitionParticipate in more than 20 exhibitions,including machinery, signboards, 3Dprinting, etcB�G (Nara Market)Schools, institutions, military unitsDirect delivery of equipment, signageB�C (Customer)Online sales of signboards, 3D printersand materials such as Naver, Rakuten,etcￜ��ￜ",
		/*14*/	"네 가지 타입 종류 별3D LED Sign Making CaseA typeB typeC typeD typeￜ��ￜ��",
		/*15*/	"Partnership파트너쉽13PartnerCHAEWOORA is a startup MOU with government agencies andindustry- academic institutions. As a childcare company of theSeoul Creative Economy Innovation Center and Small andMedium Venture Business Corporation, it continues to carry outgovernment projects and research and developmentContact UsCHAEWOORA14농협대학Tel+82 ��-����-����Mailcontact@chaewoora.comHomepagewww.chaewoora.comLocationSamsong Techno Valley A429, 140, Tongil-ro,Deogyang-gu, Goyang-si, Gyeonggi-do,Republic of Korea원당역일산고양시청외곽순환도로 통일로 IC삼송역원흥역(�번출구)지축역창릉천신세계복합쇼핑몰고양대로매경 MBN하나로마트창릉동 주민센터SamsongTechnovally은평뉴타운수색ￜ�4ￜ",
		/*16*/	"3D PrinterSignboardEducationAgencySamsong Techno Valley A429, 140, Tongil-ro, Deogyang-gu, Goyang-si,Gyeonggi-do, Republic of KoreaTel : jskim@chaewoora.com / contact@chaewoora.comwww.chaewoora.comHomepageStoreCafeYoutube"],
	
	indexTabList : [ /** 인덱스탭 목록 */
		]
	};