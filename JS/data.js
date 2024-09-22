//all type of smartphone in the store
const smartphones_arr = [
  {
    image: "Smartphone/s_a35.jpg",
    logo: "logo/logo_Samsung.jpg",
    name: "Galaxy",
    type: "A35",
    company: "Samsung",
    color: "Black",
    details:
      "Samsung Galaxy A35 5G 8GB+256GB - Awesome Iceblue - 2 Year Warranty",
    price: "₪3,645",
  },
  {
    image: "Smartphone/a_15.jpg",
    logo: "logo/logo_apple.jpg",
    name: "iPhone",
    type: "15",
    company: "Apple",
    color: "White",
    details:
      "Apple iPhone 15 256GB - Black - 1 Year Warranty by the Official Distributor - Without Charger and Without Headphones",
    price: "₪4,949",
  },
  {
    image: "Smartphone/x_a3.jpg",
    logo: "logo/logo_Xiaomi.jpg",
    name: "Redmi",
    type: "A3",
    company: "Xiaomi",
    color: "Green",
    details:
      "Xiaomi Redmi A3 4GB+128GB Forest Green - 2 Years Warranty by Hemilton",
    price: "₪389",
  },
  {
    image: "Smartphone/s_s21_fe.jpg",
    logo: "logo/logo_Samsung.jpg",
    name: "Galaxy",
    type: "S21 FE",
    company: "Samsung",
    color: "Silver",
    details:
      "Samsung Galaxy S21 FE 5G 8GB+256GB Graphite SM-G990B2/DS - 2 Year Warranty",
    price: "₪1,490",
  },
  {
    image: "Smartphone/a_15_pro _max.jpg",
    logo: "logo/logo_apple.jpg",
    name: "iPhone",
    type: "15 Pro Max",
    company: "Apple",
    color: "Silver",
    details:
      "Apple iPhone 15 Pro Max 256GB - Black Titanium - 1 Year Warranty by the Official Distributor - Without Charger and Without Headphones",
    price: "₪5,429",
  },
  {
    image: "Smartphone/s_s24_ultra.jpg",
    logo: "logo/logo_Samsung.jpg",
    name: "Galaxy",
    type: "S24 Ultra",
    company: "Samsung",
    color: "White",
    details:
      "Samsung Galaxy S24 Ultra 12GB+256GB Titanium Gray (SM-S928B/DS) - 1 Year Official",
    price: "₪4,649",
  },
  {
    image: "Smartphone/x_13_pro+.jpg",
    logo: "logo/logo_Xiaomi.jpg",
    name: "Redmi",
    type: "Note 13 pro+",
    company: "Xiaomi",
    color: "Black",
    details:
      "Xiaomi Redmi Note 13 Pro+ 5G 12GB+512GB Aurora Purple - 2 Years Warranty by Hemilton",
    price: "₪1,720",
  },
  {
    image: "Smartphone/a_14_plus.jpg",
    logo: "logo/logo_apple.jpg",
    name: "iPhone",
    type: "14 Plus",
    company: "Apple",
    color: "Red",
    details:
      "Apple iPhone 14 Plus 128GB - Blue - 1 Year Warranty by the Official Distributor - Without Charger and Without Headphones",
    price: "₪2,899",
  },
  {
    image: "Smartphone/a_13.jpg",
    logo: "logo/logo_apple.jpg",
    name: "iPhone",
    type: "13",
    company: "Apple",
    color: "Black",
    details:
      "Apple iPhone 13 128GB Starlight - 1 Year Warranty by The Official Distributor - Without Charger And Without Headphones",
    price: "₪2,499",
  },
  {
    image: "Smartphone/s_note_20.jpg",
    name: "Galaxy",
    logo: "logo/logo_Samsung.jpg",
    type: "Note 20 Ultra",
    company: "Samsung",
    color: "Black",
    details: "Samsung -  Galaxy Note20 Ultra 5G 128GB  - Mystic Black",
    price: "₪4,649",
  },
  {
    image: "Smartphone/x_12.jpg",
    logo: "logo/logo_Xiaomi.jpg",
    name: "Redmi",
    type: "12",
    company: "Xiaomi",
    color: "Black",
    details: "Xiaomi Redmi 12 4GB+128GB - Midnight Black",
    price: "₪559",
  },
  {
    image: "Smartphone/x_paco_m6.jpg",
    logo: "logo/logo_Xiaomi.jpg",
    name: "Poco",
    type: "M6",
    company: "Xiaomi",
    color: "White",
    details: "Xiaomi Poco M6 6GB+128GB Purple - 2 Years Warranty by Hemilton",
    price: "₪699",
  },
];

