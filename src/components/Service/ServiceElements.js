import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: scroll;
  overflow-x: hidden;
  background: var(--trueWhite);
`;

export const ServiceH1 = styled.h1`
  color: var(--trueBlack);
  font-size: 2.3em;
  text-align: center;
  margin-top: 7rem;
`;
export const ServiceWrapper = styled.div`
  display: grid;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  background: transparent;
`;

export const ServiceContent = styled.div`
  background: var(--trueWhite);
  border-radius: 10px;
  width: clamp(250px, 90vw, 900px);
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  box-shadow: var(--dropShadow);
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100px;
  margin-top: 2rem;
`;

export const InfoSectionHeader = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const ImgWrap = styled(motion.div)`
  max-width: 800px;
  height: 100%;
  padding: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ServiceP = styled.p`
  font-size: 1.1rem;
  padding: 1rem;
  text-align: left;
`;
