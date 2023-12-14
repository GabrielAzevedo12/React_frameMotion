import { useForm } from "react-hook-form"
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledForm = styled(motion.form)`
width: 98vw
`

const StyledMotionInput = styled(motion.input)`
background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(85,70,252,1) 100%);
color: black;
border: none;
border-radius: 3px;
min-height: 10vh;
width: 100%;
margin-top: 10px;
font-size: 1.2rem;
`
const StyledMotionSelect = styled(motion.select)`
background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(85,70,252,1) 100%);
color: black;
border: none;
border-radius: 3px;
min-height: 10vh;
width: 100%;
margin-top: 10px;
font-size: 1.2rem;
`
const StyledMotionOption = styled(motion.option)`
background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(70,252,247,1) 100%);
color: black;
border: none;
border-radius: 3px;
min-height: 10vh;
width: 100%;
margin-top: 10px;
font-size: 1.2rem;
`

export default function FormExample(props) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  const
  form_props = {
    variants : {
      initial : {
        x: 0,
        y: -20,
        borderRadius: 0,
      /*  opacity: animateMotionTesteDivDisplay === true ? 1 : 0.7,*/
        scale: 0
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
    },
  styles : {
    snow : {
      backgroundColor: "white",
      color: "rgb(88, 79, 79)",
  },
    dark : {
      backgroundColor: "black",
      color: "rgb(88, 79, 79)",
  }
  }},
  input_props = {
    variants : {
        initial : {
            x: 0,
            y: -20,
            borderRadius: 0,
            /*  opacity: animateMotionTesteDivDisplay === true ? 1 : 0.7,*/
            opacity: 0.5,
            scale: 0
        },
        whileView : {
            x: 0,
            y: 0,
            borderRadius: 30,
            /*  opacity: animateMotionTesteDivDisplay === true ? 1 : 0.7,*/
            opacity: 1,
            scale: 1
        },
        whileHover : {
            scale: 1.1
        },
        hidden : { 
            scale: 0.3,
            y: -140,
            x: 0,
            opacity: 0.2
        },
      visible : { 
        scale: 1,
        y: 0,
        x: 0,
        opacity: 1
       }
    },
  styles : {
  }},
  select_props = {
    variants : {
        initial : {
            x: 0,
            y: -20,
            borderRadius: 0,
            /*  opacity: animateMotionTesteDivDisplay === true ? 1 : 0.7,*/
            opacity: 0.5,
            scale: 0
        },
        whileView : {
            x: 0,
            y: 0,
            borderRadius: 30,
            /*  opacity: animateMotionTesteDivDisplay === true ? 1 : 0.7,*/
            opacity: 1,
            scale: 1
        },
        whileHover : {
            scale: 1.1
        },
      hidden : { 
        scale: 0.3,
        y: -140,
        x: 0,
        opacity: 0.2
       },
      visible : { 
        scale: 1,
        y: 0,
        x: 0,
        opacity: 1
       }
    },
  styles : {
  }};

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} className={`${props.ClassName} flex-column`}>
      <StyledMotionInput variants={input_props.variants} initial="initial" whileInView="whileView" {...register("firstName")} whileHover="whileHover" />
      <StyledMotionSelect variants={input_props.variants} initial="initial" whileInView="whileView" {...register("gender")} whileHover="whileHover">
        <StyledMotionOption value="female">female</StyledMotionOption>
        <StyledMotionOption value="male">male</StyledMotionOption>
        <StyledMotionOption value="other">other</StyledMotionOption>
      </StyledMotionSelect>
      <StyledMotionSelect variants={input_props.variants} initial="initial" whileInView="whileView" {...register("gender")} whileHover="whileHover">
        <StyledMotionOption value="female">female</StyledMotionOption>
        <StyledMotionOption value="male">male</StyledMotionOption>
        <StyledMotionOption value="other">other</StyledMotionOption>
      </StyledMotionSelect>
      <StyledMotionInput variants={input_props.variants} initial="initial" whileInView="whileView" whileHover="whileHover" type="submit" />
    </StyledForm>
  )
}