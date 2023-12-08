import React from "react";
import { motion, useMotionValue, useTransform} from "framer-motion";
import "./css/styles.css";

const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }
/*
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
export default function FramerMotion(props) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const width = useTransform(x, [-100, 0, 100], [500, 10, 500])
  const height = useTransform(y, [-100, 0, 100], [500, 10, 500])

  return <motion.div drag style={{ x, y, width, height }} className={props.className || ""}/>
}

/*
<div className="my-container" style={{
        height: "50vh",
        width: "50vw",
        background: "rgb(61, 112, 112)",
        position: "relative"
    }}>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </div>
*/