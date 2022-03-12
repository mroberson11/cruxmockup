import React from "react";
import { motion } from "framer-motion";

const MagicText = () => {
  const line1 = "Want a website like this?";
  const line2 = "Only three spots available per month. <br/> Don't miss out.";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <h3.motion variants={sentence} initial="hidden" animate="visible">
        {line1.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </h3.motion>
      <motion.p variants={sentence} initial="hidden" animate="visible">
        {line2.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.p>
    </>
  );
};

export default MagicText;
