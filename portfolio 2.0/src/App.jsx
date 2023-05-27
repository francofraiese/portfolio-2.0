import "./App.scss";
import Cielo from "./componentes/background/cielo";
import Content from "./componentes/content/Content";

function App() {

  return (
    <div id="app" className="app">
      <Content/>
      <Cielo />
    </div>
  );
}

export default App;
