const
  ScrollMain_onScroll = (e,valorAnalisado) => {
    const 
    Header = document.querySelector(".Header"), 
    Footer = document.querySelector(".Footer"),
    scrollOld = valorAnalisado;
    if (scrollOld >= e.scrollHeight - e.scrollTop) {
      //console.log(1)
      /*
      Footer.classList.add("aumentarAltura")
      Footer.classList.remove("diminuirAltura")
      Header.classList.add("deslocametoHeader_negativo")
      Header.classList.remove("deslocametoHeader_positivo")
      */
      Footer.style.display = "";
      Header.style.display = "none";
    } else {
      /*      
      Header.classList.add("deslocametoHeader_positivo");
      Header.classList.remove("deslocametoHeader_negativo")
      Footer.classList.add("diminuirAltura")
      Footer.classList.remove("aumentarAltura")
      */
      Footer.style.display = "none";
      Header.style.display = "";
      //console.log(1)
    }
    scrollOld = e.scrollHeight - e.scrollTop;
  };

  export { ScrollMain_onScroll }