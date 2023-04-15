import React from "react";
import "./Project.scss";
import { BsGithub } from "react-icons/bs";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { TbWorld } from "react-icons/tb";

const Project = ({ title, text, tools, links, images, id, current }) => {
  return (
    <div className="project">
      <h1 className="project-title">{title}</h1>
      <div className="project-content">
        <div className="project-data">
          <h3 className="project-description">{text}</h3>
          <div className="project-extra">
            <div className="project-tools">
              <h2 className="project-subtitles">Tools</h2>
              <div className="project-tools-icons">
                {tools.map((tool) => tool)}
              </div>
            </div>
            <div className="project-links">
              <h2 className="project-subtitles">Links</h2>
              <div className="project-links-icons">
                <TbWorld
                  onClick={() => window.open(links.deployUrl)}
                  className="link-icon"
                  id="world-icon"
                />
                <BsGithub
                  onClick={() =>
                    links.githubUrl.forEach((githubUrl) =>
                      window.open(links.githubUrl)
                    )
                  }
                  className="link-icon"
                  id="github-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="project-images">
          <img
            onClick={() => window.open(links.deployUrl)}
            id={title}
            className="project-image-landing"
            src={`/images/${images.landing}`}
          />
          <img
            onClick={() => window.open(links.deployUrl)}
            id={title}
            className="project-image-home"
            src={`/images/${images.home}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
