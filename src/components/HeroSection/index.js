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
          <HeroH1>Stop Giving Free Business to Your Competitors</HeroH1>
          <HeroP>Rank #1 for Local Google Searches within 30 Days</HeroP>
          <HeroBtnContainer>
            <HeroBtnWrapper
              whileHover={{
                scale: 1.1,
              }}
            >
              <Link href="/portfolio" passHref>
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
              </Link>
            </HeroBtnWrapper>
            <HeroBtnWrapper
              whileHover={{
                scale: 1.1,
              }}
            >
              <Link href="tel:6019271778" passHref>
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
                  Call Now {hover ? <ArrowForward /> : <ArrowRight />}
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
            src={require("../../videos/seo-animation.mp4")}
            type="video/mp4"
          />
        </Column2>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
