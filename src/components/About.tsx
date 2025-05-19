import { FadeInSection } from "./FadeInSection";
import "../styles/About.css";

export const About = () => {
  return (
    <div id="about">
      <FadeInSection>
        <div className="section-title"> about me </div>
        <div className="about-content">
          <div className="about-description">
            I'm currently working as a Software Engineer at{" "}
            <a href="https://www.fugro.com">Fugro</a>, Huston.
          </div>
        </div>
        <img
          src="/assets/cute-working-cat.gif"
          alt="Hello!"
          style={{ width: "200px", height: "auto" }}
        />
      </FadeInSection>
    </div>
  );
};
