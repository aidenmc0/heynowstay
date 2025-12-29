import { useLanguage } from "../contexts/LanguageContext"; // Import Context

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

          {/* Mobile (fallback) */}
          <img
            src="/assets/image/Overview/Phone/6.jpg"
            alt="Chiang Dao Mist"
            className="w-full h-full object-cover brightness-[0.65] scale-105"
          />
        </picture>

        <div className="absolute inset-0 bg-gradient-to-t from-warm-50 via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 w-full pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative max-w-2xl animate-[fadeInUp_1s_ease-out]">
          {/* Backdrop Glass */}
          <div
            className="absolute -inset-6 md:-inset-8 rounded-md
                  bg-black/35 backdrop-blur-sm 
                  shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)]
                  pointer-events-none"
          />

          {/* Content */}
          <div className="relative">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 drop-shadow-sm">
              Hey Now <br />
              <i className="text-5xl md:text-6xl lg:text-7xl">
                Chiang Dao Stay
              </i>
            </h1>

            <p
              className="text-warm-50 text-lg md:text-xl font-light mb-8 
                  border-l border-white/40 pl-4 max-w-md drop-shadow-sm"
            >
              {content.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-forest-600/90 backdrop-blur-sm text-white px-8 py-3 rounded-full text-sm tracking-widest uppercase border border-white/20 hover:bg-forest-700 transition-all">
                {content.hero.book}
              </button>
              <button className="bg-white/5 text-white px-8 py-3 rounded-full text-sm tracking-widest uppercase border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all">
                {content.hero.ourstory}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
