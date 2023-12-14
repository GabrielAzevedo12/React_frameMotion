import React, { Fragment } from "react";
//import FakeText from "../../FakeText/FakeText";
import { redirect as Redirect, useParams,  useNavigate } from "react-router-dom";
import styles from "./css/Container.css"

//<Redirect to="/" />
const Container = ( props ) => {
    const 
    navigate = useNavigate() ,
    className = "Container_Layout_Default " + props.CustomClass;
    return (
        <div className={className}>
            {props.children}
        </div>
        );
}

export default Container