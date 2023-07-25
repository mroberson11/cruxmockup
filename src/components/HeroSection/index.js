import React, { useState } from "react";
import HeroDesktop from "../../images/HeroImages/mix-burn.webp";
import HeroMobile from "../../images/HeroImages/mix-burn-mobile.webp";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "../ButtonElements";
import { useMediaQuery } from "react-responsive";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnContainer,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  BackgroundPic,
} from "./HeroElements";

const HeroSection = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        {isDesktopOrLaptop ? (
          <Image
            src={HeroDesktop}
            alt="Blue Space Background"
            layout="fill"
            type="image/webp"
          />
        ) : (
          <BackgroundPic
            // src={"../../images/HeroImages/blue-milky-way.webp"}
            // src={"../../images/HeroImages/crux-blue-space.webp"}
            src={HeroMobile.src}
            alt="Blue Space Background"
          />
        )}
      </HeroBg>
      <HeroContent>
        <HeroH1>Your Stress-Free Path to E-Commerce Success</HeroH1>
        <HeroP>DFY Online Stores for Small Businesses</HeroP>
        <HeroBtnContainer>
          <HeroBtnWrapper
            whileHover={{
              scale: 1.1,
            }}
          >
            <Link href="/demo" passHref>
              <AnimatedButton
                primary="false"
                dark="false"
                duration={500}
                exact="true"
                offset={-80}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 3 }}
              >
                View Demos
              </AnimatedButton>
            </Link>
          </HeroBtnWrapper>
          <HeroBtnWrapper
            whileHover={{
              scale: 1.1,
            }}
          >
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://outlook.office365.com/owa/calendar/CruxConsultations@cruxsoftwaresolutions.com/bookings/"
              passHref
            >
              <AnimatedButton
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                duration={500}
                exact="true"
                offset={-80}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 3 }}
                style={{ background: "var(--trueWhite)" }}
              >
                Free Trial {hover ? <ArrowForward /> : <ArrowRight />}
              </AnimatedButton>
            </Link>
          </HeroBtnWrapper>
        </HeroBtnContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
