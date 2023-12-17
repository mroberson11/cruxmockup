import styled from "styled-components";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: scroll;
  overflow-x: hidden;
  background: var(--trueWhite);
`;

export const ServiceH1 = styled.h1`
  color: var(--trueBlack);
  font-size: 2.3em;
  text-align: center;
  margin: 7rem 2rem 0 2rem;
`;
export const ServiceWrapper = styled.div`
  display: grid;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  background: transparent;
`;
