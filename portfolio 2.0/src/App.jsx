import { useState } from "react";
import "./App.scss";
import About from "./componentes/about/About";
import Cielo from "./componentes/background/cielo";
import Contact from "./componentes/contact/Contact";
import NavBar from "./componentes/navbar/navBar";
import Projects from "./componentes/projects/Projects";
import Skills from "./componentes/skills/skills";
import AppContext from "./context";

function App() {
  const [lang, setLang] = useState(document.documentElement.lang)

  return (
    <AppContext.Provider value={{lang, setLang}}>
      <div id="app" className="app">
        <div className="content">
          <NavBar />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Cielo />
      </div>
    </AppContext.Provider>
  );
}

export default App;
