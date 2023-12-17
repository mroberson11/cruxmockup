import styled from "styled-components";

export const MainContainer = styled.div`
  background: var(--trueWhite);
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
`;

export const Container = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Heading = styled.h1`
  font-size: 36px;
  color: var(--trueBlack);
  text-align: center;
  letter-spacing: 1px;
  margin-top: 1rem;
`;

export const Subheading = styled.h4`
  max-width: 400px;
  font-size: 16px;
  color: var(--trueBlack);
  text-align: center;
  letter-spacing: 1.2px;
  margin: 5px auto 1rem auto;
`;
