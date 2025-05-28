import { FadeInSection } from "./FadeInSection";
import { TechStack } from "./TechStack";
import { MatchaCheers } from "./MatchaCheers";
import "../styles/About.css";

export const About = () => {
  return (
    <div id="about">
      <FadeInSection>
        <div className="section-title">About Me</div>
        <div className="about-content">
          <div>
            <div className="about-description">
              I thrive on making things easier for people — whether it’s
              automating CI/CD pipelines, optimizing performance, or crafting
              seamless user interfaces.
            </div>
            <div className="about-description">
              Over the course of my career, I’ve worked with a variety of tech
              stacks and developed strong proficiency in the following
              <b> languages:</b>
            </div>
            <TechStack></TechStack>
            <div className="about-description">
              My journey started with a<b> BSc. Degree in Computer Science </b>
              from <a href="https://www.sfu.ca/"> Simon Fraser University</a>,
              where I developed a passion for contributing to meaningful
              projects. Now, as a <b>Software Engineer</b> at
              <a href="https://www.fugro.com"> Fugro</a>, I bring that same
              passion to automating data processing workflows for their
              proprietary marine survey systems.
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
          <div>
            <div className="about-description" id="about-media">
              <img
                className="keyboard-gif"
                src="/assets/keyboard.gif"
                alt="Keyboard"
              />
              <img
                className="about-grad-pic"
                src="/assets/sfu-grad-pic.png"
                alt="Grad"
              />
              <img
                className="the-office-gif"
                src="/assets/the-office.gif"
                alt="The Office"
              />
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};
