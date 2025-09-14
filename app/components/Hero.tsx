/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unescaped-entities */
// // components/Hero.tsx
// import { useState, useEffect } from 'react';
// import { FaArrowDown } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Hero: React.FC = () => {
//   const [typedText, setTypedText] = useState('');
//   const fullText = 'UX UI DESIGNER';

//   useEffect(() => {
//     let i = 0;
//     const timer = setInterval(() => {
//       if (i < fullText.length) {
//         setTypedText(fullText.slice(0, i + 1));
//         i++;
//       } else {
//         clearInterval(timer);
//       }
//     }, 150);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-b from-[#1a1a2e] via-[#1a1a2e] to-[#0a0a0f] overflow-hidden">
//       {/* Animated Lines */}
//       <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(0,212,255,0.1)_100%)] bg-[length:100px_100px] animate-moveLines"></div>
//       {/* Floating Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute w-[6px] h-[6px] bg-[#00d4ff] rounded-full top-[20%] left-[10%] animate-float" style={{ animationDelay: '-2s' }}></div>
//         <div className="absolute w-[6px] h-[6px] bg-[#00d4ff] rounded-full top-[60%] right-[15%] animate-float" style={{ animationDelay: '-4s' }}></div>
//         {/* Additional floating dots */}
//         {Array.from({ length: 10 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-[4px] h-[4px] bg-[rgba(0,212,255,0.6)] rounded-full animate-float"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * -6}s`,
//               animationDuration: `${6 + Math.random() * 4}s`,
//             }}
//           />
//         ))}
//       </div>
//       <div className="relative z-10 w-full max-w-6xl mx-auto px-5">
//         <div className="max-w-2xl mx-auto text-center">
//           <motion.h1
//             className="text-8xl md:text-9xl font-black uppercase tracking-[8px] mb-2 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent animate-glow"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             RAKIBUL
//           </motion.h1>
//           <motion.h3
//             className="text-4xl md:text-5xl font-bold uppercase tracking-[4px] mb-4 text-white"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             HASAN KHAN
//           </motion.h3>
//           <motion.h2
//             className="text-2xl md:text-3xl font-semibold text-[#00d4ff] mb-8 tracking-[2px] uppercase"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             {typedText}
//             <span className="animate-pulse">|</span>
//           </motion.h2>
//           <motion.p
//             className="text-lg text-gray-300 max-w-xl mx-auto mb-12 leading-8"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             I'm passionate about designing beautiful and functional user experiences that solve real-world problems. With expertise in modern design tools and user-centered design principles.
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <button className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-white px-16 py-4 rounded-full font-semibold hover:-translate-y-1 transition-all shadow-lg hover:shadow-cyan-500/30">HIRE ME</button>
//             <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all hover:-translate-y-1">Explore my work</button>
//           </motion.div>
//           <motion.div
//             className="flex justify-center gap-16"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1 }}
//           >
//             <div className="text-center">
//               <span className="block text-3xl font-extrabold text-[#00d4ff]">1+</span>
//               <span className="text-sm text-gray-300">Years Experience</span>
//             </div>
//             <div className="text-center">
//               <span className="block text-3xl font-extrabold text-[#00d4ff]">30+</span>
//               <span className="text-sm text-gray-300">Projects Done</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300 text-sm animate-bounce">
//         <span>Scroll Down</span>
//         <FaArrowDown />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "UX UI DESIGNER";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen lg:mt-24 flex items-center relative bg-gradient-to-b from-[#1a1a2e] via-[#1a1a2e] to-[#0a0a0f] overflow-hidden"
    >
      {/* Animated Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(0,212,255,0.1)_100%),linear-gradient(0deg,transparent_95%,rgba(0,212,255,0.1)_100%)] bg-[length:100px_100px] animate-moveLines"></div>
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-[6px] h-[6px] bg-[#00d4ff] rounded-full top-[20%] left-[10%] animate-float"
          style={{ animationDelay: "-2s" }}
        ></div>
        <div
          className="absolute w-[6px] h-[6px] bg-[#00d4ff] rounded-full top-[60%] right-[15%] animate-float"
          style={{ animationDelay: "-4s" }}
        ></div>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[4px] h-[4px] bg-[rgba(0,212,255,0.6)] rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * -6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-[8px] mb-2 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent animate-glow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            RAKIBUL
          </motion.h1>
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[4px] mb-4 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            HASAN KHAN
          </motion.h3>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00d4ff] mb-8 tracking-[2px] uppercase"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-12 leading-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm passionate about designing beautiful and functional user
            experiences that solve real-world problems. With expertise in modern
            design tools and user-centered design principles.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-white px-8 sm:px-16 py-4 rounded-full font-semibold hover:-translate-y-1 transition-all shadow-lg hover:shadow-cyan-500/30">
              HIRE ME
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all hover:-translate-y-1">
              Explore my work
            </button>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-8 sm:gap-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#00d4ff]">
                1+
              </span>
              <span className="text-sm text-gray-300">Years Experience</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#00d4ff]">
                30+
              </span>
              <span className="text-sm text-gray-300">Projects Done</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2  flex-col items-center gap-2 text-gray-300 text-sm animate-bounce hidden sm:flex">
        <span>Scroll Down</span>
        <FaArrowDown />
      </div>
    </section>
  );
};

export default Hero;
