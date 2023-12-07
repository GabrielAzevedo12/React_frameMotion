import React from "react";
import { motion } from "framer-motion";
import "./css/styles.css";

export default function FramerMotion() {
  return (
    <motion.div drag whileHover={{ scale: 2.1 }} whileTap={{ scale: 0.8 }} className="motion-teste" />
  );
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