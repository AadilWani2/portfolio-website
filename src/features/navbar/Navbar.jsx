import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../shared/data/portfolioData";
import "./navbar.scss";

function Navbar() {
  const { personal } = portfolioData;
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  // Use a passive scroll listener with requestAnimationFrame batching
  // to avoid forced synchronous layout reads (reflows)
  useEffect(() => {
    function onScroll() {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking.current = false;
        });
        ticking.current = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo">
          {personal.name.split(' ')[0]}<span>.dev</span>
        </a>

        <nav className="navbar__nav">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <motion.a
          href="#"
          className="navbar__btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>
      </div>
    </header>
  );
}

export default Navbar;