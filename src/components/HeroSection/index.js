import React, { useState } from "react";
import Link from "next/link";
import { ButtonRouter } from "../ButtonElements";
import { useMediaQuery } from "react-responsive";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  NavBtnLink,
  BackgroundPic,
} from "./HeroElements";

const HeroSection = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        {isDesktopOrLaptop ? (
          <VideoBg
            autoPlay
            loop
            muted
            playsinline
            src={require("../../../public/videos/BlueSpace.mp4")}
            type="video/mp4"
          />
        ) : (
          <BackgroundPic
            src={"../../images/HeroImages/blue-milky-way.jpg"}
            alt="Blue Space Background"
          />
        )}
      </HeroBg>
      <HeroContent>
        <HeroH1>Want a website like this?</HeroH1>
        <HeroP>
          Only three spots available per month. <br /> Don&apos;t miss out.
        </HeroP>
        <HeroBtnWrapper>
          <Link href="/contact-form" passHref>
            <ButtonRouter
              to="contact"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </ButtonRouter>
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
