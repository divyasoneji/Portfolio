import { FadeInSection } from "./FadeInSection";
import "../styles/About.css";
import { TechStack } from "./TechStack";

export const About = () => {
  return (
    <div id="about">
      <FadeInSection>
        <div className="section-title">About Me ☕︎</div>
        <div className="about-content">
          <div>
            <div className="about-description">
              I'm currently working as a <b> Software Engineer </b> at
              <a href="https://www.fugro.com"> Fugro</a>, Houston.
            </div>
            <TechStack></TechStack>
          </div>

          <img
            className="about-gif"
            src="/assets/cute-working-cat.gif"
            alt="Hello!"
          />
        </div>
      </FadeInSection>
    </div>
  );
};