const props_arr = [
  {
    image: "props/AirPodsMax.jpg",
    logo: "logo/logo_apple.jpg",
    name: "AirPods ",
    type: "AirPods Max",
    company: "Apple",
    color: "Pink",
    details: "Apple - AirPods Max - Pink",
    price: "₪2,500",
  },
  {
    image: "props/sony2.jpg",
    logo: "logo/bose.jpg",
    name: "QuietComfort",
    type: "QuietComfort",
    company: "Bose",
    color: "Black",
    details:
      "Bose - QuietComfort Wireless Noise Cancelling Over-the-Ear Headphones - Black",
    price: "₪899",
  },
  {
    image: "props/sony1.jpg",
    logo: "logo/sony.jpg",
    name: "",
    type: "WH1000XM4",
    company: "Sony",
    color: "Black",
    details:
      "Sony - WH1000XM4 Wireless Noise-Cancelling Over-the-Ear Headphones - Black",
    price: "₪1199",
  },
  {
    image: "props/AirPodsPro2.jpg",
    logo: "logo/logo_apple.jpg",
    name: "",
    type: "",
    company: "Apple",
    color: "White",
    details: "Apple - AirPods Pro 2 - White",
    price: "₪1100",
  },
  {
    image: "props/mouse1.jpg",
    logo: "logo/logo_logitech.jpg",
    name: "",
    type: "MX Master 3S",
    company: "Logitech",
    color: "Black",
    details:
      "Logitech - MX Master 3S Wireless Laser Mouse with Ultrafast Scrolling - Black",
    price: "₪169",
  },
  {
    image: "props/mouse2.jpg",
    logo: "logo/logo_apple.jpg",
    name: "",
    type: "",
    company: "Apple",
    color: "White",
    details: "Apple - Magic Mouse - White",
    price: "₪299",
  },
  {
    image: "props/mouse3.jpg",
    logo: "logo/",
    name: "",
    type: "",
    company: "Razer",
    color: "Black",
    details:
      "Razer Basilisk V3 X HyperSpeed Customizable Wireless Gaming Mouse - Black",
    price: "₪120",
  },
  {
    image: "props/keyboard3.jpg",
    logo: "logo/logo_logitech.jpg",
    name: "",
    type: " MX Keys S",
    company: "Logitech",
    color: "Black",
    details:
      "Logitech - MX Keys S Advanced Full-size Wireless Scissor Keyboard for PC and Mac with Backlit keys - Black",
    price: "₪199",
  },
  {
    image: "props/Keyboard2.jpg",
    logo: "logo/logo_logitech.jpg",
    name: "",
    type: "MX Mechanical",
    company: "Logitech",
    color: "Graphite",
    details:
      "Logitech - MX Mechanical Full size Wireless Mechanical Tactile Switch Keyboard for Windows/macOS with Backlit Keys - Graphite",
    price: "₪239",
  },
  {
    image: "props/Keyboard1.jpg",
    logo: "logo/logo_apple.jpg",
    name: "",
    type: "Magic Keyboard",
    company: "Apple",
    color: "Silver",
    details:
      "Apple - Magic Keyboard full size with Numeric Keypad - Silver/White",
    price: "₪369",
  },
  {
    image: "props/WirelessChargingPad.jpg",
    logo: "logo/",
    name: "",
    type: "Wireless Charging Pad",
    company: "Belkin",
    color: "Black",
    details:
      "Belkin - MagSafe 3-in-1 Wireless Charging Pad - Fast Wireless Charging for Apple Watch, iPhone 15, 14, 13 & 12 series, & AirPods - Black",
    price: "₪350",
  },
  {
    image: "props/Apple_Power_Adapter.jpg",
    logo: "logo/logo_apple.jpg",
    name: "",
    type: "12W USB ",
    company: "Apple",
    color: "White",
    details: "Apple - 12W USB Power Adapter - White",
    price: "₪94",
  },
  {
    image: "props/Anker735.jpg",
    logo: "logo/",
    name: "",
    type: "735 65W ",
    company: "Anker",
    color: "Black",
    details:
      "Anker - 735 65W 3 Port USB Foldable Fast Wall Charger with GaN for iPhone/Samsung/Tablets/Laptops - Black",
    price: "₪125",
  },
  {
    image: "props/Cable.jpg",
    logo: "logo/logo_apple.jpg",
    name: "",
    type: "-Lightning Charging Cable ",
    company: "Apple",
    color: "White",
    details: "Apple - 6.6' (2M) USB Type C-to-Lightning Charging Cable - White",
    price: "₪69",
  },
];

