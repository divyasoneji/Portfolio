import { FadeInSection } from "./FadeInSection";
import { MatchaCheers } from "./MatchaCheers";
import "../styles/About.css";

export const About = () => {
  return (
    <div id="about">
      <FadeInSection>
        <div className="about-content">
          <img
            className="about-grad-pic"
            src="/assets/sfu-grad-pic.png"
            alt="Grad"
          />
          <div>
            <div className="section-title" id="about-title">
              About Me
            </div>
            <div className="about-description-container">
              <div className="about-description">
                I thrive on making things easier for people — whether it’s
                automating CI/CD pipelines, optimizing performance, or crafting
                seamless UIs.
              </div>
              <div className="about-description">
                My journey started with a
                <b> BSc. Degree in Computer Science </b>
                from{" "}
                <a href="https://www.sfu.ca/" target="_blank">
                  {" "}
                  Simon Fraser University
                </a>
                , where I grew a passion for contributing to meaningful
                projects. Now, as a <b>Software Engineer</b> at
                <a href="https://www.fugro.com" target="_blank">
                  {" "}
                  Fugro
                </a>
                , I bring that same passion to automating data processing
                workflows for their proprietary marine survey systems.
              </div>
              <div className="about-description">
                Beyond code, I love unwinding with a cup of matcha, doodling
                whatever comes to mind, and rewatching <i>The Office</i> for the
                millionth time.
                <div className="matcha-container">
                  <MatchaCheers></MatchaCheers>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};
