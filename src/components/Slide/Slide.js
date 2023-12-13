/*
const xInput = [-100, 0, 100]
const opacityOutput = [0, 1, 0]
const colorOutput = ["#f00", "#fff", "#0f0"]

const opacity = useTransform(x, xInput, opacityOutput)
const color = useTransform(x, xInput, colorOutput)

import { images as Images } from "../Img/srcs/Images"
import { Img } from "../Img/Img";

*/
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { ButtonDinamico1 } from "../buutonDinamico1/buttonDinamico1";

export const Slide = (props) => {
  const [Button_width, setButton_width] = useState("60px");
  const [Button_height, setButton_height] = useState("30px");
  
  return (
    <>
    <AnimatePresence>
        {props.children}
    </AnimatePresence>

      <div
        className="div_bt flex center fixed"
        style={{
          top: "0px",
          left: `calc(50vw - ${Button_width})`,
        }}
      >
        <ButtonDinamico1
          onClick={(e) => {
            props.setConst_deslocamento(
              props.const_deslocamento - window.innerWidth * 0.99,
            );
            console.log(props.const_deslocamento, "left");
          }}
          left={`calc(-50vw + ${Button_width})`}
          top={`calc(50vh - ${Button_height})`}
          width={Button_width}
          height={Button_height}
        >
          <AiOutlineArrowLeft />
        </ButtonDinamico1>
        <ButtonDinamico1
          onClick={(e) => {
            props.setConst_deslocamento(
              props.const_deslocamento + window.innerWidth * 0.99,
            );
            console.log(props.const_deslocamento, "right");
          }}
          left={`calc( 50vw - ( ${Button_width} + 30px) )`}
          top={`calc(50vh - ${Button_height})`}
          width={Button_width}
          height={Button_height}
        >
          <AiOutlineArrowRight />
        </ButtonDinamico1>
      </div>

      <div
        id="ponto_start"
        className="flex center fixed style_template_1"
        style={{
          borderRadius: "30px",
          width: "0px",
          height: "0px",
          left: "0",
          top: "0",
        }}
      ></div>
      <div
        id="ponto_end"
        className="flex center fixed style_template_1"
        style={{
          borderRadius: "30px",
          width: "10px",
          height: "10px",
          left: "98vw",
          top: "0",
        }}
      ></div>
      
    </>
  );
};
