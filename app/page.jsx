"use client";

import { useState } from "react";
import Loader from "../components/Loader";
import Hero from "../sections/Hero";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import FooterCTA from "../sections/FooterCTA";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}
      {loaded && (
        <main className="transition-opacity duration-1000">
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Certifications />
          <FooterCTA />
        </main>
      )}
    </>
  );
}
