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
  background: var(--offWhite);
`;

export const HeaderSection = styled.div`
  z-index: 2;
  min-height: 80px;
  top: 0;
  background: var(--offBlack);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--dropShadow);
  background: var(--offWhite);
`;

export const DivSection = styled.div`
  background: var(--offWhite);
  box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-top: 10px;
  min-height: 100px;
`;

export const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 5em auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
    align-items: center; /* Center on smaller screens */
    justify-content: center; /* Center on smaller screens */
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled.div`
  background: var(--offWhite);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 275px;
  max-width: 280px;
  padding: 30px;
  box-shadow: var(--dropShadow);
  transition: all 0.2s ease-in-out;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ContactIcon = styled.div`
  height: 80px;
  width: 80px;
  margin-bottom: 10px;
`;

export const ContactH2 = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const ContactP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  color: var(--offBlack);
`;

export const EmphasizedP = styled.p`
  font-size: 1.1em;
  text-align: center;
  color: var(--linkBlue);
  cursor: pointer;
`;

export const EmphasizedA = styled.a`
  font-size: 1.1em;
  text-align: center;
  color: var(--linkBlue);
  cursor: pointer;
  text-decoration: none;
`;
export const ContactH1 = styled.h1`
  color: var(--offBlack);
  font-size: 2.3em;
  text-align: center;
  margin-top: 10rem;
`;
