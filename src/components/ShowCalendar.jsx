import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ShowCalendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { content } = useLanguage();
  
  // วิธีแก้ Cookie: เพิ่ม &epr=1 (Experimental Privacy Reduced) เข้าไป เพื่อลดโอกาสขึ้นหน้าจอ Consent
  // และปรับ color/bgcolor ให้เข้ากับ Theme มากขึ้น
  const calendarSrc = "https://calendar.google.com/calendar/embed?src=aidenmccourtt%40gmail.com&ctz=Asia%2FBangkok&mode=month&showPrint=0&showTabs=0&showCalendars=0&showTz=0&wkst=1&bgcolor=%23FDFBF7&color=%233E3832&epr=1";

  return (
    <section id="booking" className="relative py-8 md:py-24 bg-[#FDFBF7] overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#E8E0D5]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F4EFE6]/40 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Responsive Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl lg:text-5xl text-[#3E3832] font-medium mb-2 md:mb-4 leading-tight">
            Reserve Your Stay
          </h2>
        </motion.div>

        {/* Main Calendar Container - Mobile First Heights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-[1400px] md:w-[1200px] lg:w-[1200px] mx-auto"
        >
          {/* Premium Frame Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4C5B0] via-[#E8E0D5] to-[#D4C5B0] rounded-[1rem] md:rounded-[2.5rem] opacity-50 blur-sm" />
          
          <div className="relative bg-white rounded-[1rem] md:rounded-[2rem] shadow-[0_20px_40px_-12px_rgba(62,56,50,0.15)] overflow-hidden border border-[#F0EBE5]">
            
            {/* Inner Header - Mobile Stacked, Desktop Horizontal */}
            <div className="bg-[#FAF8F5] px-4 py-4 md:px-8 md:py-6 border-b border-[#F0EBE5] flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
              <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
                <div className="p-2 bg-[#E8E0D5] rounded-lg text-[#5D554B] shrink-0">
                  <Calendar size={20} strokeWidth={1.5} className="md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-['Cormorant_Garamond',serif] text-xl md:text-2xl text-[#3E3832] font-semibold leading-none">
                    Booking Calendar
                  </h3>
                  <p className="font-['Lato',sans-serif] text-xs md:text-sm text-[#8B8173] flex items-center gap-1 mt-1.5">
                    <Clock size={10} className="md:w-3 md:h-3" />
                    Timezone: GMT+07 (Bangkok)
                  </p>
                </div>
              </div>
              
              {/* Hide on mobile to save space, show on tablet/desktop */}
              <div className="text-right hidden md:block">
                <p className="text-[#A89F91] text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">Powered By</p>
                <p className="text-[#3E3832] font-medium text-sm">Google Calendar</p>
              </div>
            </div>

            {/* Iframe Wrapper - Responsive Heights */}
            {/* 
              Mobile: h-[550px] (สั้นลงเพื่อไม่ต้องเลื่อนมาก, ปล่อยให้หน้าเว็บเลื่อนแทน)
              Tablet: h-[700px]
              Desktop: h-[850px] (ดูหรูหรา)
            */}
            <div className="w-full h-[550px] md:h-[600px] lg:h-[650px] relative bg-white">
              <iframe
                src={calendarSrc}
                style={{ 
                  border: '0',
                  width: '100%',
                  height: '100%',
                  minHeight: '100%'
                }}
                frameBorder="0"
                scrolling="no"
                title="Google Calendar Booking"
                className="w-full h-full"
              />
              
              {/* Loading Overlay */}
              <div className="absolute inset-0 bg-white flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500" id="calendar-loader">
                <span className="font-['Cormorant_Garamond',serif] text-2xl italic text-[#A89F91]">Loading Schedule...</span>
              </div>
            </div>
          </div>
        </motion.div> 
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#3E3832]/90 backdrop-blur-md p-2 md:p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-7xl max-h-[95vh] bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-stone-100 bg-[#FAF8F5]">
                <h3 className="font-['Cormorant_Garamond',serif] text-xl md:text-2xl text-stone-800">Full Schedule</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-600"
                >
                  <X size={20} className="md:w-6 md:h-6" />
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