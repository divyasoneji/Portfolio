import { FadeInSection } from "./FadeInSection";
import "../styles/TechStack.css";

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
        <div className="section-title">Tech Stack</div>
        <div className="description">
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
      </FadeInSection>
    </div>
  );
};
