import { keyframes } from "styled-components"

const Animation_Banner1_AlterarDimensoes = (posiçaoAtual,posiçaoFinal) => {
    const
    animation = keyframes`
    0% {
      height: ${ posiçaoAtual || 0 } ;
    }
    100% {
      height: ${ posiçaoFinal || 0 };
    }
    `
    return animation ;
  }

export { Animation_Banner1_AlterarDimensoes }