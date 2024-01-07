import React from "react";
import AltNav from "../AltNav";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
import { sellingPointsOne, sellingPointsTwo, sellingPointsThree } from "./Data";
import PriceCard from "./PriceCard";
import {
  Container,
  ContactH1,
  PricesWrapper,
  PricesCard,
  PricesIcon,
  PricesH1,
  PricesH2,
  PricesP,
  EmphasizedP,
  EmphasizedA,
} from "./PricesInfoElements";

const PricesInfo = () => {
  const points = ["low cost", "maintenance"];

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
        <Footer />
      </Container>
    </>
  );
};

export default PricesInfo;
