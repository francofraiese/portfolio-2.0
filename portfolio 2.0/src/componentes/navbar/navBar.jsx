import React from "react";
import "./navBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="names">
        <h3>View resume: </h3>
        <a
          href="./docs/Franco Fraiese EN CV.pdf"
          target="_blank"
          className="link-cv"
        >
          <h3 className="lastname">English</h3>
        </a>
        <h3 style={{paddingLeft: 6}}>|</h3>
        <a
          href="./docs/Franco Fraiese CV.pdf"
          target="_blank"
          className="link-cv"
        >
          <h3 className="lastname">Spanish</h3>
        </a>
      </div>
      <div className="buttons">
        <div className="item">
          <h3 className="number">01.</h3>
          <h3>About</h3>
        </div>
        <div className="item">
          <h3 className="number">02.</h3>
          <h3>Skills</h3>
        </div>
        <div className="item">
          <h3 className="number">03.</h3>
          <h3>Projects</h3>
        </div>
        <div className="item">
          <h3 className="number">04.</h3>
          <h3>Contact</h3>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
