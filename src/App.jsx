
import React, { Suspense, lazy } from "react";
import LazySection from "./shared/components/LazySection";

const Navbar = lazy(() => import("./features/navbar/Navbar"));
const Hero = lazy(() => import("./features/hero/Hero"));
const About = lazy(() => import("./features/about/About"));
const Skills = lazy(() => import("./features/skills/Skills"));
const Projects = lazy(() => import("./features/projects/Projects"));
const Services = lazy(() => import("./features/services/Services"));
const Contact = lazy(() => import("./features/contact/Contact"));
const Footer = lazy(() => import("./features/footer/Footer"));

function App() {
  return (
    <Suspense fallback={<div style={{color:"#fff"}}>Loading...</div>}>
      <Navbar />
      <LazySection><Hero /></LazySection>
      <LazySection><About /></LazySection>
      <LazySection><Skills /></LazySection>
      <LazySection><Projects /></LazySection>
      <LazySection><Services /></LazySection>
      <LazySection><Contact /></LazySection>
      <Footer />
    </Suspense>
  );
}

export default App;
