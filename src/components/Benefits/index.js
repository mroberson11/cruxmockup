import React from "react";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";
import { AnimatedButton } from "../ButtonElements";
import Link from "next/link";
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
  BtnWrapper,
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
            <BenefitText>Decrease Buyer&apos;s Remorse</BenefitText>
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
        <BtnWrapper
          whileHover={{
            scale: 1.1,
          }}
        >
          <Link href="/demo" passHref>
            <AnimatedButton
              primary="true"
              dark="true"
              duration={500}
              exact="true"
              offset={-80}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 3 }}
              style={{
                background: "var(--cruxBlue)",
                color: "var(--offWhite)",
              }}
            >
              View Demo Sites
            </AnimatedButton>
          </Link>
        </BtnWrapper>
      </BenefitsContainer>
    </>
  );
};

export default Benefits;