const tablets_arr = [
  {
    id: "20013",
    image: "Tablets/a_pro_m4.jpg",
    logo: "logo/logo_apple.jpg",
    name: "iPad",
    type: "13-inch iPad Pro M4",
    company: "Apple",
    color: "Space Black",
    details:
      "Apple - 13-inch iPad Pro M4 chip Built for Apple Intelligence Wi-Fi 512GB with OLED - Space Black",
    price: "₪5,429",
  },
  {
    id: "20014",
    image: "Tablets/a_11_air.jpg",
    logo: "logo/logo_apple.jpg",
    name: "iPad ",
    type: "11-inch iPad Air M2",
    company: "Apple",
    color: "Starlight",
    details:
      "Apple - 11-inch iPad Air M2 chip Built for Apple Intelligence Wi-Fi 128GB - Starlight",
    price: "₪3,100",
  },
  {
    id: "20015",
    image: "Tablets/a_13__air.jpg",
    logo: "logo/logo_apple.jpg",
    name: "iPad",
    type: "13-inch iPad Air M2",
    company: "Apple",
    color: "Blue",
    details:
      "Apple - 13-inch iPad Air M2 chip Built for Apple Intelligence Wi-Fi 128GB - Blue",
    price: "₪2,899",
  },
  {
    id: "20016",
    image: "Tablets/a_10.9.jpg",
    logo: "logo/logo_apple.jpg",
    name: "iPad",
    type: "10.9-Inch iPad",
    company: "Apple",
    color: "Silver",
    details:
      "Apple - 10.9-Inch iPad - Latest Model - (10th Generation) with Wi-Fi - 64GB - Silver",
    price: "₪2,699",
  },
  {
    id: "20017",
    image: "Tablets/GalaxyTabS9.jpg",
    logo: "logo/logo_Samsung.jpg",
    name: "",
    type: "Galaxy Tab S9",
    company: "Samsung",
    color: "Black",
    details:
      "Samsung Galaxy Tab S9 Octa Core 3.2GHz 8GB+128GB 11'' Wi-Fi- Graphite (SM-X710) - 1 Year Warranty by the Official Distributor",
    price: "₪3,089",
  },
  {
    id: "20018",
    image: "Tablets/GalaxyTabS9Ultra.jpg",
    logo: "logo/logo_Samsung.jpg",
    name: "",
    type: "Galaxy Tab S9 Ultra",
    company: "Samsung",
    color: "Black",
    details:
      "Samsung Galaxy Tab S9 Ultra Octa Core 3.2GHz 12GB+256GB 14.6'' 5G - Beige (SM-X916) - 1 Year Warranty by the Official ",
    price: "₪4,429",
  },
  {
    id: "20019",
    image: "Tablets/GalaxyTabS6Lite.jpg",
    logo: "logo/logo_Samsung.jpg",
    name: "",
    type: " Galaxy Tab S6 Lite",
    company: "Apple",
    color: "Gray",
    details:
      "Samsung Galaxy Tab S6 Lite 128GB SM-P620 - WiFi - Gray - 1 Year Warranty",
    price: "₪1,599",
  },
  {
    id: "20020",
    image: "Tablets/GalaxyTabA9+.jpg",
    logo: "logo/logo_Samsung.jpg",
    name: "",
    type: "Galaxy Tab A9+",
    company: "Apple",
    color: "Gray",
    details:
      "Samsung Galaxy Tab A9+ Octa Core 2.2GHz 8GB+128GB 11'' 5G Gray (SM-X216) 1 Year Official",
    price: "₪1,999",
  },
  {
    id: "20021",
    image: "Tablets/LenovoP12.jpg",
    logo: "logo/logo_lenovo.jpg",
    name: "",
    type: "Lenovo TAB P12 ",
    company: "Lenovo",
    color: "Silver",
    details:
      "Lenovo TAB P12 TB370FU MediaTek Dimensity 256GB ZACH0198IL -Silver",
    price: "₪1,899",
  },
  {
    id: "20022",
    image: "Tablets/LenovoTabP11.jpg",
    logo: "logo/logo_lenovo.jpg",
    name: "",
    type: "Lenovo Tab P11 2nd Gen ",
    company: "Lenovo",
    color: "Silver",
    details: "Lenovo Tab P11 2nd Gen TB350XU 128GB 4G ZABG0039IL -Silver",
    price: "₪2,100",
  },
  {
    id: "20023",
    image: "Tablets/LenovoYogaTAB11.jpg",
    logo: "logo/logo_lenovo.jpg",
    name: "",
    type: "Lenovo Yoga TAB 11",
    company: "Lenovo",
    color: "Silver",
    details: "Lenovo Yoga TAB 11 YT-J706F 256GB ZA8W0058IL Silver - WiFi",
    price: "₪1,799",
  },
  {
    id: "20024",
    image: "Tablets/LenovoTABPlus.jpg",
    logo: "logo/logo_lenovo.jpg",
    name: "",
    type: "Lenovo TAB Plus",
    company: "Lenovo",
    color: "Silver",
    details: "Lenovo TAB Plus TB351FU 256GB WiFi ZADX0104IL - Silver",
    price: "₪1,799",
  },
];

