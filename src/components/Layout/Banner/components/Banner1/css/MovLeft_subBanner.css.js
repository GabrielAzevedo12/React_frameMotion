import { keyframes } from "styled-components"

const LimiteDeslocamento = -1*window.outerWidth*2 + "px";

const MovLeft_subBanner = keyframes`
0% {
    left: 0;
}
50% {
    left: ${LimiteDeslocamento} ;
}
100% {
    left: 0 ;
}
`
const MovLeft_subBanner_posiçaoAtual  = (posiçaoAtual) => {
    const 
    LimiteDeslocamento = -1*window.outerWidth*2 + "px",
    MovLeft_subBanner = keyframes`
    0% {
      left: ${ posiçaoAtual || 0 } ;
    }
    50% {
      left: ${LimiteDeslocamento} ;
    }
    100% {
      left: 0 ;
    }
    `
    return MovLeft_subBanner ;
  }

export { MovLeft_subBanner, LimiteDeslocamento, MovLeft_subBanner_posiçaoAtual }