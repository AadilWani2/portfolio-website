import { motion } from "framer-motion";
import { portfolioData } from "../../shared/data/portfolioData";
import "./hero.scss";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const cardsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

function Hero() {
  const { personal, hero } = portfolioData;

  return (
    <section className="hero" id="home">
      <div className="hero__bg-glow" aria-hidden="true"></div>
      <div className="hero__bg-glow hero__bg-glow--secondary" aria-hidden="true"></div>

      <div className="hero__container">
        {/* Static CSS-animated content — no JS needed for LCP */}
        <div className="hero__content">
          <p className="hero__tag hero__animate hero__animate--1">
            <span aria-hidden="true" style={{ marginRight: '8px' }}>✨</span>
            {personal.title} • {personal.focus.split(' • ')[0]}
          </p>

          <h1 
            className="hero__title hero__animate hero__animate--2"
            dangerouslySetInnerHTML={{ __html: hero.title }}
          />

          <p className="hero__text hero__animate hero__animate--3">
            {hero.subtitle}
          </p>

          <div className="hero__actions hero__animate hero__animate--4">
            <a href="#projects" className="hero__primary">View Projects</a>
            <a href="#contact" className="hero__secondary">Hire Me</a>
          </div>
        </div>

        {/* Cards can use motion since they are below the fold / not LCP */}
        <div className="hero__visuals">
          <motion.div
            className="hero__cards"
            initial="hidden"
            animate="show"
            variants={cardsContainer}
          >
            {hero.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="hero__card"
                variants={cardVariants}
                animate={index % 2 === 0 ? { y: [0, -10, 0] } : { y: [0, 10, 0] }}
                transition={{ 
                  duration: 6 + index, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: 0.5 * (index + 1) 
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;