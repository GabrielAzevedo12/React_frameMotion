import './App.css';
import './propsGerais.css'
import { FramerMotion5 } from './components/frame_motion/framer_motion5';
import "./components/frame_motion/css/styles.css"
import ButtonToggle from './components/buttonToogle/buttonToggle';

/*
import { Example } from './components/PageEffects/Exemplo';
import { Swiper_Teste } from './components/Swipe/Teste/Teste';
import ButtonUsage from './components/ReactUi/Teste/Teste';
import ButtonToggle from './components/buttonToogle/buttonToggle';
import FramerMotion from './components/frame_motion/framer_motion';
*/
function App() {
  return (
    <div className="App flex-column stretch text-center">
      <div className="flex-row center text-center">
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
       </div>
       <ButtonToggle />
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
