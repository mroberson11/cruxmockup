import styled from "styled-components";

export const ModalContent = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 20;
`;

export const ModalHeading = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled.div`
  display: inline-block;
`;

export const ModalText = styled.p`
  font-size: 1rem;
  padding-bottom: 2rem;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 34px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;
