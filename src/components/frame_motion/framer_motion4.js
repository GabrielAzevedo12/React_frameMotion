/*
const xInput = [-100, 0, 100]
const opacityOutput = [0, 1, 0]
const colorOutput = ["#f00", "#fff", "#0f0"]

const opacity = useTransform(x, xInput, opacityOutput)
const color = useTransform(x, xInput, colorOutput)
*/
import React from "react";
import { motion } from "framer-motion";

export const FramerMotion4 = (props) => {
    const transition_duration = 2;
    return (
      <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ duration: transition_duration }}
      whileHover={{ 
        scale: 1.5,
        rotate: 360,
        borderRadius: "50%"
       }}
      className={props.className || ""}
    >
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: transition_duration }}
        whileHover={{ 
          scale: 1.5,
          rotate: 360,
          borderRadius: "50%"
         }}
        style = {
          {
            backgroundColor: "#000"
          }
        }>
          <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: transition_duration }}
        whileHover={{ 
          scale: 1.5,
          rotate: 360,
          borderRadius: "50%"
         }}
        style = {
          {
            backgroundColor: "#fff",
            width: "125px",
            height: "125px"
          }
        }></motion.div>
        </motion.div>    
    </motion.div>
    )
  }
  /*
  <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -300  }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={props.className || ""}
      />

      backgroundColor: ["#fff", "#000", "#000", "#fff", "#fff"]
      backgroundColor: ["#000", "#fff", "#fff", "#000", "#000"]
  */