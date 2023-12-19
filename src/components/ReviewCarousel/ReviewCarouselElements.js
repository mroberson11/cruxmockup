import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  background: var(--offWhite);
`;

export const ContainerWrapper = styled.div`
  min-height: 450px;
  max-width: 55em;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
`;

export const ReviewArticle = styled(motion.article)`
  max-width: 30em;
  min-width: 250px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  background: var(--offWhite);
  padding: 1.5rem 2rem;
  border-radius: 10px;
  box-shadow: var(--dropShadow);
  text-align: center;

  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  color: var(--offBlack);
  text-align: center;
  letter-spacing: 1px;
  padding-top: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background: var(--cruxBlue);
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
  }
`;

export const PersonImg = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
`;

export const QuoteIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transform: translateY(25%);
  background: var(--cruxBlue);
  color: var(--offWhite);
`;

export const Author = styled.h4`
  margin-bottom: 0.25rem;
`;

export const Job = styled.p`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: var(--cruxBlue);
  font-size: 0.85rem;
`;

export const Info = styled.p`
  max-width: 25em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.75rem;
`;
