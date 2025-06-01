import React from "react";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FadeInSection } from "./FadeInSection";
import LaunchIcon from "@mui/icons-material/Launch";
import "../styles/Projects.css";
import { projects } from "../constants/projects";

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">Projects</span>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.entries(projects).map(([key, project], i) => (
            <FadeInSection delay={`${i + 1}20ms`} key={key}>
              <li className="projects-card">
                <div className="project-card-header">
                  <FolderOpenIcon className="folder-icon" />
                  <span className="external-links">
                    <a href={project.gitHubLink} target="_">
                      <GitHubIcon className="github-icon"></GitHubIcon>
                    </a>
                    {project.websiteLink && (
                      <a
                        className="open-icon"
                        href={project.websiteLink}
                        target="_"
                      >
                        <LaunchIcon className="website-icon"></LaunchIcon>
                      </a>
                    )}
                  </span>
                </div>
                <div className="project-card-title">{key}</div>
                <div className="project-card-description">
                  {project.description}
                </div>
                <div className="project-card-tech-stack">
                  {project.techStack}
                </div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
