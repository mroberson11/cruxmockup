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
  background: linear-gradient(
    108deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(102, 252, 241, 1) 100%
  );
`;

export const HeaderSection = styled.div`
  z-index: 2;
  min-height: 80px;
  top: 0;
  background: var(--trueBlack);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px 0px rgba(102, 252, 241, 0.4);
  background: var(--trueWhite);
`;

export const DivSection = styled.div`
  background: var(--trueWhite);
  box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-top: 10px;
  min-height: 100px;
`;

export const PricesWrapper = styled.div`
  max-width: 1200px;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const PricesCard = styled.div`
  background: var(--trueWhite);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  min-height: 275px;
  max-width: 300px;
  padding: 30px;
  box-shadow: 0 4px 4px 0px rgba(102, 252, 241, 0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PricesIcon = styled.div`
  height: 80px;
  width: 80px;
  margin-bottom: 10px;
`;

export const PricesH2 = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const PricesP = styled.p`
  font-size: 1.1em;
  text-align: center;
  color: var(--trueBlack);
`;

export const EmphasizedP = styled.p`
  font-size: 1.1em;
  text-align: center;
  color: #00ffef;
  cursor: pointer;
`;

export const EmphasizedA = styled.a`
  font-size: 1.1em;
  text-align: center;
  color: #00ffef;
  cursor: pointer;
  text-decoration: none;
`;
export const PricesH1 = styled.h1`
  color: var(--trueWhite);
  font-size: 2.3rem;
  text-align: center;
  margin-top: 4rem;
`;
