import './App.css';
import './propsGerais.css'
import ButtonToggle from './components/buttonToogle/buttonToggle';
//import FramerMotion from './components/frame_motion/framer_motion';
import { FramerMotion5 } from './components/frame_motion/framer_motion5';
import "./components/frame_motion/css/styles.css"
import { Swiper_Teste } from './components/Swipe/Teste/Teste';
import ButtonUsage from './components/ReactUi/Teste/Teste';

function App() {
  return (
    <div className="App flex-row center">
      <ButtonUsage />
    </div>
  );
}
export default App;

/*
<FramerMotion className="motion-teste" />

<FramerMotion5 
      className="flex-column center text_center style_template_3"
      style={{
        minWidth: "95vw",
        height: "500px",  
        marginLeft: "10px",
        marginRight: "10px",
        borderRadius: "30px",
        fontSize: "2rem",
        fontWeight: 500
      }} />
*/
