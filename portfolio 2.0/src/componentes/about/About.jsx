import React, { useContext } from "react";
import LanguageData from "../../utils/LanguageData";
import "./About.scss";
import AppContext from "../../context";

const About = () => {
  const { lang } = useContext(AppContext);
  const { title, text } = LanguageData[lang].about;

  return (
    <div id="About" className="about">
      <div className="title-container">
        <h1 className="title">{title.line1}</h1>
        <h1 className="title">
          {title.line2}
          <span className="name">Franco Fraiese</span>,
        </h1>
        <h1 className="title">Full Stack Developer.</h1>
      </div>
      <div className="title-text-container">
        <br />
        <h3 className="title-text">{text.line1}</h3>
        <br />
        <h3 className="title-text">{text.line2}</h3>
      </div>
    </div>
  );
};

export default About;
