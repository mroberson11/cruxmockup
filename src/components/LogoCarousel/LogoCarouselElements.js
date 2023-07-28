import styled from "styled-components";

export const MainContainer = styled.div`
  background: #ffffff;
  padding-top: 1rem;
  padding-bottom: 1rem;
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
  color: #000000;
  text-align: center;
  letter-spacing: 1px;
  margin-top: 1rem;
`;

export const Subheading = styled.h4`
  font-size: 16px;
  color: #000000;
  text-align: center;
  letter-spacing: 1.2px;
  margin-top: 5px;
  margin-bottom: 1rem;
`;
