import React, { useState } from "react";
import { motion } from "framer-motion";

export const Quadro = (props) => {
  const [EventPosiçaoInicialX, setEventPosiçaoInicialX] = useState(0),
    [EventPosiçaoFinalX, setEventPosiçaoFinalX] = useState(0);
  const Quadro_variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      x: props.const_deslocamento || 0,
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };
  return (
    <motion.div
      className={props.className || ""}
      variants={props.variants || Quadro_variants}
      initial="initial"
      animate="animate"
      exit="exit"
      drag="x"
      dragConstraints={{
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      }}
      style={
        props.style || {
          minWidth: props.width || "99vw",
          height: props.height || "500px",
          marginLeft: "0px",
          marginRight: "0px",
          borderRadius: "30px",
          fontSize: "2rem",
          fontWeight: 500,
        }
      }
      onDragStart={(e) => {
        console.log(e.target.getBoundingClientRect().x);
        setEventPosiçaoInicialX(e.target.getBoundingClientRect().x);
      }}
      onDragEnd={(e) => {
        const ponto_start_dimensoes = document
          .querySelector("#ponto_start")
          .getBoundingClientRect();

        console.log(e.target.getBoundingClientRect().x);

        setEventPosiçaoFinalX(e.x);

        console.log(EventPosiçaoFinalX - EventPosiçaoInicialX);

        if (EventPosiçaoFinalX < ponto_start_dimensoes.x) {
          props.setConst_deslocamento(
            props.const_deslocamento - window.innerWidth * 0.99,
          );
        } else if (EventPosiçaoFinalX > ponto_start_dimensoes.x) {
          props.setConst_deslocamento(
            props.const_deslocamento + window.innerWidth * 0.99,
          );
        }
      }}
    >
      {props.text || "Quadro"}
    </motion.div>
  );
};
