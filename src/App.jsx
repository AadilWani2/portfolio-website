
import React from "react";
import Navbar from "./features/navbar/Navbar";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Skills from "./features/skills/Skills";
import Projects from "./features/projects/Projects";
import Services from "./features/services/Services";
import Contact from "./features/contact/Contact";
import Footer from "./features/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
