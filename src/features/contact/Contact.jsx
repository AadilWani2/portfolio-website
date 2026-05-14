import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { portfolioData } from "../../shared/data/portfolioData";
import "./contact.scss";

function Contact() {
  const { personal, contact } = portfolioData;

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
    <section className="contact" id="contact">
      <div className="contact__container">

        <motion.div 
          className="contact__content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="contact__tag">
            <span style={{ marginRight: '8px' }}>📬</span>
            Contact
          </motion.p>

          <motion.h2 variants={fadeUp} className="contact__title">
            {contact.title.split(' ')[0]} {contact.title.split(' ')[1]} <span>{contact.title.split(' ').slice(2).join(' ')}</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="contact__text">
            {contact.subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          className="contact__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridContainer}
        >

          <motion.a
            href={`https://wa.me/${personal.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="contact__card contact__card--whatsapp"
            variants={fadeUp}
            whileHover={{ y: -8 }}
          >
            <div className="contact__icon">
              <FaWhatsapp />
            </div>
            <div className="contact__info">
              <span>WhatsApp</span>
              <strong>Message me directly</strong>
            </div>
          </motion.a>

          <motion.a
            href={`mailto:${personal.email}`}
            className="contact__card contact__card--email"
            variants={fadeUp}
            whileHover={{ y: -8 }}
          >
            <div className="contact__icon">
              <FaEnvelope />
            </div>
            <div className="contact__info">
              <span>Email</span>
              <strong>{personal.email}</strong>
            </div>
          </motion.a>

          <motion.a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact__card contact__card--linkedin"
            variants={fadeUp}
            whileHover={{ y: -8 }}
          >
            <div className="contact__icon">
              <FaLinkedinIn />
            </div>
            <div className="contact__info">
              <span>LinkedIn</span>
              <strong>Connect professionally</strong>
            </div>
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;