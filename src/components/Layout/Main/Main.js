//import logo from './logo.svg';
import './css/Main.css';
import './css/Main_Conatiner_Filho.css';
import './css/titulo.css';
import './css/aumentarAltura.css';
import './css/diminuirAltura.css';
import './css/deslocametoHeader_negativo.css'
import './css/deslocametoHeader_positivo.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { $ } from '../../funçoes/funçoes'
import { BrowserRouter as Router, Route, Link, Routes, redirect as Redirect } from "react-router-dom";
import React, {useState} from "react";
import Home from '../../Pages/Home/Home';
import Contact from '../../Pages/Contact/Contact';
import About from '../../Pages/About/About';
import Container from '../Container/Container';
import styled from 'styled-components';
import { flexColumn } from '../../../propsGerais.css';

const StyledMain = styled.main`  
@media (max-width: 500px) {
  & div#main_div {
    display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  }
}            
    `
function Main() {
  const 
  [animation_header, setAnimation_header] =  useState(false),
  [animation_footer, setAnimation_Footer] = useState(false);
  const name = "Teste"
  return (
    <Router>
    <StyledMain>
    <div id="main_div">
    <Header mobile={true} animation_header={animation_header}/>
      <Container CustomClass="min-hight-container">
         <Routes>
           <Route path="/" exact element={<Home setAnimation_header={setAnimation_header} setAnimation_Footer={setAnimation_Footer}/>} />
           <Route path="/about"  element={<About name={name}/>} />
           <Route path="/contact"  element={<Contact/>} />
           <Route render={() => <h1>404: page not found</h1>} />
         </Routes>
      </Container>
      <Footer animation_footer={animation_footer}/>
    </div>
    </StyledMain>
  </Router>
  );
}

export default Main;

/*
    <div className="Main template-column">
        <Header/>
        <div className="Main_Conatiner_Filho" onScroll={(e) => {
          //ScrollMain_onScroll(e.target)
        }}>
          <h1 className="titulo">Teste</h1>
          <h1 className="titulo">Teste</h1>
          <h1 className="titulo">Teste</h1>
          <h1 className="titulo">Teste</h1>
        </div>
        <Footer />
      </div>
*/