import { FadeInSection } from "./FadeInSection";
import "../styles/About.css";
import { TechStack } from "./TechStack";
import { MatchaCheers } from "./MatchaCheers";

export const About = () => {
  return (
    <div id="about">
      <FadeInSection>
        <div className="section-title">About Me</div>
        <div className="about-content">
          <div>
            <div className="about-description">
              I thrive on making things easier for people — whether it’s
              integrating CI/CD pipelines, optimizing performance, or crafting
              seamless user interfaces.
            </div>
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
              Over the course of my career, I’ve worked with a variety of tech
              stacks and developed strong proficiency in the following
              <b> languages:</b>
            </div>
            <TechStack></TechStack>
            <div className="about-description">
              Beyond code, I love unwinding with a cup of matcha and getting
              lost in sci-fi movies.
            </div>
          </div>

          <img
            className="about-grad-pic"
            src="/assets/sfu-grad-pic.png"
            alt="Grad"
          />
        </div>
      </FadeInSection>
    </div>
  );
};
