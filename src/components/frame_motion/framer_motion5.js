/*
const xInput = [-100, 0, 100]
const opacityOutput = [0, 1, 0]
const colorOutput = ["#f00", "#fff", "#0f0"]

const opacity = useTransform(x, xInput, opacityOutput)
const color = useTransform(x, xInput, colorOutput)
*/
import React, { useState } from "react";
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Quadro } from "../Quadro/Quadro";
import { ButtonDinamico1 } from "../buutonDinamico1/buttonDinamico1";
import { images as Images } from "../Img/srcs/Images"
import { Img } from "../Img/Img";

export const FramerMotion5 = (props) => {
  const [const_deslocamento, setConst_deslocamento] = useState(0);
  const [ButtonLeft_width, setButtonLeft_width] = useState("60px");
  const [ButtonLeft_height, setButtonLeft_height] = useState("30px");
  const [ButtonRight_width, setButtonRight_width] = useState("60px");
  const [ButtonRight_height, setButtonRight_height] = useState("30px");
  const [Quadro_width, setQuadro_width] = useState("99vw");
  const [Quadro_height, setQuadro_height] = useState("99vh");
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
    <AnimatePresence>
    {
        Images.map( src => (
          <Img 
          className="flex-column center text_center style_template_3"
          src={src}
          const_deslocamento={const_deslocamento}
          width={`${Quadro_width}`}
          height={`${Quadro_height}`}
          setConst_deslocamento={setConst_deslocamento}
          />
        ))
      }
    </AnimatePresence>
      <div
        className="div_bt flex center fixed"
        style={{
          top: "0px",
          left: `calc(50vw - ${ButtonLeft_width})`,
        }}
      >
        <ButtonDinamico1
          onClick={(e) => {
            setConst_deslocamento(
              const_deslocamento - window.innerWidth * 0.99,
            );
            console.log(const_deslocamento, "left");
          }}
          left={`calc(-50vw + ${ButtonLeft_width})`}
          top={`calc(50vh - ${ButtonLeft_height})`}
          width={`${ButtonLeft_width}`}
          height={`${ButtonLeft_height}`}
        >
          <AiOutlineArrowLeft />
        </ButtonDinamico1>
        <ButtonDinamico1
          onClick={(e) => {
            setConst_deslocamento(
              const_deslocamento + window.innerWidth * 0.99,
            );
            console.log(const_deslocamento, "right");
          }}
          left={`calc( 50vw - ( ${ButtonRight_width} + 30px) )`}
          top={`calc(50vh - ${ButtonRight_height})`}
          width={`${ButtonRight_width}`}
          height={`${ButtonRight_height}`}
        >
          <AiOutlineArrowRight />
        </ButtonDinamico1>
      </div>
      <div
        id="ponto_start"
        className="flex center fixed style_template_1"
        style={{
          borderRadius: "30px",
          marginLeft: "10px",
          width: "0px",
          height: "0px",
          left: "0",
          top: "0vh",
        }}
      ></div>
      <div
        id="ponto_end"
        className="flex center fixed style_template_1"
        style={{
          borderRadius: "30px",
          marginLeft: "10px",
          width: "10px",
          height: "10px",
          left: "98vw",
          top: "0vh",
        }}
      ></div>
    </>
  );
};
