const Location = () => {
  return (
    <section
      id="location"
      className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center"
    >
      {/* ===== Text ===== */}
      <div className="w-full md:w-1/2 space-y-8">
        <h2 className="font-serif text-4xl text-warm-900">
          Location
        </h2>

        <p className="text-warm-800 font-light leading-relaxed text-lg">
          Located in the serene highlands of Chiang Dao, just 1.5 hours from
          Chiang Mai city. We are a sanctuary away from the crowds, surrounded
          by limestone mountains, caves, and lush rice fields.
        </p>

        <div className="space-y-2 text-sm tracking-wide text-warm-900">
          <p>
            <strong>Address:</strong> ทุ่งละคร-บ้านถ้ำ, 3024, ตำบล เชียงดาว อำเภอเชียงดาว เชียงใหม่ 50170
          </p>
          <p>
            <strong>Transfer:</strong> Private limousine available upon request.
          </p>
        </div>
      </div>

      {/* ===== Google Map ===== */}
      <div
        className="
          w-full md:w-1/2 h-[400px]
          rounded-2xl overflow-hidden
          shadow-xl
          transition-all duration-700
        "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4310586223646!2d98.94385207511623!3d19.393772641919917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d0a75f2ca859db%3A0x1b6a23060d0e6f02!2sHey%20Now%20Chiang%20Dao%20Stay!5e0!3m2!1sth!2sth!4v1767000774329!5m2!1sth!2sth"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="Hey Now Chiang Dao Stay Map"
        />
      </div>
    </section>
  );
};

export default Location;
