import React, { useState } from "react";
import AltNav from "../AltNav";
import Footer from "../Footer";
import Link from "next/link";
import { AnimatedButton } from "../ButtonElements";
import { sellingPointsOne, sellingPointsTwo, sellingPointsThree } from "./Data";
import PriceCard from "./PriceCard";
import {
  Container,
  ContactH1,
  PricesWrapper,
  BtnWrapper,
} from "./PricesInfoElements";
import { ArrowForward, ArrowRight } from "../HeroSection/HeroElements";

const PricesInfo = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <Container>
        <AltNav />
        <ContactH1>Services Pricing</ContactH1>
        <PricesWrapper>
          <PriceCard
            id={"price-card-one"}
            headline={"Digital Lead Accelerator"}
            price={"$899 /month"}
            sellingPoints={sellingPointsOne}
          />
          <PriceCard
            id={"price-card-two"}
            headline={"Online Sales Generator"}
            price={"$399 /month"}
            sellingPoints={sellingPointsTwo}
          />
          <PriceCard
            id={"price-card-three"}
            headline={"Digital Support Pro"}
            price={"Free with any Plan"}
            sellingPoints={sellingPointsThree}
          />
        </PricesWrapper>
        <BtnWrapper
          whileHover={{
            scale: 1.1,
          }}
        >
          <Link href="/contact-form" passHref>
            <AnimatedButton
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="false"
              duration={500}
              exact="true"
              offset={-80}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 3 }}
              style={{ background: "var(--cruxBlue)" }}
            >
              Custom Website Quote {hover ? <ArrowForward /> : <ArrowRight />}
            </AnimatedButton>
          </Link>
        </BtnWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default PricesInfo;
