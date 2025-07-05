"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "LearNova: AI-powered LMS",
    description: [
      "Developed an intelligent learning management system that personalizes the educational experience using AI.",
      "Enabled students to generate notes, quizzes, and study plans, and track academic progress through a unified dashboard.",
    ],
    image: "learnova.png",
  },
  {
    title: "Logofy: AI Logo Generator",
    description: [
      "Built a full-stack AI logo generator that creates logos from text prompts using Hugging Face models.",
      "Implemented user auth, credit system, and logo history with Firebase backend.",
    ],
    image: "logofy.png",
  },
  {
    title: "Pesticide Recommendation using Machine Learning",
    description: [
      "Trained a machine learning model to classify pest species based on user inputs.",
      "Recommended appropriate pesticide based on the model’s output.",
    ],
    image: "pesticide.png",
  },
];

function calcTilt(x, y, rect) {
  const px = (x - rect.left) / rect.width;
  const py = (y - rect.top) / rect.height;
  const tiltX = (py - 0.5) * 20;
  const tiltY = (px - 0.5) * 20;
  return { tiltX, tiltY };
}

export default function Projects() {
  const [theme, setTheme] = useState("dark");
  const [tilt, setTilt] = useState({ tiltX: 0, tiltY: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-800";
  const subTextColor = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const bgColor = theme === "dark" ? "bg-[#121326]" : "bg-white";

  return (
    <section
      id="projects"
      className={`w-full py-24 px-4 sm:px-8 md:px-12 lg:px-20 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
          : "bg-gradient-to-br from-[#f0f2f8] via-[#dee3ee] to-[#cad5e8]"
      } text-center`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 z-10 relative max-w-3xl mx-auto"
      >
        <h1
  className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight"
  style={{
    lineHeight: 1.4,
    paddingBottom: "0.5rem",
    overflow: "visible",
    display: "inline-block",
  }}
>
  <span className="bg-gradient-to-r from-[#5ba8ff] via-[#8e6dfc] to-[#b48bf2] bg-clip-text text-transparent animate-gradient inline-block mr-2 font-extrabold">
    ⚙️ Featured
  </span>
  <span className="bg-gradient-to-r from-[#5ba8ff] via-[#8e6dfc] to-[#b48bf2] bg-clip-text text-transparent animate-gradient inline-block mr-2 font-extrabold">
    Projects
  </span>
  <span className="bg-gradient-to-r from-[#5ba8ff] via-[#8e6dfc] to-[#b48bf2] bg-clip-text text-transparent animate-gradient inline-block font-extrabold">
    Showcase
  </span>
</h1>


        <p className={`text-lg italic text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          "Crafting code into real-world impact — one project at a time."
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map(({ title, description, image }, i) => {
          const ref = useRef(null);

          function handleMouseMove(e) {
            const rect = ref.current.getBoundingClientRect();
            const { tiltX, tiltY } = calcTilt(e.clientX, e.clientY, rect);
            setTilt({ tiltX, tiltY });
            setHoveredIndex(i);
          }

          function handleMouseLeave() {
            setTilt({ tiltX: 0, tiltY: 0 });
            setHoveredIndex(null);
          }

          const isHovered = hoveredIndex === i;
          const transformStyle = isHovered
            ? `perspective(600px) rotateX(${tilt.tiltX}deg) rotateY(${tilt.tiltY}deg) scale(1.05)`
            : "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";

          return (
            <div
              key={i}
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`relative rounded-3xl overflow-hidden cursor-default ${bgColor} shadow-xl transition-shadow duration-300`}
              style={{
                transform: transformStyle,
                boxShadow: isHovered
                  ? "0 8px 20px rgba(131, 90, 255, 0.3), 0 4px 12px rgba(131, 90, 255, 0.2)"
                  : "0 5px 15px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease, box-shadow 0.3s ease",
              }}
            >
              <img
                src={image}
                alt={`${title} screenshot`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className={`text-[1.15rem] font-medium mb-3 ${textColor}`}>
                  {title}
                </h3>

                <div className={`text-sm ${subTextColor} space-y-2`}>
                  {Array.isArray(description) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {description.map((point, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-relaxed">{description}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
