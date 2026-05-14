import { motion } from "framer-motion";
import { portfolioData } from "../../shared/data/portfolioData";
import "./about.scss";

function About() {
  const { about } = portfolioData;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  return (
    <section className="about" id="about">
      <div className="about__container">

        <motion.div 
          className="about__content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <p className="about__tag">
              <span style={{ marginRight: '8px' }}>💡</span> 
              {about.tag}
            </p>
          </motion.div>

          <motion.h2 
            variants={fadeUp} 
            className="about__title"
            dangerouslySetInnerHTML={{ __html: about.title }}
          />

          {about.bio.map((paragraph, index) => (
            <motion.p key={index} variants={fadeUp} className="about__text">
              {paragraph}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="about__points">
            {about.points.map((point, index) => (
              <span key={index}>{point}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="about__cards"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardsContainer}
        >
          {about.cards.map((card, index) => (
            <motion.div key={index} className="about__card" variants={fadeUp}>
              <div className="about__card-icon">{card.icon}</div>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;