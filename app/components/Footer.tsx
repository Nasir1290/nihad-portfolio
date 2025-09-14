// components/Footer.tsx
import {
  FaFacebookF,
  FaBehance,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a2e] py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Rakibul Hasan Khan
            </h3>
            <p className="text-gray-300">UX/UI Designer</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/nehad.khan.5667"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-all shadow-lg hover:shadow-cyan-500/30"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.behance.net/rakibulnehad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-all shadow-lg hover:shadow-cyan-500/30"
            >
              <FaBehance />
            </a>
            <a
              href="https://www.linkedin.com/in/rakibul-hasan-khan-423060249/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-all shadow-lg hover:shadow-cyan-500/30"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/_l_nehad_l_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-all shadow-lg hover:shadow-cyan-500/30"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 All rights reserved. Designed by Rakibul Hasan Khan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
