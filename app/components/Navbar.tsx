// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 p-4 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0f]/98 backdrop-blur-md"
          : "bg-[#0a0a0f]/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#00d4ff]">UX AURA</div>
        <ul
          className={`md:flex md:gap-8 list-none ${
            isOpen
              ? "flex flex-col absolute top-20 left-0 w-full bg-[#0a0a0f]/98 text-center p-8"
              : "hidden md:flex"
          }`}
        >
          <li>
            <Link
              href="#home"
              className="block py-2 text-white font-medium hover:text-[#00d4ff] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00d4ff] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="block py-2 text-white font-medium hover:text-[#00d4ff] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00d4ff] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="block py-2 text-white font-medium hover:text-[#00d4ff] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00d4ff] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="block py-2 text-white font-medium hover:text-[#00d4ff] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00d4ff] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 text-white font-medium hover:text-[#00d4ff] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00d4ff] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
        <Link
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-white px-6 py-2.5 rounded-full font-semibold hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-cyan-500/30"
        >
          CONTACT NOW
        </Link>
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars
            className={`w-6 h-6 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 px-5 py-4">
          <Link
            href="#contact"
            className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-white px-6 py-2.5 rounded-full font-semibold w-full"
          >
            CONTACT NOW
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
