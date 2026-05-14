import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "../../shared/data/portfolioData";
import "./projects.scss";

function Projects() {
  const { projects: projectsData } = portfolioData;

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
    <section className="projects" id="projects">
      <div className="projects__container">

        <motion.div 
          className="projects__heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="projects__tag">
            <span style={{ marginRight: '8px' }}>💻</span>
            {projectsData.tag}
          </motion.p>
          <motion.h2 
            variants={fadeUp} 
            className="projects__title"
            dangerouslySetInnerHTML={{ __html: projectsData.title }}
          />
          <motion.p variants={fadeUp} className="projects__text">
            {projectsData.description}
          </motion.p>
        </motion.div>

        <motion.div 
          className="projects__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridContainer}
        >

          {projectsData.items.map((project, index) => (
            <motion.article key={index} className="projects__card" variants={fadeUp}>
              <div className="projects__card-inner">
                <span className={`projects__status projects__status--${project.status.toLowerCase().replace(" ", "-")}`}>
                  {project.status}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="projects__stack">
                  {project.stack.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>

                <div className="projects__actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;