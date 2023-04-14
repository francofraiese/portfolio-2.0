import "./App.scss";
import About from "./componentes/about/About";
import Cielo from "./componentes/background/cielo";
import NavBar from "./componentes/navbar/navBar";
import Projects from "./componentes/projects/Projects";
import Skills from "./componentes/skills/skills";

function App() {
  return (
    <div id="app" className="app">
      <div className="content">
        <NavBar/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
      <Cielo />
    </div>
  );
}

export default App;
