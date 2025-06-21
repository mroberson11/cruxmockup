import styled from "styled-components";

export const Section = styled.section`
  background: #000;
  color: #fff;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 800px;
  text-align: center;
  animation: fadeInUp 1s ease forwards;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Headline = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.75;
  margin: 3rem;
  color: #ccc;
  span {
    color: #fff;
    font-weight: bold;
  }
`;

export const CTA = styled.a`
  margin-top: 2rem;
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background 0.3s;

  &:hover {
    background: #1ab4f7;
    color: #fff;
  }
`;