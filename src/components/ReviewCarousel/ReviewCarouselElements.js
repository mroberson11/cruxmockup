import styled from "styled-components";

export const Container = styled.div`
  background: var(--trueWhite);
`;

export const ContainerWrapper = styled.div`
  min-height: 450px;
  max-width: 50em;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
`;

export const ReviewArticle = styled.article`
  max-width: 25em;
  margin: 2rem;
  background: var(--trueWhite);
  padding: 1.5rem 2rem;
  border-radius: 10px;
  box-shadow: var(--dropShadow);
  transition: var(--transition);
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 36px;
  color: #000000;
  text-align: center;
  letter-spacing: 1px;
  padding-top: 2rem;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
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
  color: var(--trueWhite);
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
  max-width: 20em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.75rem;
`;

export const Button = styled.button`
  color: var(--cruxBlue);
  font-size: 3rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    color: var(--cruxBlue);
  }
`;
