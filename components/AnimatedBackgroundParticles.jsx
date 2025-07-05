"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function AnimatedBackgroundParticles() {
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: false },
        background: { color: "#0f0c29" },
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 120,
          },
          move: {
            enable: true,
            speed: 1,
          },
          shape: { type: "circle" },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
