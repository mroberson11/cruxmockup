import styled from "styled-components";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const ServicesContainer = styled(motion.div)`
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
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
    grid-row: 2 / 3;
  }

  & > div:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  & > div:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
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
  border-radius: 10px;
  padding: 2rem;
  box-shadow: var(--dropShadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  transition: transform 0.8s ease;
  transform-style: preserve-3d;
  position: relative;
  perspective: 1000px;
  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};


  &:hover {
    transform: rotateY(180deg);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
  }
`;

export const ServicesCardFront = styled.div`
  backface-visibility: hidden;
`;

export const ServicesCardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 2rem;
  background: var(--offWhite);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  backface-visibility: hidden;
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
