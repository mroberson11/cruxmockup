import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";
import {
  BenefitsContainer,
  BenefitsWrapper,
  Heading,
  BenefitItem,
  BenefitIcon,
  Lightning,
  Funnel,
  Leaderboard,
  Smile,
  Checkmark,
  SearchDollar,
  BenefitText,
} from "./BenefitsElements";

const Benefits = () => {
  const animation = useAnimation();
  const { ref, initial } = useMyAnimation({ animation });
  return (
    <>
      <BenefitsContainer ref={ref}>
        <Heading
          initial={initial}
          transition={{ delay: 0.5, duration: 0.6 }}
          animate={animation}
        >
          Benefits We Provide
        </Heading>
        <BenefitsWrapper
          initial={initial}
          transition={{ delay: 0.7, duration: 0.6 }}
          animate={animation}
        >
          <BenefitItem>
            <BenefitIcon>
              <Lightning />
            </BenefitIcon>
            <BenefitText>
              Your dream website delivered within two weeks
            </BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Funnel />
            </BenefitIcon>
            <BenefitText>
              Ability to sell your products 24 hours a day to the entire world
            </BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Leaderboard />
            </BenefitIcon>
            <BenefitText>
              Help in eliminating brick & mortar overhead
            </BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Smile />
            </BenefitIcon>
            <BenefitText>
              Stress free website maintenance & changes all done for you
            </BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Checkmark />
            </BenefitIcon>
            <BenefitText>
              A money back service guarantee with no monthly contracts
            </BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <SearchDollar />
            </BenefitIcon>
            <BenefitText>
              Organic traffic created through Search Engine Optimization
              techniques
            </BenefitText>
          </BenefitItem>
        </BenefitsWrapper>
      </BenefitsContainer>
    </>
  );
};

export default Benefits;
