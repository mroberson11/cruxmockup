import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1f2833;

  @media screen and (max-width: 768px) {
    height: 1400px;
  }

  @media screen and (max-width: 480px) {
    height: 1400px;
  }
`;

export const TestimonialsWrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
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

export const TestimonialsCard = styled.div`
  min-height: 300px;
  max-width: 350px;
  background: var(--trueWhite);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-radius: 10px;
  margin-top: 2.5rem;
  padding: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    transition: all 0.3s ease-in-out;
    cursore: pointer;
  }
`;

export const TestimonialsIcon = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-top: -70px;
  margin-right: 50%;
  overflow: hidden;
  background: green
  padding: 2rem;
  background-position: center; 
`;

export const TestimonialsH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--trueWhite);
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TestimonialsP = styled.p`
  font-size: 1rem;
  color: var(--trueBlack);
  font-style: italic;
  text-align: left;
`;

export const TestimonialsCustomer = styled.p`
  font-size: 1.1rem;
  color: var(--trueBlack);
  font-weight: 800;
  margin-top: 2.5rem;
`;

export const TestimonialsCompany = styled.p`
  font-size: 1rem;
  color: var(--trueBlack);
  margin-top: 5px;
`;
