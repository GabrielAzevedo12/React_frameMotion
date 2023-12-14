import { $, sucessor_n, indentidade_negativo, incrementar_dimensoes, indentidade, quadrado, nothing, um_decimo } from "./funçoes.js"
import { genKey } from './genRandomKey.js';
import { Scroll_Animation_plano_xy } from "./Scroll_Animation_plano_xy.js";

let Animation_plano_xy = (elemento, limite, referencia_x, referencia_y, transformarx, transformary, Action_in_xy, Interval_for_Action) => {

    let x = referencia_x(elemento);
    let y = referencia_y(elemento);
    let condiçao = x >= limite ;
    
    // const Interval_for_Action = setInterval(exe,10);

    console.log(condiçao, x, transformarx(x), transformary(x))

    if (condiçao) {

        clearInterval(Interval_for_Action);

    } else {

        x = transformarx(x);
        y = transformary(x);
        Action_in_xy(elemento, x, y);

    }
    
};
    

const Teste_Mover_Animation_plano_xy = () => {
    
/*
    const Interval_for_Action_1 = setInterval(() => {
    Mover_Animation_plano_xy($(".Banner3_Container"),
    5,
    sucessor_n,
    quadrado,
    Deslocar_plano_xy,
    Interval_for_Action_1)
    },10);

    Mover_Animation_plano_xy($(".Banner3_Container"),
    10,
    sucessor_n,
    quadrado)

    Expandir_Animation_plano_xy($(".Banner3_Container"),
    10,
    sucessor_n,
    indentidade)
    
*/

console.log( genKey(50) );

Scroll_Animation_plano_xy(
    $("#Banner1"),
    window.innerWidth,
    sucessor_n,
    nothing)

  }

/*
let Interval_for_Action = setInterval(() => {
        Desloc(fgs.$("#retaClass_horizontal"),1000,Atualizar)
    },0);

Deslocar_plano_xy(elemento, x, y);    

const Teste_Mover_Animation_plano_xy = () => {
    const sucessor_n = (n) => ( n+1 );
    const dobro_n = (n) => ( n*2 );
    Mover_Animation_plano_xy($(".Banner3_Container"), 500, sucessor_n, dobro_n, Deslocar_plano_xy)
}

 */

export { Animation_plano_xy, Teste_Mover_Animation_plano_xy }