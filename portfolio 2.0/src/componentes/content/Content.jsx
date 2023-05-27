import React from "react";
import { useState } from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import NavBar from "../navbar/navBar";
import Projects from "../projects/Projects";
import Skills from "../skills/skills";
import AppContext from "../../context";

const Content = () => {
  const [lang, setLang] = useState("en");

  return (
    <AppContext.Provider value={{ lang, setLang }}>
      <div className="content">
        <NavBar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </AppContext.Provider>
  );
};

export default Content;
