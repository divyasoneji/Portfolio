import './App.css'
import { About } from './components/About'
import { Intro } from './components/Intro'

function App() {

  return (
    <div className="App">
      <div id="components">
        <Intro></Intro>
        <About></About>
      </div>
    </div>
  )
}

export default App
