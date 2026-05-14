import { lazy, Suspense } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import Navbar from "../features/navbar/Navbar";
import Hero from "../features/hero/Hero";

const About    = lazy(() => import("../features/about/About"));
const Skills   = lazy(() => import("../features/skills/Skills"));
const Services = lazy(() => import("../features/services/Services"));
const Projects = lazy(() => import("../features/projects/Projects"));
const Contact  = lazy(() => import("../features/contact/Contact"));
const Footer   = lazy(() => import("../features/footer/Footer"));

function SectionFallback() {
  return <div style={{ minHeight: "200px" }} aria-hidden="true" />;
}

function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    // ✅ FIX: Plain <main> — no opacity:0 wrapper.
    // motion.main with initial={{ opacity:0 }} was hiding the ENTIRE page from
    // Lighthouse until React + Framer Motion fully loaded (~5-6s on throttled),
    // causing NO_LCP. The page entrance feel is now handled by CSS in global.scss.
    <main>
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #7c3aed, #38bdf8)",
          transformOrigin: "0%",
          zIndex: 9999,
          willChange: "transform"
        }}
      />

      <Navbar />
      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </main>
  );
}

export default HomePage;