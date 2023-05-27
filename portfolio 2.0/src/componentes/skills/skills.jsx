import React, { useContext, useState } from "react";
import LanguageData from "../../utils/LanguageData";
import "./skills.scss";
import AppContext from "../../context";

const Skills = () => {
  const { lang } = useContext(AppContext);
  const skills = LanguageData[lang].skills;
  const { title, titleGreen, front, back, db, toolkit } = skills;

  return (
    <div id="Skills" className="skills">
      <h2 className="skills-title">{title} <span className="skills-title-green">{titleGreen}</span>:</h2>
      <div className="skills-tabs">
        <div className="tab">
          <h3 className="tab-title">{front.title}</h3>
          <div className="tab-icons">{front.icons.map((icon) => icon)}</div>
        </div>
        <div className="tab-reverse">
          <h3 className="tab-title">{back.title}</h3>
          <div className="tab-icons">{back.icons.map((icon) => icon)}</div>
        </div>
        <div className="tab">
          <h3 className="tab-title">{db.title}</h3>
          <div className="tab-icons">{db.icons.map((icon) => icon)}</div>
        </div>
        <div className="tab-reverse">
          <h3 className="tab-title">{toolkit.title}</h3>
          <div className="tab-icons">{toolkit.icons.map((icon) => icon)}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
