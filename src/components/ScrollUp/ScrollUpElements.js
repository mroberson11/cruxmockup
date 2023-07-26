import styled from "styled-components";
import { motion } from "framer-motion";

export const ScrollButton = styled(motion.div)`
  position: fixed;
  height: 55px;
  width: 55px;
  bottom: 20px;
  right: 20px;
  background-color: var(--trueWhite);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ArrowUp = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #007bff;
  margin-left: 5px;
`;
