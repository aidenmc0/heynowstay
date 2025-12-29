import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const Story = () => {
  // 1. ดึงค่า Content
  const { content } = useLanguage();

  return (
    <section id="story" className="py-24 md:py-32 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        <span className="text-forest-500 uppercase tracking-widest text-xs font-bold">
          {/* ใช้ key แบบ dynamic หรือใส่อย่าง */}
          {content.nav?.story || "Our Philosophy"} 
        </span>
        
        {/* ใช้ content.story.title และ text */}
        <h2 className="font-serif text-3xl md:text-5xl text-warm-900 leading-tight">
          {content.story.title}
        </h2>
        
        <div className="space-y-6 text-lg text-warm-800 font-light leading-relaxed">
          <p>
            {content.story.text1}
          </p>
          <p>
            {content.story.text2}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Story;