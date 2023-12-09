/*
const xInput = [-100, 0, 100]
const opacityOutput = [0, 1, 0]
const colorOutput = ["#f00", "#fff", "#0f0"]

const opacity = useTransform(x, xInput, opacityOutput)
const color = useTransform(x, xInput, colorOutput)
*/
import React, { useState } from "react";
import { motion,useTransform,useMotionValue} from "framer-motion";

export const FramerMotion5 = (props) => {
    const [animateDiv2, setAnimateDiv2] = useState(undefined);
    const [Div2_x, setDiv2_x] = useState(undefined);
    const x = useMotionValue(0)
    const xInput = [-100, 0, 100]
    const opacityOutput = [0, 1, 1]
    const colorOutput = ["#f00", "#fff", "#0f0"]
    const backgroundOutput = ["#0f0", "#fff", "#f00"]
    
    const 
    opacity = useTransform(x, xInput, opacityOutput),
    color = useTransform(x, xInput, colorOutput),
    background = useTransform(x, xInput, backgroundOutput),
    deslocar_x_Div2 = {
        x: Div2_x
    }

    return (
        <>
            <motion.div 
            className={props.className || ""}
            drag="x"
            onDrag = {
                (e) => {
                    setDiv2_x(
                        (e.target.getBoundingClientRect().x - document.querySelector("#root > div > div:nth-child(2)").getBoundingClientRect().x) 
                        - e.target.getBoundingClientRect().width - 10) ;
                    setAnimateDiv2(deslocar_x_Div2) ;
                }
            } >
                Teste
            </motion.div>
            <motion.div 
            drag="x"
            className={props.className || ""}
            animate={animateDiv2} >
                Teste
            </motion.div>
        </>)
  }