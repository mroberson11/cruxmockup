import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon1 from "../../images/InfoImages/man-next-to-laptop.svg";
import Icon2 from "../../images/InfoImages/seo.svg";
import Icon3 from "../../images/InfoImages/pair-programming.svg";
import Icon4 from "../../images/InfoImages/maintenance.svg";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";
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
  const animation = useAnimation();
  const { ref, initial } = useMyAnimation({ animation });
  return (
    <>
      <ServicesContainer id="services" ref={ref}>
        <ServicesH1>Website Development Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard
            initial={initial}
            transition={{ delay: 0.3, duration: 0.8 }}
            animate={animation}
          >
            <ServicesIcon>
              <Image src={Icon1} alt="Website Development" priority={true} />
            </ServicesIcon>
            <ServicesH2>Custom Websites</ServicesH2>
            <ServicesP>
              We specialize in creating custom websites tailored to your unique
              needs and business goals. Get an online quote today to start your
              journey towards a stunning, high-performance website.
            </ServicesP>
            <Link href="/contact-form" passHref>
              <AnimatedButton
                primary="true"
                dark="true"
                duration={500}
                exact="true"
                offset={-80}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 3 }}
                style={{
                  background: "var(--offWhite)",
                  color: "var(--linkBlue)",
                  position: "relative",
                  top: "1rem",
                }}
              >
                Learn More {<ArrowForward />}
              </AnimatedButton>
            </Link>
          </ServicesCard>
          <ServicesCard
            initial={initial}
            transition={{ delay: 0.5, duration: 0.8 }}
            animate={animation}
          >
            <ServicesIcon>
              <Image src={Icon2} alt="Lead Generation" priority={true} />
            </ServicesIcon>
            <ServicesH2>Search Engine Optimization</ServicesH2>
            <ServicesP>
              Are you the first business result that appears when potential
              customers search for your service? If not, we can make sure you
              are through an optimized website & Google Business listing.
            </ServicesP>
            <Link href="/pricing" passHref>
              <AnimatedButton
                primary="true"
                dark="true"
                duration={500}
                exact="true"
                offset={-80}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 3 }}
                style={{
                  background: "var(--offWhite)",
                  color: "var(--linkBlue)",
                }}
              >
                Learn More {<ArrowForward />}
              </AnimatedButton>
            </Link>
          </ServicesCard>
          <ServicesCard
            initial={initial}
            transition={{ delay: 0.7, duration: 0.8 }}
            animate={animation}
          >
            <ServicesIcon>
              <Image src={Icon3} alt="Pair Programming" priority={true} />
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
                  background: "var(--offWhite)",
                  color: "var(--linkBlue)",
                  position: "relative",
                  top: "1rem",
                }}
              >
                Learn More {<ArrowForward />}
              </AnimatedButton>
            </Link>
          </ServicesCard>
          <ServicesCard
            initial={initial}
            transition={{ delay: 0.9, duration: 0.8 }}
            animate={animation}
          >
            <ServicesIcon>
              <Image src={Icon4} alt="Maintenance" priority={true} />
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
                  background: "var(--offWhite)",
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
