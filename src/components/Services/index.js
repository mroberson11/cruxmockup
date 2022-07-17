import React from "react";
import Image from "next/image";
import Icon1 from "../../images/InfoImages/pair-programming.svg";
import Icon2 from "../../images/InfoImages/seo.svg";
import Icon3 from "../../images/InfoImages/image-enhancement.svg";
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
              <Image src={Icon1} alt="Pair Programming" priority={true} />
            </ServicesIcon>
            <ServicesH2>Website Creation</ServicesH2>
            <ServicesP>
              Working hand-in-hand with you, we&apos;ll design, implement, and
              configure your dream online store. With 7+ years of software
              engineering experience, we have the skills & tools required to
              deliver on our promises.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon>
              <Image src={Icon2} alt="Lead Generation" priority={true} />
            </ServicesIcon>
            <ServicesH2>Lead Generation</ServicesH2>
            <ServicesP>
              There&apos;s no use in having a beautifully designed website if
              there&apos;s no one to admire it. Utilizing today&apos;s latest
              SEO techniques, we will ensure potential customers are able to
              organically discover your online content ahead of industry
              competitors.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon>
              <Image src={Icon3} alt="Image Enhancement" priority={true} />
            </ServicesIcon>
            <ServicesH2>Image Enhancement</ServicesH2>
            <ServicesP>
              Tired of being embarrassed by your existing website? Ashamed to
              market it to potential customers? Allow us to help visualize your
              potential online transformation at no initial cost.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
