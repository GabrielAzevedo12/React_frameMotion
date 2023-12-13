import React, { useState } from "react";
import { motion } from "framer-motion";

export const Img = (props) => {
  const [EventPosiçaoInicialX, setEventPosiçaoInicialX] = useState(0),
  [EventPosiçaoFinalX, setEventPosiçaoFinalX] = useState(0),
  [ElementView, setElementView] = useState(undefined);
    
  const Img_variants = {
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
  },
  style_default = {
        minWidth: props.width || "99vw",
        height: props.height || "99vh",
        marginLeft: 0,
        marginRight: 0,
        borderRadius: "30px",
        fontSize: "2rem",
        fontWeight: 500,
        positon: "relative",
  };

  return (
    <motion.img
      id={props.id || ""}
      className={props.className || ""}
      src={props.src || ""}
      variants={props.variants || Img_variants}
      initial="initial"
      animate="animate"
      exit="exit"
      drag="x"
      dragConstraints={{
        left:  0,
        right:  0,
      }}
      dragElastic={1}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      whileTap={{
        opacity: 0.8,
      }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      }}
      style={ props.style || style_default }
      onDragStart={(e) => {
        //console.log(e.target.getBoundingClientRect().x);
        setEventPosiçaoInicialX(e.target.getBoundingClientRect().x);
      }}
      onDragEnd={(e) => {
        //console.log(e.target.getBoundingClientRect().x);
        setEventPosiçaoFinalX(e.target.getBoundingClientRect().x);

        const ponto_start_dimensoes = document
          .querySelector("#ponto_start")
          .getBoundingClientRect();

        if(EventPosiçaoInicialX - ponto_start_dimensoes.x === 0 || EventPosiçaoFinalX - ponto_start_dimensoes.x === 0) {
          console.log("Está em View");
          setElementView(e.target);
        }
        
        //console.log(EventPosiçaoFinalX, EventPosiçaoInicialX);
        //console.log(EventPosiçaoFinalX - ponto_start_dimensoes.x);

        if (EventPosiçaoInicialX < ponto_start_dimensoes.x) {
          props.setConst_deslocamento(
            props.const_deslocamento - window.innerWidth * 0.99,
          );
        } else if (EventPosiçaoInicialX > ponto_start_dimensoes.x) {
          props.setConst_deslocamento(
            props.const_deslocamento + window.innerWidth * 0.99,
          );
        }
      }}
    />
  );
};
