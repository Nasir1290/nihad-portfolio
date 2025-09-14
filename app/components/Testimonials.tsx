/* eslint-disable react/no-unescaped-entities */
// components/Testimonials.tsx
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Elena Sigurd',
    role: 'Manager',
    rating: 5.0,
    text: "Working with Rakibul was an absolute pleasure. His attention to detail and creative approach helped us achieve exactly what we envisioned. The final design exceeded our expectations and our users love the new interface.",
  },
  {
    name: 'David Sigurd',
    role: 'CEO',
    rating: 5.0,
    text: "Professional, creative, and highly skilled. Rakibul delivered outstanding results on time and within budget. His user-centered approach and technical expertise make him an invaluable partner for any design project.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client's <span className="text-[#00d4ff]">Feedback</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What my clients say about my work and collaboration experience
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:border-[#00d4ff]/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                  <span className="text-gray-300 text-sm">{testimonial.role}</span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                  <span className="text-white font-semibold ml-2">{testimonial.rating}</span>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;