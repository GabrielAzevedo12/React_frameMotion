import React from "react";
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
    Remover_class(Header, "Header-height")
    if (scrollOld >= window.scrollY) {
      //esconder(Header);
      //exibir(Footer); 
      Adicionar_class(Header, "Animation_Header_moverTop_1b5Ab00bxvN");
      Remover_class(Header, "Animation_Header_moverTop_c3Bp26yyxUn");
      Remover_class(Header, "Animation_Header_AlterarDimensoes");
      Remover_class(Header_Logo, "opacity_from_0_to_100");
      Remover_class(Div_Header_Nav, "opacity_from_0_to_100");
      Adicionar_class(Header_Logo, "opacity_from_100_to_0");
      Adicionar_class(Div_Header_Nav, "opacity_from_100_to_0");
      Adicionar_class(Footer, "Animation_Footer_moverTop_59gFfkGIGd7");
      Remover_class(Footer, "Animation_Footer_moverTop_ocf0krF3qPr");
    } else {
      //esconder(Footer);
      //exibir(Header);
      Remover_class(Header, "Animation_Header_moverTop_1b5Ab00bxvN");
      Adicionar_class(Header, "Animation_Header_moverTop_c3Bp26yyxUn");
      Remover_class(Header_Logo, "opacity_from_100_to_0");
      Remover_class(Div_Header_Nav, "opacity_from_100_to_0");
      Adicionar_class(Header_Logo, "opacity_from_0_to_100");
      Adicionar_class(Div_Header_Nav, "opacity_from_0_to_100");
      //Adicionar_class(Header, "Animation_Header_AlterarDimensoes");
      //exibir([Header_Logo, Div_Header_Nav],true);
      Header_Logo ? Header_Logo.style.display = "" : nothing() ;
      Div_Header_Nav ? Div_Header_Nav.style.display = "" : nothing() ;
      Remover_class(Footer, "Animation_Footer_moverTop_59gFfkGIGd7");
      Adicionar_class(Footer, "Animation_Footer_moverTop_ocf0krF3qPr");
    }
    scrollOld = window.scrollY;
  } else {
    Remover_class(Footer, "Animation_Footer_moverTop_ocf0krF3qPr");
    exibir(Footer);
    Remover_class(Header, "Animation_Header_moverTop_1b5Ab00bxvN");
    exibir(Header);
    Adicionar_class(Header, "Header-height")
  }
  
};
window.addEventListener('scroll', () => {
  ScrollMain_onScroll()
})

const Home = () => { 
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