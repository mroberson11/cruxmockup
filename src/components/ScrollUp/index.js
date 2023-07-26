import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { ScrollButton } from "./ScrollUpElements";

const ScrollUp = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <ScrollButton to="/" onClick={toggleHome} whileTap={{ scale: 0.9 }}>
      <FaArrowUp style={{ color: "#101522", fontSize: "1.8rem" }} />
    </ScrollButton>
  );
};

export default ScrollUp;
