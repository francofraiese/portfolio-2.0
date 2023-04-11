import "./App.scss";
import About from "./componentes/about/About";
import Cielo from "./componentes/background/cielo";
import NavBar from "./componentes/navbar/navBar";

function App() {
  return (
    <div id="app" className="app">
      <div className="content">
        <NavBar/>
        <About/>
      </div>
      <Cielo />
    </div>
  );
}

export default App;
