"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    // Initial check
    checkTheme();

    // Watch for class change on body
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const fadeSlideUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="aboutme"
      className={`relative w-full py-24 px-4 sm:px-8 md:px-12 lg:px-20 transition-all duration-700 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
          : "bg-gradient-to-br from-[#f0f2f8] via-[#dee3ee] to-[#cad5e8] text-black"
      }`}
    >
      {/* Decorative Round Shape */}
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[130px] z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center z-10 relative"
      >
        {/* LEFT: Image */}
        <motion.div variants={fadeSlideUp} className="flex justify-center">
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 6, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full shadow-[0_10px_40px_rgba(166,142,255,0.5)] overflow-hidden"
          >
            <img
              src="/niranjan.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT: Text */}
        <motion.div
          variants={fadeSlideUp}
          className="bg-transparent dark:bg-transparent p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl z-10 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text animate-gradient bg-[length:300%_300%] bg-gradient-to-r from-[#5ba8ff] via-[#a288f2] to-[#b48bf2] mb-6">
  About Me
</h2>

          <p
            className={`text-base sm:text-lg lg:text-xl leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Hello! I'm <span className="font-semibold text-purple-500">Niranjan Desai</span>, Motivated and curious individual with a foundational understanding of core computer science concepts, and a growing interest in areas like web development, cybersecurity and cloud technologies. Seeking opportunities to apply my skills, collaborate with others, and continue learning in an environment that values innovation, growth, and collective success.
          </p>

          <p className="mt-6 mb-2 text-sm sm:text-base text-gray-400 dark:text-gray-500 italic">
            To know more :
          </p>
          <a
            href="/Niranjan Desai.pdf"
            download
            className="inline-flex items-center px-6 py-2 rounded-full font-medium text-white dark:text-white bg-gradient-to-r from-[#7e5bef] to-[#5ba8ff] hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v12m0 0l4-4m-4 4l-4-4M4 20h16"
              />
            </svg>
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
