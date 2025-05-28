import "./App.css";
import { About } from "./components/About";
import { DustParticlesBackground } from "./components/DustParticlesBackground";
import { Experience } from "./components/Experience";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <DustParticlesBackground></DustParticlesBackground>
      <div id="sections">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default App;
