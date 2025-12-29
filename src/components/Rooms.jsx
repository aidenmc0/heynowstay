import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext"; // Import เข้ามาเพื่อดึง Content

const Rooms = () => {
  // --- 1. ดึงข้อมูลจาก Context ---
  const { content } = useLanguage(); 
  
  return (
    <section id="rooms" className="py-24 px-6 max-w-7xl mx-auto bg-warm-50">
      <div className="text-center mb-20">
        {/* --- 2. ใช้ Text จาก content แทน Hardcode เพื่อรองรับภาษา --- */}
        <h2 className="font-serif text-5xl text-warm-900 mb-4 tracking-tight">
          {content.roomsTitle} {/* เช่น: Your Sanctuary / พื้นที่พักผ่อนคลาสิก */}
        </h2>
        <p className="text-warm-700 font-light max-w-2xl mx-auto text-lg md:text-xl">
          {content.roomsDesc} {/* เช่น: Designed for rest... / ออกแบบมาเพื่อ... */}
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center -mx-6">
        {/* --- 3. วน Loop ใช้ content.rooms แทน rooms --- */}
        {content.rooms.map((room) => (
          <Link
            key={room.id}
            to={`/rooms/${room.id}`}
            className="w-full px-6 md:w-[calc(33.333%-32px)] group cursor-pointer mb-12"
          >
            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.25)] border border-transparent group-hover:border-forest-600 transition-all duration-700">
              {/* ใช้ room.mainImage ถูกต้องแล้วในโค้ดที่คุณส่งมา */}
              <img
                src={room.mainImage}
                alt={room.name}
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="bg-white/90 text-warm-900 px-6 py-2 rounded-full text-sm uppercase tracking-widest backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {content.viewDetails} {/* เช่น: View Details / ดูรายละเอียด */}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="mt-6 text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-warm-900 group-hover:text-forest-600 transition-colors mb-2">
                {room.name}
              </h3>
              <p className="text-warm-700 font-light leading-relaxed text-sm md:text-base">
                {room.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Rooms;