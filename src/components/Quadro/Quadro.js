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
        right: 0,
      }}
      animate={{
        x: props.x || 0,
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.2,
      }}
      style={
        props.style || {
          minWidth: "99vw" || props.width,
          height: "500px" || props.height,
          marginLeft: "0px",
          marginRight: "0px",
          borderRadius: "30px",
          fontSize: "2rem",
          fontWeight: 500,
        }
      }
    >
      {props.text || "Quadro"}
    </motion.div>
  );
};
