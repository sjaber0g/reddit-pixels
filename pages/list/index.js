import Subreddits from 'components/Subreddits';

const list = [
  {
    category: 'GIFs',
    items: [
      {
        category: 'General',
        items: [
          '/r/gifs',
          '/r/behindthegifs',
          '/r/gif',
          '/r/Cinemagraphs',
          '/r/WastedGifs',
          '/r/educationalgifs',
          '/r/perfectloops',
          '/r/highqualitygifs',
          '/r/gifsound',
          '/r/combinedgifs',
          '/r/retiredgif',
          '/r/michaelbaygifs',
          '/r/gifrecipes',
          '/r/mechanical_gifs',
          '/r/bettereveryloop',
          '/r/gifextra',
          '/r/slygifs',
          '/r/gifsthatkeepongiving',
          '/r/wholesomegifs',
          '/r/noisygifs',
          '/r/brokengifs',
          '/r/loadingicon',
          '/r/splitdepthgifs',
        ],
      },
      {
        category: 'People',
        items: [
          '/r/blackpeoplegifs',
          '/r/whitepeoplegifs',
          '/r/asianpeoplegifs',
          '/r/scriptedasiangifs',
        ],
      },
      {
        category: 'Reaction',
        items: ['/r/reactiongifs', '/r/shittyreactiongifs'],
      },
      {
        category: 'Science',
        items: ['/r/chemicalreactiongifs', '/r/physicsgifs'],
      },
      {
        category: 'Nature',
        items: ['/r/babyelephantgifs', '/r/weathergifs'],
      },
    ],
  },
  {
    category: 'Images',
    items: [
      {
        category: 'General',
        items: [
          '/r/pics',
          '/r/PhotoshopBattles',
          '/r/perfecttiming',
          '/r/itookapicture',
          '/r/Pareidolia',
          '/r/ExpectationVSReality',
          '/r/dogpictures',
          '/r/misleadingthumbnails',
          '/r/FifthWorldPics',
          '/r/TheWayWeWere',
          '/r/pic',
          '/r/nocontextpics',
          '/r/miniworlds',
          '/r/foundpaper',
          '/r/images',
          '/r/screenshots',
        ],
      },
      {
        category: 'Interesting',
        items: [
          '/r/mildlyinteresting',
          '/r/interestingasfuck',
          '/r/damnthatsinteresting',
          '/r/beamazed',
          '/r/reallifeshinies',
          '/r/thatsinsane',
          '/r/playitagainsam',
        ],
      },
      {
        category: 'Women',
        items: [
          '/r/gentlemanboners',
          '/r/prettygirls',
          '/r/hardbodies',
          '/r/girlsmirin',
          '/r/thinspo',
          '/r/goddesses',
          '/r/shorthairedhotties',
          '/r/fitandnatural',
          '/r/wrestlewiththeplot',
          '/r/skinnywithabs',
          '/r/bois',
          '/r/GentlemanBonersGifs',
        ],
      },
      {
        category: 'Asian',
        items: ['/r/asiancuties', '/r/asiangirlsbeingcute'],
      },
      {
        category: 'Photoshop',
        items: [
          '/r/PhotoshopBattles',
          '/r/ColorizedHistory',
          '/r/reallifedoodles',
          '/r/HybridAnimals',
          '/r/colorization',
        ],
      },
      {
        category: 'Selfies',
        items: [
          '/r/amiugly',
          '/r/roastme',
          '/r/rateme',
          '/r/uglyduckling',
          '/r/prettygirlsuglyfaces',
        ],
      },
      {
        category: 'Wallpapers',
        items: ['/r/wallpapers', '/r/wallpaper', '/r/Offensive_Wallpapers'],
      },
    ],
  },
  {
    category: 'Videos',
    items: [
      '/r/videos',
      '/r/youtubehaiku',
      '/r/artisanvideos',
      '/r/DeepIntoYouTube',
      '/r/nottimanderic',
      '/r/praisethecameraman',
      '/r/killthecameraman',
      '/r/perfectlycutscreams',
      '/r/donthelpjustfilm',
      '/r/abruptchaos',
    ],
  },
  {
    category: 'Humor',
    items: [
      '/r/funny',
      '/r/humor',
      '/r/contagiouslaughter',
      '/r/standupcomedy',
      '/r/ProgrammerHumor',
      '/r/prematurecelebration',
      '/r/ChildrenFallingOver',
      '/r/dadreflexes',
      '/r/kenm',
      '/r/politicalhumor',
      '/r/accidentalcomedy',
      '/r/funnyandsad',
      '/r/kidsarefuckingstupid',
      '/r/notkenm',
      '/r/suspiciouslyspecific',
      '/r/oddlyspecific',
      '/r/rimjob_steve',
      '/r/dark_humor',
      '/r/stepdadreflexes',
      '/r/congratslikeimfive',
      '/r/darkhumorandmemes',
    ],
  },
  {
    category: 'Art',
    items: [
      '/r/ImaginaryMindscapes',
      '/r/Museum',
      '/r/ArtPorn',
      '/r/DigitalArt',
      '/r/SculpturePorn',
      '/r/BattlePaintings',
      '/r/PropagandaPosters',
      '/r/SocialistArt',
      '/r/ArtefactPorn',
      '/r/artstore',
      '/r/CrappyArt',
      '/r/wtfart',
      '/r/nsfwart',
      '/r/AdorableArt',
      '/r/streetart',
      '/r/graffiti',
      '/r/artcrit',
      '/r/UnusualArt',
      '/r/vaporwaveart',
      '/r/WhatIsThisPainting',
      '/r/Portraiture (historical)',
      '/r/Portraits (contemporary)',
      '/r/MuseumPorn',
      '/r/fanart',
      '/r/ArtProgressPics',
      '/r/LandArt',
      '/r/redditgetsdrawn',
      '/r/heavymind',
      '/r/drawing',
      '/r/graffiti',
      '/r/retrofuturism',
      '/r/sketchdaily',
      '/r/ArtPorn',
      '/r/pixelart',
      '/r/artfundamentals',
      '/r/learnart',
      '/r/specart',
      '/r/animation',
      '/r/wimmelbilder',
      '/r/illustration',
      '/r/streetart',
      '/r/IDAP',
      '/r/sketches',
      '/r/redditgetsdrawn',
      '/r/drawme',
      '/r/sketchdaily',
      '/r/dailydraw',
      '/r/drawing',
      '/r/sketchpad',
      '/r/ArtFundamentals',
      '/r/ICanDrawThat',
      '/r/doodles',
    ],
  },
  {
    category: 'History',
    items: [
      '/r/HistoryPorn',
      '/r/PropagandaPosters',
      '/r/TheWayWeWere',
      '/r/historymemes',
      '/r/castles',
    ],
  },
  {
    category: 'Anime',
    items: [
      '/r/anime',
      '/r/manga',
      '/r/anime_irl',
      '/r/awwnime',
      '/r/TsundereSharks',
      '/r/animesuggest',
      '/r/animemes',
      '/r/animegifs',
      '/r/animewallpaper',
      '/r/wholesomeanimemes',
    ],
  },
  {
    category: 'Comics',
    items: [
      '/r/comics',
      '/r/comicbooks',
      '/r/webcomics',
      '/r/marvel',
      '/r/marvelmemes',
      '/r/DCComics',
      '/r/xkcd',
    ],
  },
  {
    category: 'Celebrity',
    items: [
      {
        category: 'General',
        items: ['/r/celebs', '/r/celebhub'],
      },
      {
        category: 'Female',
        items: [
          '/r/EmmaWatson',
          '/r/jessicanigri',
          '/r/kateupton',
          '/r/alisonbrie',
          '/r/EmilyRatajkowski',
          '/r/jenniferlawrence',
          '/r/alexandradaddario',
        ],
      },
      {
        category: 'Male',
        items: [
          '/r/onetruegod',
          '/r/joerogan',
          '/r/keanubeingawesome',
          '/r/crewscrew',
          '/r/donaldglover',
          '/r/elonmusk',
        ],
      },
    ],
  },
  {
    category: 'Cosplay',
    items: ['/r/cosplay', '/r/cosplaygirls'],
  },
  {
    category: 'Twitter',
    items: [
      '/r/blackpeopletwitter',
      '/r/scottishpeopletwitter',
      '/r/WhitePeopleTwitter',
      '/r/wholesomebpt',
      '/r/latinopeopletwitter',
    ],
  },
  {
    category: 'YouTube',
    items: ['/r/YoutubeHaiku', '/r/youtube', '/r/youngpeopleyoutube'],
  },
  {
    category: 'Design',
    items: [
      '/r/CrappyDesign',
      '/r/web_design',
      '/r/graphic_design',
      '/r/design',
      '/r/designporn',
      '/r/InteriorDesign',
      '/r/ATBGE',
      '/r/dontdeadopeninside',
      '/r/assholedesign',
      '/r/keming',
      '/r/logodesign',
      '/r/tombstoning',
      '/r/dangerousdesign',
    ],
  },
  {
    category: 'SFW Porn',
    items: [
      '/r/EarthPorn',
      '/r/HistoryPorn',
      '/r/FoodPorn',
      '/r/JusticePorn',
      '/r/AbandonedPorn',
      '/r/SpacePorn',
      '/r/RoomPorn',
      '/r/QuotesPorn',
      '/r/MapPorn',
      '/r/CityPorn',
      '/r/carporn',
      '/r/humanporn',
      '/r/penmanshipporn',
      '/r/militaryporn',
      '/r/DesignPorn',
      '/r/ThingsCutInHalfPorn',
      '/r/ArchitecturePorn',
      '/r/ExposurePorn',
      '/r/futureporn',
      '/r/adrenalineporn',
      '/r/waterporn',
      '/r/machineporn',
      '/r/animalporn',
      '/r/movieposterporn',
      '/r/illusionporn',
      '/r/destructionporn',
      '/r/adporn',
      '/r/artefactporn',
      '/r/gunporn',
      '/r/skyporn',
      '/r/powerwashingporn',
      '/r/ArtPorn',
      '/r/InfrastructurePorn',
      '/r/VillagePorn',
      '/r/shockwaveporn',
      '/r/productporn',
      '/r/macroporn',
      '/r/cabinporn',
      '/r/houseporn',
      '/r/mineralporn',
      '/r/microporn',
    ],
  },
  {
    category: 'Shitty',
    items: [
      '/r/shittyaskscience',
      '/r/shittyfoodporn',
      '/r/shittyreactiongifs',
      '/r/crappydesign',
      '/r/Shitty_Car_Mods',
      '/r/shittyadvice',
      '/r/shittyrobots',
      '/r/ShittyLifeProTips',
      '/r/shittykickstarters',
      '/r/shittyanimalfacts',
      '/r/shitpost',
      '/r/shittymoviedetails',
    ],
  },
  {
    category: 'Unexpected',
    items: [
      '/r/unexpected',
      '/r/UnexpectedThugLife',
      '/r/misleadingthumbnails',
      '/r/unexpectedjihad',
      '/r/slygifs',
      '/r/blackmagicfuckery',
      '/r/unexpectedhogwarts',
      '/r/UnexpectedMulaney',
    ],
  },
  {
    category: 'Appealing',
    items: [
      '/r/AbandonedPorn',
      '/r/OddlySatisfying',
      '/r/RoomPorn',
      '/r/nonononoyes',
      '/r/minimalism',
      '/r/CityPorn',
      '/r/penmanshipporn',
      '/r/Cinemagraphs',
      '/r/ImaginaryLandscapes',
      '/r/eyebleach',
      '/r/DesignPorn',
      '/r/perfectloops',
      '/r/perfectfit',
      '/r/humansbeingbros',
      '/r/powerwashingporn',
      '/r/nevertellmetheodds',
      '/r/typography',
      '/r/cozyplaces',
      '/r/breathinginformation',
      '/r/desirepath',
      '/r/tiltshift',
      '/r/mostbeautiful',
      '/r/AmateurRoomPorn',
      '/r/slygifs',
      '/r/raining',
      '/r/AccidentalWesAnderson',
      '/r/unstirredpaint',
      '/r/handwriting',
      '/r/thatpeelingfeeling',
      '/r/gtage',
      '/r/satisfyingasfuck',
    ],
  },
  {
    category: 'Hold my',
    items: [
      '/r/holdmybeer',
      '/r/holdmyjuicebox',
      '/r/holdmyfries',
      '/r/holdmybeaker',
      '/r/holdmycosmo',
      '/r/holdmycatnip',
      '/r/holdmyredbull',
      '/r/holdmyfeedingtube',
    ],
  },
  {
    category: 'Memes',
    items: [
      '/r/AdviceAnimals',
      '/r/memes',
      '/r/trippinthroughtime',
      '/r/BikiniBottomTwitter',
      '/r/dankmemes',
      '/r/madlads',
      '/r/bidenbro',
      '/r/memeeconomy',
      '/r/rarepuppers',
      '/r/wholesomememes',
      '/r/dankchristianmemes',
      '/r/terriblefacebookmemes',
      '/r/prequelmemes',
      '/r/dank_meme',
      '/r/trebuchetmemes',
      '/r/deepfriedmemes',
      '/r/Overwatch_Memes',
      '/r/see',
      '/r/SequelMemes',
      '/r/surrealmemes',
      '/r/bonehurtingjuice',
      '/r/bossfight',
      '/r/historymemes',
      '/r/suddenlygay',
      '/r/absoluteunits',
      '/r/delightfullychubby',
      '/r/Memes_Of_The_Dank',
      '/r/smoobypost',
      '/r/lotrmemes',
      '/r/ilikthebred',
      '/r/meme',
      '/r/garlicbreadmemes',
      '/r/offensivememes',
      '/r/gocommitdie',
      '/r/wholesomegreentext',
      '/r/raimememes',
      '/r/otmemes',
      '/r/kappa',
      '/r/equelmemes',
      '/r/namflashbacks',
      '/r/hydrohomies',
      '/r/marvelmemes',
      '/r/raimimemes',
      '/r/dndmemes',
      '/r/gameofthronesmemes',
      '/r/nukedmemes',
      '/r/asongofmemesandrage',
      '/r/lodeddiper',
      '/r/antimeme',
      '/r/darkmemes',
      '/r/dankmemesfromsite19',
      '/r/arabfunny',
      '/r/memetemplatesofficial',
      '/r/animemes',
      '/r/wholesomeanimemes',
      '/r/goodanimemes',
      '/r/anime_irl',
      '/r/me_irl',
      '/r/meirl',
      '/r/anime_irl',
      '/r/2meirl4meirl',
      '/r/meow_irl',
      '/r/woof_irl',
      '/r/TooMeIrlForMeIrl',
      '/r/absolutelynotme_irl',
      '/r/absolutelynotmeirl',
      '/r/2meirl42meirl4meirl',
    ],
  },
  {
    category: 'Sci-fi',
    items: [
      '/r/zombies',
      '/r/cyberpunk',
      '/r/fantasy',
      '/r/scifi',
      '/r/starwars',
      '/r/startrek',
      '/r/asksciencefiction',
      '/r/prequelmemes',
      '/r/empiredidnothingwrong',
      '/r/SequelMemes',
      '/r/sciencefiction',
    ],
  },
  {
    category: 'Internet',
    items: [
      '/r/InternetIsBeautiful',
      '/r/facepalm',
      '/r/wikipedia',
      '/r/creepyPMs',
      '/r/web_design',
      '/r/google',
      '/r/KenM',
      '/r/bannedfromclubpenguin',
      '/r/savedyouaclick',
      '/r/bestofworldstar',
      '/r/discordapp',
      '/r/snaplenses',
      '/r/tronix',
      '/r/instagramreality',
      '/r/internetstars',
      '/r/robinhood',
      '/r/shortcuts',
      '/r/scams',
      '/r/tiktokcringe',
      '/r/crackheadcraigslist',
    ],
  },
  {
    category: '4chan',
    items: ['/r/4chan', '/r/Classic4chan', '/r/greentext'],
  },
  {
    category: 'Facebook',
    items: [
      '/r/facepalm',
      '/r/oldpeoplefacebook',
      '/r/facebookwins',
      '/r/indianpeoplefacebook',
      '/r/terriblefacebookmemes',
      '/r/insanepeoplefacebook',
    ],
  },
  {
    category: 'Hobbies',
    items: [
      '/r/cosplay',
      '/r/woodworking',
      '/r/somethingimade',
      '/r/architecture',
      '/r/CoolGuides',
      '/r/WorldBuilding',
      '/r/ifyoulikeblank',
      '/r/DiWHY',
      '/r/knitting',
      '/r/sewing',
      '/r/modelmakers',
      '/r/crochet',
      '/r/ProtectAndServe',
      '/r/RTLSDR',
      '/r/digitalnomad',
      '/r/FastWorkers',
      '/r/accounting',
      '/r/preppers',
      '/r/redneckengineering',
      '/r/crossstitch',
      '/r/dumpsterdiving',
      '/r/gunpla',
      '/r/urbanplanning',
      '/r/cubers',
      '/r/blacksmith',
      '/r/toptalent',
      '/r/slavelabour',
    ],
  },
  {
    category: 'Autos',
    items: [
      '/r/cars',
      '/r/motorcycles',
      '/r/carporn',
      '/r/justrolledintotheshop',
      '/r/idiotsincars',
      '/r/Shitty_Car_Mods',
      '/r/autos',
      '/r/roadcam',
      '/r/AutoDetailing',
      '/r/awesomecarmods',
      '/r/projectcar',
      '/r/cartalk',
      '/r/tiresaretheenemy',
      '/r/roadtrip',
      '/r/convenientcop',
      '/r/dashcamgifs',
    ],
  },
  {
    category: 'Combat',
    items: [
      '/r/MilitaryPorn',
      '/r/military',
      '/r/combatfootage',
      '/r/militarygfys',
      '/r/army',
      '/r/warshipporn',
      '/r/justbootthings',
    ],
  },
  {
    category: 'Outdoors',
    items: [
      '/r/urbanexploration',
      '/r/survival',
      '/r/backpacking',
      '/r/camping',
      '/r/homestead',
      '/r/MTB (mountain biking)',
      '/r/outdoors',
      '/r/wildernessbackpacking',
      '/r/campinggear',
      '/r/bushcraft',
    ],
  },
  {
    category: 'Food',
    items: [
      '/r/food',
      '/r/FoodPorn',
      '/r/foodhacks',
      '/r/shittyfoodporn',
      '/r/eatsandwiches',
      '/r/nutrition',
      '/r/mealtimevideos',
      '/r/WeWantPlates',
      '/r/forbiddensnacks',
      '/r/seriouseats',
      '/r/spicy',
    ],
  },
  {
    category: 'Animals',
    items: [
      {
        category: 'General',
        items: [
          '/r/AnimalsBeingJerks',
          '/r/AnimalsBeingBros',
          '/r/AnimalPorn',
          '/r/AnimalsBeingDerps',
          '/r/likeus',
          '/r/stoppedworking',
          '/r/hitmanimals',
          '/r/animaltextgifs',
          '/r/BeforeNAfterAdoption',
          '/r/sneks',
          '/r/TsundereSharks',
          '/r/whatsthisbug',
          '/r/HybridAnimals',
          '/r/zoomies',
          '/r/brushybrushy',
          '/r/bigboye',
          '/r/curledfeetsies',
          '/r/mlem',
          '/r/Floof',
          '/r/shittyanimalfacts',
          '/r/animalsthatlovemagic',
          '/r/spiderbro',
          '/r/properanimalnames',
          '/r/reverseanimalrescue',
          '/r/animalsdoingstuff',
          '/r/sploot',
        ],
      },
      {
        category: 'Birds',
        items: [
          '/r/babyelephantgifs',
          '/r/sloths',
          '/r/foxes',
          '/r/trashpandas',
          '/r/happycowgifs',
          '/r/rabbits',
          '/r/goatparkour',
          '/r/bearsdoinghumanthings',
        ],
      },
      {
        category: 'Cats',
        items: [
          '/r/cats',
          '/r/startledcats',
          '/r/catpictures',
          '/r/catsstandingup',
          '/r/catpranks',
          '/r/meow_irl',
          '/r/holdmycatnip',
          '/r/catslaps',
          '/r/thecatdimension',
          '/r/babybigcatgifs',
          '/r/catloaf',
          '/r/thisismylifemeow',
          '/r/cattaps',
          '/r/teefies',
          '/r/tuckedinkitties',
          '/r/catsareassholes',
          '/r/catsisuottatfo',
          '/r/stuffoncats',
          '/r/bigcatgifs',
          '/r/jellybeantoes',
          '/r/catsareliquid',
          '/r/catgifs',
          '/r/blackcats',
          '/r/supermodelcats',
          '/r/chonkers',
          '/r/tightpussy',
          '/r/catswithjobs',
          '/r/catswhoyell',
          '/r/whatswrongwithyourcat',
          '/r/illegallysmolcats',
        ],
      },
      {
        category: 'Dogs',
        items: [
          '/r/dogs',
          '/r/dogpictures',
          '/r/dogtraining',
          '/r/woof_irl',
          '/r/WhatsWrongWithYourDog',
          '/r/dogberg',
          '/r/dogswithjobs',
          '/r/masterreturns',
          '/r/barkour',
          '/r/blop',
          '/r/puppysmiles',
          '/r/puppies',
          '/r/petthedamndog',
        ],
      },
    ],
  },
  {
    category: 'Cringe',
    items: [
      {
        category: 'General',
        items: [
          '/r/cringepics',
          '/r/cringe',
          '/r/instant_regret',
          '/r/blunderyears',
          '/r/facepalm',
          '/r/fatlogic',
          '/r/publicfreakout',
          '/r/actualpublicfreakouts',
          '/r/lewronggeneration',
          '/r/fellowkids',
          '/r/sadcringe',
          '/r/corporatefacepalm',
          '/r/4PanelCringe',
          '/r/amibeingdetained',
          '/r/instantbarbarians',
          '/r/watchpeopledieinside',
          '/r/technicallythetruth',
          '/r/accidentalracism',
          '/r/engrish',
          '/r/wokekids',
          '/r/masterhacker',
          '/r/cringetopia',
          '/r/holup',
          '/r/agedlikemilk',
          '/r/tiktokcringe',
        ],
      },
      {
        category: 'Called out',
        items: [
          '/r/facepalm',
          '/r/quityourbullshit',
          '/r/thathappened',
          '/r/delusionalartists',
          '/r/oopsdidntmeanto',
          '/r/beholdthemasterrace',
          '/r/murderedbywords',
          '/r/ihavesex',
          '/r/woooosh',
          '/r/badfaketexts',
          '/r/boneappletea',
          '/r/atetheonion',
          '/r/iamatotalpieceofshit',
          '/r/suicidebywords',
          '/r/kamikazebywords',
          '/r/wowthanksimcured',
          '/r/topmindsofreddit',
          '/r/lostredditors',
          '/r/dontyouknowwhoiam',
          '/r/NobodyAsked',
          '/r/dontfundme',
          '/r/nothingeverhappens',
          '/r/vaxxhappened',
          '/r/goodfaketexts',
          '/r/delusionalcraigslist',
          '/r/suspiciousquotes',
          '/r/facingtheirparenting',
          '/r/ihadastroke',
          '/r/untrustworthypoptarts',
          '/r/phonesarebad',
          '/r/rareinsults',
          '/r/clevercomebacks',
          '/r/fuckyoukaren',
          '/r/uselessredcircle',
          '/r/leopardsatemyface',
          '/r/confidentlyincorrect',
        ],
      },
      {
        category: 'Neckbeards',
        items: [
          '/r/niceguys',
          '/r/mallninjashit',
          '/r/ChoosingBeggars',
          '/r/gatekeeping',
          '/r/creepyasterisks',
          '/r/inceltears',
          '/r/humblebrag',
          '/r/nothowdrugswork',
          '/r/whiteknighting',
          '/r/neckbeardrpg',
          '/r/virginsvschad',
        ],
      },
      {
        category: 'Girls',
        items: [
          '/r/nicegirls',
          '/r/notliketheothergirls',
          '/r/notlikeothergirls',
          '/r/entitledbitch',
        ],
      },
      {
        category: 'I am very',
        items: ['/r/iamverysmart', '/r/iamverybadass', '/r/iamveryrandom', '/r/imveryedgy'],
      },
      {
        category: 'Parents',
        items: ['/r/entitledparents', '/r/insaneparents', '/r/shitmomgroupssay'],
      },
    ],
  },
  {
    category: 'Cute',
    items: [
      '/r/aww',
      '/r/cats',
      '/r/animalsbeingjerks',
      '/r/animalsbeingbros',
      '/r/Awwducational',
      '/r/dogs',
      '/r/corgi',
      '/r/thisismylifenow',
      '/r/blep',
      '/r/eyebeach',
      '/r/tippytaps',
      '/r/awww',
      '/r/babycorgis',
    ],
  },
  {
    category: 'WTF',
    items: [
      {
        category: 'General',
        items: [
          '/r/WTF',
          '/r/DeepIntoYouTube',
          '/r/fifthworldproblems',
          '/r/awwwtf',
          '/r/wellthatsucks',
          '/r/streetfights',
          '/r/yesyesyesyesno',
          '/r/wtfstockphotos',
          '/r/yesyesyesno',
          '/r/maybemaybemaybe',
          '/r/oddlyterrifying',
          '/r/thatlookedexpensive',
          '/r/wtfgaragesale',
          '/r/Whatthefuckgetitoffme',
          '/r/imsorryjon',
        ],
      },
      {
        category: 'Angry',
        items: [
          '/r/mildlyinfuriating',
          '/r/crappydesign',
          '/r/rage',
          '/r/Bad_Cop_No_Donut',
          '/r/gifsthatendtoosoon',
          '/r/peoplebeingjerks',
          '/r/casualchildabuse',
          '/r/fuckthesepeople',
          '/r/makemesuffer',
        ],
      },
      {
        category: 'Cursed',
        items: [
          '/r/cursedimages',
          '/r/cursedcomments',
          '/r/tihi',
          '/r/blursedimages',
          '/r/cursed_images',
        ],
      },
      {
        category: 'Edgy',
        items: ['/r/imgoingtohellforthis', '/r/toosoon'],
      },
      {
        category: 'Judgy',
        items: [
          '/r/trashy',
          '/r/awfuleyebrows',
          '/r/awfuleverything',
          '/r/13or30',
          '/r/ghettoglamourshots',
          '/r/peopleofwalmart',
          '/r/hittablefaces',
          '/r/punchablefaces',
          '/r/botchedsurgeries',
          '/r/subwaycreatures',
        ],
      },
      {
        category: 'Scary',
        items: [
          '/r/nosleep',
          '/r/morbidreality',
          '/r/whatcouldgowrong',
          '/r/Glitch_in_the_Matrix',
          '/r/Paranormal',
          '/r/nononono',
          '/r/horror',
          '/r/shortscarystories',
          '/r/lastimages',
          '/r/peoplefuckingdying',
          '/r/serialkillers',
          '/r/WhyWereTheyFilming',
          '/r/WinStupidPrizes',
          '/r/scarysigns',
          '/r/ghosts',
          '/r/crimescene',
        ],
      },
      {
        category: 'Creepy',
        items: [
          '/r/creepy',
          '/r/creepypasta',
          '/r/creepysigns',
          '/r/megalophobia',
          '/r/creepyencounters',
        ],
      },
      {
        category: 'Water',
        items: ['/r/thalassophobia', '/r/TheDepthsBelow', '/r/submechanophobia'],
      },
    ],
  },
  {
    category: 'Nature',
    items: [
      '/r/earthporn',
      '/r/hardcoreaww',
      '/r/hitmanimals',
      '/r/natureisfuckinglit',
      '/r/heavyseas',
      '/r/marijuanaenthusiasts',
      '/r/succulents',
      '/r/mycology',
      '/r/bonsai',
      '/r/TreesSuckingOnThings',
      '/r/houseplants',
      '/r/natureismetal',
      '/r/Natureisbrutal',
      '/r/naturewasmetal',
      '/r/weathergifs',
      '/r/tropicalweather',
    ],
  },
  {
    category: 'Nostalgia',
    items: [
      '/r/OldSchoolCool',
      '/r/TheWayWeWere',
      '/r/nostalgia',
      '/r/vinyl',
      '/r/forwardsfromgrandma',
      '/r/oldphotosinreallife',
    ],
  },
  {
    category: 'Parodies',
    items: [
      '/r/firstworldanarchists',
      '/r/wheredidthesodago',
      '/r/unexpectedthuglife',
      '/r/youdontsurf',
      '/r/montageparodies',
      '/r/outside',
      '/r/OSHA',
      '/r/hailcorporate',
      '/r/im14andthisisdeep',
      '/r/bollywoodrealism',
      '/r/AccidentalRenaissance',
      '/r/maliciouscompliance',
      '/r/fakehistoryporn',
      '/r/coaxedintoasnafu',
      '/r/irleastereggs',
    ],
  },
];

export default function ListPage() {
  return <Subreddits list={list} />;
}
