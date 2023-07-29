import styled from "styled-components";
import { colors, gradient } from "../../color";
import { motion } from "framer-motion";

export const PriceCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) =>
    props.planType === "professional" ? gradient : "white"};
  color: ${(props) =>
    props.planType === "professional" ? "white" : colors.grayishBlue};
  width: 100%;
  width: 22rem;
  box-shadow: 0px 20px 40px rgba(26, 180, 247, 0.5);
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
  margin: 1.6rem 0;
`;

export const Divider = styled.hr`
  width: 269px;
  height: 1px;
  border: 0;
  border-top: ${(props) =>
    props.plan === "professional" ? "1px solid #fff" : "1px solid #6e728e"};
  opacity: 0.25;
  margin: 0.4rem 0;
`;

export const PlanType = styled.span`
  font-size: 2rem;
  line-height: 2.8rem;
  text-align: center;
  text-transform: capitalize;
`;

export const Price = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  line-height: 2rem;
  color: ${(props) => (props.plan === "professional" ? "white" : "#4a4d60")};
  margin: 1rem 0;
`;

export const OriginalCurrency = styled.span`
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;
  margin-right: 0.6rem;
  text-decoration-line: line-through 3px #a80501;
  -webkit-text-decoration-line: line-through 3px #a80501;
`;

export const Currency = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1rem;
  margin-right: 0.6rem;
`;

export const SellingPoint = styled.span`
  font-family: "Montserrat";
  color: var(--trueBlack);
  font-size: 22px;
  text-align: center;
  padding: 0.4rem;
`;

export const LearnMoreButton = styled.button`
  width: 100%;
  height: 2rem;
  background: ${(props) =>
    props.plan === "professional" ? "white" : "#1AB4F7"};
  border-radius: 6px;
  border: none;
  outline: none;
  color: ${(props) =>
    props.plan === "professional" ? colors.purpleText : "white"};
  font-weight: bold;
  font-size: 1.6rem;
  letter-spacing: 1.4px;
  min-height: 3rem;
  margin: 1rem 0 0.5rem 0;
  cursor: pointer;
  &:hover {
    border: 1px solid
      ${(props) => (props.plan === "professional" ? "white" : "#1AB4F7")};
    background: none;
    color: ${(props) => (props.plan === "professional" ? "white" : "#1AB4F7")};
  }
`;
