import React, { useEffect, useReducer } from "react";
import BannerGeral from "../../BannerGeral/BannerGeral";
import SubBanner from "../../subBanner/subBanner";
import Text from "../../../Text/Text";
import { AiOutlineLoading } from "react-icons/ai";
import { MovLeft_subBanner_posiçaoAtual } from "./css/MovLeft_subBanner.css.js"
import { Animation_Banner1_AlterarDimensoes } from "./css/Animation_Banner1_AlterarDimensoes.css.js";
import { rotate } from "./css/rotate.css.js"
import styled, { css, keyframes } from "styled-components";
import './css/Banner1.css';
import './css/Banner1_subBanner1.css'
import './css/Banner1_subBanner2.css'
import './css/Banner1_subBanner3.css'
import { $ } from "../../../../funçoes/funçoes.js";

// Animaçoes
// useReducer
const reducer = (stateAtual, stateUp) => {
  return { ...stateAtual, ...stateUp }
}

// Estilos
const StyledBanner1 = styled(BannerGeral)`
grid-area: Banner1;
min-width: 100vw;
max-width: 100vw;
--widthBanner1: 100vw;
min-height: 30vh;
--heightBanner1: 70vh;
height: var(--heightBanner1) ;
background-color: rgb(43, 32, 53);
z-index: 10;

&:hover { 
  ${ 
     props => props.OverSubBanner ?
     css`
     animation: ${ Animation_Banner1_AlterarDimensoes(props.HeightAtual + "px", `calc(var(--heightBanner1) + 10vh)` ) } 1s linear ;
     height: calc(var(--heightBanner1) + 10vh) ;
     ` :
     ""
    }
}
    `,

StyledSubBanner = 
  styled(SubBanner)`
  position: relative;
  background-color: rgb(149, 129, 168);
  ${
  props => props.animation && !props.OverSubBanner ? 
  css`animation: ${MovLeft_subBanner_posiçaoAtual(props.left)} 60s linear infinite ;` :
  css`left: ${props.left} ;` 
  }
  ${
  props => props.load ? 
  css`left: 0px` :
  `` 
  }
  `,

StyledText = styled(Text)`
  position: relative;
  animation: ${rotate} 2s cubic-bezier(.79,2.01,.83,.67) infinite;
  `;

//class
const Class_subBanner = class {

  constructor (over, animation, posiçaoInicial, posiçaoAtual) {

          this.posiçao = {
              inicial : {
                  x: posiçaoInicial ? posiçaoInicial : undefined
              },
              atual : {
                  x: posiçaoAtual ? posiçaoAtual : undefined
              }
          };
          this.animation = animation;
          this.over = over

        }

}

const Banner1 = () => { 
  
  const [states, updateStates ] = useReducer(reducer, { 
    "posiçaoInicial_subBanner3": false,
    "posiçaoInicial_subBanner2": false,
    "posiçaoInicial_subBanner1": false,
    posiçaoAtual_subBanner1: "0px",
    posiçaoAtual_subBanner2: "0px",
    posiçaoAtual_subBanner3: "0px",
    HeightAtual_Banner1: undefined,
    subBanner_animation: false,
    OverSubBanner: false,
    loadText: false,
    load: false
  })
  
  useEffect(
    () => {
      var i = 1;
      for ( const element of $("#Banner1").childNodes) {
        var
        d_e = element.getBoundingClientRect();
        states["posiçaoInicial_subBanner"+i] = d_e.x ;
        i++;
        }   
      updateStates({ 
        HeightAtual_Banner1 : parseInt( $("#Banner1").getBoundingClientRect().height ),
        load: states.load ? states.load : !states.load
      })
      setTimeout(() => {
        updateStates({ 
          loadText: !states.loadText,
          subBanner_animation: !states.subBanner_animation,
          load: states.load ? !states.load : states.load })
      }, 1000);
    }, []);

   const 
   SubBanner_onMouseOver = (e) => {
    updateStates(
      {
        posiçaoAtual_subBanner : ( $("#Banner1_subBanner1").getBoundingClientRect().x - states.posiçaoInicial_subBanner1 ) + "px" ||
        ( $("#Banner1_subBanner2").getBoundingClientRect().x - states.posiçaoInicial_subBanner2 ) + "px" ||
        ( $("#Banner1_subBanner3").getBoundingClientRect().x - states.posiçaoInicial_subBanner3 ) + "px" ,
        OverSubBanner: states.OverSubBanner ? states.OverSubBanner : !states.OverSubBanner,
        HeightAtual_Banner1: parseInt( $("#Banner1").getBoundingClientRect().height )
      }
    )
   },
   
   SubBanner_onMouseOut = (e) => {
    updateStates({OverSubBanner: states.OverSubBanner ? !states.OverSubBanner : states.OverSubBanner})
   }

    return (
        <StyledBanner1 
        BannerName="Banner1"
        className="flex-row flex-nowrap"
        HeightAtual={states.HeightAtual_Banner1}
        OverSubBanner={states.OverSubBanner}>
        <StyledSubBanner 
        BannerPai="Banner1" 
        indexItem={1} 
        className="center" 
        onMouseOver={SubBanner_onMouseOver} 
        onMouseOut={SubBanner_onMouseOut} 
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}
        left={states.posiçaoAtual_subBanner}
        HeightAtual={states.HeightAtual_subBanner1}
        load={states.load}>
        {
                states.loadText ?
                <Text TextName="subBanner1_Text" typeText="h1"> 
                subBannner 1
                </Text> :
                <StyledText TextName="Text_Load" typeText="h1"> 
                  <AiOutlineLoading/>
                </StyledText>
        }
        </StyledSubBanner>
        <StyledSubBanner 
        BannerPai="Banner1" 
        indexItem={2} 
        className="center" 
        onMouseOver={SubBanner_onMouseOver} 
        onMouseOut={SubBanner_onMouseOut}
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}
        left={states.posiçaoAtual_subBanner}
        HeightAtual={states.HeightAtual_subBanner2}
        load={states.load}>
        {
                states.loadText ?
                <Text TextName="subBanner2_Text" typeText="h1"> 
                subBannner 2
                </Text> :
                <StyledText TextName="Text_Load" typeText="h1"> 
                  <AiOutlineLoading/>
                </StyledText>
        }
        </StyledSubBanner>
        <StyledSubBanner 
        BannerPai="Banner1" 
        indexItem={3} 
        className="center" 
        onMouseOver={SubBanner_onMouseOver} 
        onMouseOut={SubBanner_onMouseOut}
        animation={states.subBanner_animation}
        OverSubBanner={states.OverSubBanner}
        left={states.posiçaoAtual_subBanner}
        HeightAtual={states.HeightAtual_subBanner3}
        load={states.load}>
        {
                states.loadText ?
                <Text TextName="subBanner3_Text" typeText="h1"> 
                subBannner 3
                </Text> :
                <StyledText TextName="Text_Load" typeText="h1"> 
                  <AiOutlineLoading/>
                </StyledText>
        }
        </StyledSubBanner>
      </StyledBanner1>  
      
        );
}

export default Banner1