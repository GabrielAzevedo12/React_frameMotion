import {cat_h} from "./cat_h"
import {cat_w} from "./cat_w"

const
Adicionar_class = (e, name_class) => {
    if(e) {
      e.classList.add(name_class);
    }
  },
  
  Remover_class = (e, name_class) => {
    if(e) {
      e.classList.remove(name_class);
    }
  },
  
  Existe_Class = (e, name_class)  => {
  
    let exibir = false;
    if (e) {
      for(var x of e.classList) {
      
        if (exibir) {console.log(x);}
    
        if(x === name_class) {
    
            return true;
            //break;
     
        } else {
    
            continue;
    
        }
    
     }
    }
  
  },
  
  new_text = (e, text) => {
    e.textContent = text;
  },
  
  $ = (NomeDaIndent) => {
    /*O argumento é obrigatoriamento uma string*/
    if (NomeDaIndent && NomeDaIndent !== '' && NomeDaIndent !== '#' && NomeDaIndent !== '.') {
      var ElementoHtml = document.querySelector(NomeDaIndent); // BOM.
      return ElementoHtml;
    }
  
  },
  
  S1 = (e, tipo_style, valor_style) => {
  
    let el = document.querySelector(e);
    el["style"][tipo_style] = valor_style;
  
  },
  
  S2 = (e, tipo_style, valor_style) => {
  
    e["style"][tipo_style] = valor_style;
  
  },
  
  def_dimensoes = (e,w,h) => {
    e["style"]["width"] = w;
    e["style"]["height"] = h;
  },
  incrementar_dimensoes = (e,w,h) => {
    let 
    [w_new, h_new] = [parseInt(e.getBoundingClientRect().width) + w, parseInt(e.getBoundingClientRect().height) + h];
    e["style"]["width"] = w_new + "px";
    e["style"]["height"] = h_new + "px";
  },
  esconder = (e, variosArgs) => {

   if(variosArgs) {
    for ( let x of e) {
      x.style.display = "none";  
    }
   } else {
    e.style.display = "none";
   }

  },
  exibir = (e, variosArgs) => {

    if(variosArgs) {
      for ( let x of e) {
        x.style.display = "";  
      }
     } else {
      e.style.display = "";
     }

  },

  sucessor_n = (n) => ( n+1 ),

  um_decimo = (n) => ( n + 0.5 ),

  dobro_n_negativo = (n) => ( n*0 ),

  indentidade = ( any ) => ( any ),

  indentidade_negativo = ( any ) => ( -1*any ),

  quadrado = ( any ) => ( any*any ),

  quadrado_negativo = ( any ) => ( -1*any*any ),
  
  nothing = ( any ) => ( 0 ) ;

  export { 
    Adicionar_class,
    Remover_class,
    Existe_Class,
    S1,
    S2,
    $,
    new_text,
    def_dimensoes,
    esconder,
    exibir,
    sucessor_n,
    dobro_n_negativo,
    indentidade,
    indentidade_negativo,
    incrementar_dimensoes,
    quadrado,
    quadrado_negativo,
    nothing,
    um_decimo
           }