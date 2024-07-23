import styled from "styled-components";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const ServicesContainer = styled(motion.div)`
  min-height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--offWhite);

  @media screen and (max-width: 768px) {
    min-height: 1400px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  & > div:nth-child(1) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-bottom: -200px;
  }

  & > div:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  & > div:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  & > div:nth-child(4) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    margin-top: -200px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;

    & > div:nth-child(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      margin-bottom: 0;
    }

    & > div:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    & > div:nth-child(3) {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    & > div:nth-child(4) {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
      margin-top: 0;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    padding: 0 20px;

    & > div:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      margin-bottom: 0;
    }

    & > div:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    & > div:nth-child(3) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    & > div:nth-child(4) {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
      margin-top: 0;
    }
  }
`;

export const ServicesCard = styled(motion.div)`
  background: var(--offWhite);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 420px;
  padding: 30px;
  box-shadow: var(--dropShadow);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.div`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--offBlack);
  max-width: 400px;
  text-align: center;
  margin: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
