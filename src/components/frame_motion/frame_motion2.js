import React, { useEffect } from "react";
import { motion, useMotionValue, transform} from "framer-motion";

export const FramerMotion2 = (props) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const opacity = useMotionValue(1)
  
    useEffect(() => {
      function updateOpacity() {
        const maxXY = Math.max(x.get(), y.get())
        const newOpacity = transform(maxXY, [0, 100], [1, 0])
        opacity.set(newOpacity)
      }
  
      const unsubscribeX = x.on("change", updateOpacity)
      const unsubscribeY = y.on("change", updateOpacity)
  
      return () => {
        unsubscribeX()
        unsubscribeY()
      }
    }, [])
  
    return <motion.div drag style={{ x }} className={props.className || ""} />
  }