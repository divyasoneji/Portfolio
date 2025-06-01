import { FadeInSection } from "./FadeInSection";
import "../styles/TechStack.css";
import { motion } from "framer-motion";

export const TechStack = () => {
  const tech_stack = [
    "C#",
    ".NET",
    "TypeScript",
    "React",
    "Python",
    "JavaScript",
  ];

  return (
    <div id="tech-stack">
      <FadeInSection>
        <div className="tech-stack-container">
          <div className="tech-stack-description-container">
            <div className="section-title" id="tech-stack-title">
              Tech Stack
            </div>
            <div className="tech-stack-description">
              Over the course of my career, I’ve worked with a variety of tech
              stacks and developed strong proficiency in the following
              <b> languages:</b>
            </div>
            <ul className="tech-stack-list">
              {tech_stack.map((tech, index) => (
                <FadeInSection delay={`${index + 1}00ms`} key={index}>
                  <li>{tech}</li>
                </FadeInSection>
              ))}
            </ul>
          </div>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img className="pc-pic" src="/assets/cute-pc.png" alt="Cute PC" />
          </motion.div>
        </div>
      </FadeInSection>
    </div>
  );
};
