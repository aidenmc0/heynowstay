import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// --- Import Components & Data ---
import { useLanguage } from "../contexts/LanguageContext"; 
import StoryCard from "./Mobile/StoryCard";
import GodRay from "./Background/GodRay";

const RoomDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const navigate = useNavigate(); 

  // --- 1. Data & State Management ---
  const { content } = useLanguage();
  const rooms = content.rooms || [];
  
  // หา Index และห้องปัจจุบัน
  const currentIndex = rooms.findIndex((r) => r.id === parseInt(id));
  
  // ถ้าไม่มี ID หรือหาไม่เจอ ให้เริ่มที่ห้องแรก
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const room = rooms[safeIndex];

  // --- 2. Logic สร้าง Slides ---
  const createSlides = (room) => {
    const slides = [];
    if (room && room.gallery) {
        room.gallery.forEach((item, index) => {
            slides.push({
                image: item.image,
                title: item.title || room.name,
                desc: item.desc || room.desc,
                subtitle: item.subtitle || `View ${index + 1}`,
                action: index === room.gallery.length - 1 ? content.bookNow : content.slideAction,
            });
        });
    }
    return slides;
  };

  const slides = createSlides(room);

  // --- 3. RESET EFFECT (ส่วนสำคัญที่เพิ่มเข้ามา) ---
  // เมื่อ ID เปลี่ยน ให้ Reset ทุกอย่างกลับไปจุดเริ่มต้น
  useEffect(() => {
    setActiveSlideIndex(0);
    if (containerRef.current) {
        containerRef.current.scrollLeft = 0; // บังคับเลื่อนไปซ้ายสุด
    }
  }, [id]); // ดูแปลบอกว่าทำทุกครั้งที่ `id` เปลี่ยน

  // --- 4. Intersection Observer ---
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            if (!isNaN(index)) setActiveSlideIndex(index);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    Array.from(container.children).forEach((child) => {
      if (child.classList.contains('story-slide-wrapper')) {
        observer.observe(child);
      }
    });

    return () => observer.disconnect();
  }, [room]); // Re-observe ถ้า Room เปลี่ยน

  const handleClose = () => {
    navigate('/'); // ไปที่หน้าแรก
    setTimeout(() => {
      // รอให้หน้าเว็บวาด (Render) เสร็จ 100ms แล้วค่อย Scroll
      const roomSection = document.getElementById('rooms');
      if (roomSection) {
        roomSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="relative bg-stone-900 text-white h-screen w-screen overflow-hidden font-serif selection:bg-white/20 flex flex-col">
      
      {/* Background 3D */}
      <div className="fixed inset-0 z-[-1] opacity-30 pointer-events-none">
        <GodRay />
      </div>

      {/* ================= TOP LAYER: Info & Close ================= */}
      {/* Glassmorphism Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-start p-4 md:p-6 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="pointer-events-auto p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all duration-300 group"
        >
          <X size={20} className="text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Room Title Badge + Progress */}
        <div className="pointer-events-auto flex flex-col items-center gap-1">            
            {/* ชื่อห้อง */}
            <span className="text-lg md:text-xl font-medium tracking-wide bg-black/30 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
              {room?.name}
            </span>

            {/* บอกว่าอยู่หน้าไหน */}
            <div className="flex flex-col items-center gap-0.5">
                 <div className="flex gap-1.5 mb-1">
                    {slides.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`
                                h-[2px] rounded-full transition-all duration-300
                                ${idx <= activeSlideIndex ? 'w-6 bg-white' : 'w-2 bg-white/30'}
                            `}
                        />
                    ))}
                 </div>
                 <span className="text-[10px] font-sans text-white/80 tracking-widest">
                    {activeSlideIndex + 1} / {slides.length}
                 </span>
            </div>
        </div>

        {/* Right Spacer */}
        <div className="w-10 md:w-12"></div>
      </div>


      {/* ================= CENTER LAYER: The Story (Photo Viewer) ================= */}
      <div className="flex-1 relative overflow-hidden h-full min-h-0">
        <div
          ref={containerRef}
          className="h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar flex flex-row"
        >
          {slides.map((slide, sIndex) => (
            <div
              key={sIndex}
              data-index={sIndex}
              className="story-slide-wrapper h-full w-screen flex-shrink-0 snap-start relative"
            >
              <StoryCard
                slide={slide}
                isActive={activeSlideIndex === sIndex}
                isBookingSlide={sIndex === slides.length - 1}
                bookingLink="/#contact"
              />
            </div>
          ))}
        </div>
      </div>


      {/* ================= BOTTOM LAYER: The Film Strip (Room Selector) ================= */}
      <div className="absolute bottom-0 left-0 right-0 z-40 pb-6 md:pb-8 pt-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
        
        <div className="container mx-auto px-4 md:px-6 pointer-events-auto">
          
          {/* Title Hint */}
          <div className="hidden md:flex justify-center mb-4">
             <p className="text-[10px] uppercase tracking-widest text-white/40">Select Room to Explore</p>
          </div>

        {/* ================= BOTTOM LAYER: The Glass Dock (Room Selector) ================= */}
      {/* ปรับ Layout: ใช้ w-full บน Mobile, container บน Desktop */}
      <div className="absolute bottom-6 left-0 right-0 z-40 pointer-events-none">
        
        <div className="
          w-full md:container md:mx-auto
          px-4 md:px-6 pointer-events-auto flex justify-center
        ">
          
          {/* The Dock Container (Glassmorphism) */}
          {/* เพิ่ม w-full max-w-full เพื่อให้ overflow-x ทำงานได้ดี */}
          <div className="
            flex gap-2 md:gap-3 p-2 md:p-3
            bg-black/40 backdrop-blur-xl border border-white/10 
            rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]
            overflow-x-auto no-scrollbar w-full max-w-full
          ">
            {rooms.map((r, idx) => (
              <Link
                key={r.id}
                to={`/rooms/${r.id}`}
                className={`
                  relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden 
                  border-2 transition-all duration-300 group cursor-pointer
                  ${idx === safeIndex 
                    ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.4)]' 
                    : 'border-transparent opacity-40 hover:opacity-80 hover:border-white/30 scale-100'
                  }
                `}
                title={r.name}
              >
                {/* Thumbnail Image */}
                <img 
                  src={r.mainImage} 
                  alt={r.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Active Indicator */}
                {idx === safeIndex && (
                  <motion.div 
                    layoutId="activeRoom"
                    className="absolute inset-0 ring-2 ring-white/30 rounded-xl"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
        </div>
      </div>

    </div>
  );
};

export default RoomDetail;