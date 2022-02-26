import styled from "styled-components";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: black;
  overflow: scroll;
`;

export const HeaderSection = styled.div`
  z-index: 2;
  min-height: 80px;
  top: 0;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px 0px rgba(102, 252, 241, 0.4);
  background: white;
`;

export const DivSection = styled.div`
  background: white;
  box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-top: 10px;
  min-height: 100px;
`;

export const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 5em auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ContactCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 250px;
  padding: 30px;
  /* box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.4); */
  box-shadow: 0 4px 4px 0px rgba(102, 252, 241, 0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursore: pointer;
  }
`;

export const ContactIcon = styled.div`
  height: 80px;
  width: 80px;
  margin-bottom: 10px;
`;

export const ContactH2 = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

export const ContactP = styled.p`
  font-size: 1.1em;
  text-align: center;
  color: black;
`;

export const EmphasizedP = styled.p`
  font-size: 1.1em;
  text-align: center;
  color: #66fcf1;
`;

export const ContactH1 = styled.h1`
  color: #fff;
  font-size: 2.3em;
  text-align: center;
  margin-top: 150px;
`;
