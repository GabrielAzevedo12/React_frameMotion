/*
const xInput = [-100, 0, 100]
const opacityOutput = [0, 1, 0]
const colorOutput = ["#f00", "#fff", "#0f0"]

const opacity = useTransform(x, xInput, opacityOutput)
const color = useTransform(x, xInput, colorOutput)
*/
import React from "react";
import { motion,useTransform,useMotionValue} from "framer-motion";

export const FramerMotion3 = (props) => {
    
    const x = useMotionValue(0)
    const xInput = [-100, 0, 100]
    const opacityOutput = [0, 1, 1]
    const colorOutput = ["#f00", "#fff", "#0f0"]
    const backgroundOutput = ["#0f0", "#fff", "#f00"]
    
    const opacity = useTransform(x, xInput, opacityOutput)
    const color = useTransform(x, xInput, colorOutput)
    const background = useTransform(x, xInput, backgroundOutput)

    return (
    <motion.div drag style={{ x, color, background }} className={props.className || ""} >
      Teste
    </motion.div>)
  }