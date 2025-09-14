/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unescaped-entities */
// // components/About.tsx
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useEffect, useRef } from 'react';
// import { FaDownload } from 'react-icons/fa';

// const About: React.FC = () => {
//   const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const progressBars = entry.target.querySelectorAll('.circle-progress');
//           progressBars.forEach((bar, index) => {
//             const percent = parseInt(bar.getAttribute('data-percent') || '0');
//             let current = 0;
//             const increment = percent / 100;
//             const timer = setInterval(() => {
//               current += increment;
//               if (current >= increment) {
//                 (bar as HTMLElement).style.setProperty('--progress', `${percent}deg`);
//                 clearInterval(timer);
//               }
//             }, 20);
//           });
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.5 });

//     const statsSection = document.querySelector('.stats-grid');
//     if (statsSection) observer.observe(statsSection);

//     return () => observer.disconnect();
//   }, []);

//   const skills = [
//     { name: 'Figma', percent: 100, text: '100%' },
//     { name: 'Adobe XD', percent: 100, text: '100%' },
//     { name: 'Adobe Illustrator', percent: 85, text: '80%' },
//     { name: 'Adobe Photoshop', percent: 60, text: '60%' },
//     { name: 'Canva', percent: 92, text: '80%' },
//   ];

//   return (
//     <section id="about" className="py-24 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
//       <div className="max-w-6xl mx-auto px-5">
//         <div className="text-center mb-16">
//           <motion.h2
//             className="text-5xl md:text-6xl font-extrabold mb-4"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             My <span className="text-[#00d4ff]">Specialty</span>
//           </motion.h2>
//           <motion.p
//             className="text-xl text-gray-300 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             I specialize in creating comprehensive design solutions that combine creativity with functionality
//           </motion.p>
//         </div>
//         <motion.div
//           className="grid md:grid-cols-[400px_1fr] gap-16 items-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="relative">
//             <Image
//               src="/images/rakibul.png" // Place your image in public/images/
//               alt="Rakibul Hasan Khan"
//               width={400}
//               height={400}
//               className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-300"
//             />
//           </div>
//           <div>
//             <motion.p
//               className="text-gray-300 leading-8 mb-6 text-lg"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               I believe that great design is about solving problems with both beauty and functionality. With over 1 years of experience in UX/UI design, I have worked with diverse clients ranging from startups to established enterprises. My approach combines user research, modern design principles, and cutting-edge technology to create experiences that users love and businesses value.
//             </motion.p>
//             <motion.p
//               className="text-gray-300 leading-8 mb-8 text-lg"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               My expertise spans across web design, mobile app design, branding, and user experience strategy. I'm passionate about staying updated with the latest design trends and technologies to deliver solutions that are not only visually appealing but also highly functional and user-friendly.
//             </motion.p>
//             <motion.a
//               href="https://drive.google.com/drive/folders/1Y4V30up4UGO3TcQ3gbcvJCiTdPxWkXlk?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:-translate-y-1 transition-all shadow-lg hover:shadow-cyan-500/30"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               <FaDownload /> Download Resume
//             </motion.a>
//           </div>
//         </motion.div>
//         <div className="stats-grid flex flex-wrap justify-center gap-12 mt-16">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               className="text-center"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <div
//                 ref={(el) => { progressRefs.current[index] = el; }}
//                 className="circle-progress w-32 h-32 rounded-full bg-[conic-gradient(#00d4ff_0deg,#00d4ff_var(--progress,0deg),rgba(255,255,255,0.1)_var(--progress,0deg))] flex items-center justify-center mb-4 relative mx-auto"
//                 style={{ '--progress': '0deg' } as React.CSSProperties}
//                 data-percent={skill.percent}
//               >
//                 <div className="w-20 h-20 bg-[#0a0a0f] rounded-full absolute"></div>
//                 <div className="relative z-10 text-xl font-bold text-[#00d4ff]">{skill.text}</div>
//               </div>
//               <span className="text-gray-300 text-sm">{skill.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaDownload } from 'react-icons/fa';
import RImage from "@/app/src/rakibul.png";

const About: React.FC = () => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const skills = [
    { name: 'Figma', percent: 100, text: '100%' },
    { name: 'Adobe XD', percent: 100, text: '100%' },
    { name: 'Adobe Illustrator', percent: 80, text: '80%' },
    { name: 'Adobe Photoshop', percent: 60, text: '60%' },
    { name: 'Canva', percent: 80, text: '80%' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            progressRefs.current.forEach((bar, index) => {
              if (!bar) return;
              const percent = skills[index].percent;
              const degrees = (percent / 100) * 360;
              let currentDegree = 0;
              const interval = setInterval(() => {
                currentDegree += 3;
                if (currentDegree >= degrees) {
                  currentDegree = degrees;
                  clearInterval(interval);
                }
                bar.style.setProperty('--progress', `${currentDegree}deg`);
              }, 20);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -50px 0px' }
    );

    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-[#00d4ff]">Specialty</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I specialize in creating comprehensive design solutions that combine creativity with functionality
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-8 md:gap-16 items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <Image
              src={RImage}
              alt="Rakibul Hasan Khan"
              width={400}
              height={400}
              className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div>
            <motion.p
              className="text-gray-300 leading-8 mb-6 text-base sm:text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I believe that great design is about solving problems with both beauty and functionality. With over 1 years of experience in UX/UI design, I have worked with diverse clients ranging from startups to established enterprises. My approach combines user research, modern design principles, and cutting-edge technology to create experiences that users love and businesses value.
            </motion.p>
            <motion.p
              className="text-gray-300 leading-8 mb-8 text-base sm:text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My expertise spans across web design, mobile app design, branding, and user experience strategy. I'm passionate about staying updated with the latest design trends and technologies to deliver solutions that are not only visually appealing but also highly functional and user-friendly.
            </motion.p>
            <motion.a
              href="https://drive.google.com/drive/folders/1Y4V30up4UGO3TcQ3gbcvJCiTdPxWkXlk?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:-translate-y-1 transition-all shadow-lg hover:shadow-cyan-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FaDownload /> Download Resume
            </motion.a>
          </div>
        </motion.div>
        <div className="stats-grid flex flex-wrap justify-center gap-8 sm:gap-12 mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                ref={(el) => {
                  progressRefs.current[index] = el;
                }}
                className="circle-progress w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-[conic-gradient(#00d4ff_0deg,#00d4ff_var(--progress,0deg),rgba(255,255,255,0.1)_var(--progress,0deg))] flex items-center justify-center mb-4 relative mx-auto"
                style={{ '--progress': '0deg' } as React.CSSProperties}
                data-percent={skill.percent}
              >
                <div className="w-20 h-20 bg-[#0a0a0f] rounded-full absolute"></div>
                <div className="relative z-10 text-lg sm:text-xl font-bold text-[#00d4ff]">{skill.text}</div>
              </div>
              <span className="text-gray-300 text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;