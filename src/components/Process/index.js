import React from "react";
import AltNav from "../AltNav";
import Breadcrumb from "../Breadcrumb";
import Footer from "../Footer";
import { Container, ProcessWrapper } from "./ProcessElements";
import InfoSection from "../InfoSection";
import { homeObjOne } from "../InfoSection/Data";

const Process = () => {
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
        <ProcessWrapper>
          <InfoSection {...homeObjOne} />
        </ProcessWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Process;
