import "./App.css";
import { About } from "./components/About";
import { DustParticlesBackground } from "./components/DustParticlesBackground";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import { NavigationMenu } from "./components/NavigationMenu";

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
      <DustParticlesBackground></DustParticlesBackground>
      <div id="sections">
        <Home></Home>
        <About></About>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default App;
