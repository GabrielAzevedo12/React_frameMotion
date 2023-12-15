import React, { Fragment } from "react";
//import FakeText from "../../FakeText/FakeText";
import { redirect as Redirect, useParams,  useNavigate } from "react-router-dom";
import styles from "./css/Container.css"
import styled from "styled-components";
import { flexColumn } from "../../../propsGerais.css";

//<Redirect to="/" />
const StyledContainer = styled.div`  
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        min-height: 100vh;
     }         
    `
const Container = ( props ) => {
    const 
    navigate = useNavigate() ,
    className =  "Container_Layout_Default " + props.CustomClass;
    return (
        <StyledContainer className={className}>
            {props.children}
        </StyledContainer>
        );
}

export default Container