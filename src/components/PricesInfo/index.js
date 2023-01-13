import React from "react";
import AltNav from "../AltNav";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <>
      <Container>
        <AltNav />
        {/* <PricesH1>Crux Pricing Plan</PricesH1> */}
        <PricesWrapper>
          <PriceCard id={"price-card-one"} headline={"Standard Package"} price={"$9,997"} />
          <PriceCard id={"price-card-two"} headline={"Elite Package"} price={"$12,599"} />
          <PriceCard id={"price-card-three"} headline={"Ultimate Package"} price={"$22,998"} />
        </PricesWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default PricesInfo;
