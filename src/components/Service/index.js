import React from "react";
import AltNav from "../AltNav";
import Footer from "../Footer";
import { Container, ServiceH1, ServiceWrapper } from "./ServiceElements";
import InfoSection from "../InfoSection";
import { homeObjOne } from "../InfoSection/Data";

const Service = () => {
  return (
    <>
      <Container>
        <AltNav />
        <ServiceH1>Service Based Websites</ServiceH1>
        <ServiceWrapper>
          <InfoSection {...homeObjOne} />
        </ServiceWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Service;
