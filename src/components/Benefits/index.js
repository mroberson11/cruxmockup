import React, { useEffect } from "react";
import Image from "next/image";
import { ButtonRouter } from "../ButtonElements";
import Link from "next/link";
import {
  BenefitsContainer,
  BenefitsWrapper,
  Heading,
  BenefitItem,
} from "./BenefitsElements";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";

const Benefits = () => {
  const animation = useAnimation();
  const { ref, initial } = useMyAnimation({ animation });
  return (
    <>
      <BenefitsContainer ref={ref}>
        <Heading>Benefits We Provide</Heading>
        <BenefitsWrapper>
          <BenefitItem>Benefit One</BenefitItem>
          <BenefitItem>Benefit Two</BenefitItem>
          <BenefitItem>Benefit Three</BenefitItem>
          <BenefitItem>Benefit Four</BenefitItem>
          <BenefitItem>Benefit Five</BenefitItem>
          <BenefitItem>Benefit Six</BenefitItem>
        </BenefitsWrapper>
      </BenefitsContainer>
    </>
  );
};

export default Benefits;
