import './App.css';
import ButtonToggle from './components/buttonToogle/buttonToggle';
//import FramerMotion from './components/frame_motion/framer_motion';
import { FramerMotion5 } from './components/frame_motion/framer_motion5';
import "./components/frame_motion/css/styles.css"

function App() {
  return (
    <div className="App">
      <FramerMotion5 className="motion-teste"/>
    </div>
  );
}
export default App;

/*
<FramerMotion className="motion-teste" />
*/
