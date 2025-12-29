import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- Import Context และ Data Structure ที่อัปเดตแล้ว ---
import { useLanguage } from "../contexts/LanguageContext"; 
import { contentData } from "../data/content";

import StoryCard from "./Mobile/StoryCard";
import ProgressBar from "./Mobile/ProgressBar";
import GodRay from "./Background/GodRay";

const RoomDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // --- 1. ดึงข้อมูลจาก Context (รองรับภาษา) ---
  const { content } = useLanguage();
  
  // --- 2. หาห้องตาม ID จากใน Content ปัจจุบัน ---
  const room = content.rooms.find((r) => r.id === parseInt(id));

  if (!room) return <div className="text-center py-20 text-white">Room not found</div>;

  // --- 3. สร้าง Slides จาก Gallery ---
  const createSlides = (room) => {
    const slides = [];
    
    if (room.gallery) {
        room.gallery.forEach((item, index) => {
            slides.push({
                image: item.image,
                title: item.title || room.name,
                desc: item.desc || room.desc,
                subtitle: item.subtitle || `Slide ${index + 1}`,
                action: index === room.gallery.length - 1 ? content.bookNow : content.slideAction, // ใช้ Text จาก Context
            });
        });
    }

    // Slide สุดท้ายสำหรับ Booking
    slides.push({
        image: room.mainImage,
        title: content.bookNow || "Book This Room", // ใช้ Text จาก Context
        desc: `Includes: ${room.features ? room.features.join(' • ') : 'All amenities included'}.`,
        subtitle: "Included",
        action: content.bookNow || "Book This Room"
    });

    return slides;
  };

  const slides = createSlides(room);

  // --- 4. Intersection Observer ---
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            if (!isNaN(index)) {
              setActiveSlideIndex(index);
            }
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
  }, []);

  return (
    <div className="relative bg-stone-900 text-white h-screen w-screen overflow-hidden font-serif selection:bg-white/20">
      
      {/* Background 3D */}
      <div className="fixed inset-0 z-[-1] opacity-40 pointer-events-none">
        <GodRay />
      </div>

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/#rooms">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-black/20 backdrop-blur-md text-white px-5 py-2 rounded-full border border-white/10 shadow-lg text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            {content.backToRooms || "Back to Rooms"} {/* ใช้ Text จาก Context */}
          </motion.button>
        </Link>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-6 left-0 right-0 z-40 px-20 flex justify-center">
        <ProgressBar 
          totalSlides={slides.length} 
          activeIndex={activeSlideIndex} 
        />
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:flex fixed top-1/2 left-6 -translate-y-1/2 z-40 flex-col gap-4">
        <button 
          onClick={() => {
             if (activeSlideIndex > 0) {
                const target = containerRef.current.children[activeSlideIndex - 1];
                target?.scrollIntoView({ behavior: 'smooth' });
             }
          }}
          className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
        >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
        </button>
        <button 
          onClick={() => {
             if (activeSlideIndex < slides.length - 1) {
                const target = containerRef.current.children[activeSlideIndex + 1];
                target?.scrollIntoView({ behavior: 'smooth' });
             }
          }}
          className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
        >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
      </div>

      {/* Main Snap Container */}
      <div
        ref={containerRef}
        className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        {slides.map((slide, sIndex) => (
          <div
            key={sIndex}
            data-index={sIndex}
            className="story-slide-wrapper w-full h-[100dvh] snap-start relative"
          >
            <StoryCard
              slide={slide}
              isActive={activeSlideIndex === sIndex}
              // ส่ง props เหล่านี้ไปด้วย (ตาม Code ก่อนหน้า)
              isBookingSlide={sIndex === slides.length - 1}
              bookingLink="/#contact"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDetail;