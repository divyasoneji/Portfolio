import { FadeInSection } from "./FadeInSection";
import "../styles/TechStack.css";

export const TechStack = () => {
  const tech_stack = [
    "C#",
    ".NET",
    "Typescript",
    "React",
    "Python",
    "Kotlin",
  ];

  return (
    <div id="tech-stack">
      <ul className="tech-stack-list">
        {tech_stack.map((tech, index) => (
          <FadeInSection delay={`${index + 1}00ms`} key={index}>
            <li>{tech}</li>
          </FadeInSection>
        ))}
      </ul>
    </div>
  );
};