const computers_arr = [
  {
    image: "Computers/a_air_13.jpg",
    logo: "logo/logo_apple.jpg",
    name: "MacBook",
    type: "air 13 M2",
    company: "Apple",
    color: "Midnight",
    details:
      "Apple - MacBook Air 13.6 Laptop - M2 chip Built for Apple Intelligence - 8GB Memory - 256GB SSD - Midnight",
    price: "₪429",
  },

  {
    image: "Computers/a_pro_14.jpg ",
    logo: "logo/logo_apple.jpg",
    name: "MacBook",
    type: "pro 14 M3",
    company: "Apple",
    color: "space gray",
    details:
      "Apple - MacBook Pro 14 Laptop - M3 chip Built for Apple Intelligence - 8GB Memory - 10-core GPU - 1TB SSD - Space Gray",
    price: "₪429",
  },

  {
    image: "Computers/a_pro_16.jpg ",
    logo: "logo/logo_apple.jpg",
    name: "MacBook",
    type: "pro 16 M3",
    company: "Apple",
    color: "Space Black",
    details:
      "Apple - MacBook Pro 16 Laptop - M3 Max chip Built for Apple Intelligence - 48GB Memory - 40-core GPU - 1TB SSD - Space Black",
    price: "₪429",
  },

  {
    image: "Computers/a_air_15.jpg",
    logo: "logo/logo_apple.jpg",
    name: "MacBook",
    type: "air 15 M2",
    company: "Apple",
    color: "Starlight",
    details:
      " Apple - MacBook Air 15 Laptop - M2 chip Built for Apple Intelligence - 8GB Memory - 256GB SSD - Starlight",
    price: "₪5,429",
  },

  {
    image: "Computers/l_yoga_slim_x7.jpg",
    logo: "logo/logo_lenovo.jpg",
    name: "Yoga",
    type: "Slim 7x",
    company: "Lenovo",
    color: "Cosmic Blue",
    details:
      "Lenovo - Yoga Slim 7x - Copilot+ PC - 14.5 3K OLED Touch-Screen Laptop - Snapdragon X Elite - 16GB Memory - 512GB SSD - Cosmic Blue",
    price: "₪5,429",
  },
  {
    image: "Computers/l_ideapad_1.jpg",
    logo: "logo/logo_lenovo.jpg",
    name: "Ideapad",
    type: "Ideapad 1 ",
    company: "Lenovo",
    color: "Cloud Gray",
    details:
      "Lenovo - Ideapad 1 15.6 Full HD Touchscreen Laptop - Ryzen 7 5700U with 16GB Memory - AMD Radeon Graphics - 512GB SSD - Cloud Gray",
    price: "₪5,429",
  },
  {
    image: "Computers/l_Legion_Pro.jpg",
    logo: "logo/logo_lenovo.jpg",
    name: "Legion ",
    type: "Pro 5i",
    company: "Lenovo",
    color: "Onyx Grey",
    details:
      "Lenovo - Legion Pro 5i 16 Gaming Laptop WQXGA - Intel 14th Gen Core i9 with 32GB Memory - NVIDIA GeForce RTX 4070 8GB - 2TB SSD - Onyx Grey",
    price: "₪5,429",
  },
  {
    image: "Computers/l_LOQ.jpg",
    logo: "logo/logo_lenovo.jpg",
    name: " LOQ ",
    type: "LOQ 15.6 Gaming",
    company: "Lenovo",
    color: "Luna Grey",
    details:
      "Lenovo - LOQ 15.6 Gaming Laptop FHD - AMD Ryzen 7 7435HS with 16GB Memory - NVIDIA GeForce RTX 4060 8GB - 512GB SSD - Luna Grey",
    price: "₪5,429",
  },

  {
    image: "Computers/d_xps_13.jpg",
    logo: "logo/logo_dell.jpg",
    name: "XPS 13 ",
    type: "13",
    company: "Dell",
    color: " Graphite",
    details:
      "Dell - XPS 13 - Copilot+ PC - 13.4 OLED Touch-Screen Laptop - Snapdragon X Elite w/ Dual Core Boost - 16GB Memory - 512GB SSD - Graphite",
    price: "₪5,429",
  },
  {
    image: "Computers/d_Inspiron.jpg",
    logo: "logo/logo_dell.jpg",
    name: "Inspiron ",
    type: "Inspiron 16 2-in-1",
    company: "Dell",
    color: "Midnight Blue",
    details:
      "Dell - Inspiron 16 2-in-1 Mini-LED Touch Laptop Intel Core Ultra 7 Processor - 32GB Memory – 1TB SDD - Intel Arc Graphics - Midnight Blue",
    price: "₪5,429",
  },

  {
    image: "Computers/h_OmniBook.jpg",
    logo: "logo/logo_hp.jpg",
    name: "OmniBook ",
    type: "OmniBook X",
    company: "HP",
    color: " Meteor Silver",
    details:
      "HP - OmniBook X - Copilot+ PC - 14 2.2K Touch-Screen Laptop - Snapdragon X Elite - 16GB Memory - 1TB SDD - Meteor Silver",
    price: "₪5,429",
  },
  {
    image: "Computers/h_Spectre.jpg",
    logo: "logo/logo_hp.jpg",
    name: " Spectre ",
    type: "Spectre 2-in-1",
    company: "HP",
    color: "Nightfall Black",
    details:
      "HP - Spectre 2-in-1 14 2.8K OLED Touch-Screen Laptop - Intel Core Ultra 7 - Intel Evo Edition - 16GB Memory - 1TB SSD - Nightfall Black",
    price: "₪5,429",
  },
];

const allProducts = {
  smartphones_arr,
  props_arr,
  tablets_arr,
  computers_arr,
};
