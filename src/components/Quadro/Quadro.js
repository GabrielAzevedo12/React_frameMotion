import React from "react";
import { motion } from "framer-motion";

export const Quadro = (props) => {
    return (
            <motion.div 
            className={props.className || ""}
            drag="x"
            dragConstraints={{ 
                left: 0,
                top: 0,
                bottom: 0,
                right: 0 }}

            animate={{
                x: props.x || 0
            }}
            initial={{ 
                opacity: 0 ,
                scale: 0 
            }}
            whileInView={{ 
                opacity: 1 ,
                scale: 1 
            }}
            whileHover={{ 
                scale: 1.2
               }}
            style={ props.style || {
                minWidth: "95vw",
                height: "500px",  
                marginLeft: "10px",
                marginRight: "10px",
                borderRadius: "30px",
                fontSize: "2rem",
                fontWeight: 500
              } } >
                {props.text || "Quadro"}
            </motion.div>)
  }