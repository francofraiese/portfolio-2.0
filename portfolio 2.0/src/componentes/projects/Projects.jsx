import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project">
        <h1 className="project-title">Madeira Stats</h1>
        <div className="project-content">
          <div className="project-data">
            <h3 className="project-description">
              A website for a card videogame where players can create and
              customize accounts, view other players' profiles and check their
              current global ranking.
            </h3>
            <div className="project-extra">
              <div className="project-tools">
                <h2 className="project-subtitles">Tools</h2>
                <div className="project-tools-icons">
                  <SiJavascript id="javascript" className="tools-icon" />
                  <SiTypescript id="typescript" className="tools-icon" />
                  <FaReact id="react" className="tools-icon" />
                  <SiRedux id="redux" className="tools-icon" />
                  <FaNodeJs id="node" className="tools-icon" />
                  <SiNestjs id="nest" className="tools-icon" />
                </div>
              </div>
              <div className="project-links">
                <h2 className="project-subtitles">Links</h2>
                <div className="project-links-icons">
                  <TbWorld
                    onClick={() =>
                      window.open("https://madeiraproject.vercel.app/")
                    }
                    className="link-icon"
                    id="world-icon"
                  />
                  <BsGithub
                    onClick={() =>
                      window.open(
                        "https://github.com/Atlantic-Dev/FRONT-Madeira"
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
              onClick={() => window.open("https://madeiraproject.vercel.app/")}
              id="Madeira"
              className="project-image"
              src="/images/Madeira.png"
            />
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="project-title">ReWork</h1>
        <div className="project-content">
          <div className="project-data">
            <h3 className="project-description">
              A website for a card videogame where players can create accounts,
              view other players' profiles and check ranking.
            </h3>
            <div className="project-extra">
              <div className="project-tools">
                <h2 className="project-subtitles">Tools</h2>
                <div className="project-tools-icons">
                  <SiJavascript id="javascript" className="tools-icon" />
                  <SiTypescript id="typescript" className="tools-icon" />
                  <FaReact id="react" className="tools-icon" />
                  <SiRedux id="redux" className="tools-icon" />
                  <FaNodeJs id="node" className="tools-icon" />
                  <SiExpress id="express" className="tools-icon" />
                </div>
              </div>
              <div className="project-links">
                <h2 className="project-subtitles">Links</h2>
                <div className="project-links-icons">
                  <TbWorld
                    onClick={() =>
                      window.open("https://madeiraproject.vercel.app/")
                    }
                    className="link-icon"
                    id="world-icon"
                  />
                  <BsGithub
                    onClick={() =>
                      window.open(
                        "https://github.com/Atlantic-Dev/FRONT-Madeira"
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
              onClick={() => window.open("https://madeiraproject.vercel.app/")}
              id="Madeira"
              className="project-image"
              src="/images/ReWork.png"
            />
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="project-title">Frikipedia</h1>
        <div className="project-content">
          <div className="project-data">
            <h3 className="project-description">
              A website for a card videogame where players can create accounts,
              view other players' profiles and check ranking.
            </h3>
            <div className="project-extra">
              <div className="project-tools">
                <h2 className="project-subtitles">Tools</h2>
                <div className="project-tools-icons">
                  <SiJavascript id="javascript" className="tools-icon" />
                  <FaReact id="react" className="tools-icon" />
                  <SiRedux id="redux" className="tools-icon" />
                  <FaNodeJs id="node" className="tools-icon" />
                  <SiExpress id="express" className="tools-icon" />
                </div>
              </div>
              <div className="project-links">
                <h2 className="project-subtitles">Links</h2>
                <div className="project-links-icons">
                  <TbWorld
                    onClick={() =>
                      window.open("https://frikipedia.vercel.app/")
                    }
                    className="link-icon"
                    id="world-icon"
                  />
                  <BsGithub
                    onClick={() => {
                      window.open(
                        "https://github.com/francofraiese/frikipedia-front"
                      );
                      window.open(
                        "https://github.com/francofraiese/frikipedia-back"
                      );
                    }}
                    className="link-icon"
                    id="github-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-images">
            <img
              onClick={() => window.open("https://madeiraproject.vercel.app/")}
              id="Madeira"
              className="project-image"
              src="/images/frikipedia.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
