import { motion } from 'framer-motion';
import { testimonials } from '../data/content';

const Testimonials = () => {
  return (
    <section id="layout" className="py-24 px-6 bg-forest-600 text-warm-50">
      <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <p className="font-serif text-2xl md:text-4xl leading-snug italic opacity-90">
              "{t.text}"
            </p>
            <cite className="not-italic mt-6 block text-sm uppercase tracking-widest opacity-70">
              {t.author}
            </cite>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
