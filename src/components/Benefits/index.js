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
  BillWave,
  Magnet,
  Bullseye,
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
              <BillWave />
            </BenefitIcon>
            <BenefitText>
              Increase Average Total Purchase of Each Customer
            </BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Magnet />
            </BenefitIcon>
            <BenefitText>Increase Customer Retention</BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Bullseye />
            </BenefitIcon>
            <BenefitText>Increase Order Accuracy</BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Lightning />
            </BenefitIcon>
            <BenefitText>Increase Efficiency of Existing Employees</BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Smile />
            </BenefitIcon>
            <BenefitText>
              Increase Employee Satisfaction & Commissions
            </BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Funnel />
            </BenefitIcon>
            <BenefitText>Decrease Operational Bottlenecks</BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <SearchDollar />
            </BenefitIcon>
            <BenefitText>Decrease Buyer's Remorse</BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Leaderboard />
            </BenefitIcon>
            <BenefitText>Receive Real-time Customer Feedback</BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>
              <Checkmark />
            </BenefitIcon>
            <BenefitText>
              Satisfaction Guaranteed via Risk Free Trial
            </BenefitText>
          </BenefitItem>
        </BenefitsWrapper>
      </BenefitsContainer>
    </>
  );
};

export default Benefits;
