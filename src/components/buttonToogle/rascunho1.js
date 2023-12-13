import React, { useState } from "react";
import { motion, useMotionValue, useTransform} from "framer-motion";
import "./css/buttonToggle.css";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

const 
hidden ={ 
    scale: 0.3,
    y: -140,
    x: 0,
    opacity: 0.2
   },

visible = { 
    scale: 1,
    y: 0,
    x: 0,
    opacity: 1
   },
snow = {
    backgroundColor: "white",
    color: "rgb(88, 79, 79)",
},
dark = {
    backgroundColor: "black",
    color: "rgb(88, 79, 79)",
};

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
  const [animateMotionTesteDivBt, setAnimateMotionTesteDivBt] = useState(undefined);
  const [styleBt, setStyleBt] = useState(dark);

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const width = useTransform(x, [-100, 0, 100], [600, 0, 600])
  const height = useTransform(y, [-100, 0, 100], [600, 0, 600])

  const variants_bt ={
    initial : {
      x: 0,
      y: 0,
      borderRadius: 30,
      opacity: animateMotionTesteDiv === visible ? 1 : 0.7,
      scale: 0.9
    },
    rotate0 : {
      rotate: 0,
      x: 0,
      y: 0
    },
    rotate180 : {
      rotate: 180,
      x: -60,
      y: 50
    }
  }

  return (
  <motion.div 
  id="ButtonToogleContainer"
  className={props.className || ""}
  style={{ x, y, width, height }}
  drag
  dragConstraints={{ 
    left: 50,
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
  viewport={{ once: true }}>

    <motion.div 
    id="bt"
    variants={variants_bt}
    initial="initial"
    animate= {animateMotionTesteDiv === visible ?
    "rotate180" : "rotate0"}
    whileTap={{ scale: 1.1 }}
    whileHover={{ 
      scale: 1.5,
      borderRadius: 50,
      opacity: 1,
      backgroundColor: "white"
     }}
    style={animateMotionTesteDiv === visible ?
      snow : dark}
    onClick={() => {
        animateMotionTesteDiv === visible ?
        setAnimateMotionTesteDiv(hidden) : setAnimateMotionTesteDiv(visible)
    } 
        }>
           <AiOutlineUp />
    </motion.div>

    <motion.div 
    animate={animateMotionTesteDiv} >
      <div>Drag me</div>
    </motion.div>

  </motion.div>
  )
}

/*
 {
            animateMotionTesteDiv === visible ?
            <AiOutlineUp /> : <AiOutlineDown />}

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