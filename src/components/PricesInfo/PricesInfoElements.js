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
  background: var(--offWhite);
`;

export const ContactH1 = styled.h1`
  color: var(--offBlack);
  font-size: 2.3em;
  text-align: center;
  margin-top: 7rem;
`;

export const HeaderSection = styled.div`
  z-index: 2;
  min-height: 80px;
  top: 0;
  background: var(--offBlack);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px 0px rgba(102, 252, 241, 0.4);
  background: var(--offWhite);
`;

export const DivSection = styled.div`
  background: var(--offWhite);
  box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-top: 10px;
  min-height: 100px;
`;

export const PricesWrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PricesCard = styled.div`
  background: var(--offWhite);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  min-height: 275px;
  max-width: 300px;
  padding: 30px;
  box-shadow: var(--dropShadow);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PricesIcon = styled.div`
  height: 80px;
  width: 80px;
  margin-bottom: 10px;
`;

export const PricesH2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const PricesP = styled.p`
  font-size: 1.1em;
  text-align: center;
  color: var(--offBlack);
`;

export const EmphasizedP = styled.p`
  font-size: 1.1em;
  text-align: center;
  color: #00ffef;
  cursor: pointer;
`;

export const EmphasizedA = styled.a`
  font-size: 1.1em;
  text-align: center;
  color: #00ffef;
  cursor: pointer;
  text-decoration: none;
`;
export const PricesH1 = styled.h1`
  color: var(--offWhite);
  font-size: 2.3rem;
  text-align: center;
  margin-top: 4rem;
`;

export const BtnWrapper = styled(motion.div)`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  max-width: 300px;
  padding: 10px;
  margin: 0 auto 1rem auto;
`;
