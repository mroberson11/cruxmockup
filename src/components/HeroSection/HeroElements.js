import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
import { AnimatedButton } from "../ButtonElements";

export const HeroContainer = styled.div`
  background: var(--trueBlack);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 800px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }
`;

export const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://assets-global.website-files.com/62f35224774781301ab36d72/62fa09f2e0ceedfd0ca467be_Backgroun%20Home%202%20%20Blue%20(1).png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: auto;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  max-width: 45%;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

export const Column2 = styled.div`
  max-width: 45%;
  min-height: 350px;
  margin-left: 3rem;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
`;

export const HeroH1 = styled(motion.h1)`
  color: var(--trueWhite);
  font-size: 46px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;

export const HeroP = styled(motion.p)`
  margin-top: 24px;
  color: var(--trueWhite);
  font-size: 24px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font: 22px;
  }
`;

export const HeroBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeroBtnWrapper = styled(motion.div)`
  margin: 32px 12px 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const BackgroundPic = styled.img`
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
