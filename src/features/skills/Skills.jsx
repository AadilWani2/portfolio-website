import { motion } from "framer-motion";
import { 
  SiReact, SiJavascript, SiHtml5, SiSass, SiTailwindcss,
  SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiMongodb, SiMongoose,
  SiGit, SiGithub, SiAxios, SiPostman, SiVite, SiRender
} from "react-icons/si";
import { FaDesktop, FaServer, FaDatabase, FaProjectDiagram } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { portfolioData } from "../../shared/data/portfolioData";
import "./skills.scss";

const iconMap = {
  "React": <SiReact />,
  "JavaScript": <SiJavascript />,
  "HTML5": <SiHtml5 />,
  "SCSS": <SiSass />,
  "Tailwind CSS": <SiTailwindcss />,
  "Responsive UI": <FaDesktop />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  "REST APIs": <TbApi />,
  "JWT Auth": <SiJsonwebtokens />,
  "MVC Structure": <FaServer />,
  "MongoDB": <SiMongodb />,
  "Mongoose": <SiMongoose />,
  "CRUD": <FaDatabase />,
  "Schema Design": <FaProjectDiagram />,
  "Git": <SiGit />,
  "GitHub": <SiGithub />,
  "Axios": <SiAxios />,
  "Postman": <SiPostman />,
  "Vite": <SiVite />,
  "Render": <SiRender />
};

function Skills() {
  const { skills: skillsData } = portfolioData;

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

  const skillItem = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="skills" id="skills">
      <div className="skills__container">

        <motion.div 
          className="skills__heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="skills__tag">
            <span style={{ marginRight: '8px' }}>⚡</span>
            {skillsData.tag}
          </motion.p>
          <motion.h2 
            variants={fadeUp} 
            className="skills__title"
            dangerouslySetInnerHTML={{ __html: skillsData.title }}
          />
          <motion.p variants={fadeUp} className="skills__text">
            {skillsData.description}
          </motion.p>
        </motion.div>

        <motion.div 
          className="skills__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridContainer}
        >

          {skillsData.categories.map((category, index) => (
            <motion.div key={index} className="skills__card" variants={fadeUp}>
              <div className="skills__card-header">
                <span className="skills__card-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <motion.div className="skills__list" variants={staggerContainer}>
                {category.skills.map((skillName) => (
                  <motion.span 
                    key={skillName} 
                    variants={skillItem} 
                    whileHover={{ scale: 1.05, borderColor: "rgba(124, 58, 237, 0.4)", color: "#f8fafc" }}
                  >
                    <i className={`skill-icon ${category.title.toLowerCase()}-icon`}>
                      {iconMap[skillName] || <SiVite />}
                    </i>
                    {skillName}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;