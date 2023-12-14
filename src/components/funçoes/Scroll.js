const Scroll = (Incremento, ElementoScroll, TypeScroll, Limite_Scroll) => {
    let 
    ValorAtualScroll = ElementoScroll[TypeScroll];
    //Limite_Scroll = n*Dimensão_do_elemento_scroll;
    
    if (ValorAtualScroll >= 0 && ValorAtualScroll !== Limite_Scroll) {
      let ValorNovoScroll = ValorAtualScroll + Incremento;
  
      if (TypeScroll === "scrollLeft") {
        ElementoScroll.scrollTo({
          left: ValorNovoScroll,
          top: 0,
          behavior: "smooth",
        });
      } else if (TypeScroll === "scrollTop") {
        ElementoScroll.scrollTo({
          left: 0,
          top: ValorNovoScroll,
          behavior: "smooth",
        });
      }
    }
  
    if (ValorAtualScroll === Limite_Scroll) {
      let ValorNovoScroll = ValorAtualScroll - Incremento;
  
      if (TypeScroll === "scrollLeft") {
        ElementoScroll.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      } else if (TypeScroll === "scrollTop") {
        ElementoScroll.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const Scroll_xy = (e,x,y) => {

    if(x === undefined || x === null) {

      x = 0;

  } 

  if(y === undefined || y === null) {

    y = 0;

  }
  
  e.scrollTo({
    left: x + e["scrollLeft"],
    top: y + e["scrollTop"],
    behavior: "smooth",
  });
  
  }

  export { Scroll_xy }