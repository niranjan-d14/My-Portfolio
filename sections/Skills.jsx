"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Skills() {
  const [theme, setTheme] = useState("dark");
  const boxRef = useRef(null);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const scrollVariants = (direction = "left") => ({
    animate: {
      x: direction === "left" ? ["0%", "-50%"] : ["0%", "50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
        delay: 0.1,
      },
    },
  });

  const row1 = [
    { src: "https://img.icons8.com/color/96/000000/c-programming.png", alt: "C" },
    { src: "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png", alt: "C++" },
    { src: "https://img.icons8.com/color/96/000000/html-5.png", alt: "HTML" },
    { src: "https://img.icons8.com/color/96/000000/css3.png", alt: "CSS" },
    { src: "https://img.icons8.com/color/96/000000/javascript.png", alt: "JavaScript" },
  ];

  const row2 = [
    { src: "https://img.icons8.com/color/96/000000/mongodb.png", alt: "MongoDB" },
    { src: "https://img.icons8.com/color/96/000000/firebase.png", alt: "Firebase" },
    { src: "https://img.icons8.com/color/96/000000/visual-studio-code-2019.png", alt: "VSCode" },
    { src: "https://img.icons8.com/color/96/000000/github--v1.png", alt: "GitHub" },
    { src: "https://img.icons8.com/color/96/000000/amazon-web-services.png", alt: "AWS" },
  ];

  const interests = [
    "Music 🎸", "Travelling ✈️", "Gaming 🎮", "Foodie 🍔", "Editing 🎞️",
    "Fitness 🏋", "Communication 🗣", "Cricket 🏏", "Photoholic 📸",
  ];

  const borderColor = "border-indigo-400/40";
  const titleGradient =
    "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500";

  return (
    <section
      id="skills"
      className={`relative w-full py-16 px-4 sm:px-8 md:px-12 lg:px-20 transition-all duration-700 overflow-hidden font-sans ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
          : "bg-gradient-to-br from-[#f0f2f8] via-[#dee3ee] to-[#cad5e8] text-black"
      }`}
    >
      {/* Decorative blur circle */}
      <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-[120px] z-0 hidden md:block" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 z-10 relative max-w-3xl mx-auto"
      >
       <h1
  className="text-4xl sm:text-5xl font-extrabold mb-4"
  style={{
    lineHeight: 1.4,
    paddingBottom: '0.5rem',
    overflow: 'visible',
    display: 'inline-block',
  }}
>
  <span className="bg-gradient-to-r from-[#6a11cb] via-[#b185db] to-[#2575fc] bg-clip-text text-transparent animate-gradient inline-block mr-2">
    ✨ Behind
  </span>
  <span className="bg-gradient-to-r from-[#6a11cb] via-[#b185db] to-[#2575fc] bg-clip-text text-transparent animate-gradient inline-block mr-2">
    the
  </span>
  <span className="bg-gradient-to-r from-[#6a11cb] via-[#b185db] to-[#2575fc] bg-clip-text text-transparent animate-gradient inline-block">
    Magic
  </span>
</h1>

  <p className={`text-lg italic text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
  "Equipped with tools, powered by passion."
</p>



      </motion.div>

      {/* Boxes container */}
      <div className="flex flex-wrap justify-center items-start gap-8 max-w-7xl mx-auto z-10 relative w-full">
        {/* My Passion Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs h-80 bg-transparent border ${borderColor} rounded-[2.5rem] p-6 backdrop-blur-md flex flex-col justify-between`}
        >
          <h2 className={`text-xl font-bold tracking-wide mb-4 flex items-center gap-2 ${titleGradient}`}>
            <span className="text-2xl">✨</span> Pulse of Life
          </h2>
          <img
            src="music.png"
            alt="Music Passion"
            className="rounded-2xl w-full object-contain h-40 opacity-90"
          />
          <div className={`mt-4 text-sm text-center italic ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>
            "Music is where I truly belong."
          </div>
        </motion.div>

        {/* My Toolbox Box */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs h-80 bg-transparent border ${borderColor} rounded-[2.5rem] p-6 backdrop-blur-md flex flex-col`}
        >
          <h2
            className="text-xl font-bold tracking-wide mb-1 flex items-center gap-2 bg-gradient-to-r from-purple-400 to-indigo-600 text-transparent bg-clip-text"
          >
            <span className="text-2xl">🛠️</span> My Toolbox
          </h2>
          <p
            className={`italic mb-6 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            "The right tools turn ideas into reality."
          </p>

          <div className="flex-1 flex flex-col justify-center space-y-6 overflow-hidden">
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex gap-8 min-w-max justify-center"
                variants={scrollVariants("left")}
                animate="animate"
              >
                {row1.map((tool, index) => (
                  <motion.img
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    key={index}
                    src={tool.src}
                    alt={tool.alt}
                    className="h-14 w-auto object-contain"
                  />
                ))}
              </motion.div>
            </div>
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex gap-8 min-w-max justify-center"
                variants={scrollVariants("right")}
                animate="animate"
              >
                {row2.map((tool, index) => (
                  <motion.img
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    key={index}
                    src={tool.src}
                    alt={tool.alt}
                    className="h-14 w-auto object-contain"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Beyond the Code Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          ref={boxRef}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs h-80 bg-transparent border border-purple-500/30 rounded-[2.5rem] p-6 backdrop-blur-md flex flex-col items-center overflow-hidden relative"
        >
          {/* Header Section */}
          {/* Header Section */}
<div className="w-full text-left mb-4 z-10 pointer-events-none">
  <h2
    className="text-xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-600 text-transparent bg-clip-text"
    style={{ lineHeight: 1.2 }}
  >
    ✨ Beyond the Code
  </h2>
  <p
    className={`italic mt-2 mb-4 text-sm max-w-xs ${
      theme === "dark" ? "text-gray-300" : "text-gray-700"
    }`}
  >
    "Code is my tool, but not my limit."
  </p>
</div>


          {/* Draggable Area */}
          <div className="absolute top-24 left-0 right-0 bottom-0 px-4">
            {interests.map((item, i) => (
              <motion.div
                key={i}
                drag
                dragConstraints={boxRef}
                dragElastic={0.2}
                style={{
                  position: "absolute",
                  top: Math.random() * 120,
                  left: Math.random() * 140,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95, cursor: "grabbing" }}
                className="px-3 py-1.5 bg-gradient-to-br from-purple-400 to-indigo-500 text-white rounded-full text-xs font-semibold shadow-md cursor-grab"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
