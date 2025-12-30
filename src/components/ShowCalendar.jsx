import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ShowCalendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { content } = useLanguage();
  
  // ปรับ URL ให้ซ่อนเมนูที่ไม่จำเป็นของ Google Calendar (Print, etc.) เพื่อความสะอาดตา
  const calendarSrc = "https://calendar.google.com/calendar/embed?src=aidenmccourtt%40gmail.com&ctz=Asia%2FBangkok&mode=month&showPrint=0&showTabs=0&showCalendars=0&showTz=0&wkst=1&bgcolor=%23FFFFFF&color=%2329527A";

  return (
    <section id="calendar" className="relative py-24 md:py-32 bg-[#FDFBF7] overflow-hidden">
      
      {/* Background Decoration - เพิ่มความลึกและความหรูหรา */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#E8E0D5]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F4EFE6]/40 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Typography เน้นความหรูหรา */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 border border-[#A89F91] rounded-full text-[#8B8173] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Availability
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl text-[#3E3832] font-medium mb-4">
            Reserve Your Stay
          </h2>
          <p className="font-['Lato',sans-serif] text-[#6B6359] text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            Select your dates directly to begin your journey with us.
          </p>
        </motion.div>

        {/* Main Calendar Container - แก้ปัญหาเล็กไปด้วยการทำให้มันใหญ่และดูโปร่ง */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-[1400px] mx-auto"
        >
          {/* Premium Frame Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4C5B0] via-[#E8E0D5] to-[#D4C5B0] rounded-[2.5rem] opacity-50 blur-sm" />
          
          <div className="relative bg-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(62,56,50,0.15)] overflow-hidden border border-[#F0EBE5]">
            
            {/* Inner Header for the Card */}
            <div className="bg-[#FAF8F5] px-8 py-6 border-b border-[#F0EBE5] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#E8E0D5] rounded-lg text-[#5D554B]">
                  <Calendar size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#3E3832] font-semibold">
                    Booking Calendar
                  </h3>
                  <p className="font-['Lato',sans-serif] text-sm text-[#8B8173] flex items-center gap-1 mt-0.5">
                    <Clock size={12} />
                    Timezone: GMT+07 (Bangkok)
                  </p>
                </div>
              </div>
              
              <div className="text-right hidden md:block">
                <p className="text-[#A89F91] text-xs font-semibold tracking-widest uppercase mb-1">Powered By</p>
                <p className="text-[#3E3832] font-medium text-sm">Google Calendar</p>
              </div>
            </div>

            {/* Iframe Wrapper - ปรับความสูงให้เต็มตาและใหญ่ขึ้น */}
            <div className="w-full h-[750px] md:h-[850px] relative bg-white">
              <iframe
                src={calendarSrc}
                style={{ 
                  border: '0',
                  width: '100%',
                  height: '100%',
                  // เทคนิคปรับ iframe ให้ดูสะอาดขึ้น (แต่อยู่ในข้อจำกัดของ Google)
                }}
                frameBorder="0"
                scrolling="no"
                title="Google Calendar Booking"
                className="w-full h-full"
              />
              
              {/* Loading Overlay State (Optional UX) */}
              <div className="absolute inset-0 bg-white flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500" id="calendar-loader">
                <span className="font-['Cormorant_Garamond',serif] text-2xl italic text-[#A89F91]">Loading Schedule...</span>
              </div>
            </div>
          </div>
        </motion.div> 

      </div>

      {/* Fullscreen Modal Logic (Preserved but refined) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#3E3832]/90 backdrop-blur-md p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-stone-100 bg-[#FAF8F5]">
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-stone-800">Full Schedule</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-600"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 bg-white">
                <iframe
                  src={calendarSrc}
                  style={{ border: 0, width: '100%', height: '100%' }}
                  frameBorder="0"
                  title="Fullscreen Calendar"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShowCalendar;