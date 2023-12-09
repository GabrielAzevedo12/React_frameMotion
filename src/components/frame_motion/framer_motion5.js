/*
const xInput = [-100, 0, 100]
const opacityOutput = [0, 1, 0]
const colorOutput = ["#f00", "#fff", "#0f0"]

const opacity = useTransform(x, xInput, opacityOutput)
const color = useTransform(x, xInput, colorOutput)
*/
import React, { useState } from "react";
import { motion,useTransform,useMotionValue} from "framer-motion";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const FramerMotion5 = (props) => {
    const [animateDiv2, setAnimateDiv2] = useState(undefined);
    const [animateDiv, setAnimateDiv] = useState(undefined);
    const [Div2_x, setDiv2_x] = useState(undefined);
    const [Div_x, setDiv_x] = useState(undefined);
    const [const_deslocamento, setConst_deslocamento] = useState(0);
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
    },
    deslocar_x_Div = {
        x: Div_x
    };

    return (
        <>
            <motion.div 
            className={props.className || ""}
            drag="x"
            dragConstraints={{ 
                left: 50,
                top: 0,
                bottom: 0,
                right: 0 }}
            onDrag = {
                (e) => {
                    console.log(const_deslocamento)
                    setDiv_x(const_deslocamento);
                    setDiv2_x(const_deslocamento) ;
                    setAnimateDiv(deslocar_x_Div) ;    
                    setAnimateDiv2(deslocar_x_Div2) ;
                    setConst_deslocamento(const_deslocamento + 1);
                }
            }
            animate={animateDiv} >
                Teste
            </motion.div>
            <motion.div 
            drag="x"
            className={props.className || ""}
            animate={animateDiv2} >
                Teste
            </motion.div>

            <div 
            className="div_bt"
            style={{
                position: "fixed",
                top: "0px"
            }}>    
            <motion.div 
                drag
                className={"bt"}
                onClick = {
                    (e) => {
                        setConst_deslocamento(const_deslocamento - 1500);
                        setDiv_x(const_deslocamento);
                        setDiv2_x(const_deslocamento) ;
                        setAnimateDiv(deslocar_x_Div) ;    
                        setAnimateDiv2(deslocar_x_Div2) ;
                    }
                }
                style={{
                }} >
                    <AiOutlineArrowLeft />
            </motion.div>    
            <motion.div 
                drag
                className={"bt"}
                onClick = {
                    (e) => {
                        setConst_deslocamento(const_deslocamento + 1500);
                        console.log(const_deslocamento)
                        setDiv_x(const_deslocamento);
                        setDiv2_x(const_deslocamento) ;
                        setAnimateDiv(deslocar_x_Div) ;    
                        setAnimateDiv2(deslocar_x_Div2) ;
                    }
                }
                style={{
                }} >
                    <AiOutlineArrowRight />
                </motion.div>
            </div>
        </>)
  }