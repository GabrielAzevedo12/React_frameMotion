import { Animation_plano_xy } from "./Animation_plano_xy";
import { posiçaoRelativa_x as posiçaoAtual_x } from "./posiçao_relativa_x";
import { posiçaoRelativa_y as posiçaoAtual_y } from "./posiçao_relativa_y";
import { Deslocar_plano_xy } from "./Deslocar_plano_xy";

const Mover_Animation_plano_xy = (elemento, limite, transformarx, transformary) => {


    const Interval_for_Action_1 = setInterval(() => {
        Animation_plano_xy(
            elemento,
            limite,
            posiçaoAtual_x,
            posiçaoAtual_y, 
            transformarx,
            transformary,
            Deslocar_plano_xy,
            Interval_for_Action_1)
        },10);
    
      }

export { Mover_Animation_plano_xy }