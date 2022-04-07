export interface products {
  rating: number,
  rating1: number,
  rating2: number,
  rating3: number,
  rating4: number,
  rating5: number,

}

export const products = [
  {
    id: 10101,
    name: 'Apple AirPods Pro',
    price: 249,
    description:
        '\nActive Noise Cancellation blocks outside noise, so you can immerse yourself in music.\n' +
        'Transparency mode for hearing and interacting with the world around you.\n'+
        'Spatial audio with dynamic head tracking places sound all around you.\n'+
        'Adaptive EQ automatically tunes music to your ears.\n'+
        'Sweat and water resistant.',
    rating: 5,
    image: 'https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-MLWK3AM-A-AirPods-Pro/dp/B09JQMJHXY/ref=sr_1_3?crid=3PV5KI4KEJ4IQ&keywords=apple&qid=1647107331&sprefix=app%2Caps%2C779&sr=8-3',  
    prodcategory: 1,
    shows: true,
    likes: 0,
    rating1: 0,
    rating2: 0,
    rating3: 0,
    rating4: 0,
    rating5: 0,

  },
  {
    id: 10112,
    name: 'Apple AirPods (2nd Generation)',
    price: 109,
    description:
        '\nQuick access to Siri by saying “ Hey Siri ”.\n'+
        'More than 24 hours total listening time with the Charging Case.\n'+
        'Effortless setup, in-ear detection, and automatic switching for a magical experience.\n'+
        'Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV.',
    rating: 0,
    image: 'https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/dp/B07PXGQC1Q/ref=fs_a_mdt2_us3',
    prodcategory: 1,
    shows: true,
    likes:0
  },
  {
    id: 10154,
    name: 'Apple AirPods (3rd Generation)',
    price: 179,
    description: 
        '\nSpatial audio with dynamic head tracking places sound all around you.\n' +
        'Adaptive EQ automatically tunes music to your ears.\n' +
        'All-new contoured design.\n' +
        'Force sensor lets you easily control your entertainment, answer or end calls, and more.\n' +
        'Sweat and water resistant',
    rating: 0,
    image: 'https://m.media-amazon.com/images/I/61ZRU9gnbxL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/dp/B09JQL3NWT/ref=fs_a_mdt2_us2',
    prodcategory: 1,
    shows: true,
    likes: 0
  },
  {
    id: 10111,
    name: 'Apple AirPods Max - Green',
    price: 389.12,
    description:
        '\nApple-designed dynamic driver provides high-fidelity audio.\n'+
        'Active Noise Cancellation blocks outside noise, so you can immerse yourself in music.\n'+
        'Transparency mode for hearing and interacting with the world around you.\n'+
        'Spatial audio with dynamic head tracking provides theater-like sound that surrounds you.',
    rating: '4.6 / 5', 
    image: 'https://m.media-amazon.com/images/I/81FnSOE94NL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/dp/B08PZDSP2Z/ref=fs_a_mdt2_us0?th=1',
    prodcategory: 1,
    shows: true,
    likes:0
  },
  {
    id: 10151,
    name: 'Apple AirPods Max - Pink',
    price: 355.91,
    description:
        '\nApple-designed dynamic driver provides high-fidelity audio.\n'+
        'Active Noise Cancellation blocks outside noise, so you can immerse yourself in music.\n'+
        'Transparency mode for hearing and interacting with the world around you.\n'+
        'Spatial audio with dynamic head tracking provides theater-like sound that surrounds you.',
    rating: '4.6 / 5',
    image: 'https://m.media-amazon.com/images/I/81jw08zdEgL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/dp/B08PZJ8FZ8/ref=fs_a_mdt2_us0?th=1',
    prodcategory: 1,
    shows: true,
    likes:0
  },
  
  {
    id: 101181,
    name: 'Apple iPhone 11 Pro, 256GB, Midnight Green - Fully Unlocked (Renewed Premium)',
    price: 454,
    description: 
        '\nModel Name:	IPhone 11 Pro\n' +
        'Wireless Carrier:	Unlocked for All Carriers\n' +
        'Brand: Apple\n' +
        'Form Factor: Smart Phone\n' +
        'Memory Storage Capacity:	256 GB',
    rating: '4.4 / 5',
    image: 'https://m.media-amazon.com/images/I/81AaNJqE+wS._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-iPhone-256GB-Midnight-Green/dp/B08BHXC5ZS/ref=sr_1_1?crid=3VTFHGOP0WO9J&keywords=iphone&qid=1647167492&sprefix=iphon%2Caps%2C240&sr=8-1&th=1',
    prodcategory: 2,
    shows: true,
    likes:0
  },
  {
    id: 101180,
    name: 'Apple iPhone 12 Pro, 128GB, Pacific Blue - Unlocked (Renewed Premium)',
    price: 969,
    description: 
    '\nModel Name:	IPhone 12 Pro\n' +
    'Wireless Carrier: Unlocked\n' +
    'Brand:	Apple\n' +
    'Form Factor:	Smartphone\n' +
    'Memory Storage Capacity: 128GB',
    rating: '3.2 / 5',
    image: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFNMBWL/ref=sr_1_2?crid=3VTFHGOP0WO9J&keywords=iphone&qid=1647167752&sprefix=iphon%2Caps%2C240&sr=8-2',
    prodcategory: 2,
    shows: true,
    likes:0
  },
  {
    id: 101183,
    name: 'Apple iPhone 11 [128GB, Purple] + Carrier Subscription [Cricket Wireless]',
    price: 850,
    description: 
        '\nModel name: IPhone 11\n' +
        'Wireless Carrier: Unlocked for All Carriers\n' +
        'Brand: Apple\n' +
        'Form factor: Smartphone\n' +
        'Memory Storage Capacity: 128GB',
    rating: '4.4 / 5',
    image: 'https://m.media-amazon.com/images/I/71xn9bCRfhL.jpg',
    link: 'https://www.amazon.com/Apple-Carrier-Subscription-Cricket-Wireless/dp/B084GSMNRN/ref=sr_1_9?keywords=iphone&qid=1647168232&sr=8-9',
    prodcategory: 2,
    shows: true,
    likes:0
  },
  {
    id: 101186,
    name: 'Apple iPhone 11 [128GB, Green] + Carrier Subscription [Cricket Wireless]',
    price: 850,
    description: 
        '\nModel name: IPhone 11\n' +
        'Wireless Carrier: Unlocked for All Carriers\n' +
        'Brand: Apple\n' +
        'Form factor: Smartphone\n' +
        'Memory Storage Capacity: 128GB',
    rating: '4.4 / 5',
    image: 'https://m.media-amazon.com/images/I/71Dh+NR7ivL.jpg',
    link: 'https://www.amazon.com/Apple-Carrier-Subscription-Cricket-Wireless/dp/B084GSVZ96/ref=sr_1_9?keywords=iphone&qid=1647168232&sr=8-9#',
    prodcategory: 2,
    shows: true,
    likes:0
  },
  {
    id: 101188,
    name: 'Apple iPhone 11 [128GB, (Product) RED] + Carrier Subscription [Cricket Wireless]',
    price: 850,
    description: 
        '\nModel name: IPhone 11\n' +
        'Wireless Carrier: Unlocked for All Carriers\n' +
        'Brand: Apple\n' +
        'Form factor: Smartphone\n' +
        'Memory Storage Capacity: 128GB',
    rating: '4.4 / 5',
    image: 'https://m.media-amazon.com/images/I/715HCLsOHbL.jpg',
    link: 'https://www.amazon.com/Apple-Carrier-Subscription-Cricket-Wireless/dp/B084GSQJKB/ref=sr_1_9?keywords=iphone&qid=1647168232&sr=8-9#',
    prodcategory: 2,
    shows: true,
    likes:0
  },
  {
    id: 101171,
    name: '2022 Flagship HP 15.6 FHD IPS Micro-Edge Laptop, AMD 6-Core Ryzen 5 5500U (Upto 4.0GHz, Beat i7-10710U), 8GB RAM, 256GB PCIe SSD,Radeon Graphics,Wi-Fi, Webcam, Fast Charge, Windows 11+HubxcelCables',
    price: 509,
    description: 
        '\nSeries	Flagship: HP 15.6 Laptop\n' +
        'Brand:	HP\n' +
        '\nScreen Size:	15.6 Inches\n' +
        'Operating System:	Windows 11\n' +
        'Human Interface Input:	Microphone, Keyboard',
    rating: '4 / 5',
    image: 'https://m.media-amazon.com/images/I/81GzHjQ0mEL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Flagship-HP-15-6-Laptop-HubxcelCables/dp/B09S5MR596/ref=sr_1_1_sspa?crid=22NTR2IQEWBTD&keywords=laptop&qid=1647169466&sprefix=laptop%2Caps%2C350&sr=8-1-spons&psc=1&smid=A39LX1CZ9BSTRA&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQjhWR0VFVEdESkRPJmVuY3J5cHRlZElkPUExMDQ2MjM2MzRIUFFXWEhKSlhYNyZlbmNyeXB0ZWRBZElkPUEwNjI3MTI5NElNTFhWVVRUMEwzJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    prodcategory: 3,
    shows: true,
    likes:0
  },
  {
    id: 101172,
    name: 'Acer Aspire 5 A515-46-R3UB | 15.6" Full HD IPS Display | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Backlit KB | FPR | Amazon Alexa | Windows 11 Home in S mode',
    price: 399.99,
    description: 
        '\nSeries:	A515-46-R3UB\n' +
        'Brand:	Acer\n' +
        'Specific Uses For Product:	Multimedia, Personal, Student\n' +
        'Screen Size:	15.6 Inches\n' +
        'Operating System:	Windows',
    rating: '4.6 / 5',
    image: 'https://m.media-amazon.com/images/I/7189iXimfWL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Acer-A515-46-R3UB-Display-Quad-Core-Processor/dp/B09HVC79PC/ref=sr_1_3?crid=22NTR2IQEWBTD&keywords=laptop&qid=1647169466&sprefix=laptop%2Caps%2C350&sr=8-3&th=1',
    prodcategory: 3,
    shows: true,
    likes:0
  },
  {
      id: 10118,
      name: 'Apple MacBook Pro 13.3" with Retina Display, M1 Chip with 8-Core CPU and 8-Core GPU, 16GB Memory, 512GB SSD, Silver, Late 2020',
      price: 1639.99,
      description:
        '\nModel Name:	MacBook Pro\n'+
        'brand: Apple\n'+
        'Screen Size:	13 Inches'+
        'Graphics Card Description:	Integrated',
      rating: '4.1 / 5',
      image: 'https://m.media-amazon.com/images/I/51pWDiO9CrL._AC_SL1200_.jpg',
      link: 'https://www.amazon.com/Apple-MacBook-Pro-8-core-Silver/dp/B091V55WNY/ref=sr_1_97?crid=B1RWYKCWZZ3Q&keywords=apple&qid=1647118935&sprefix=apple%2Caps%2C339&sr=8-97',
    prodcategory: 3,
    shows: true,
    likes:0
  },
  {
    id: 101127,
    name: 'Razer Book 13 Laptop: Intel Core i7-1165G7 4 Core, Intel Iris Xe, 13.4" UHD+ Touch (3840 x 2100), 16GB RAM, 512GB PCIe M.2, CNC Aluminum, Chroma RGB, Thunderbolt 4, Intel Evo Certified, Mercury White',
    price: 1269.72,
    description: 
        '\nSeries:	Razer Book 13\n' +
        'Brand:	Razer\n' +
        'Specific Uses For Product:	Multimedia, Personal, Gaming\n' +
        'Screen Size:	13.4 Inches\n' +
        'Operating System:	Windows 10',
    rating: '3.9 / 5',
    image: 'https://m.media-amazon.com/images/I/71ALO-WzlEL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Razer-Book-Laptop-i7-1165G7-Thunderbolt/dp/B08LP734G3/ref=sr_1_5?crid=22NTR2IQEWBTD&keywords=laptop&qid=1647169466&sprefix=laptop%2Caps%2C350&sr=8-5',
    prodcategory: 3,
    shows: true,
    likes:0
  },
  {
    id: 101129,
    name: '2022 Lenovo IdeaPad 3 15.6" FHD IPS Touchscreen Laptop Intel 4-Core i5-1135G7 Iris Xe Graphics 12GB RAM DDR4 256GB NVMe SSD Fingerprint Backlit Keyboard WiFi AX HDMI USB-C Windows 10 Pro w/ 32GB USB',
    price: 769,
    description: 
        '\nSeries:	82H8\n' +
        'Brand:	Lenovo\n' +
        'Human Interface Input:	Touchscreen, Microphone, Keyboard\n' +
        'Screen Size:	15.6 Inches\n' +
        'Operating System:	Windows 10 Pro',
    rating: '4.6 / 5',
    image: 'https://m.media-amazon.com/images/I/61MypxZdvoL._AC_SL1200_.jpg',
    link: 'https://www.amazon.com/Lenovo-Touchscreen-i5-1135G7-Graphics-Fingerprint/dp/B09MBWBG2S/ref=sr_1_10?crid=22NTR2IQEWBTD&keywords=laptop&qid=1647169466&sprefix=laptop%2Caps%2C350&sr=8-10&th=1',
    prodcategory: 3,
    shows: true,
    likes:0
  },
  
  {
    id: 101123,
    name: 'COA Korea Lane Smart Watch, Fitness Tracker for iOS, Android, IP68 Waterproof, Heart Rate Monitor, Sleep Tracking, Music Control for Men Women (Grey)',
    price: 32.99,
    description: 
        '\nBrand:	COA KOREA\n' +
        'Color:	Grey\n' +
        'Compatible Devices: Smartphone\n' +
        'Water Resistance Level:	Waterproof\n' +
        'Battery Cell Composition:	Lithium Polymer',
    rating: '3.4 / 5',
    image: 'https://m.media-amazon.com/images/I/51Mnwqnmk3L._AC_SL1001_.jpg',
    link: 'https://www.amazon.com/COA-Fitness-Tracker-Waterproof-Tracking/dp/B08GLKK97P/ref=sr_1_3_sspa?crid=2F8NQDS3GHYY&keywords=digital+watch&qid=1647168658&sprefix=digital+watch%2Caps%2C281&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVFlMS05QUlBQSDFUJmVuY3J5cHRlZElkPUEwNjAyNTk1MVo5RVcxRkE2Q1Y2TSZlbmNyeXB0ZWRBZElkPUEwMTMwNTg1QUlQQVpSTkdOVkpRJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    prodcategory: 4,
    shows: true,
    likes: 0
  },
  {
      id: 10113,
      name: 'Apple Watch Series 5 (GPS, 40MM) - Gold Aluminum Case with Pink Sand Sport Band (Renewed)',
      price: 213,
      description:
        '\nBrand: Apple\n' +
        'Size: 40 mm'+
        'Color: Gold Aluminum Case & Pink Sand Sport Band\n' +
        'Special Feature	Time Display, Sleep Monitor, Text Messaging, GPS',
      rating: '4.5 / 5',
      image: 'https://m.media-amazon.com/images/I/71luYyAPVTL._AC_SL1500_.jpg',
      link: 'https://www.amazon.com/Apple-Watch-GPS-40MM-Aluminum/dp/B083M6YZKT/ref=sr_1_8?crid=B1RWYKCWZZ3Q&keywords=apple&qid=1647117747&sprefix=apple%2Caps%2C339&sr=8-8&th=1',
    prodcategory: 4,
    shows: true,
    likes:0
  },
  {
      id: 10114,
      name: 'Apple Watch Series 6 (GPS, 44mm) - Blue Aluminum Case with Deep Navy Sport Band (Renewed)',
      price: 274,
      description:
        '\nBrand: Apple\n' +
        'Size: 44mm\n'+
        'Color	Blue Aluminum Case\n' +
        'Special Feature:	Time Display, Sleep Monitor, Text Messaging, GPS',
      rating: '4.5 / 5',
      image: 'https://m.media-amazon.com/images/I/71DDA+p+QqL._AC_SL1500_.jpg',
      link: 'https://www.amazon.com/New-Apple-Watch-GPS-44mm/dp/B08KTW1YD3/ref=sr_1_13?crid=B1RWYKCWZZ3Q&keywords=apple&qid=1647117747&sprefix=apple%2Caps%2C339&sr=8-13',
    prodcategory: 4,
    shows: true,
    likes:0
  },
  {
    id: 101126,
    name: 'Inspiratek Kids Fitness Tracker for Girls and Boys Age 5-16 (4 Color)- Waterproof Fitness Watch for Kids with Heart Rate Monitor, Sleep Monitor, Calorie Counter and More - Kids Activity Tracker',
    price: 29.95,
    description: 
        '\nBrand:	Inspiratek\n' +
        'Color: Pink\n' +
        'Sensor Type:	Wearable',
    rating: '4.2 / 5',
    image: 'https://m.media-amazon.com/images/I/71K-EsAsP9L._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Inspiratek-Fitness-Tracker-Waterproof-Monitor/dp/B08CY5MPYM/ref=sr_1_26?crid=2F8NQDS3GHYY&keywords=digital%2Bwatch&qid=1647168658&sprefix=digital%2Bwatch%2Caps%2C281&sr=8-26&th=1',
    prodcategory: 4,
    shows: true,
    likes:0
  },
  {
    id: 101128,
    name: 'CanMixs Smart Watch for Android Phones iOS Waterproof Smart Watches for Women Men Sports Digital Watch Fitness Tracker Heart Rate Blood Oxygen Sleep Monitor Touch Screen Compatible Samsung iPhone',
    price: 38.87,
    description: 
        '\nBrand:	CanMixs\n' +
        'Color:	P22gold-S\n' +
        'Compatible Devices: Smartphone',
    rating: '4 / 5',
    image: 'https://m.media-amazon.com/images/I/81nFELQa9PL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/CanMixs-Android-Waterproof-Watches-Compatible/dp/B08J41PMYF/ref=sr_1_49?crid=2F8NQDS3GHYY&keywords=digital%2Bwatch&qid=1647168658&sprefix=digital%2Bwatch%2Caps%2C281&sr=8-49&th=1',
    prodcategory: 4,
    shows: true,
    likes:0
  }
];
