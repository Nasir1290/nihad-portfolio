// pages/index.tsx
"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";

// export default function Home() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Rakibul Hasan Khan - UX UI Designer</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className="bg-[#0a0a0f] text-white overflow-x-hidden">
//         <CursorTrail /> {/* Add the CursorTrail component */}
//         <Navbar isScrolled={isScrolled} />
//         <Hero />
//         <Services />
//         <About />
//         <Projects />
//         <Testimonials />
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   );
// }

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Rakibul Hasan Khan - UX UI Designer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#0a0a0f] text-white overflow-x-hidden">
        <CursorTrail />
        <Navbar isScrolled={isScrolled} />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
