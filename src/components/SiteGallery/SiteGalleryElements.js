import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  min-height: 600px;
  background: var(--trueWhite);
  padding: 2rem 0;
`;

export const SiteGalleryH1 = styled.h1`
  color: var(--trueBlack);
  font-size: 2.5rem;
  text-align: center;
`;

export const SiteGalleryWrapper = styled.div`
  display: grid;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  background: transparent;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
`;

export const SiteGalleryContent = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const InfoSection = styled.div`
  margin-top: 2rem;
`;

export const InfoSectionHeader = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const ImgWrap = styled(motion.div)`
  max-width: 550px;
  height: 100%;
  padding: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const LogoImg = styled.img`
  width: 700px;

  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;
