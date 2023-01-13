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
        <PricesH1>Crux Pricing Plan</PricesH1>
        <PricesWrapper>
          <PriceCard key={"annual"} option={"yes"} productDetails={"no"} productCost={"6969"} />
          <PriceCard key={"annual"} option={"yes"} productDetails={"no"} />
          <PriceCard key={"annual"} option={"yes"} productDetails={"no"} />
        </PricesWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default PricesInfo;
