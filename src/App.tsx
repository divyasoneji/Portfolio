import "./App.css";
import { About } from "./components/About";
import { DustParticlesBackground } from "./components/DustParticlesBackground";
import { Intro } from "./components/Intro";

function App() {
  return (
    <div className="App">
      <DustParticlesBackground></DustParticlesBackground>
      <div id="components">
        <Intro></Intro>
        <About></About>
      </div>
    </div>
  );
}

export default App;
