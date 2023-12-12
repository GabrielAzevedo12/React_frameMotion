/*
const xInput = [-100, 0, 100]
const opacityOutput = [0, 1, 0]
const colorOutput = ["#f00", "#fff", "#0f0"]

const opacity = useTransform(x, xInput, opacityOutput)
const color = useTransform(x, xInput, colorOutput)
*/
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
/*
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Quadro } from "../Quadro/Quadro";
import { ButtonDinamico1 } from "../buutonDinamico1/buttonDinamico1";
import { Swiper_Teste } from "../Swipe/Teste/Teste";
*/
import React, { useState } from "react";
import { images as Images } from "../Img/srcs/Images"
import { Img } from "../Img/Img";
import { Slide } from "../Slide/Slide";

export const FramerMotion5 = (props) => {
  const [const_deslocamento, setConst_deslocamento] = useState(0);
  const [Quadro_width, setQuadro_width] = useState("99vw");
  const [Quadro_height, setQuadro_height] = useState("99vh");

  return (
    <Slide const_deslocamento={const_deslocamento} setConst_deslocamento={setConst_deslocamento}>
       {
        Images.map( src => (
          <Img 
          className="flex-column center text_center style_template_3"
          src={src}
          width={Quadro_width}
          height={Quadro_height}
          const_deslocamento={const_deslocamento}
          setConst_deslocamento={setConst_deslocamento}
          />
        ))
      }
    </Slide>
  );
};
