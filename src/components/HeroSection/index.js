import React, { useState } from "react";
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
  Column1,
  Column2,
  VideoBg,
} from "./HeroElements";

const HeroSection = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* {isDesktop ? (
          <Image
            src={HeroDesktop}
            alt="Blue Space Background"
            layout="fill"
            type="image/webp"
          />
        ) : (
          <BackgroundPic src={HeroMobile.src} alt="Blue Space Background" />
        )} */}
      </HeroBg>
      <HeroContent>
        <Column1>
          <HeroH1>Custom Software That Solves Real Business Problems</HeroH1>
          <HeroP>We build internal tools, dashboards, and systems that eliminate manual work for startups, small businesses, and public teams.</HeroP>
          <HeroBtnContainer>
            <HeroBtnWrapper
              whileHover={{
                scale: 1.1,
              }}
            >
              {/*<Link href="/portfolio" passHref>
                <AnimatedButton
                  primary="false"
                  dark="false"
                  duration={500}
                  exact="true"
                  offset={-80}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 3 }}
                >
                  View Portfolio
                </AnimatedButton>
              </Link>*/}
            </HeroBtnWrapper>
            <HeroBtnWrapper
              whileHover={{
                scale: 1.1,
              }}
            >
              <Link href="https://outlook.office365.com/owa/calendar/CruxBookings@cruxsoftwaresolutions.com/bookings/" passHref>
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
                  style={{ background: "var(--offWhite)" }}
                >
                  Book Your Free Strategy Call {hover ? <ArrowForward /> : <ArrowRight />}
                </AnimatedButton>
              </Link>
            </HeroBtnWrapper>
          </HeroBtnContainer>
        </Column1>
        <Column2>
          <VideoBg
            autoPlay
            loop={true}
            controls={false}
            muted
            playsInline
            src={require("../../videos/web-dev-animation.mp4")}
            type="video/mp4"
          />
        </Column2>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
