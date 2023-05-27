import React, { useContext } from "react";
import LanguageData from "../../utils/LanguageData";
import "./navBar.scss";
import AppContext from "../../context";

const NavBar = () => {
  const { lang, setLang } = useContext(AppContext);
  const { about, contact, projects, skills } = LanguageData[lang].navbar;

  return (
    <div className="navbar">
      <div className="buttons">
        <a href="#About" className="item" style={{ textDecoration: "none" }}>
          <h3 className="number">01.</h3>
          <h3>{about}</h3>
        </a>
        <a href="#Skills" className="item" style={{ textDecoration: "none" }}>
          <h3 className="number">02.</h3>
          <h3>{skills}</h3>
        </a>
        <a href="#Projects" className="item" style={{ textDecoration: "none" }}>
          <h3 className="number">03.</h3>
          <h3>{projects}</h3>
        </a>
        <a href="#Contact" className="item" style={{ textDecoration: "none" }}>
          <h3 className="number">04.</h3>
          <h3>{contact}</h3>
        </a>
      </div>
      <div className="navbar-language-flags">
        <img
          className="navbar-language-flag"
          onClick={() => setLang("es")}
          src="/images/es.svg"
          alt="Español"
        />
        <img
          className="navbar-language-flag"
          onClick={() => setLang("en")}
          src="/images/gb.svg"
          alt="English"
        />
      </div>
    </div>
  );
};

export default NavBar;
