import React, { useContext, useRef, useState } from "react";
import { TbPoint } from "react-icons/tb";
import LanguageData from "../../utils/LanguageData";
import "./Projects.scss";
import Project from "./Project/Project";
import AppContext from "../../context";

const Projects = () => {
  const [project, setProject] = useState("0");
  const { lang } = useContext(AppContext)
  const sliderRef = useRef(null);
  const ProjectsData = LanguageData[lang].projects
  const handlePoints = (newIndex) => {
    const slider = sliderRef.current;
    slider?.style.setProperty("--slider-index", newIndex);
    setProject(newIndex);
  };



  return (
    <div id="Projects" className="projects">
      <div className="projects-container" ref={sliderRef}>
        {ProjectsData.map(({ title, text, tools, links, images }, index) => (
          <Project
            id={index}
            key={`project_${index}`}
            title={title}
            text={text}
            tools={tools}
            links={links}
            images={images}
            current={project}
          />
        ))}
      </div>
      <div className="projects-indicators">
        <TbPoint
          id={0}
          className={`project-point ${project === "0" ? "point-selected" : null}`}
          onClick={(e) => project !== e.target.id && handlePoints("0")}
        />
        <TbPoint
          id={1}
          className={`project-point ${project === "1" ? "point-selected" : null}`}
          onClick={(e) => project !== e.target.id && handlePoints("1")}
        />
        <TbPoint
          id={2}
          className={`project-point ${project === "2" ? "point-selected" : null}`}
          onClick={(e) => project !== e.target.id && handlePoints("2")}
        />
      </div>
    </div>
  );
};

export default Projects;
