import styled from "styled-components";
import { BsFillLightningFill } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md";
import { motion } from "framer-motion";
import {
  FaServer,
  FaGlobe,
  FaExpeditedssl,
  FaDatabase,
  FaFileImage,
  FaPuzzlePiece,
  FaHandsHelping,
  FaShieldAlt,
  FaTags,
} from "react-icons/fa";

export const Container = styled.div`
  min-height: 692px;
  overflow: scroll;
  overflow-x: hidden;
  background: var(--offWhite);
`;

export const MaintenanceContainer = styled(motion.section)`
  min-height: 600px;
  margin-top: 6rem;
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
  color: var(--offBlack);
  margin-bottom: 1.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const MaintenanceWrapper = styled(motion.div)`
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

export const MaintenanceItem = styled.div`
  background: var(--offWhite);
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

export const MaintenanceIcon = styled.div`
  min-height: 1.5rem;
  width: 1.5rem;
  margin-right: 10px;
`;

export const MaintenanceText = styled.p`
  font-size: 1.1rem;
`;

export const Server = styled(FaServer)`
  font-size: 1.5rem;
  color: var(--offBlack);
`;

export const Globe = styled(FaGlobe)`
  font-size: 1.5rem;
  color: var(--offBlack);
`;

export const SSL = styled(FaExpeditedssl)`
  font-size: 1.5rem;
  color: var(--offBlack);
`;

export const Database = styled(FaDatabase)`
  font-size: 1.5rem;
  color: var(--offBlack);
`;

export const Image = styled(FaFileImage)`
  font-size: 1.5rem;
  color: var(--offBlack);
`;

export const PuzzlePiece = styled(FaPuzzlePiece)`
  font-size: 1.5rem;
  color: var(--offBlack);
`;

export const Handshake = styled(FaHandsHelping)`
  font-size: 1.5rem;
  color: var(--offBlack);
`;

export const Shield = styled(FaShieldAlt)`
  font-size: 1.5rem;
  color: var(--offBlack);
`;

export const Tags = styled(FaTags)`
  font-size: 1.5rem;
  color: var(--offBlack);
`;

export const BtnWrapper = styled(motion.div)`
  margin: 2rem;
`;
