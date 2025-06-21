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
        <div className="section-title" id="experience-title">
          Experience
        </div>
        <VerticalTimeline
          lineColor="var(--pink-glow)"
          animate={true}
          layout="1-column-left"
        >
          {experiences.map((experience) => (
            <VerticalTimelineElement
              contentStyle={{
                width: "85%",
                background: "var(--dark-berry-fade)",
                borderRadius: "10px",
                color: "var(--pastel-pink)",
                backdropFilter: "blur(2px)",
                marginLeft: "68px",
              }}
              contentArrowStyle={{
                borderRight: "12px solid var(--dark-berry-fade)",
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
                width: "55px",
                height: "55px",
                marginLeft: "-8px",
              }}
              icon={
                <img
                  className="company-logo"
                  src={experience.icon}
                  alt={experience.company_name}
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
