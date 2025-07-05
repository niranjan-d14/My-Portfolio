"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import { FaCog, FaMoon, FaVolumeMute, FaVolumeUp, FaSun } from "react-icons/fa";

const TypingText = ({ isDark }) => {
  const [index, setIndex] = useState(0);
  const lines = [
    "Engineering meets creativity(); I'm",
    "Designing immersive experiences.",
    "Building with passion and purpose.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      key={lines[index]}
      initial={{ width: 0 }}
      animate={{ width: "fit-content" }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className={`overflow-hidden border-r-2 animate-typing text-base sm:text-xl md:text-2xl whitespace-nowrap pr-1 font-mono ${
        isDark ? "text-white border-white" : "text-[#0f0c29] border-[#0f0c29]"
      }`}
    >
      {lines[index]}
    </motion.h1>
  );
};

export default function Hero() {
  const [isDark, setIsDark] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [explode, setExplode] = useState(false);
  const [showHello, setShowHello] = useState(false);
  const audioRef = useRef(null);

  const AnimatedLetters = useMemo(
    () => ({ text }) => (
      <span className="inline-block">
        {[...text].map((char, i) => (
          <motion.span
            key={i}
            whileHover="glitch"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            variants={{
              glitch: {
                x: [0, -2, 2, -1, 1, 0],
                y: [0, -1, 1, 0],
                color: isDark
                  ? ["#fff", "#5ba8ff", "#b48bf2", "#fff"]
                  : ["#0f0c29", "#5ba8ff", "#b48bf2", "#0f0c29"],
              },
            }}
            className="inline-block cursor-pointer px-0.5"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    ),
    [isDark]
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.0.45/build/spline-viewer.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);
  }, [isDark]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (!isMuted && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      } else if (isMuted && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    }
  }, [isMuted, volume]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleAvatarClick = () => {
    setExplode(true);
    setShowHello(true);
    setTimeout(() => {
      setExplode(false);
      setShowHello(false);
    }, 1800);
  };

  const particles = Array.from({ length: 25 }, (_, i) => (
    <motion.img
      key={i}
      src="/avatar2.png"
      initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      animate={{
        opacity: 0,
        x: (Math.random() - 0.5) * 300,
        y: 150 + Math.random() * 150,
        scale: 0.2,
        rotate: Math.random() * 360,
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-3 h-3 rounded-full absolute object-cover"
      style={{ left: "50%", top: "50%" }}
    />
  ));

  return (
    <section
      id="home"
      className={`relative w-full overflow-hidden min-h-screen lg:min-h-[100vh] ${
        isDark
          ? "bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
          : "bg-gradient-to-br from-[#f0f2f8] via-[#dee3ee] to-[#cad5e8] text-black"
      }`}
    >
      <Canvas className="absolute inset-0 -z-10">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Stars radius={120} depth={50} count={3000} factor={4} fade speed={1} />
        <Sphere args={[1.4, 64, 64]} scale={6}>
          <MeshDistortMaterial
            color={isDark ? "#181818" : "#c0cadb"}
            distort={0.5}
            speed={1.2}
          />
        </Sphere>
      </Canvas>

      <audio id="background-audio" ref={audioRef} loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Navbar */}
      <nav className="fixed top-4 md:top-6 w-full z-20 px-4 sm:px-6">
        <div
          className={`flex flex-wrap items-center justify-between w-full max-w-7xl mx-auto 
            px-4 sm:px-6 py-3 rounded-full backdrop-blur-md
            ${isDark
              ? "bg-gradient-to-r from-[#5ba8ff]/10 to-[#b48bf2]/10"
              : "bg-gradient-to-r from-[#b48bf2]/20 to-[#5ba8ff]/20"}
            border border-white/10 dark:border-white/20`}
        >
          {/* Avatar */}
          <motion.div
            onClick={handleAvatarClick}
            className="relative cursor-pointer ml-[-1px] sm:ml-[-3px]"
          >
            <motion.img
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/avatar2.png"
              alt="avatar"
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover shadow-md"
            />
            <AnimatePresence>{explode && <>{particles}</>}</AnimatePresence>
            <AnimatePresence>
              {showHello && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: -40 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 1 }}
                  className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-white/80 dark:bg-[#0f0c29]/80 text-xs font-mono text-black dark:text-white rounded-full shadow-lg border border-gray-300 dark:border-white/20"
                >
                  Hello World!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Links */}
          <ul
            className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm md:text-base font-mono ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {"Home AboutMe Skills Projects Certifications".split(" ").map((item) => (
              <li
                key={item}
                className="hover:text-purple-300 transition whitespace-nowrap"
              >
                <a href={`#${item.toLowerCase()}`}>{`</${item}>`}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Content & Spline */}
      <div className="flex flex-col lg:flex-row items-center justify-between pt-[90px] sm:pt-[80px] px-4 sm:px-6 md:px-20 gap-10">
        {/* Text */}
        <div className="flex flex-col justify-center h-full text-left space-y-5 max-w-3xl w-full mt-[-30px] sm:mt-[-40px] lg:mt-[-60px]">
          <TypingText isDark={isDark} />
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[2.3rem] sm:text-[2.9rem] md:text-[3.6rem] font-extrabold bg-gradient-to-r from-[#5ba8ff] to-[#b48bf2] bg-clip-text text-transparent leading-tight"
          >
            <AnimatedLetters text="Niranjan Desai." />
          </motion.h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Computer Science Engineer
          </h3>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-3"
          >
            <a
              href="#footer-contact"
              className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-slate-300 via-blue-400 to-purple-600 text-black hover:scale-105 shadow-md transition-transform"
            >
              Let’s Talk!
            </a>

            <div className="relative flex items-center gap-2">
              <button
                onClick={() => setShowOptions((prev) => !prev)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:rotate-90 transition-transform"
              >
                <FaCog className={`text-xl ${isDark ? "text-white" : "text-black"}`} />
              </button>

              <AnimatePresence>
                {showOptions && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 px-3 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-full border border-gray-300 dark:border-white/10"
                  >
                    {isDark ? (
                      <FaSun
                        className="text-white text-lg hover:text-yellow-300 cursor-pointer"
                        onClick={() => setIsDark(false)}
                      />
                    ) : (
                      <FaMoon
                        className="text-black text-lg hover:text-yellow-600 cursor-pointer"
                        onClick={() => setIsDark(true)}
                      />
                    )}
                    {isMuted ? (
                      <FaVolumeMute
                        className={`${
                          isDark ? "text-white" : "text-black"
                        } text-lg hover:text-red-400 cursor-pointer`}
                        onClick={() => setIsMuted(false)}
                      />
                    ) : (
                      <FaVolumeUp
                        className={`${
                          isDark ? "text-white" : "text-black"
                        } text-lg hover:text-green-400 cursor-pointer`}
                        onClick={() => setIsMuted(true)}
                      />
                    )}
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-20 h-1 cursor-pointer accent-blue-500"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Spline Model */}
        <div className="w-full h-[500px] sm:h-[400px] md:h-[450px] lg:h-[500px] max-w-[500px]">
          <spline-viewer url="https://prod.spline.design/VSvasr-le2dBZyof/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
