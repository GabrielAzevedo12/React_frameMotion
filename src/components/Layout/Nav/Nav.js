//import logo from './logo.svg';
import './css/Nav.css';
import {  Link } from "react-router-dom";
import { genKey } from '../../funçoes/genRandomKey';
//import "../../../../node_modules/magic.css/dist/magic.css"
//import "../../../../node_modules/magic.css/dist/magic.min.css"


function Nav(props) {
  const url = "/about/" + props.name;
  return (
    <nav 
    id = {props.id ? props.id + "_Nav" : "Nav" + genKey(5) } 
    className={props.className ? props.className + " Nav" : "Nav"} 
    style={props.style ? props.style : null } >
        <div className='flex-row Nav_div'>
          <div className='Nav_lista_item center'><Link id="Nav_lista_item_a_1" className="Nav_lista_item_a puffIn" to="/">Home</Link></div>
          <div className='Nav_lista_item center'><Link id="Nav_lista_item_a_2" className="Nav_lista_item_a" to="/about">About</Link></div>
          <div className='Nav_lista_item center'><Link id="Nav_lista_item_a_3" className="Nav_lista_item_a" to="/contact">Contact</Link></div>
        </div>
    </nav>
  );
}

export default Nav;
