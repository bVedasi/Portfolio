"use client";

import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [.25, .1, .25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function BlurReveal({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }} // Staggering the children with a bit of delay
    >
      {React.Children.map(children, child => (
        <motion.div transition={transition} variants={variants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
