"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactModal from "../components/ContactModal"; // Adjust path if needed

export default function FooterCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer id="footer-contact" className="w-full px-6 py-10 bg-[#0b1120] text-white">
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <div className="max-w-6xl mx-auto space-y-12">
        {/* CTA Box */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full bg-gradient-to-r from-[#5ba8ff] via-[#7e7efc] to-[#b48bf2] rounded-3xl px-8 py-6 sm:py-8 text-black shadow-lg">
          <div className="mb-6 sm:mb-0 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
              Let’s build something exceptional.
            </h2>
            <p className="text-base sm:text-lg">
              Whether you have a groundbreaking idea or just want to explore possibilities — I’m here to collaborate, design, and innovate with you.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-slate-300 via-blue-400 to-purple-600 text-black hover:scale-105 shadow-md transition-transform"
          >
            Contact Me 👨🏻‍💻
          </button>
        </div>

        <div className="border-t border-gray-700"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">© 2025 All rights reserved.</p>
          <div className="flex gap-6 text-white text-base">
            <a href="https://github.com/niranjand14" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-300">
              <FaGithub /> Github
            </a>
            <a href="https://www.linkedin.com/in/niranjan-desai14/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-300">
              <FaLinkedin /> Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
