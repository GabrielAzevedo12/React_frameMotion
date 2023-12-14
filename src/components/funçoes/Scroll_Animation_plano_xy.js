import { Animation_plano_xy } from "./Animation_plano_xy";
import { cat_scrollx } from "./cat_scrollx.js"
import { cat_scrolly } from "./cat_scrolly.js"
import { Scroll_xy } from "./Scroll.js"

const Scroll_Animation_plano_xy = (elemento, limite, transformarx, transformary) => {

    const Interval_for_Action_1 = setInterval(() => {
        Animation_plano_xy(
            elemento,
            limite,
            cat_scrollx,
            cat_scrolly, 
            transformarx,
            transformary,
            Scroll_xy,
            Interval_for_Action_1)
        },10);
    
}  ;

export { Scroll_Animation_plano_xy }