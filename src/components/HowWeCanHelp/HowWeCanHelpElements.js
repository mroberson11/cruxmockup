import styled from "styled-components";

export const Container = styled.section`
  background: #000;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 4rem;
`;

export const StringLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;


export const Step = styled.div`
  position: relative;
  background: #111;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 15px #1ab4f7;
  transition: 0.3s ease;
  color: white;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 25px #1ab4f7;
    background: #1ab4f7;
    color: #000;
  }

  &:hover > span {
    opacity: 1;
    transform: translateY(-110%);
  }
`;

export const StepLink = styled.a`
  color: white;
  text-decoration: none;

  @media (max-width: 768px) {
    display: none;
  }
`;


export const Label = styled.span`
  position: absolute;
  top: 0;
  background: white;
  color: black;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.8rem;
  opacity: 0;
  transform: translateY(-80%);
  transition: all 0.3s ease;



`;

export const String = styled.div`
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #1ab4f7, #ffffff, #1ab4f7);
  background-size: 200% 100%;
  animation: shimmer 2s linear infinite;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 4px;
    height: 50px;
    background: linear-gradient(to bottom, #1ab4f7,  #ffffff, #1ab4f7);
    background-size: 100% 200%;
    animation: shimmer-vertical 2s linear infinite;
}

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
    @keyframes shimmer-vertical {
  0% {
    background-position: 0 200%;
  }
  100% {
    background-position: 0 -200%;
  }
}

`;


