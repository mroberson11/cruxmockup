import React from "react";
import Image from "next/image";
import Icon1 from "../../images/InfoImages/pair-programming.svg";
import Icon2 from "../../images/InfoImages/seo.svg";
import Icon3 from "../../images/InfoImages/maintenance.svg";
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
            <ServicesH2>DFY Online Ordering System</ServicesH2>
            <ServicesP>
              While you sit back & relax, we&apos;ll design, implement, and
              configure your fully managed online storefront. This includes
              no-contact ordering, no third party fees, retention of customer
              data, real-time receipt printing, and more.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon>
              <Image src={Icon2} alt="Sale Generation" priority={true} />
            </ServicesIcon>
            <ServicesH2>Sale Generation</ServicesH2>
            <ServicesP>
              There&apos;s no use in having a beautifully designed website if
              there&apos;s no one to admire and enjoy it. Loyalty reward
              programs, event promotion, and one click ordering are just a few
              of the ways we&apos;ll keep your customers coming back for more.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon>
              <Image src={Icon3} alt="Maintenance" priority={true} />
            </ServicesIcon>
            <ServicesH2>Maintenance Packages</ServicesH2>
            <ServicesP>
              All content changes, product updates, promotions, upcoming events,
              server management, and the remaining responsibilites associated
              with maintaining a robust E-Commerce website wil be handled for
              you.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
