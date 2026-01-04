export const contentData = {
  en: {
    nav: {
      story: "STORY",
      highlights: "HIGHLIGHTS",
      rooms: "ROOMS",
      gallery: "GALLERY",
      layout: "LAYOUT",
      location: "LOCATION",
      contact: "CONTACT",
    },

    hero: {
      book: "BOOK A STAY",
      ourstory: "OUR STORY",
      subtitle:
        "Where mountains, flowers, mist, and flowing streams come together to cast a spell, allowing your body to truly rest.",
    },

    story: {
      title: "Lan Dao Stream... a quiet reminder of what truly matters.",
      text1:
        "Within the gentle embrace of Doi Luang Chiang Dao, a majestic mountain standing as a silent guardian of time, a clear stream flows softly through wildflowers, green meadows, and drifting mist nature itself composing a quiet poem that invites the heart to pause and rest.",
      text2:
        "Lam Than Lan Dao is more than a place to stay. Here, time slows, the world grows quiet, and life’s simple beauty returns through flowing water, mountain air, and a calm that lingers long after you leave graceful, refined, and unforgettable.",
    },

    roomsTitle: "Our Room",
    roomsDesc:
      "Designed for rest. Each room is a unique vantage point to the beauty of Chiang Dao.",
    viewDetails: "View Details",
   
    calendarTitle: "Check Availability", // ชื่อปุ่มหรือข้อความบนหน้าจอง
    calendarDesc: "Select your desired dates to ensure a seamless stay.", // คำอธิบาย
    restaurant: "Grand in atmosphere, Refined and delicate in every flavor.",

    footerTitle: "Come and Rest.",
    footerDesc:
      "If your heart feels tired, this place is waiting for you,",
    footerDesc2: "and nature leads the way.",
    contactPhone: "Contact via Phone",
    contactLine: "Contact via LINE",
    rights: "© 2026 Hey Now Chiang Dao Stay. All rights reserved.",
    bookNow: "Book This Room",
    slideAction: "Scroll Down",
    rooms: [
      //id1
      {
        id: 1,
        name: "Phruay House",
        desc: "A private hideaway by the water, designed for reflection and peace.",
        mainImage: "/assets/image/Rooms/Phruay.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Phruay/image8.jpg",
            title: "Phruay House",
            subtitle: "Overview",
            desc: "Large modern A-Frame house.",
          },
          {
            image: "/assets/image/Rooms/Phruay/image3.jpg",
            title: "Private bathtub",
            subtitle: "Vibe",
            desc: "Surrounded by a beautiful flower garden.",
          },
          {
            image: "/assets/image/Rooms/Phruay/image4.jpg",
            title: "Private rooftop",
            subtitle: "Setting",
            desc: "For stargazing under a million-star sky.",
          },
          {
            image: "/assets/image/Rooms/Phruay/image4.jpg",
            title: "Bunk beds available",
            subtitle: "Setting",
            desc: "Perfect for big families.",
          },
        ],
        features: ["River Access", "Privacy", "Deck"],
      },
      //id2
      {
        id: 2,
        name: "Sirilanna House",
        desc: "The epitome of rustic luxury, featuring an open-air bathroom and exquisite details.",
        mainImage: "/assets/image/Rooms/Sirilanna.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Sirilanna/image2.jpg",
            title: "Sirilanna House",
            subtitle: "Overview",
            desc: "Large family house with 2 bedrooms.",
          },
          {
            image: "/assets/image/Rooms/Sirilanna/image5.jpg",
            title: "Magnificent Doi Luang view",
            subtitle: "Bath",
            desc: "Full panoramic view of Doi Luang Chiang Dao.",
          },
          {
            image: "/assets/image/Rooms/Sirilanna/image1.jpg",
            title: "Spectacular hanging-leg balcony",
            subtitle: "Decor",
            desc: "Relax and enjoy the stunning mountain view.",
          },
          {
            image: "/assets/image/Rooms/Sirilanna/image1.jpg",
            title: "Living room included",
            subtitle: "Decor",
            desc: "Accommodates up to 4 guests.",
          },
        ],
        features: ["Open-Air Bath", "Artisan Decor", "Luxury Linen"],
      },
      //id3
      {
        id: 3,
        name: "Daramanee House",
        desc: "Listen to the gentle flow of the stream. A cozy, intimate setting perfect for deep rest.",
        mainImage: "/assets/image/Rooms/Daramanee.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Daramanee/image7.jpg",
            title: "Daramanee House",
            subtitle: "Overview",
            desc: "Tropical-style solid wood house Warm, cozy, and simply charming.",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image2.jpg",
            title: "Classic four-poster wooden bed",
            subtitle: "Interior",
            desc: "A timeless design with a relaxing garden-home atmosphere.",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image6.jpg",
            title: "Beautiful backdrop of Henaw Stream",
            subtitle: "Atmosphere",
            desc: "A stunning stream with a magnificent natural setting.",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image10.jpg",
            title: "Private pool villa",
            subtitle: "Location",
            desc: "A small private pool surrounded by mountains.",
          },
        ],
        features: ["Near Stream", "Fireplace", "King Bed"],
      },
      //id4
      {
        id: 4,
        name: "Ban Chuen House",
        desc: "Nestled among ancient trees, this room offers a private view of the morning mist rising from the valley.",
        mainImage: "/assets/image/Rooms/Banchuen.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Banchuen/image5.jpg",
            title: "Ban Chuen House",
            subtitle: "Exterior",
            desc: "European–Asian fusion style house Located under the shade of Doi Luang Chiang Dao.",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image3.jpg",
            title: "Spacious bedroom",
            subtitle: "Design",
            desc: "Large living area for ultimate relaxation.",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image2.jpg",
            title: "Small kitchen for cooking",
            subtitle: "Comfort",
            desc: "Perfect for creating a cozy garden-home atmosphere.",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image8.jpg",
            title: "Jacuzzi bathtub with Doi Luang view",
            subtitle: "Experience",
            desc: "Soak and enjoy a full panoramic view of Doi Luang Chiang Dao.",
          },
        ],
        features: [
          "Private Terrace",
          "King Size Bed",
          "Rain Shower",
          "Tea Set",
        ],
      },
      //id5
      {
        id: 5,
        name: "Leelawadee House",
        desc: "An expansive retreat blending traditional Thai architecture with modern amenities.",
        mainImage: "/assets/image/Rooms/Leelawadee.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Leelawadee/image1.jpg",
            title: "Leelawadee House",
            subtitle: "Overview",
            desc: "Tropical-style wooden house Surrounded by flower gardens and a charming white fence.",
          },
          {
            image: "/assets/image/Rooms/Leelawadee/image8.jpg",
            title: "Three lovely beds",
            subtitle: "Space",
            desc: "Decorated with natural wood tones, brick walls, and soft natural light.",
          },
          {
            image: "/assets/image/Rooms/Leelawadee/image10.jpg",
            title: "Stylish wooden swing",
            subtitle: "Experience",
            desc: "Gently swing while enjoying views of Doi Luang and the stream.",
          },
        ],
        features: ["Family Friendly", "Large Veranda", "Living Area"],
      },
      //id6
      {
        id: 6,
        name: "Katria House",
        desc: "Nestled among ancient trees, offering panoramic views of the limestone mountains.",
        mainImage: "/assets/image/Rooms/Katria.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Katria/image5.jpg",
            title: "Katria House",
            subtitle: "Overview",
            desc: "Bohemian wooden house with two bedrooms Featuring a breathtaking view of Doi Luang.",
          },
          {
            image: "/assets/image/Rooms/Katria/image10.jpg",
            title: "Handcrafted wooden furniture and woven lamps",
            subtitle: "Design",
            desc: "Old wood and recycled materials retold with unique charm.",
          },
          {
            image: "/assets/image/Rooms/Katria/image7.jpg",
            title: "Full unobstructed view of Doi Luang",
            subtitle: "Style",
            desc: "From the mountain base to the very peak.",
          },
        ],
        features: ["Forest View", "Balcony", "Air Conditioning"],
      },
      //id7
      {
        id: 7,
        name: "Bungalow House",
        desc: "A spacious retreat with an outdoor soaking tub. Watch the stars emerge over the Doi Luang peak.",
        mainImage: "/assets/image/Rooms/Bungalow.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Bungalow/image1.jpg",
            title: "Bungalow House",
            subtitle: "Exterior",
            desc: "Cozy small bungalow 1 bedroom with private bathroom.",
          },
          {
            image: "/assets/image/Rooms/Bungalow/image2.jpg",
            title: "Lovely wooden house at a budget-friendly price",
            subtitle: "Comfort",
            desc: "Perfect for travelers who want to experience the atmosphere of Doi Luang.",
          },
        ],
        features: ["Outdoor Bath", "Panoramic View", "Private Garden"],
      },
      //id8
      {
        id: 8,
        name: "Camping Area",
        desc: "Sleep under the canopy of stars in our luxury canvas tents. The ultimate glamping experience.",
        mainImage: "/assets/image/Rooms/Camping.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Camping.jpg",
            title: "Camping Area",
            subtitle: "Overview",
            desc: "Premium camping ground with a million-view backdrop.",
          },
          {
            image: "/assets/image/Rooms/Camping/Night.jpg",
            title: "Peaceful atmosphere with an international vibe",
            subtitle: "Stars",
            desc: "Flowers, ponds, streams, and Doi Luang scenery.",
          },
          {
            image: "/assets/image/Rooms/Camping/Day.jpg",
            title: "Car Camp Zone",
            subtitle: "Morning",
            desc: "Drive in, park, and relax together with your beloved car.",
          },
        ],
        features: ["Luxury Tent", "Fire Pit", "Shared Facilities"],
      },
    ],

    signatureDishes: [
      {
        id: 1,
        name: "Slow-Cooked Jungle Curry",
        nameTh: "แกงป่าเนื้อค่อย",
        desc: "Served in a traditional clay pot with fresh herbs picked from our garden.",
        descTh: "เสิร์ฟในหม้อดินเผา พร้อมสมุนไพรสดจากสวนของเรา",
        price: "THB 350",
        image: "/assets/image/Restaurant/image1.jpg",
        icon: "sunset"
      },
      {
        id: 2,
        name: "Northern Thai Set",
        nameTh: "เซ็ตอาหารเช้าเหนือ",
        desc: "House-made sticky rice, organic fried egg from our farm, and spicy pork dipping sauce.",
        descTh: "ข้าวเหนียวเมียวมะขาม, ไข่ไก่ทรงเครื่อง, และน้ำพริกหมูป่า",
        price: "THB 280",
        image: "/assets/image/Restaurant/image2.jpg", // เปลี่ยนเป็นรูปจริง
        icon: "utensils"
      },
      {
        id: 3,
        name: "Sunset Herbal Drink",
        nameTh: "เครื่องดื่มสมุนไพรตะวันลับ",
        desc: "A blend of butterfly pea flowers and lemongrass, best enjoyed while watching the sunset.",
        descTh: "ผสมผสานดอกอัญชันและตะไคร้ ดื่มด่ำพร้อมชมพระอาทิตย์ตก",
        price: "THB 120",
        image: "/assets/image/Restaurant/image3.jpg",
        icon: "coffee"
      }
    ],

    highlightsTitle: "Resort Highlights",
    highlightsSubtitle: "Experience the unique features that set us apart.",
    highlightsOurstory: "OURHILIGHTS",
    highlights: [
      {
        id: 1,
        title: "Lan dao stream",
        desc: "A quiet detail that gently leads the heart back to life’s greater meaning.",
        img: "/assets/image/Highlight/image9.jpg",
      },
      {
        id: 2,
        title: "Hey now stream",
        desc: "A winding stream that tells a story of resilience, strength, and growth.",
        img: "/assets/image/Highlight/image8.jpg",
      },
      {
        id: 3,
        title: "Organic Farm",
        desc: "Fresh vegetables from our garden, harvested daily, served directly to your table—exclusively for our cherished guests.",
        img: "/assets/image/Highlight/image11.jpg",
      },
      {
        id: 4,
        title: "Camping",
        desc: "Camp amidst million-dollar views, where simple rest becomes something truly special.",
        img: "/assets/image/Highlight/image1.jpg",
      },
      {
        id: 5,
        title: "Beautiful Nature",
        desc: "Mountains and mist that gently enchant the gaze, letting the heart find its calm.",
        img: "/assets/image/Highlight/image3.jpg",
      },
      {
        id: 6,
        title: "Pet Friendly",
        desc: "Because every perfect getaway is better with your four-legged companion.",
        img: "/assets/image/Highlight/image4.jpg",
      },
    ],
    locationDetail:"Located in the tranquil heart of Chiang Dao, just 1.5 hours from Chiang Mai, our retreat offers a peaceful escape surrounded by the majestic mountains of Doi Luang, gentle morning mist, blooming flower fields, and winding streams. It is an ideal sanctuary for those seeking privacy, serenity, and a true connection with nature." ,
    addressDetail:"Thung Lakhon–Ban Tham, No. 3024 Chiang Dao Subdistrict, Chiang Dao District Chiang Mai 50170, Thailand",
  },

  th: {
    nav: {
      story: "เรื่องราว",
      highlights: "ไฮไลต์",
      rooms: "ห้องพัก",
      gallery: "แกลเลอรี่",
      layout: "ผังโครงการ",
      location: "ที่ตั้ง",
      contact: "ติดต่อเรา",
    },
    hero: {
      book: "จองที่พัก",
      ourstory: "เรื่องราวของเรา",
      subtitle:
        "ที่ซึ่งภูเขา ดอกไม้  สายหมอก และลำธาร  ร่วมกันร่ายมนตร์ให้ร่างกายได้หยุดพัก",
    },
    story: {
      title: "ลำธารล้านดาว… เรื่องเล็กๆ ที่พาใจกลับไปสู่ความหมายที่ยิ่งใหญ่",
      text1:
        "ท่ามกลางอ้อมกอดของ ดอยหลวงเชียงดาว ภูเขาสูงใหญ่ที่ยืนสงบนิ่งราวผู้เฝ้ามองกาลเวลา มีลำธารใสสายหนึ่งไหลเอื่อย เคียงดอกไม้ ผืนหญ้า และสายหมอกบาง ราวกับธรรมชาติกำลังร่ายบทกวี เชื้อเชิญให้หัวใจได้หยุดพัก ",
      text2:
        "ลำธารล้านดาว คือพื้นที่ซึ่งเวลาเดินช้าลง ไม่มีความเร่งรีบ ไม่มีเสียงรบกวนจากโลกภายนอก มีเพียงเสียงน้ำไหล ลมหายใจที่เบาสบาย และความสงบที่ค่อยๆ ซึมลึกถึงใจ โดยไม่ต้องพยายาม ที่นี่ไม่ใช่เพียงสถานที่พัก แต่คือประสบการณ์ของการกลับคืนสู่ความเรียบง่ายของชีวิต การพักผ่อนที่ละมุน เรียบหรู และน่าจดจำ ในแบบที่คุณจะอยากเก็บไว้… และกลับมาอีกครั้ง ",
    },
    roomsTitle: "พื้นที่พักผ่อนคลาสิก",
    roomsDesc:
      "ออกแบบมาเพื่อการพักผ่อน แต่ละห้องเสนอมุมมองที่สวยงามเห็นภูเขาเชียงดาว",
    viewDetails: "ดูรายละเอียด",

    calendarTitle: "ตรวจสอบวันว่างว่าง",
    calendarDesc: "เลือกวันที่ต้องการ เพื่อให้การพักผ่อนคลายดูง่ายิ่ง",
    restaurant:"เฮนาว คาเฟ่และร้านอาหาร อลังการในบรรยากาศ ละเมียด ละไมในรสชาติ",

    footerTitle: "ปล่อยใจให้ดอยหลวงดูแล",
    footerDesc: "ถ้าหัวใจกำลังเหนื่อย ที่นี่กำลังรอคุณอยู่",
    footerDesc2: "และธรรมชาติจะนำทาง",
    contactPhone: "ติดต่อผ่านโทรศัพท์",
    contactLine: "ติดต่อผ่าน LINE",
    rights: "© 2026 Hey Now Chiang Dao Stay. สงวนลิขสิทธิ์.",
    bookNow: "จองห้องพัก",
    slideAction: "เลื่อนลง",
    rooms: [
      // id1
      {
        id: 1,
        name: "บ้านพารวย",
        desc: "บ้านพารวยคือบ้านพักไม้ทรง A-frame ที่ออกแบบอย่างเรียบง่ายแต่มีเอกลักษณ์ โครงสร้างไม้ให้ความรู้สึกอบอุ่น โปร่งโล่ง และเปิดรับแสงธรรมชาติได้อย่างพอดี",
        mainImage: "/assets/image/Rooms/Phruay.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Phruay/image8.jpg",
            title: "บ้านพารวย",
            subtitle: "ภาพรวม",
            desc: "บ้านทรงโมเดิร์น A-Frames หลังใหญ่",
          },
          {
            image: "/assets/image/Rooms/Phruay/image3.jpg",
            title: "อ่างอาบน้ำส่วนตัว",
            subtitle: "บรรยากาศ",
            desc: "รายล้อมไปด้วยสวนดอกไม้สุดสวย",
          },
          {
            image: "/assets/image/Rooms/Phruay/image4.jpg",
            title: "ชั้นดาดฟ้าดูดาวส่วนตัว",
            subtitle: "สิ่งแวดล้อมรอบ",
            desc: "บรรยากาศดวงดาวบนท้องฟ้านับล้าน",
          },
          {
            image: "/assets/image/Rooms/Phruay/image4.jpg",
            title: "เตียงเสริม 2 ชั้น",
            subtitle: "สิ่งแวดล้อมรอบ",
            desc: "เหมาะสำหรับครอบครัวใหญ่",
          },
        ],
        features: ["เข้าถึงลำธาร์", "ความเป็นส่วนตัว", "เด็กยืดไม้"],
      },
      // id2
      {
        id: 2,
        name: "บ้านสิริล้านนา",
        desc: "บ้านสิริล้านนา คือบ้านพักสไตล์ล้านนาร่วมสมัยที่เรียบง่าย อบอุ่น และอยู่สบาย ตัวบ้านยกพื้นโปร่ง รายล้อมด้วยสวนดอกไม้ เปิดรับลมธรรมชาติได้ตลอดวัน",
        mainImage: "/assets/image/Rooms/Sirilanna.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Sirilanna/image2.jpg",
            title: "บ้านสิริล้านนา",
            subtitle: "ภาพรวม",
            desc: "บ้านครอบครัวหลังใหญ่ 2 ห้องนอน",
          },
          {
            image: "/assets/image/Rooms/Sirilanna/image5.jpg",
            title: "วิวดอยหลวงอลัง",
            subtitle: "การอาบน้ำ",
            desc: "บ้านพักที่่มองเห็นดอยหลวงเเบบเต็มตา",
          },
          {
            image: "/assets/image/Rooms/Sirilanna/image1.jpg",
            title: "ระเบียงห้อยขาชมดอยสุดอลัง",
            subtitle: "การตกแต่ง",
            desc: "มีห้องนั่งเล่น นอนมากสุดได้ 4 ท่าน",
          },
        ],
        features: ["อ่างน้ำกลางแจ้ง", "งานศิลปะ", "ผ้าลินุมพรีเมียม"],
      },
      // id3
      {
        id: 3,
        name: "บ้านดารามณี",
        desc: "บ้านพักสไตล์ทรอปิคอลไม้แท้ อบอุ่น เรียบง่าย และใกล้ชิดธรรมชาติ กับเตียงไม้สี่เสาสุดคลาสสิกและกลิ่นอายความผ่อนคลายแบบบ้านในสวน พร้อมพลูวิลล่าน้อยในฉากหลังสุดอลังการ",
        mainImage: "/assets/image/Rooms/Daramanee.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Daramanee/image7.jpg",
            title: "บ้านดารามณี",
            subtitle: "ภาพรวม",
            desc: "บ้านพักสไตล์ทรอปิคอลไม้แท้ อบอุ่น เรียบง่าย",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image2.jpg",
            title: "เตียงนอนไม้ 4เสา",
            subtitle: "ภายใน",
            desc: "เตียงไม้สี่เสาสุดคลาสสิกและกลิ่นอายความผ่อนคลายแบบบ้านในสวน",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image6.jpg",
            title: "ฉากหลังของลำธารเฮนาวสุดสวย",
            subtitle: "บรรยากาศ",
            desc: "ลำธารสุดสวยพร้อมฉากหลังอลังการ",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image10.jpg",
            title: "พลูวิลล่าส่วนตัว",
            subtitle: "ทำเลือดี",
            desc: "สระว่ายน้ำขนาดย่อมท่ามกลางขุนเขา",
          },
        ],
        features: ["ใกล้ลำธาร์", "เตาผิงไฟ", "เตียงคิงไซส์"],
      },
      // id4
      {
        id: 4,
        name: "บ้านบานชื่น",
        desc: "ที่พักสไตล์ยุโรปผสมเอเชีย ใต้เงาดอยหลวงเชียงดาว บ้านบานชื่นคือพื้นที่พักผ่อนที่ออกแบบอย่างพิถีพิถัน ให้ความรู้สึกอบอุ่นแบบยุโรปผสานเสน่ห์เอเชียในทุกมุม",
        mainImage: "/assets/image/Rooms/Banchuen.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Banchuen/image5.jpg",
            title: "บ้านบานชื่น",
            subtitle: "ภายนอก",
            desc: "ที่พักสไตล์ยุโรปผสมเอเชีย ใต้เงาดอยหลวงเชียงดาว",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image3.jpg",
            title: "ห้องนอนขนาดใหญ่",
            subtitle: "การออกแบบ",
            desc: "ห้องนั่งเล่นสุดกว้าง ผ่อนคลายตามอำเภอใจ",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image2.jpg",
            title: "ห้องครัวทำอาหารขนาดย่อม",
            subtitle: "ความสบาย",
            desc: "เหมาะสำหรับประกอบอาหารสร้างบรรยากาศบ้านสวน",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image8.jpg",
            title: "อ่างจากุชชี่ รับวิวดอยหลวง",
            subtitle: "ประสบการณ์",
            desc: "แช่น้ำชมวิว ดอยหลวงเชียงดาว แบบเต็มสายตา",
          },
        ],
        features: ["ระเบียงส่วนตัว", "เตียงคิงไซส์คิง", "ฝักบัล", "ชุดชา"],
      },
      // id5
      {
        id: 5,
        name: "บ้านลีลาวดี",
        desc: "กระท่อมน้อยกลางสวนสุดอบอุ่น บ้านไม้สไตล์ทรอปิคอล โอบล้อมด้วยสวนดอกไม้และรั้วขาวน่ารัก เหมาะสำหรับคู่รักหรือคนที่อยากพักผ่อนในบรรยากาศเงียบสงบแบบส่วนตัว",
        mainImage: "/assets/image/Rooms/Leelawadee.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Leelawadee/image1.jpg",
            title: "บ้านลีลาวดี",
            subtitle: "ภาพรวม",
            desc: "บ้านไม้สไตล์ทรอปิคอล โอบล้อมด้วยสวนดอกไม้และรั้วขาวน่ารัก",
          },
          {
            image: "/assets/image/Rooms/Leelawadee/image8.jpg",
            title: "เตียงนอนน่ารัก 3 เตียง",
            subtitle: "พื้นที่",
            desc: "ตกแต่งด้วยโทนไม้ธรรมชาติ ผสมผสานผนังอิฐและแสงธรรมชาติรอบห้อง",
          },
          {
            image: "/assets/image/Rooms/Leelawadee/image10.jpg",
            title: "ชิงช้าไม้สุดเก๋",
            subtitle: "ประสบการณ์",
            desc: "แกว่งชิงช้า ชมดอยหลวงพร้อมมองลำธาร",
          },
        ],
        features: ["เหมาะสำหรับครอบครอบ", "ระเบียงใหญ่", "ห้องนั่งอ่านหนังสือ"],
      },
      // id6
      {
        id: 6,
        name: "บ้านเเคทรียา",
        desc: "บ้านแคทรียาคือบ้านพักสไตล์โบฮีเมียน (โบว์โฮ) ที่นำไม้เก่าและวัสดุรีไซเคิลมาเล่าเรื่องใหม่อย่างมีเสน่ห์",
        mainImage: "/assets/image/Rooms/Katria.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Katria/image5.jpg",
            title: "บ้านเเคทรียา",
            subtitle: "ภาพรวม",
            desc: "โบฮีเมียนวูดเฮาส์สองห้องนอน กับวิวดอยหลวงที่สวยจนต้องหยุดหายใจ",
          },
          {
            image: "/assets/image/Rooms/Katria/image10.jpg",
            title: "งานไม้โคมไฟจักสาน",
            subtitle: "การออกแบบ",
            desc: "นำไม้เก่าและวัสดุรีไซเคิลมาเล่าเรื่องใหม่อย่างมีเสน่ห์",
          },
          {
            image: "/assets/image/Rooms/Katria/image7.jpg",
            title: "เห็นวิวดอยหลวงเเบบเต็มตา",
            subtitle: "สไตล์",
            desc: "มองเห็นดอยหลวงตั้งเเต่โคน ถึง สุดยอดเขา",
          },
        ],
        features: ["วิวป่า", "ระเบียง", "แอร์คอนดิชั่น"],
      },
      // id7
      {
        id: 7,
        name: "บ้านบังกะโล",
        desc: "บ้านพักน้อย ที่คอยผู้มาเยือน ราคาสบายกระเป๋า",
        mainImage: "/assets/image/Rooms/Bungalow.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Bungalow/image1.jpg",
            title: "บ้านบังกะโล",
            subtitle: "ภายนอก",
            desc: "บ้านพักน้อย ที่คอยผู้มาเยือน  1 ห้องนอน ห้องน้ำในตัว",
          },
          {
            image: "/assets/image/Rooms/Bungalow/image2.jpg",
            title: "บ้านไม้น่ารัก ราคาสบายกระเป๋า",
            subtitle: "ความสบาย",
            desc: "บ้านพักสำหรับนักเดินทาง ที่อยากสัมผัสบรรยากาศดอยหลวง",
          },
        ],
        features: ["อ่างน้ำกลางแจ้ง", "วิว 360 องศา", "สวนส่วนตัว"],
      },
      // id8
      {
        id: 8,
        name: "ลานกางเต็นท์",
        desc: "ลานกางเต็นท์อย่างมีระดับ กับฉากหลังร้อยล้านวิว",
        mainImage: "/assets/image/Rooms/Camping.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Camping.jpg",
            title: "ลานกางเต็นท์",
            subtitle: "ภาพรวม",
            desc: "ลานกางเต็นท์อย่างมีระดับ กับฉากหลังร้อยล้านวิว",
          },
          {
            image: "/assets/image/Rooms/Camping/Night.jpg",
            title: "บรรยากาศสงบฟิวต่างประเทศ",
            subtitle: "พื้นที่กองไฟ",
            desc: "ดอกไม้ สระน้ำ ลำธาร และดอยหลวง",
          },
          {
            image: "/assets/image/Rooms/Camping/Day.jpg",
            title: "โซน Car camp",
            subtitle: "สดชื่น",
            desc: "ขับมา จอดพร้อมรถคู่ใจให้คุณได้พักผ่อนไปพร้อมกัน",
          },
        ],
        features: ["เต็นท์พรีเมียม", "จุดกองไฟ", "สิ่งอำนวยคร่วม"],
      },
    ],

    signatureDishes: [
      {
        id: 1,
        name: "Slow-Cooked Jungle Curry",
        nameTh: "แกงป่าเนื้อค่อย",
        desc: "Served in a traditional clay pot with fresh herbs picked from our garden.",
        descTh: "เสิร์ฟในหม้อดินเผา พร้อมสมุนไพรสดจากสวนของเรา",
        price: "THB 350",
        image: "/assets/image/Restaurant/image1.jpg",
        icon: "sunset"
      },
      {
        id: 2,
        name: "Northern Thai Set",
        nameTh: "เซ็ตอาหารเช้าเหนือ",
        desc: "House-made sticky rice, organic fried egg from our farm, and spicy pork dipping sauce.",
        descTh: "ข้าวเหนียวเมียวมะขาม, ไข่ไก่ทรงเครื่อง, และน้ำพริกหมูป่า",
        price: "THB 280",
        image: "/assets/image/Restaurant/image2.jpg", // เปลี่ยนเป็นรูปจริง
        icon: "utensils"
      },
      {
        id: 3,
        name: "Sunset Herbal Drink",
        nameTh: "เครื่องดื่มสมุนไพรตะวันลับ",
        desc: "A blend of butterfly pea flowers and lemongrass, best enjoyed while watching the sunset.",
        descTh: "ผสมผสานดอกอัญชันและตะไคร้ ดื่มด่ำพร้อมชมพระอาทิตย์ตก",
        price: "THB 120",
        image: "/assets/image/Restaurant/image3.jpg",
        icon: "coffee"
      }
    ],

    highlightsTitle: "ไฮไลต์รีสอร์ท",
    highlightsSubtitle: "สัมผัสคุณสมบัติที่เป็นเอกลักษณ์ของเรา",
    highlightsOurstory: "ไฮไลต์ของเรา",
    highlights: [
      {
        id: 1,
        title: "ลำธารล้านดาว",
        desc: "เรื่องเล็กๆ ที่พาใจกลับไปสู่ความหมายที่ยิ่งใหญ่",
        img: "/assets/image/Highlight/image9.jpg",
      },
      {
        id: 2,
        title: "ลำธารเฮนาว",
        desc: "สายน้ำคดเคี้ยวที่เล่าเรื่องของแรงใจและการเติบโต",
        img: "/assets/image/Highlight/image8.jpg",
      },
      {
        id: 3,
        title: "สวนผักออร์แกนิก",
        desc: "ผักสดจากสวนของเรา เก็บใหม่วันต่อวัน เสิร์ฟตรงถึงโต๊ะอาหาร เพื่อผู้เข้าพักที่เราอยากดูแลเป็นพิเศษ",
        img: "/assets/image/Highlight/image1.jpg",
      },
      {
        id: 4,
        title: "ลานกางเต็นท์",
        desc: "กางเต็นท์ท่ามกลางวิวหลักล้าน พักผ่อนอย่างเรียบง่าย แต่พิเศษกว่าที่เคย",
        img: "/assets/image/Highlight/image1.jpg",
      },
      {
        id: 5,
        title: "ธรรมชาติแห่งดอยหลวง",
        desc: "ขุนเขาและสายหมอกที่ร่ายมนตร์สะกดทุกการมองเห็น ให้หัวใจค่อย ๆ สงบนิ่งลง",
        img: "/assets/image/Highlight/image3.jpg",
      },
      {
        id: 6,
        title: "สามารถนำสัตว์เลี้ยงเข้าพักได้",
        desc: "เพราะความสุขของการพักผ่อน…สมบูรณ์แบบยิ่งขึ้น เมื่อมีเพื่อนสี่ขาอยู่เคียงข้าง",
        img: "/assets/image/Highlight/image4.jpg",
      },
    ],
    locationDetail:"ตั้งอยู่ท่ามกลางความสงบของ เชียงดาว ใช้เวลาเดินทางจากตัวเมืองเชียงใหม่เพียง 1.5 ชั่วโมง ที่พักของเราเป็นพื้นที่พักผ่อนอันเงียบสงบ รายล้อมด้วยขุนเขาของดอยหลวง สายหมอกบาง ทุ่งดอกไม้ และลำธารคดเคี้ยว เหมาะสำหรับผู้ที่แสวงหาความเป็นส่วนตัว ความสงบ และการเชื่อมโยงกับธรรมชาติอย่างแท้จริง" ,
    addressDetail:"ทุ่งละคร-บ้านถ้ำ, 3024, ตำบล เชียงดาว อำเภอเชียงดาว เชียงใหม่ 50170",
  },

  cn: {
    nav: {
      story: "故事",
      highlights: "亮点",
      rooms: "房间",
      gallery: "画廊",
      layout: "布局",
      location: "位置",
      contact: "联系我们",
    },
    hero: {
      book: "预订住宿",
      ourstory: "我们的故事",
      subtitle: "在这里，群山、花朵、薄雾与溪流共同施展魔法，让身心得以真正停歇。",
    },
    story: {
      title: "星辰溪流（Lam Than Lan Dao） 静谧之中，回归生命本真。",
      text1:
        "在清道龙山（Doi Luang Chiang Dao）的温柔怀抱中，巍峨的群山静静伫立，仿佛守望时光的沉默旅人。条清澈的小溪缓缓流淌，穿过花草、绿野与薄雾 宛如大自然在低声吟诗，轻轻邀请人们停下脚步，让心歇息。",
      text2:
        "星辰溪居（Lam Than Lan Dao）不仅是一处居所，更是一段让时间放慢的体验。这里没有匆忙与尘嚣，只有潺潺流水、温柔的呼吸，以及无需刻意却悄然深入内心的宁静 细腻、雅致、令人难忘，让人愿意珍藏于心，并再次归来。",
    },
    roomsTitle: "您的静修圣地",
    roomsDesc: "专为休憩而设计。每个房间都能一览清迈山区的美景。",
    viewDetails: "查看详情",

    calendarTitle: "检查可用性",
    calendarDesc: "选择您期望的日期以确保无缝的住宿体验。",
    restaurant: "Hey Now 咖啡馆 & 餐厅 氛围宏美非凡， 风味细腻雅致。",

    footerTitle: "来休息吧",
    footerDesc: "如果你的心感到疲惫，这里正静静等你，",
    footerDesc2: "自然引领前行。",
    contactPhone: "电话联系",
    contactLine: "LINE 联系",
    rights: "© 2026 Hey Now Chiang Dao Stay. 版权所有。",
    bookNow: "预订客房",
    slideAction: "向下滚动",
    rooms: [
      // id1
      {
        id: 1,
        name: "普莱府",
        desc: "水边的私人隐蔽处，专为反思和平静而设计。",
        mainImage: "/assets/image/Rooms/Phruay.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Phruay/image8.jpg",
            title: "普莱府",
            subtitle: "外观",
            desc: "水边的私人隐蔽处，专为反思和平静而设计。",
          },
          {
            image: "/assets/image/Rooms/Phruay/image3.jpg",
            title: "宁静",
            subtitle: "氛围",
            desc: "溪流的声音就像自然的摇篮曲，确保一夜安眠。",
          },
          {
            image: "/assets/image/Rooms/Phruay/image4.jpg",
            title: "大自然的拥抱",
            subtitle: "环境",
            desc: "被郁郁葱葱的绿色包围，让你感觉与丛林融为一体。",
          },
        ],
        features: ["小溪入口", "隐私", "甲板"],
      },
      // id2
      {
        id: 2,
        name: "西莉安娜府",
        desc: "乡村奢华的缩影，配有露天浴室和精致的细节。",
        mainImage: "/assets/image/Rooms/Sirilanna.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Sirilanna/image2.jpg",
            title: "西莉安娜府",
            subtitle: "外观",
            desc: "乡村奢华的缩影，配有露天浴室和精致的细节。",
          },
          {
            image: "/assets/image/Rooms/Sirilanna/image5.jpg",
            title: "露天",
            subtitle: "沐浴",
            desc: "在树冠下的星空下享受独特的露天沐浴体验。",
          },
          {
            image: "/assets/image/Rooms/Sirilanna/image1.jpg",
            title: "工匠之触",
            subtitle: "装饰",
            desc: "手工制作的家具和当地艺术品点缀着这个独特的圣所。",
          },
        ],
        features: ["露天浴室", "工匠装饰", "豪华床品"],
      },
      // id3
      {
        id: 3,
        name: "达拉玛尼府",
        desc: "聆听溪流的轻柔声音。一个舒适亲密的环境，非常适合深度休息。",
        mainImage: "/assets/image/Rooms/Daramanee.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Daramanee/image7.jpg",
            title: "达拉玛尼府",
            subtitle: "外观",
            desc: "聆听溪流的轻柔声音。一个舒适亲密的环境，非常适合深度休息。",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image2.jpg",
            title: "舒适角落",
            subtitle: "内饰",
            desc: "个人细节和温暖的纺织品让这所房子真正成为家。",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image6.jpg",
            title: "乡村魅力",
            subtitle: "氛围",
            desc: "自然木色调和柔和灯光营造出温暖的拥抱，安抚心灵。",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image10.jpg",
            title: "水边",
            subtitle: "位置",
            desc: "独特地位于小溪附近，提供睡眠的最佳白噪音。",
          },
        ],
        features: ["近小溪", "壁炉", "特大床"],
      },
      // id4
      {
        id: 4,
        name: "班淳府",
        desc: "坐落于古树之间，这个房间可俯瞰晨雾从山谷升起的景色。",
        mainImage: "/assets/image/Rooms/Banchuen.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Banchuen/image5.jpg",
            title: "班淳府",
            subtitle: "外观",
            desc: "坐落于古树之间，这个房间可俯瞰晨雾从山谷升起的景色。",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image3.jpg",
            title: "室内圣所",
            subtitle: "设计",
            desc: "极简奢华遇见乡村魅力。温暖的柚木地板和柔和的灯光营造出完美的氛围。",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image2.jpg",
            title: "休憩与睡眠",
            subtitle: "舒适",
            desc: "一张铺着优质亚麻布的特大床，确保您醒来时精神焕发，准备好去冒险。",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image8.jpg",
            title: "美景",
            subtitle: "体验",
            desc: "走到您的私人露台，迎接清迈山的薄雾。",
          },
        ],
        features: ["私人露台", "特大床", "雨淋淋浴", "茶具"],
      },
      // id5
      {
        id: 5,
        name: "利拉瓦迪府",
        desc: "一个宽敞的度假地，融合了传统泰式建筑与现代设施。",
        mainImage: "/assets/image/Rooms/Leelawadee.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Leelawadee/image1.jpg",
            title: "利拉瓦迪府",
            subtitle: "外观",
            desc: "一个宽敞的度假地，融合了传统泰式建筑与现代设施。",
          },
          {
            image: "/assets/image/Rooms/Leelawadee/image8.jpg",
            title: "宏伟",
            subtitle: "空间",
            desc: "宽敞的内饰，专为寻求联系的家庭或团体设计。",
          },
          {
            image: "/assets/image/Rooms/Leelawadee/image10.jpg",
            title: "黄金时刻",
            subtitle: "体验",
            desc: "从私人阳台体验令人屏息的日落，天空被染成金色的色调。",
          },
        ],
        features: ["适合家庭", "大阳台", "客厅"],
      },
      // id6
      {
        id: 6,
        name: "卡翠亚府",
        desc: "坐落于古树之中，提供石灰岩山脉的全景视野。",
        mainImage: "/assets/image/Rooms/Katria.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Katria/image5.jpg",
            title: "卡翠亚府",
            subtitle: "外观",
            desc: "坐落于古树之中，提供石灰岩山脉的全景视野。",
          },
          {
            image: "/assets/image/Rooms/Katria/image10.jpg",
            title: "森林角落",
            subtitle: "设计",
            desc: "大自然爱好者的天堂，室内外的界限在这里变得模糊。",
          },
          {
            image: "/assets/image/Rooms/Katria/image7.jpg",
            title: "现代乡村",
            subtitle: "风格",
            desc: "包裹在传统泰北建筑元素中的现代设施。",
          },
        ],
        features: ["森林景观", "阳台", "空调"],
      },
      // id7
      {
        id: 7,
        name: "平房",
        desc: "一个宽敞的度假地，配有户外浸泡浴缸。看着星星出现在Doi Luang峰上。",
        mainImage: "/assets/image/Rooms/Bungalow.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Bungalow/image1.jpg",
            title: "平房",
            subtitle: "外观",
            desc: "一个宽敞的度假地，配有户外浸泡浴缸。看着星星出现在Doi Luang峰上。",
          },
          {
            image: "/assets/image/Rooms/Bungalow/image2.jpg",
            title: "生活空间",
            subtitle: "舒适",
            desc: "开放式平面设计让自然光涌入，将您与大自然连接。",
          },
          {
            image: "/assets/image/Rooms/Bungalow/image4.jpg",
            title: "户外浴缸",
            subtitle: "放松",
            desc: "在露天沐浴在温水中，被森林的声音环绕。",
          },
        ],
        features: ["户外浴室", "全景视图", "私人花园"],
      },
      // id8
      {
        id: 8,
        name: "露营区",
        desc: "在我们的豪华帆布帐篷下睡在星空下。极致的露营体验。",
        mainImage: "/assets/image/Rooms/Camping.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Camping.jpg",
            title: "露营区",
            subtitle: "外观",
            desc: "在我们的豪华帆布帐篷下睡在星空下。极致的露营体验。",
          },
          {
            image: "/assets/image/Rooms/Camping/Night.jpg",
            title: "夜生活",
            subtitle: "星空",
            desc: "篝火区域非常适合讲故事和创造回忆。",
          },
          {
            image: "/assets/image/Rooms/Camping/Day.jpg",
            title: "新鲜空气",
            subtitle: "早晨",
            desc: "伴随着森林的声音和新鲜咖啡的香味醒来。",
          },
        ],
        features: ["豪华帐篷", "篝火坑", "共享设施"],
      },
    ],
    signatureDishes: [
      {
        id: 1,
        name: "Slow-Cooked Jungle Curry",
        nameTh: "แกงป่าเนื้อค่อย",
        desc: "Served in a traditional clay pot with fresh herbs picked from our garden.",
        descTh: "เสิร์ฟในหม้อดินเผา พร้อมสมุนไพรสดจากสวนของเรา",
        price: "THB 350",
        image: "/assets/image/Restaurant/image1.jpg",
        icon: "sunset"
      },
      {
        id: 2,
        name: "Northern Thai Set",
        nameTh: "เซ็ตอาหารเช้าเหนือ",
        desc: "House-made sticky rice, organic fried egg from our farm, and spicy pork dipping sauce.",
        descTh: "ข้าวเหนียวเมียวมะขาม, ไข่ไก่ทรงเครื่อง, และน้ำพริกหมูป่า",
        price: "THB 280",
        image: "/assets/image/Restaurant/image2.jpg", // เปลี่ยนเป็นรูปจริง
        icon: "utensils"
      },
      {
        id: 3,
        name: "Sunset Herbal Drink",
        nameTh: "เครื่องดื่มสมุนไพรตะวันลับ",
        desc: "A blend of butterfly pea flowers and lemongrass, best enjoyed while watching the sunset.",
        descTh: "ผสมผสานดอกอัญชันและตะไคร้ ดื่มด่ำพร้อมชมพระอาทิตย์ตก",
        price: "THB 120",
        image: "/assets/image/Restaurant/image3.jpg",
        icon: "coffee"
      }
    ],

    highlightsTitle: "度假村亮点",
    highlightsSubtitle: "体验让我们与众不同的独特特色",
    highlightsOurstory: "我们的亮点",
    highlights: [
      {
        id: 1,
        title: "Lan dao stream",
        desc: "一个微小而宁静的存在，悄然引领内心回归生命更深远的意义。",
        img: "/assets/image/Highlight/image9.jpg",
      },
      {
        id: 2,
        title: "Hey now stream",
        desc: "条蜿蜒流淌的溪水，诉说着坚持、力量与成长的故事。",
        img: "/assets/image/Highlight/image8.jpg",
      },
      {
        id: 3,
        title: "现摘有机蔬菜",
        desc: "新鲜蔬菜每日采摘， 从花园直达餐桌，只为我们珍贵的住客。",
        img: "/assets/image/Highlight/image1.jpg",
      },
      {
        id: 4,
        title: "溪畔露营",
        desc: "在价值百万的美景中露营，让简单的休憩，变得格外难忘。",
        img: "/assets/image/Highlight/image1.jpg",
      },
      {
        id: 5,
        title: "美丽的自然",
        desc: "群山与流雾轻轻施展魔法，迷住所有目光，让心渐渐归于宁静。",
        img: "/assets/image/Highlight/image3.jpg",
      },
      {
        id: 6,
        title: "可携带宠物",
        desc: "因为真正美好的假期，有毛孩子陪伴，才更加完整。",
        img: "/assets/image/Highlight/image4.jpg",
      },
    ],
    locationDetail:"坐落于宁静的 清道（Chiang Dao），距离清迈市区约 1.5 小时车程， 我们的度假居所被 清道龙山（Doi Luang） 的群山、轻柔的晨雾、花海与蜿蜒溪流所环绕， 是一处理想的静谧之所，适合追求私密、安宁，并渴望与自然深度相连的旅人。" ,
    addressDetail:"Thung Lakhon–Ban Tham, No. 3024 Chiang Dao Subdistrict, Chiang Dao District Chiang Mai 50170, Thailand",
  },
};
