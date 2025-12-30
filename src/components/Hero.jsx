import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion"; // เพิ่ม import นี้

// Animation Variants สำหรับการค่อยๆ ขึ้นของแต่ละส่วน
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: "easeOut" } 
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3 // เวลาหน่วงระหว่างแต่ละองค์ประกอบ
    }
  }
};

const Hero = () => {
  const { content } = useLanguage();

  return (
    <header className="relative h-screen w-full overflow-hidden flex items-end">
      <div className="absolute inset-0 z-0">
        <picture>
          {/* PC / Tablet */}
          <source
            srcSet="/assets/image/Overview/PC/14.jpg"
            media="(min-width: 768px)"
          />
          {/* Mobile */}
          <img
            src="/assets/image/Overview/Phone/6.jpg"
            alt="Chiang Dao Mist"
            className="w-full h-full object-cover brightness-[0.65] scale-105"
          />
        </picture>
        {/* เพิ่ม Gradient ด้านล่างให้ทึบขึ้นเพื่อให้อ่าน Text ง่าย */}
        <div className="absolute inset-0 bg-gradient-to-t from-warm-50/90 via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 w-full pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative max-w-2xl"
        >
          {/* Backdrop Glass */}
          <div className="absolute -inset-6 md:-inset-8 rounded-md bg-black/35 backdrop-blur-sm shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] pointer-events-none" />

          {/* Content */}
          <div className="relative flex flex-col gap-6">
            <motion.h1 variants={textVariants} className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05]">
              Hey Now <br />
              <i className="text-5xl md:text-6xl lg:text-7xl">
                Chiang Dao Stay
              </i>
            </motion.h1>

            <motion.p variants={textVariants} className="text-warm-50 text-lg md:text-xl font-light border-l border-white/40 pl-4 max-w-md">
              {content.hero.subtitle}
            </motion.p>

            <motion.div variants={textVariants} className="flex flex-wrap gap-4">
              <button className="bg-forest-600/90 backdrop-blur-sm text-white px-8 py-3 rounded-full text-sm tracking-widest uppercase border border-white/20 hover:bg-forest-700 transition-all">
                {content.hero.book}
              </button>
              <button className="bg-white/5 text-white px-8 py-3 rounded-full text-sm tracking-widest uppercase border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all">
                {content.hero.ourstory}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;