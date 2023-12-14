import styled from "styled-components";

const StyledFlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: 
    ${ (props) => props.justifyContent ||"flex-start" };
    height: 
    ${ (props) => props.Height || "auto" };
    width: 
    ${ (props) => props.Width || "auto" }; 
    background-color: black;
    color: rgb(125, 125, 158);
    `
    
const FlexRow = ( props ) => {    
    return (
        <StyledFlexRow justifyContent={props.justifyContent} alignItems={props.alignItems} maxHeight={props.maxHeight} maxWidth={props.maxWidth} minHeight={props.minHeight} minWidth={props.minWidth} Height={props.Height} Width={props.Width} className={ props.className || ""}>
            {props.children}
        </StyledFlexRow>
        );
}

export default FlexRow;

/*
align-items: 
    ${ (props) => props.alignItems || "flex-start" };
     height: 
    ${ (props) => props.Height || "100vh" };
    width: 
    ${ (props) => props.Width || "100vw" };  
*/