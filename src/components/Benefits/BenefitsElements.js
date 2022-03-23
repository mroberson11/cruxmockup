import styled from "styled-components";
import { BsFillLightningFill } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFunnelDollar,
  FaSmile,
  FaSearchDollar,
} from "react-icons/fa";

export const BenefitsContainer = styled(motion.section)`
  min-height: 600px;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const Heading = styled(motion.h1)`
  font-size: 2.5rem;
  color: var(--trueBlack);
  margin-bottom: 1.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const BenefitsWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const BenefitItem = styled.div`
  background: var(--trueWhite);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  min-height: 2rem;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const BenefitIcon = styled.div`
  min-height: 1.5rem;
  width: 1.5rem;
  margin-right: 10px;
`;

export const Lightning = styled(BsFillLightningFill)`
  font-size: 1.5rem;
  color: #def107;
`;

export const Funnel = styled(FaFunnelDollar)`
  font-size: 1.5rem;
  color: #1df20e;
`;

export const Leaderboard = styled(MdLeaderboard)`
  font-size: 1.5rem;
  color: #c22ef2;
`;

export const Smile = styled(FaSmile)`
  font-size: 1.5rem;
  color: var(--cruxBlue);
`;

export const Checkmark = styled(FaCheckCircle)`
  font-size: 1.5rem;
  color: #001eff;
`;
export const SearchDollar = styled(FaSearchDollar)`
  font-size: 1.5rem;
  color: #f06701;
`;
export const BenefitText = styled.p`
  font-size: 1.1rem;
`;
