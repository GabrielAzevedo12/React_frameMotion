//import logo from './logo.svg';
import { useState } from 'react';
import ButtonDinamico from '../ButtonDinamico/ButtonDinamico';
import Nav from '../Nav/Nav';
import { BsChevronDoubleLeft } from "react-icons/bs";
import styled from 'styled-components';
import './css/Header.css';
import './css/Animation_Header_moverTop_1b5Ab00bxvN.css'
import './css/Animation_Header_moverTop_c3Bp26yyxUn.css'
import './css/Animation_Header_AlterarDimensoes.css'
import { $, Adicionar_class, Existe_Class, Remover_class } from '../../funçoes/funçoes';
import { ButtonDinamico_Nav_rotate0deg } from '../ButtonDinamico/css/Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4.css.js';
import { ButtonDinamico_Nav_rotate180deg } from '../ButtonDinamico/css/Animation_ButtonDinamico_Nav_moverLeft_d98V0w.css.js';
import { motion } from 'framer-motion';

const StyledHeader = styled(motion.div)`
    grid-area: Header;
    max-width: 100vw;
    min-width: 100vw;
    background: linear-gradient(rgb(8, 19, 29) 70%, transparent);
    z-index: 2;
    --heightHeader: 10vh;
    top: 0;
    left: -0.5px;
`

function Header(props) {
  const [boolean, setBoolean] = useState(false);
  const [rotate180, setRotate180] = useState(false);
  const [mobile, setMobile] = useState(props.mobile || false);

  const ButtonDinamico_onClick = (e) => {
    if ( boolean === false ) {
      setBoolean(true) ;
      setRotate180(true);
    } else {
      setBoolean(false) ;
      setRotate180(false)
    }

  },
  Header_props = {
    variants : {
        initial : {
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0
        },
        whileView : {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1
        },
        whileHover : {
            scale: 1.1
        },
        hidden : { 
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0
        },
        visible : { 
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1
         }
    },
  styles : {
  },
  events: {
    mouseover: (e) => {
      if ( Existe_Class( $("#Header") , "Animation_Header_moverTop_c3Bp26yyxUn" ) ) {
        Remover_class($("#Header"), "Animation_Header_moverTop_c3Bp26yyxUn" );
        Adicionar_class($("#Header"), "Animation_Header_AlterarDimensoes");
      }
    },
    mouseout: () => {}
}}

  const StyledBsChevronDoubleLeft = styled(BsChevronDoubleLeft)`
  position: relative;
  animation: ${ rotate180 ? ButtonDinamico_Nav_rotate180deg : ButtonDinamico_Nav_rotate0deg } 1s 1;
  rotate: ${ rotate180 ? "180deg" : "0deg" } ;
  left: -25px ;
   `;

   const NotMobile = () => {
    return (
      <>
      <div id="Header_Logo" className="center Logo">
        This is Logo
      </div>
      <div id="Div_Header_Nav" className='flex-row Div_Nav'>
        <ButtonDinamico id="Nav" className="center">       
          <StyledBsChevronDoubleLeft id="ButtonDinamico_Nav_left" className='ButtonDinamico_Nav Animation_ButtonDinamico_Nav_moverLeft_gM70YiCU9x4' onClick = {ButtonDinamico_onClick} /> 
        </ButtonDinamico>
        {boolean && (
        <Nav name="Teste" id="Header"/>
        )}
      </div>
      </>
    )
   }
    const trueMobile = () => {
      return (
        <div id="Div_Header_Nav" className='flex-row space-between Div_Nav'>
          <Nav name="Teste" id="Header"/>
        </div>
      )
    }

  return (
    <>
    <StyledHeader 
    id="Header" 
    className={props.mobile ? 
    `center fixed space-between Header flex-row Animation_Header_moverTop_c3Bp26yyxUn}` :
    `${props.className} Header flex-row Animation_Header_AlterarDimensoes`}
    onMouseOver={Header_props.events.mouseover}
    variants={Header_props.variants}
    initial="hidden"
    whileInView="whileView" 
    whileHover="whileHover" >
      {mobile ?
      trueMobile() :
      NotMobile()
      }
    </StyledHeader>
    </>
  );
}
/*
 {boolean ? 
          <BsChevronDoubleRight id="ButtonDinamico_Nav_right" className='ButtonDinamico_Nav' onClick = {ButtonDinamico_onClick} /> :
          <BsChevronDoubleLeft id="ButtonDinamico_Nav_left" className='ButtonDinamico_Nav' onClick = {ButtonDinamico_onClick} />} 
          <div id="Header_Logo" className="center Logo">
        This is Logo
      </div>
*/
export default Header;
