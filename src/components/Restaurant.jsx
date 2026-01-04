import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Utensils, Coffee, Sunset } from 'lucide-react';
import { useState } from "react";
import { X } from "lucide-react";
// ตัวอย่างข้อมูลเมนู (คุณสามารถดึงจาก Context แทนได้ถ้ามีหลายภาษา)

const Restaurant = () => {
// ใช้ Context เพื่อดึงหัวข้อ (ถ้ามี)
const { content } = useLanguage();
const [activeImage, setActiveImage] = useState(null);

const iconMap = {
coffee: <Coffee size={16} />,
utensils: <Utensils size={16} />,
sunset: <Sunset size={16} />
};

return (
<section id="restaurant" className="relative py-10 md:py-12 bg-[#FAF8F5] overflow-hidden">

{/* Background Texture */}
<div className="absolute inset-0 opacity-[0.03] pointer-events-none"
style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
</div>

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

{/* 1. Header Section: Cinematic Vibe */}
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 1 }}
className="mb-20"
>
<div className="flex flex-col md:flex-row gap-8 items-end mb-8">
<span className="text-[#A89F91] text-xs font-bold tracking-[0.3em] uppercase">
Culinary Experience
</span>
<div className="h-[1px] bg-[#D4C5B0] flex-1 opacity-50"></div>
</div>

<h2 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl text-[#3E3832] font-medium mb-6 leading-[1.1]">
Hey Now<br/>
<span className="italic text-warm-600">Cafe & Restaurant.</span>
</h2>

<p className="font-['Lato',sans-serif] text-[#6B6359] text-lg md:text-xl font-light max-w-2xl leading-relaxed">
{content.restaurant}
</p>
</motion.div>

{/* 2. Menu Highlights: A Gallery of Taste */}
<div className="space-y-16 md:space-y-24">
{content.signatureDishes.map((dish, index) => (
<motion.div
key={dish.id}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-50px" }}
transition={{ duration: 0.8, delay: index * 0.1 }}
className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
index % 2 !== 0 ? 'md:flex-row-reverse' : ''
}`}
>
{/* Image Container - Polaroid Style */}
<div className="w-full md:w-1/2 relative group">
<div className="absolute -inset-4 bg-[#E8E0D5] rounded-lg -rotate-1 transition-transform group-hover:rotate-1"></div>
<div
  className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-sm shadow-lg bg-stone-200 cursor-zoom-in"
  onClick={() => setActiveImage(dish.image)}
>{/* Placeholder for Image - ใส่รูปจริงที่ dish.image */}
<img
src={dish.image}
alt={dish.name}
className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
onError={(e) => e.target.style.backgroundColor = '#ddd'} // Fallback ถ้าไม่มีรูป
/>

{/* Price Tag Overlay */}
{/* <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-warm-900 font-serif text-lg shadow-sm">
{dish.price}
</div> */}
</div>
</div>

{/* Content */}
<div className="w-full md:w-1/2 space-y-4 md:space-y-6">
<div className="flex items-center gap-3 text-[#A89F91] mb-2">
{iconMap[dish.icon]}
<span className="text-xs font-bold tracking-widest uppercase">Signature Dish</span>
</div>

<h3 className="font-['Cormorant_Garamond',serif] text-3xl md:text-5xl text-[#3E3832] leading-tight">
{dish.name}
{/* ถ้าต้องการภาษาไทย */}
{/* <span className="block text-xl text-warm-600 mt-2 font-light">{dish.nameTh}</span> */}
</h3>

<div className="w-12 h-[1px] bg-[#3E3832]"></div>

<p className="font-['Lato',sans-serif] text-[#6B6359] leading-relaxed text-lg">
{dish.desc}
</p>

{/* ถ้าต้องการภาษาไทย */}
{/* <p className="font-serif text-[#6B6359] leading-relaxed italic">
{dish.descTh}
</p> */}
</div>
</motion.div>
))}
</div>
</div>
{activeImage && (
  <motion.div
    className="fixed inset-0 z-50 bg-[#1C1A18]/90 backdrop-blur-sm flex items-center justify-center px-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setActiveImage(null)}
  >
    <motion.img
      src={activeImage}
      alt="Expanded dish"
      className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm shadow-2xl"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
    />

    {/* Premium Close Button */}
    <button
      onClick={() => setActiveImage(null)}
      className="absolute top-6 right-6 pointer-events-auto p-3 rounded-full 
                 bg-white/10 hover:bg-white/20 
                 backdrop-blur-md border border-white/10 
                 transition-all duration-300 group"
    >
      <X 
        size={20} 
        className="text-white/90 group-hover:rotate-90 transition-transform duration-300" 
      />
    </button>
  </motion.div>
)}
</section>
);
};

export default Restaurant;