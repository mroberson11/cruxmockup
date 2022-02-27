import React from "react";
import Image from "next/image";
import Icon1 from "../../images/InfoImages/pair-programming.svg";
import Icon2 from "../../images/InfoImages/image-enhancement.svg";
import Icon3 from "../../images/InfoImages/seo.svg";
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
              <Image src={Icon2} alt="Image Enhancement" />
            </ServicesIcon>
            <ServicesH2>Image Enhancement</ServicesH2>
            <ServicesP>
              Tired of being embarrassed by your existing website? Ashamed to
              market it to potential customers? We&apos;ve all been there. Allow
              us to help visualize your potential online transformation at no
              initial cost through free mockups.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon>
              <Image src={Icon3} alt="Lead Generation" />
            </ServicesIcon>
            <ServicesH2>Lead Generation</ServicesH2>
            <ServicesP>
              There&apos;s no use in having a beautifully designed website if
              there&apos;s no one to admire it. Utilizing today&apos;s most up
              to date SEO techniques & dynamic ads, our team will ensure
              potential customers are able to organically discover your online
              content ahead of industry competitors.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
