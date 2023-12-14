import { Animation_plano_xy } from "./Animation_plano_xy";
import {incrementar_dimensoes} from "./funçoes.js"
import { cat_h } from "./cat_h.js";
import { cat_w } from "./cat_w.js";

const Expandir_Animation_plano_xy = (elemento, limite, transformarx, transformary) => {

    const Interval_for_Action_1 = setInterval(() => {
        Animation_plano_xy(
            elemento,
            limite,
            cat_w,
            cat_h, 
            transformarx,
            transformary,
            incrementar_dimensoes,
            Interval_for_Action_1)
        },10);
    
}

export { Expandir_Animation_plano_xy }