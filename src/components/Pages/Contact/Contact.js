import React, {useEffect} from "react";
//import FakeText from "../../FakeText/FakeText";
import { useNavigate } from 'react-router-dom';
import './css/Contact.css'
import styled from "styled-components";
import FlexColumn from "../../../flexColumn.css";
import Text from "../../Layout/Text/Text";
import { flexColumn, flexRow } from "../../../propsGerais.css.js";
import ButtonDinamico from "../../Layout/ButtonDinamico/ButtonDinamico.js";
import FlexRow from "../../../flexRow.css.js";
import { Link } from "react-router-dom";
import { Adicionar_class } from "../../funçoes/funçoes.js";

const StyledContact = styled.div`
    & h1 {
        font-size: 5rem;   
    }

    & > div {
        width: 100vw;
        height: 100vh;
        max-height: 100vh;      
        }

    & div.RotasContato {
        min-width: 50vw;
        }

    & div.RotasContato div {
        margin-right: 10px;
        }    
    @media (max-width: 500px) {
        & h1 {
               font-size: 4rem;
           } 
     }  
     @media (max-width: 280px) {
        & h1 {
               font-size: 4rem;
           } 
     }        
    `
    const Email = styled.div`
    ${flexRow}

    & p {
        padding-right: 10px;
    }
    @media (max-width: 500px) {
        & {
            ${flexColumn}
        }
     }
    `
    const Endereço = styled.div`
    ${flexRow}
    
    & p {
        padding-right: 10px;
    }
    @media (max-width: 500px) {
        & {
            ${flexColumn}
        }
     }
    `

const Contact = () => {
    const navigate = useNavigate();
    useEffect(() => {
        Adicionar_class(document.querySelector(".Header"), "Header-height") ;
        Adicionar_class(document.querySelector(".Footer"), "opacity_from_0_to_100") ;
      }, []);

    return (
        <StyledContact>
            <FlexColumn justifyContent={"center"} alignItems={"center"}>
                <h1>Contact</h1>
                <Email>
                    <Text TextName="Text_Email_prop" typeText="p" fontSize={"1.5rem"} color={"rgb(66, 71, 117)"}>
                        Email :
                    </Text>
                    <Text TextName="Text_Email_valor" typeText="p" fontSize={"1.3rem"} color={"rgb(90, 101, 202)"}>
                        xxx@xxx.com
                    </Text>
                </Email>
                <Endereço>
                    <Text TextName="Text_Endereço_prop" typeText="p" fontSize={"1.5rem"} color={"rgb(66, 71, 117)"}>
                        Endereço :
                    </Text>
                    <Text TextName="Text_Endereço_valor" typeText="p" fontSize={"1.3rem"} color={"rgb(90, 101, 202)"}>
                        Rua xxx, n° xxx  bairo xxx CEP xxx .
                    </Text>
                </Endereço>
                <FlexRow justifyContent={"space-evenly"} className="RotasContato">
                    <ButtonDinamico onClick={() => navigate('/') } > 
                        Go to Home
                    </ButtonDinamico> 
                    <ButtonDinamico onClick={() => navigate('/about') } > 
                         Sobre
                    </ButtonDinamico> 
                </FlexRow>
            </FlexColumn>
        </StyledContact>
        );
}

export default Contact