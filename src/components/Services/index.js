import React from "react";
import Link from "next/link";
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
  ArrowForward,
} from "./ServicesElements";
import { AnimatedButton } from "../ButtonElements";

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
            <ServicesH2>Service Based Websites</ServicesH2>
            <ServicesP>
              Our Service Based packages include unlimited web pages, contact
              forms, booking forms, customer reviews, Search Engine
              Optimization, and more.
            </ServicesP>
            <Link href="/service" passHref>
              <AnimatedButton
                primary="true"
                dark="true"
                duration={500}
                exact="true"
                offset={-80}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 3 }}
                style={{
                  background: "var(--trueWhite)",
                  color: "var(--linkBlue)",
                }}
              >
                Learn More {<ArrowForward />}
              </AnimatedButton>
            </Link>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon>
              <Image src={Icon2} alt="Sale Generation" priority={true} />
            </ServicesIcon>
            <ServicesH2>E-Commerce Websites</ServicesH2>
            <ServicesP>
              Our E-Commerce packages include no-contact ordering, no third
              party fees, retention of customer data, real-time receipt
              printing, and much more.
            </ServicesP>
            <Link href="/ecommerce" passHref>
              <AnimatedButton
                primary="true"
                dark="true"
                duration={500}
                exact="true"
                offset={-80}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 3 }}
                style={{
                  background: "var(--trueWhite)",
                  color: "var(--linkBlue)",
                  position: "relative",
                  top: "1rem",
                }}
              >
                Learn More {<ArrowForward />}
              </AnimatedButton>
            </Link>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon>
              <Image src={Icon3} alt="Maintenance" priority={true} />
            </ServicesIcon>
            <ServicesH2>Maintenance Packages</ServicesH2>
            <ServicesP>
              All content changes, product updates, promotions, upcoming events,
              server management, and the remaining responsibilites associated
              with maintaining a robust website can be handled for you.
            </ServicesP>
            <Link href="/maintenance" passHref>
              <AnimatedButton
                primary="true"
                dark="true"
                duration={500}
                exact="true"
                offset={-80}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 3 }}
                style={{
                  background: "var(--trueWhite)",
                  color: "var(--linkBlue)",
                }}
              >
                Learn More {<ArrowForward />}
              </AnimatedButton>
            </Link>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
