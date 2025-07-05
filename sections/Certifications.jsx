"use client";

import { useEffect, useState } from "react";

export default function Certifications() {
  const [theme, setTheme] = useState("dark");

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

 const certificates = [
    "paper.png",
    "junos.png",
    "sit.png",
    "genai.png",
    "prompt.png",
  ];

  return (
    <section
      id="certifications"
      className={`relative w-full py-24 px-4 sm:px-8 md:px-12 lg:px-20 font-sans transition-all duration-700 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white"
          : "bg-gradient-to-br from-[#e6ebf5] via-[#dce4f3] to-[#cfddec] text-black"
      }`}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-[#6a11cb] via-[#b185db] to-[#2575fc] bg-clip-text text-transparent animate-gradient inline-block">
            ✨ Certifications
          </span>
        </h1>
        <p
          className={`text-lg italic ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          "Proof of progress, displayed with pride."
        </p>
      </div>

      {/* Scroll Strip */}
      <div className="relative w-full overflow-x-hidden group" style={{ overflowY: "visible" }}>
        <div
          className="scroll-track flex gap-10 w-max will-change-transform group-hover:[animation-play-state:paused]"
          style={{ overflowY: "visible" }}
        >
          {[...certificates, ...certificates].map((src, i) => (
            <div
              key={i}
              className="transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
              style={{
                marginTop: "12px",
                marginBottom: "12px",
                overflow: "visible",
              }}
            >
              <img
                src={src}
                alt={`Certificate ${i + 1}`}
                className="h-52 w-auto object-contain rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        .scroll-track {
          animation: scroll-horizontal 50s linear infinite;
        }

        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
