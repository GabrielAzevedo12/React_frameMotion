const Deslocar_plano_xy = (e,x,y) => {
       //console.log(e)
    /*
        let
        xAtual = parseFloat( vaziaString( splitL(e["style"]["left"],'p') ) ),
        yAtual = parseFloat( vaziaString( splitL(e["style"]["top"],'p') ) );
    */

        if( e.style.position !== "relative") {
            e.style.position = "relative" ;
        }

        if(x === undefined || x === null) {
    
            console.log("o deslocamento horizontal está indefinido");
    
        } else {
    
          //e.style.left = (x+xAtual) + "px";
          e.style.left = (x) + "px";
    
        }
    
        if(y === undefined || y === null) {
    
            console.log("o deslocamento vertical está indefinido");
    
        } else {
    
      //e.style.top = (y+yAtual) + "px";
        e.style.top = (y) + "px";
    
        }
    
    }

export { Deslocar_plano_xy }