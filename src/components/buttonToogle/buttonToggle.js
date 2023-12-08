import React, { useState } from "react";
import { motion, useMotionValue, useTransform} from "framer-motion";
import "./css/buttonToggle.css";

const 
hidden ={ 
    scale: 0,
    y: -100,
    x: -100
   },

visible = { 
    scale: 1,
    y: 0,
    x: 0
   }

/*
const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }

drag="x" 
    whileHover={{ scale: 2.1 }}
    whileTap={{ scale: 0.8 }} 

    <motion.div 
    whileHover={{ 
      scale: 1.2,
      rotate: 360
     }}
    whileTap={{ scale: 1.1 }}
    drag
    dragConstraints={{ left: -100, top: -100, bottom: 100, right: 0 }}
    className="motion-teste">
      <div>Drag me</div>
    </motion.div>

    <motion.ul animate="hidden" variants={list} className="motion-teste">
      <motion.li variants={item} />
      <motion.li variants={item} />
      <motion.li variants={item} />
    </motion.ul>

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className="motion-teste">
       <motion.div variants={item} />
       <motion.div variants={item} />
       <motion.div variants={item} />
    </motion.div>
*/
export default function ButtonToggle(props) {
  const [animateMotionTesteDiv, setAnimateMotionTesteDiv] = useState(hidden);

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const width = useTransform(x, [-100, 0, 100], [600, 500, 600])
  const height = useTransform(y, [-100, 0, 100], [600, 500, 600])

  return (
  <motion.div 


  drag

  style={{ x, y, width, height }}

  dragConstraints={{ 
    left: 0,
    top: 0,
    bottom: 0,
    right: 0 }}

  whileInView={{ 
    scale: [0, 0, 1, 1],
    borderRadius: ["0%", "50%", "50%", "10%"],  
    rotate: [360, 360, 0, 0],
    x: [-700, -700, 100, 0],
    opacity: [0, 0, 1, 1] }}

  transition={{ duration: 1 }}

  viewport={{ once: true }}

  className={props.className || ""}>

    <motion.div 
    initial={{
      borderRadius: 10
      }}
    whileTap={{ scale: 1.1 }}
    whileHover={{ 
      scale: 1.2,
      borderRadius: 30,
      background: "white"
     }}
    drag
    id="bt"
    onClick={() => animateMotionTesteDiv === visible ? setAnimateMotionTesteDiv(hidden) : setAnimateMotionTesteDiv(visible) }>
      Button
    </motion.div>

    <motion.div 
    animate={animateMotionTesteDiv} >
      <div>Drag me</div>
    </motion.div>

  </motion.div>
  )
}

/*

initial={{
      opacity: 0.7
    }
    }
    whileHover={{ 
      scale: 1.2,
      rotate: 360,
      opacity: 1
     }}

<div className="my-container" style={{
        height: "50vh",
        width: "50vw",
        background: "rgb(61, 112, 112)",
        position: "relative"
    }}>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </div>

<motion.div 
  drag
  style={{ x, y, width, height }}
  dragConstraints={{ 
    left: 0,
    top: 0,
    bottom: 0,
    right: 0 }}
  whileInView={{ 
    scale: [0, 0, 1, 1],
    borderRadius: ["0%", "50%", "50%", "10%"],  
    rotate: [360, 360, 0, 0],
    x: [-700, -700, 100, 0],
    opacity: [0, 0, 1, 1] }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className={props.className || ""}>

    <motion.div 
    whileHover={{ 
      scale: 1.2,
      rotate: 360
     }}
    whileTap={{ scale: 1.1 }}
    drag
    className="bt"
    onClick={() => display ? setDisplay(!display) : setDisplay(!display)}>
      Button
    </motion.div>

    <motion.div 
    whileHover={{ 
      scale: 1.2,
      rotate: 360
     }}
    whileTap={{ scale: 1.1 }}
    drag>
      <div>Drag me</div>
    </motion.div>

  </motion.div>    
*/