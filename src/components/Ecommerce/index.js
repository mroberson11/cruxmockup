import React from "react";
import AltNav from "../AltNav";
import CruxHead from "../CruxHead";
import Footer from "../Footer";
import { Container, EcommerceWrapper } from "./EcommerceElements";
import LogoCarousel from "../LogoCarousel";
import Benefits from "../Benefits";

const Ecommerce = () => {
  return (
    <>
      <CruxHead title="E-Commerce Websites | Mississippi Web Design" />
      <Container>
        <AltNav />
        <EcommerceWrapper>
          <LogoCarousel />
          <Benefits />
        </EcommerceWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Ecommerce;
