import React from "react";
import Image from "next/image";
import Icon1 from "../../../public/images/pair-programming.svg";
import Icon2 from "../../../public/images/seo.svg";
import Icon3 from "../../../public/images/server.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon>
              <Image src={Icon1} alt="Pair Programming" />
            </ServicesIcon>
            <ServicesH2>Website Creation</ServicesH2>
            <ServicesP>
              Our bread & butter is designing websites that are lightning fast
              and aestetically pleasing. Did you know that 40% of consumers will
              wait no more than three seconds for a website to load before
              leaving?
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon>
              <Image src={Icon3} alt="Image Enhancement" />
            </ServicesIcon>
            <ServicesH2>Image Enhancement</ServicesH2>
            <ServicesP>
              Tired of being embarrassed by your existing website? Ashamed to
              market it to potential customers? We've all been there. Allow us
              to help visualize your potential online transformation at no
              initial cost through free mockups.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon>
              <Image src={Icon2} alt="Lead Generation" />
            </ServicesIcon>
            <ServicesH2>Lead Generation</ServicesH2>
            <ServicesP>
              There's no use in having a beautifully designed website if there's
              no one to admire it. Utilizing today's most up to date SEO
              techniques & dynamic ads, our team will ensure potential customers
              are able to organically discover your online content ahead of
              industry competitors.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
