// components/Projects.tsx
import { useState } from 'react';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    category: 'mobile',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Social Media App Design',
    date: '15 Aug, 2023',
  },
  {
    id: 2,
    category: 'website',
    image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Sugee - Loan Management System for Rural Sector',
    date: '10 Aug, 2023',
  },
  {
    id: 3,
    category: 'mobile',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Create the innovative way to present in Digital Media',
    date: '05 Aug, 2023',
  },
];

const categories = ['all', 'mobile', 'website', 'case-study', 'branding'];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === category));
    }
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-[#00d4ff]">Project</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Take a look at some of my recent work and creative projects
          </motion.p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2.5 rounded-full border-2 border-white/10 text-gray-300 font-medium transition-all ${activeFilter === cat ? 'border-[#00d4ff] text-[#00d4ff] bg-[#00d4ff]/10' : 'hover:border-[#00d4ff] hover:text-[#00d4ff]'}`}
              onClick={() => handleFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2.5 transition-all duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="w-16 h-16 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-white rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                    <FaEye />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[#00d4ff] text-sm font-semibold">{project.category.toUpperCase()}</span>
                <h3 className="text-xl font-bold mt-2 mb-2 text-white">{project.title}</h3>
                <span className="text-gray-300 text-sm">{project.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;