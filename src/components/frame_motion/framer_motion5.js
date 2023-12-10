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
import { Quadro } from "../Quadro/Quadro";
import { ButtonDinamico1 } from "../buutonDinamico1/buttonDinamico1";

export const FramerMotion5 = (props) => {
    const [const_deslocamento, setConst_deslocamento] = useState(0);
    /*
    const x = useMotionValue(0),
    xInput = [-100, 0, 100],
    opacityOutput = [0, 1, 1],
    colorOutput = ["#f00", "#fff", "#0f0"],
    backgroundOutput = ["#0f0", "#fff", "#f00"],
    const 
    opacity = useTransform(x, xInput, opacityOutput),
    color = useTransform(x, xInput, colorOutput),
    background = useTransform(x, xInput, backgroundOutput);
*/
    return (
        <>
            <Quadro
            className="flex-column center text_center style_template_3"
            x={const_deslocamento}/>
            <Quadro
            className="flex-column center text_center style_template_3"
            x={const_deslocamento}/>
            <div 
            className="div_bt flex center fixed"
            style={{
                top: "0px",
                left: "45vw"
            }}>
            <ButtonDinamico1 
            onClick = {
                (e) => {
                    setConst_deslocamento(const_deslocamento - 1500);
                    console.log(const_deslocamento, "left")
                }
            }
            >
                <AiOutlineArrowLeft />
            </ButtonDinamico1>        
            <ButtonDinamico1
            onClick = {
                (e) => {
                        setConst_deslocamento(const_deslocamento + 1500);
                        console.log(const_deslocamento, "right")
                    }
                } >
                    <AiOutlineArrowRight />
            </ButtonDinamico1>
            </div>
        </>)
  }