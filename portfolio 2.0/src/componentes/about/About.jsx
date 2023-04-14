import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="title-container">
        <h1 className="title">Hello,</h1>
        <h1 className="title">
          I am <span className="name">Franco Fraiese</span>,
        </h1>
        <h1 className="title">Full Stack Developer.</h1>
      </div>
      <div className="title-text-container">
        <br />
        <h3 className="title-text">Let me introduce myself!</h3>
        <br />
        <h3 className="title-text">
          I'm 27 yo, currently living in Mar del Plata, Argentina, and I'm
          looking for opportunities that represent new challenges and allow me
          to continue growing as professional.
        </h3>
      </div>
    </div>
  );
};

export default About;
