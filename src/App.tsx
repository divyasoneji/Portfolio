import "./App.css";
import { About } from "./components/About";
import { DustParticlesBackground } from "./components/DustParticlesBackground";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { NavigationMenu } from "./components/NavigationMenu";
import Projects from "./components/Projects";
import { TechStack } from "./components/TechStack";

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
      <DustParticlesBackground></DustParticlesBackground>
      <div id="sections">
        <Home></Home>
        <About></About>
        <TechStack></TechStack>
        <Experience></Experience>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
