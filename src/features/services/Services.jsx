import { motion } from "framer-motion";
import { FaCode, FaStore, FaMobileAlt } from "react-icons/fa";
import { portfolioData } from "../../shared/data/portfolioData";
import "./services.scss";

const iconMap = {
  "FaCode": <FaCode />,
  "FaStore": <FaStore />,
  "FaMobileAlt": <FaMobileAlt />
};

function Services() {
  const { services: servicesData } = portfolioData;

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

  const gridContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="services" id="services">
      <div className="services__container">

        <motion.div 
          className="services__heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="services__tag">
            <span style={{ marginRight: '8px' }}>🚀</span>
            {servicesData.tag}
          </motion.p>

          <motion.h2 
            variants={fadeUp} 
            className="services__title"
            dangerouslySetInnerHTML={{ __html: servicesData.title }}
          />

          <motion.p variants={fadeUp} className="services__text">
            {servicesData.description}
          </motion.p>
        </motion.div>

        <motion.div 
          className="services__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridContainer}
        >

          {servicesData.items.map((service) => (
            <motion.article key={service.id} className="services__card" variants={fadeUp}>
              <div className="services__card-header">
                <span className="services__number">{service.id}</span>
                <div className="services__icon">{iconMap[service.icon]}</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Services;