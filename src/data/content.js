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

    footerTitle: "Come and Rest.",
    footerDesc:
      "A quiet sanctuary in the mountains of Chiang Dao where time slows down,",
    footerDesc2: "and nature leads the way.",
    contactPhone: "Contact via Phone",
    contactLine: "Contact via LINE",
    rights: "© 2026 Hey Now Chiang Dao Stay. All rights reserved.",
    bookNow: "Book This Room",
    slideAction: "Scroll Down",
    rooms: [
      {
        id: 1,
        name: "Ban Chuen House",
        desc: "Nestled among ancient trees, this room offers a private view of the morning mist rising from the valley.",
        mainImage: "/assets/image/Price/Banchuen.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Banchuen/image5.jpg",
            title: "Ban Chuen House",
            subtitle: "Exterior",
            desc: "Nestled among ancient trees, this room offers a private view of the morning mist rising from the valley.",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image3.jpg",
            title: "Interior Sanctuary",
            subtitle: "Design",
            desc: "Minimalist luxury meets rustic charm. Warm teak floors and soft lighting create the perfect ambiance.",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image2.jpg",
            title: "Rest & Sleep",
            subtitle: "Comfort",
            desc: "A king-size bed draped in premium linen ensures you wake up refreshed and ready for adventure.",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image8.jpg",
            title: "The View",
            subtitle: "Experience",
            desc: "Step out to your private terrace and greet the misty mountains of Chiang Dao.",
          },
        ],
        features: [
          "Private Terrace",
          "King Size Bed",
          "Rain Shower",
          "Tea Set",
        ],
      },
      {
        id: 2,
        name: "Bungalow House",
        desc: "A spacious retreat with an outdoor soaking tub. Watch the stars emerge over the Doi Luang peak.",
        mainImage: "/assets/image/Price/Bungalow.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Bungalow/image1.jpg",
            title: "Bungalow House",
            subtitle: "Exterior",
            desc: "Spacious retreat with an outdoor soaking tub. Watch the stars emerge over Doi Luang peak.",
          },
          {
            image: "/assets/image/Rooms/Bungalow/image2.jpg",
            title: "Living Space",
            subtitle: "Comfort",
            desc: "Open floor plan allowing natural light to flood in, connecting you with nature.",
          },
          {
            image: "/assets/image/Rooms/Bungalow/image4.jpg",
            title: "Outdoor Tub",
            subtitle: "Relax",
            desc: "Soak in warm water under the open sky, surrounded by the sounds of the forest.",
          },
        ],
        features: ["Outdoor Bath", "Panoramic View", "Private Garden"],
      },
      {
        id: 3,
        name: "Daramanee House",
        desc: "Listen to the gentle flow of the stream. A cozy, intimate setting perfect for deep rest.",
        mainImage: "/assets/image/Price/Daramanee.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Daramanee/image7.jpg",
            title: "Daramanee House",
            subtitle: "Overview",
            desc: "Listen to the gentle flow of the stream. A cozy, intimate setting perfect for deep rest.",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image2.jpg",
            title: "Cozy Corner",
            subtitle: "Interior",
            desc: "Personal details and warm textiles make this house a true home.",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image6.jpg",
            title: "Rustic Charm",
            subtitle: "Atmosphere",
            desc: "Natural wood tones and soft lighting create a warm embrace that calms the spirit.",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image10.jpg",
            title: "By The Water",
            subtitle: "Location",
            desc: "Uniquely positioned near the gentle stream, providing the ultimate white noise for sleep.",
          },
        ],
        features: ["Near Stream", "Fireplace", "King Bed"],
      },
      {
        id: 4,
        name: "Katria House",
        desc: "Nestled among ancient trees, offering panoramic views of the limestone mountains.",
        mainImage: "/assets/image/Price/Katria.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Katria/image5.jpg",
            title: "Katria House",
            subtitle: "Overview",
            desc: "Nestled among ancient trees, offering panoramic views of the limestone mountains.",
          },
          {
            image: "/assets/image/Rooms/Katria/image10.jpg",
            title: "Forest Nook",
            subtitle: "Design",
            desc: "A haven for nature lovers, where the boundary between indoors and outdoors blurs.",
          },
          {
            image: "/assets/image/Rooms/Katria/image7.jpg",
            title: "Modern Rustic",
            subtitle: "Style",
            desc: "Contemporary amenities wrapped in traditional Northern Thai architectural elements.",
          },
        ],
        features: ["Forest View", "Balcony", "Air Conditioning"],
      },
      {
        id: 5,
        name: "Leelawadee House",
        desc: "An expansive retreat blending traditional Thai architecture with modern amenities.",
        mainImage: "/assets/image/Price/Leelawadee.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Leelawadee/image1.jpg",
            title: "Leelawadee House",
            subtitle: "Overview",
            desc: "An expansive retreat blending traditional Thai architecture with modern amenities.",
          },
          {
            image: "/assets/image/Rooms/Leelawadee/image8.jpg",
            title: "Grandeur",
            subtitle: "Space",
            desc: "Spacious interiors designed for families or groups seeking connection.",
          },
          {
            image: "/assets/image/Rooms/Leelawadee/image10.jpg",
            title: "Golden Hour",
            subtitle: "Experience",
            desc: "Experience breathtaking sunsets from your private veranda, painting the sky in hues of gold.",
          },
        ],
        features: ["Family Friendly", "Large Veranda", "Living Area"],
      },
      {
        id: 6,
        name: "Phruay House",
        desc: "A private hideaway by the water, designed for reflection and peace.",
        mainImage: "/assets/image/Price/Phruay.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Phruay/image8.jpg",
            title: "Phruay House",
            subtitle: "Overview",
            desc: "A private hideaway by the water, designed for reflection and peace.",
          },
          {
            image: "/assets/image/Rooms/Phruay/image3.jpg",
            title: "Serene",
            subtitle: "Vibe",
            desc: "The sound of the stream acts as a natural lullaby, ensuring a restful night.",
          },
          {
            image: "/assets/image/Rooms/Phruay/image4.jpg",
            title: "Nature's Embrace",
            subtitle: "Setting",
            desc: "Surrounded by lush greenery, making you feel one with the jungle.",
          },
        ],
        features: ["River Access", "Privacy", "Deck"],
      },
      {
        id: 7,
        name: "Sirilanna House",
        desc: "The epitome of rustic luxury, featuring an open-air bathroom and exquisite details.",
        mainImage: "/assets/image/Price/Sirilanna.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Sirilanna/image2.jpg",
            title: "Sirilanna House",
            subtitle: "Overview",
            desc: "The epitome of rustic luxury, featuring an open-air bathroom and exquisite details.",
          },
          {
            image: "/assets/image/Rooms/Sirilanna/image5.jpg",
            title: "Al Fresco",
            subtitle: "Bath",
            desc: "Indulge in a unique open-air bathing experience under the canopy of stars.",
          },
          {
            image: "/assets/image/Rooms/Sirilanna/image1.jpg",
            title: "Artisan Touch",
            subtitle: "Decor",
            desc: "Hand-crafted furniture and local art pieces adorn this exclusive sanctuary.",
          },
        ],
        features: ["Open-Air Bath", "Artisan Decor", "Luxury Linen"],
      },
      {
        id: 8,
        name: "Camping Area",
        desc: "Sleep under the canopy of stars in our luxury canvas tents. The ultimate glamping experience.",
        mainImage: "/assets/image/Price/Camping.jpg",
        gallery: [
          {
            image: "/assets/image/Price/Camping.jpg",
            title: "Camping Area",
            subtitle: "Overview",
            desc: "Sleep under the canopy of stars in our luxury canvas tents. The ultimate glamping experience.",
          },
          {
            image: "/assets/image/Rooms/Camping/Night.jpg",
            title: "Night Life",
            subtitle: "Stars",
            desc: "The fire pit area is perfect for storytelling and making memories.",
          },
          {
            image: "/assets/image/Rooms/Camping/Day.jpg",
            title: "Fresh Air",
            subtitle: "Morning",
            desc: "Wake up to the sounds of the forest and the smell of fresh coffee.",
          },
        ],
        features: ["Luxury Tent", "Fire Pit", "Shared Facilities"],
      },
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
    testimonials: [
      {
        text: "I didn't realize how tired I was until I finally exhaled here. The silence is not empty; it's full of peace.",
        author: "— Sarah, London",
      },
      {
        text: "A rare find in Thailand. It feels less like a hotel and more like being a guest in a beautiful, private home.",
        author: "— Kenji, Tokyo",
      },
    ],
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

    footerTitle: "มาพักผ่อนคลายใจ",
    footerDesc: "ศักดิ์สถานแห่งความสงบกลางภูเขาเชียงดาว ที่เวลาช้าลง",
    footerDesc2: "และธรรมชาติจะนำทาง",
    contactPhone: "ติดต่อผ่านโทรศัพท์",
    contactLine: "ติดต่อผ่าน LINE",
    rights: "© 2026 Hey Now Chiang Dao Stay. สงวนลิขสิทธิ์.",
    bookNow: "จองห้องพัก",
    slideAction: "เลื่อนลง",
    rooms: [
      {
        id: 1,
        name: "บ้านบัญชน",
        desc: "ตั้งอยู่ในร่มเย็นของต้นไม้เก่าแก่ ห้องพักนี้มอบมองเห็นหมอกหนาวที่ลอยขึ้นจากหุบเขา",
        mainImage: "/assets/image/Price/Banchuen.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Banchuen/image5.jpg",
            title: "บ้านบัญชน",
            subtitle: "ภายนอก",
            desc: "ตั้งอยู่ในร่มเย็นของต้นไม้เก่าแก่ ห้องพักนี้มอบมองเห็นหมอกหนาวที่ลอยขึ้นจากหุบเขา",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image3.jpg",
            title: "ภายในห้อง",
            subtitle: "การออกแบบ",
            desc: "ความหรูหราแบบมินิมอลพบกับเสน่ห์ของโรงนา พื้นไม้สักทองและแสงสว่างสร้างบรรยากาศที่สมบูรณ์",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image2.jpg",
            title: "การพักผ่อน",
            subtitle: "ความสบาย",
            desc: "เตียงคิงไซส์คิงขนุนแก่ด้วยผ้าลินุมพรีเมียม ทำให้คุณตื่นขึ้นมาสดชื่นพร้อมการผจญภัย",
          },
          {
            image: "/assets/image/Rooms/Banchuen/image8.jpg",
            title: "วิวทิวทาน",
            subtitle: "ประสบการณ์",
            desc: "เดินออกไปที่ระเบียงส่วนตัวและทักทายหมอกหนาวเหนือภูเขาเชียงดาว",
          },
        ],
        features: ["ระเบียงส่วนตัว", "เตียงคิงไซส์คิง", "ฝักบัล", "ชุดชา"],
      },
      {
        id: 2,
        name: "บังกะโล",
        desc: "พื้นที่กว้างขวางพร้อมอ่างน้ำแช่แบบกลางแจ้ง ชมดาวพลบเหนือยอดภูเขาหลวง",
        mainImage: "/assets/image/Price/Bungalow.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Bungalow/image1.jpg",
            title: "บังกะโล",
            subtitle: "ภายนอก",
            desc: "พื้นที่กว้างขวางพร้อมอ่างน้ำแช่แบบกลางแจ้ง ชมดาวพลบเหนือยอดภูเขาหลวง",
          },
          {
            image: "/assets/image/Rooms/Bungalow/image2.jpg",
            title: "พื้นที่ใช้สอย",
            subtitle: "ความสบาย",
            desc: "ผังแผนชั้นเดียวให้แสงธรรมชาติไหลเข้ามา มอบต่อเขากับธรรมชาติ",
          },
          {
            image: "/assets/image/Rooms/Bungalow/image4.jpg",
            title: "อ่างน้ำแช่",
            subtitle: "ผ่อนคลาย",
            desc: "แช่ตัวในน้ำอบุ่นใต้ท้องฟ้า ล้อมรอบด้วยเสียงป่า",
          },
        ],
        features: ["อ่างน้ำกลางแจ้ง", "วิว 360 องศา", "สวนส่วนตัว"],
      },
      {
        id: 3,
        name: "บ้านดารามนี",
        desc: "ฟังเสียงลำธาร์ไหลผ่านอย่างเบาๆ บรรยากาศกับบ้านเล็กๆ อันเงียบสงบ เหมาะสำหรับการพักผ่อนอย่างลึกลึก",
        mainImage: "/assets/image/Price/Daramanee.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Daramanee/image7.jpg",
            title: "บ้านดารามนี",
            subtitle: "ภาพรวม",
            desc: "ฟังเสียงลำธาร์ไหลผ่านอย่างเบาๆ บรรยากาศกับบ้านเล็กๆ อันเงียบสงบ เหมาะสำหรับการพักผ่อนอย่างลึกลึก",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image2.jpg",
            title: "มุมอบอุ่น",
            subtitle: "ภายใน",
            desc: "รายละเอียดส่วนตัวและผ้าปู่ที่อบอุ่น ทำให้บ้านนี้รู้สึกว่าเป็นบ้านจริง",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image6.jpg",
            title: "เสน่ห์โรงนา",
            subtitle: "บรรยากาศ",
            desc: "โทนสีไม้ธรรมชาติกับแสงไฟอบอุ่นสร้างกอดรัดที่ช่วยให้จิตใจสงบ",
          },
          {
            image: "/assets/image/Rooms/Daramanee/image10.jpg",
            title: "ริมน้ำ",
            subtitle: "ทำเลือดี",
            desc: "ตั้งอยู่ใกล้ลำธาร์อย่างเฉพาะ มอบมองเห็นวิวและได้ยินเสียงน้ำที่เป็นเสียงกล่อมธรรมชาติ",
          },
        ],
        features: ["ใกล้ลำธาร์", "เตาผิงไฟ", "เตียงคิงไซส์"],
      },
      {
        id: 4,
        name: "บ้านกตริยา",
        desc: "ตั้งอยู่ท่ามกลางในร่มไม้เก่าแก่ มองเห็นวิวภูเขาหินปูนแบบทิวทิวทิว",
        mainImage: "/assets/image/Price/Katria.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Katria/image5.jpg",
            title: "บ้านกตริยา",
            subtitle: "ภาพรวม",
            desc: "ตั้งอยู่ท่ามกลางในร่มไม้เก่าแก่ มองเห็นวิวภูเขาหินปูนแบบทิวทิวทิว",
          },
          {
            image: "/assets/image/Rooms/Katria/image10.jpg",
            title: "มุมธรรมชาติ",
            subtitle: "การออกแบบ",
            desc: "สวรรค์สำหรับผู้รักธรรมชาติ ที่ขอบเขตระหว่างระหว่างภายในและภายนอกจางหายไป",
          },
          {
            image: "/assets/image/Rooms/Katria/image7.jpg",
            title: "โมเดิร์นโรงนา",
            subtitle: "สไตล์",
            desc: "สิ่งอำนวยความสะดวกยุคนิยม คลุมด้วยองค์ประยุกษ์ของสถาปัตยวัฒนภาคเหนือ",
          },
        ],
        features: ["วิวป่า", "ระเบียง", "แอร์คอนดิชั่น"],
      },
      {
        id: 5,
        name: "บ้านลีละวดี",
        desc: "พื้นที่พักที่กว้างขวางพร้อมความสะดวกยุคนิยม ผสมผสานสไตล์ไทยกับสิ่งอำนวยความสะดวก",
        mainImage: "/assets/image/Price/Leelawadee.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Leelawadee/image1.jpg",
            title: "บ้านลีละวดี",
            subtitle: "ภาพรวม",
            desc: "พื้นที่พักที่กว้างขวางพร้อมความสะดวกยุคนิยม ผสมผสานสไตล์ไทยกับสิ่งอำนวยความสะดวก",
          },
          {
            image: "/assets/image/Rooms/Leelawadee/image8.jpg",
            title: "ความงดงตาม",
            subtitle: "พื้นที่",
            desc: "ภายในกว้างขวางออกแบบมาเพื่อครอบครอบครัวหรือกลุ่มที่ต้องการเชื่อมโยงกัน",
          },
          {
            image: "/assets/image/Rooms/Leelawadee/image10.jpg",
            title: "มุมอรุ่ง",
            subtitle: "ประสบการณ์",
            desc: "ชมวิวพระอบที่ยอมดีที่สวยงามากจากระเบียงส่วนตัวของคุณ ที่ทำให้ท้องฟ้าเปลี่ยนเป็นสีส้มทอง",
          },
        ],
        features: ["เหมาะสำหรับครอบครอบ", "ระเบียงใหญ่", "ห้องนั่งอ่านหนังสือ"],
      },
      {
        id: 6,
        name: "บ้านพรวย",
        desc: "ที่หลบซ่อนอยู่ริมน้ำ ออกแบบมาเพื่อการไตรรจึ้งและความสงบ",
        mainImage: "/assets/image/Price/Phruay.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Phruay/image8.jpg",
            title: "บ้านพรวย",
            subtitle: "ภาพรวม",
            desc: "ที่หลบซ่อนอยู่ริมน้ำ ออกแบบมาเพื่อการไตรรจึ้งและความสงบ",
          },
          {
            image: "/assets/image/Rooms/Phruay/image3.jpg",
            title: "ความเงียบสงบ",
            subtitle: "บรรยากาศ",
            desc: "เสียงน้ำไหลเสมือเป็นเพลงกล่อมธรรมชาติ ช่วยให้หลับฝันอย่างลึกลึก",
          },
          {
            image: "/assets/image/Rooms/Phruay/image4.jpg",
            title: "ธรรมชาติ",
            subtitle: "สิ่งแวดล้อมรอบ",
            desc: "ล้อมรอบด้วยพื้นที่สีเขียวขจี ทำให้รู้สึกว่าคุณเป็นหนึ่งเดียวกับป่า",
          },
        ],
        features: ["เข้าถึงลำธาร์", "ความเป็นส่วนตัว", "เด็กยืดไม้"],
      },
      {
        id: 7,
        name: "บ้านสิริลัลนนา",
        desc: "จุดเด่นของความหรูหราแบบโรงนา มีห้องน้ำแบบเปิดและรายละเอียดที่งดงเลยยิ่ง",
        mainImage: "/assets/image/Price/Sirilanna.jpg",
        gallery: [
          {
            image: "/assets/image/Rooms/Sirilanna/image2.jpg",
            title: "บ้านสิริลัลนา",
            subtitle: "ภาพรวม",
            desc: "จุดเด่นของความหรูหราแบบโรงนา มีห้องน้ำแบบเปิดและรายละเอียดที่งดงเลยยิ่ง",
          },
          {
            image: "/assets/image/Rooms/Sirilanna/image5.jpg",
            title: "บรรยากาศแบบกลางแจ้ง",
            subtitle: "การอาบน้ำ",
            desc: "เพลิดกับบรรยากาศการอาบน้ำแบบเปิดโล่งภายใต้แสงดาวท่ามกลางต้นไม้",
          },
          {
            image: "/assets/image/Rooms/Sirilanna/image1.jpg",
            title: "ศิลปะ",
            subtitle: "การตกแต่ง",
            desc: "เฟอร์นิเจอร์ที่สร้างมือและงานศิลปะท้องถิกประดับประดุติชในศักดิ์สถานแห่งนี้",
          },
        ],
        features: ["อ่างน้ำกลางแจ้ง", "งานศิลปะ", "ผ้าลินุมพรีเมียม"],
      },
      {
        id: 8,
        name: "บริเวณ์แคมปปิ้ง",
        desc: "นอนใต้แสงดาวในเต็นท์ผ้าใบหรูหรา ประสบการณ์แคมปปิ้งอันลงตัว",
        mainImage: "/assets/image/Price/Camping.jpg",
        gallery: [
          {
            image: "/assets/image/Price/Camping.jpg",
            title: "บริเวณ์แคมปปิ้ง",
            subtitle: "ภาพรวม",
            desc: "นอนใต้แสงดาวในเต็นท์ผ้าใบหรูหรา ประสบการณ์แคมปปิ้งอันลงตัว",
          },
          {
            image: "/assets/image/Rooms/Camping/Night.jpg",
            title: "ชีวิตกลางคืน",
            subtitle: "พื้นที่กองไฟ",
            desc: "พื้นที่จุดกองไฟเหมาะสำหรับการพูดคุยเรื่องและสร้างความทรงจำ",
          },
          {
            image: "/assets/image/Rooms/Camping/Day.jpg",
            title: "อากาศเช้า",
            subtitle: "สดชื่น",
            desc: "ตื่นขึ้นมาพร้อมเสียงป่าและกลิ่นกาแฟรี่ช์สดใหม่",
          },
        ],
        features: ["เต็นท์พรีเมียม", "จุดกองไฟ", "สิ่งอำนวยคร่วม"],
      },
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
    testimonials: [
      {
        text: "ผมไม่รู้ว่าตัวเองเหนื่อยแค่ไหนจนกว่ามาที่นี่แล้วหายใจ ความเงียบไม่ได้ว่าง่ายเปล่า แต่มันเต็มไปด้วยความสงบ",
        author: "— ซาราห์, ลอนดอน",
      },
      {
        text: "สถานที่หาดูยากในไทย มันไม่รู้สึกว่าเป็นโรงแต่เหมือนเป็นแขกบ้านส่วนตัวในบ้านที่สวยงามและเป็นส่วนตัว",
        author: "— เคนจิ, โตเกียว",
      },
    ],
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

    footerTitle: "来休息吧",
    footerDesc: "清迈深山中的一处静谧圣地，时光在此放缓，",
    footerDesc2: "自然引领前行。",
    contactPhone: "电话联系",
    contactLine: "LINE 联系",
    rights: "© 2026 Hey Now Chiang Dao Stay. 版权所有。",
    bookNow: "预订客房",
    slideAction: "向下滚动",
    rooms: [
      {
        id: 1,
        name: "班淳府",
        desc: "坐落于古树之间，这个房间可俯瞰晨雾从山谷升起的景色。",
        mainImage: "/assets/image/Price/Banchuen.jpg",
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
      {
        id: 2,
        name: "平房",
        desc: "一个宽敞的度假地，配有户外浸泡浴缸。看着星星出现在Doi Luang峰上。",
        mainImage: "/assets/image/Price/Bungalow.jpg",
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
      {
        id: 3,
        name: "达拉玛尼府",
        desc: "聆听溪流的轻柔声音。一个舒适亲密的环境，非常适合深度休息。",
        mainImage: "/assets/image/Price/Daramanee.jpg",
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
      {
        id: 4,
        name: "卡翠亚府",
        desc: "坐落于古树之中，提供石灰岩山脉的全景视野。",
        mainImage: "/assets/image/Price/Katria.jpg",
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
      {
        id: 5,
        name: "利拉瓦迪府",
        desc: "一个宽敞的度假地，融合了传统泰式建筑与现代设施。",
        mainImage: "/assets/image/Price/Leelawadee.jpg",
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
      {
        id: 6,
        name: "普莱府",
        desc: "水边的私人隐蔽处，专为反思和平静而设计。",
        mainImage: "/assets/image/Price/Phruay.jpg",
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
      {
        id: 7,
        name: "西莉安娜府",
        desc: "乡村奢华的缩影，配有露天浴室和精致的细节。",
        mainImage: "/assets/image/Price/Sirilanna.jpg",
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
      {
        id: 8,
        name: "露营区",
        desc: "在我们的豪华帆布帐篷下睡在星空下。极致的露营体验。",
        mainImage: "/assets/image/Price/Camping.jpg",
        gallery: [
          {
            image: "/assets/image/Price/Camping.jpg",
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
    testimonials: [
      {
        text: "直到我终于在这里呼气，我才知道我有多累。寂静不是空的；它充满了平静。",
        author: "— 莎拉，伦敦",
      },
      {
        text: "泰国罕见的发现。感觉不像酒店，更像是作为客人住在一个美丽的私人家里。",
        author: "— 健二，东京",
      },
    ],
  },
};
