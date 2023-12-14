//import logo from './logo.svg';
import { genKey } from '../../funçoes/genRandomKey';
import './css/ButtonDinamico.css';
import './css/ButtonDinamico_Nav.css';
import "./css/Animation_ButtonDinamico_Nav_moverLeft_d98V0w.css"
import "./css/Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4.css"
import styled from 'styled-components';
//import { BrowserRouter as Router, Route, Link, Routes, redirect as Redirect } from "react-router-dom";

function ButtonDinamico( props ) {
    const 
    className = `ButtonDinamico ${props.className}`,
    id=`ButtonDinamico_${props.id}`;
    //element = props.icon || "" ;

    const ButtonDinamico = styled.div`
      font-size: 1.4rem;
      list-style-type: none;
      color: rgb(132, 150, 165);
      font-weight: 700;

      &:hover {

      font-size: 1.5rem;
      color: rgb(54, 119, 98);
      font-weight: 600;
      z-index:10;

    }`

  return (
    <ButtonDinamico 
    id = { props.id ? id : "ButtonDinamico" + genKey(5) } 
    className={props.className ? className : "ButtonDinamico"} 
    style={props.style ? props.style : null }
    onClick={ props.onClick || undefined }>
        {props.children}    
    </ButtonDinamico>
  );
}

export default ButtonDinamico;
