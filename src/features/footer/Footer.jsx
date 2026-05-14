import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { portfolioData } from "../../shared/data/portfolioData";
import "./footer.scss";

function Footer() {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer className="footer">
      <motion.div 
        className="footer__container"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >

        <motion.div className="footer__left" variants={itemVariants}>
          <h3>{personal.name.split(' ')[0]}<span>.dev</span></h3>
          <p>
            {personal.title} building modern web experiences with clean design and scalable architecture.
          </p>
          <div className="footer__socials">
            <a href={personal.socials.github} target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href={personal.socials.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href={`https://wa.me/${personal.whatsapp}`} target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </motion.div>

        <motion.div className="footer__right" variants={itemVariants}>
          <div className="footer__nav">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__nav">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </motion.div>

      </motion.div>

      <motion.div 
        className="footer__bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}

export default Footer;