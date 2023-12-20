import React from "react";
import AltNav from "../AltNav";
import Breadcrumb from "../Breadcrumb";
import Footer from "../Footer";
import { Container, ServiceH1, ServiceWrapper } from "./ServiceElements";
import InfoSection from "../InfoSection";
import { homeObjOne } from "../InfoSection/Data";

const Service = () => {
  return (
    <>
      <Container>
        <AltNav />
        {/* <Breadcrumb
          homeElement={"Home"}
          separator={<span>&nbsp; &nbsp; &gt; &nbsp; &nbsp;</span>}
          activeClasses="text-amber-500"
          containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
          listClasses="hover:underline mx-2 font-bold"
          capitalizeLinks
        /> */}
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
