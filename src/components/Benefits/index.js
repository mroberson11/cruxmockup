import React, { useEffect } from "react";
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
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";

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
              A lightning fast user experience for your customers
            </BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Funnel />
            </BenefitIcon>
            <BenefitText>
              An optimized sales funnel/website resulting in more leads for your
              business
            </BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Leaderboard />
            </BenefitIcon>
            <BenefitText>
              Help in becoming a market leader of your local service area
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
