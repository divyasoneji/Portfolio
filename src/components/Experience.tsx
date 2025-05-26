import { FadeInSection } from "./FadeInSection";
import { experiences } from "../constants/experiences";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../styles/Experience.css";
import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-title">Experience</div>
        <VerticalTimeline lineColor="var(--pink-glow)" animate={true}>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--dark-berry-fade)",
                borderRadius: "20px",
                color: "var(--pink-glow)",
              }}
              contentArrowStyle={{
                borderRight: "15px solid var(--dark-berry-fade)",
              }}
              date={experience.date}
              dateClassName="timeline-date"
              iconStyle={{
                background: experience.iconBg,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
              icon={
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="rounded-full object-contain"
                />
              }
            >
              <div>
                <h3 className="job-title">{experience.title}</h3>
                <p className="company-name">{experience.company_name}</p>
              </div>
              <ul>
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </FadeInSection>
    </div>
  );
};
