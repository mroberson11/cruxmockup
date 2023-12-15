import React from "react";
import AltNav from "../AltNav";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
import { sellingPointsOne, sellingPointsTwo, sellingPointsThree } from "./Data";
import PriceCard from "./PriceCard";
import {
  Container,
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
        {/* <PricesH1>Crux Pricing Plan</PricesH1> */}
        <PricesWrapper>
          <PriceCard
            id={"price-card-one"}
            headline={"Service Pro"}
            price={"$2,499"}
            sellingPoints={sellingPointsOne}
          />
          <PriceCard
            id={"price-card-two"}
            headline={"E-Commerce Pro"}
            price={"$399 /month"}
            sellingPoints={sellingPointsTwo}
          />
          <PriceCard
            id={"price-card-three"}
            headline={"Service Pro Maintenance Package"}
            price={"$49.99 /month"}
            sellingPoints={sellingPointsThree}
          />
        </PricesWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default PricesInfo;
