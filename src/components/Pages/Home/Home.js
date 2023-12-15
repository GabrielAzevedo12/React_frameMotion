import React, {useEffect} from "react";
//import FakeText from "../../FakeText/FakeText";
import './css/Home.css';
import { esconder, exibir, Existe_Class, $, Adicionar_class, Remover_class, nothing } from "../../funçoes/funçoes";
import Banner from "../../Layout/Banner/Banner";
import FormExample from "../../HookForm/Example2";

var scrollOld = 0;
const
ScrollMain_onScroll = () => {
  const 
  Header = document.querySelector(".Header"), 
  Footer = document.querySelector(".Footer"),
  Header_Logo = $("#Header_Logo"),
  Div_Header_Nav = $("#Div_Header_Nav");

  if ( Existe_Class( $(".Container_Layout_Default").childNodes[0], "Home_Container" ) ) {
    if (scrollOld >= window.scrollY) {
      //animation header
      Adicionar_class(Header, "Animation_Header_moverTop_1b5Ab00bxvN");
      Remover_class(Header, "Animation_Header_moverTop_c3Bp26yyxUn");
      Remover_class(Header, "Animation_Header_AlterarDimensoes");
      Remover_class(Header_Logo, "opacity_from_0_to_100");
      Remover_class(Div_Header_Nav, "opacity_from_0_to_100");
      Adicionar_class(Header_Logo, "opacity_from_100_to_0");
      Adicionar_class(Div_Header_Nav, "opacity_from_100_to_0");
      //animation footer
      if ( window.outerWidth >= 500 ) {
        Adicionar_class(Footer, "opacity_from_0_to_100");
        Remover_class(Footer, "opacity_from_100_to_0");
      } else {

      }

    } else {
      //animation header
      Remover_class(Header, "Animation_Header_moverTop_1b5Ab00bxvN");
      Adicionar_class(Header, "Animation_Header_moverTop_c3Bp26yyxUn");
      Remover_class(Header_Logo, "opacity_from_100_to_0");
      Remover_class(Div_Header_Nav, "opacity_from_100_to_0");
      Adicionar_class(Header_Logo, "opacity_from_0_to_100");
      Adicionar_class(Div_Header_Nav, "opacity_from_0_to_100");
      Header_Logo ? Header_Logo.style.display = "" : nothing() ;
      Div_Header_Nav ? Div_Header_Nav.style.display = "" : nothing() ;
      //animation footer
      if ( window.outerWidth >= 500 ) {
        Remover_class(Footer, "opacity_from_0_to_100");
        Adicionar_class(Footer, "opacity_from_100_to_0");
      } else {

      }
    }
    scrollOld = window.scrollY;
  } else {
    Remover_class(Footer, "Animation_Footer_moverTop_ocf0krF3qPr");
    Remover_class(Header, "Animation_Header_moverTop_1b5Ab00bxvN");
    exibir(Footer);
    exibir(Header);
  }
  
};
window.addEventListener('scroll', () => { 
  ScrollMain_onScroll();
  /*
  $(".Home_Container").setAttribute("teste", scrollOld + "");
  parseFloat( console.log( $(".Home_Container").getAttribute("teste") ) )
  */
})

const Home = () => { 
  useEffect(() => {
    Adicionar_class(document.querySelector(".Header"), "Header-height") ;
    Adicionar_class(document.querySelector(".Footer"), "opacity_from_0_to_100") ;
  }, []);
    return ( 
          <div className="Home_Container flex center" onScroll={(e) => {
            //ScrollMain_onScroll(e.target)
}}>
            <FormExample />
        </div>
        );
}

/*
<h1 className="titulo">Teste</h1>
            <h1 className="titulo">Teste</h1>
            <h1 className="titulo">Teste</h1>
            <h1 className="titulo">Teste</h1>
*/
export default Home