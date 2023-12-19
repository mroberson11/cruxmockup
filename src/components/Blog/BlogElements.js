import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  z-index: 0;
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  overflow: scroll;
  overflow-x: hidden;
  background: var(--cruxWhite);
`;

export const BlogH1 = styled.h1`
  color: var(--offBlack);
  font-size: 40px;
  text-align: center;
  margin-top: 7rem;
`;
export const BlogWrapper = styled.div`
  display: grid;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  background: transparent;
`;

export const BlogContent = styled.div`
  background: var(--offWhite);
  border-radius: 10px;
  width: clamp(250px, 90vw, 900px);
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const BlogVideo = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  border-radius: 5px;
`;

export const BlogSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  min-height: 100px;
  margin-top: 1rem;
`;

export const BlogSectionHeader = styled(motion.h2)`
  font-size: 28px;
  color: (--offBlack);
  margin-bottom: 0.5rem;
`;

export const BlogSectionText = styled(motion.p)`
  font-size: 1.2rem;
  text-align: left;
  padding-top: 0.5rem;
`;

export const ImgWrap = styled(motion.div)`
  max-width: 150px;
  height: 100%;
  padding: 1rem;
`;

export const Break = styled.hr`
  width: 100%;
  border: 1px solid #eee;
  margin: 1rem 0 0 0;
`;
