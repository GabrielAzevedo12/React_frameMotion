import React, { useState } from "react";
import { motion } from "framer-motion";

export const ButtonDinamico1 = (props) => {
    const 
    [Index, setIndex] = useState(1),
    upIndex = () => {
        setIndex(2);
    }

    return (   
            <motion.div 
                drag
                className={props.className + " bt_model_1 flex center relative style_template_1 style_template_1_hover"}
                onClick = {props.onClick || undefined}
                onMouseOver = {props.onMouseOver || upIndex }
                style={props.style || {
                        fontSize: "1.2rem",
                        borderRadius: "30px",
                        marginLeft: "10px",
                        width: "60px",
                        height: "30px",
                        zIndex: Index
                    }} >
                    {props.children}
            </motion.div>)
  }