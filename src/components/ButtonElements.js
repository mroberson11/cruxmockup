import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { motion } from "framer-motion";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? "var(--cruxBlue)" : "var(--offBlack)"};
  var(--offWhite)-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "var(--offBlack)" : "var(--offWhite)")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? "var(--offWhite)" : "var(--cruxBlue)"};
  }
`;

export const AnimatedButton = styled(motion.button)`
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? "var(--cruxBlue)" : "var(--offBlack)"};
  var(--offWhite)-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 15px")};
  color: ${({ dark }) => (dark ? "var(--offBlack)" : "var(--offWhite)")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    background: ${({ primary }) =>
      primary ? "var(--offWhite)" : "var(--cruxBlue)"};
  }
`;
