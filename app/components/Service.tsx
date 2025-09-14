// components/Services.tsx
import { FaDesktop, FaMobileAlt, FaPaintBrush, FaCode, FaChartBar, FaLayerGroup, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { icon: FaDesktop, title: 'Website Design', desc: 'Creative and modern website designs that engage users and deliver results' },
  { icon: FaMobileAlt, title: 'App Design', desc: 'Mobile app interfaces that provide seamless user experiences across platforms' },
  { icon: FaPaintBrush, title: 'Creative Solutions', desc: 'Innovative design solutions tailored to your brand and business objectives' },
  { icon: FaCode, title: 'Business Intelligence', desc: 'Data-driven design decisions that help optimize user experience and conversions' },
  { icon: FaChartBar, title: 'Marketing/branding', desc: 'Complete brand identity and marketing material design for your business' },
  { icon: FaLayerGroup, title: 'Logo Design', desc: 'Professional logo designs that represent your brand identity perfectly' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-[#00d4ff]">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What can I do for you? I provide comprehensive design solutions
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-2.5 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ borderColor: 'rgba(0,212,255,0.3)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00d4ff]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-2xl mb-6 text-2xl">
                <service.icon />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{service.desc}</p>
              <a href="#" className="text-[#00d4ff] font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Explore Service <FaArrowRight className="text-sm" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;