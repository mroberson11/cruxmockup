import React, { useState } from "react";
// import Video from "../../videos/BlueBackground.mp4";
import { ButtonRouter } from "../ButtonElements";
import { useMediaQuery } from "react-responsive";
// import BlueSpace from "../../images/blue-milky-way.jpg";
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
            src={"../../videos/BlueBackground.mp4"}
            type="video/mp4"
          />
        ) : (
          <BackgroundPic
            src={"../../images/blue-milky-way.jpg"}
            alt="Blue Space Background"
          />
        )}
      </HeroBg>
      <HeroContent>
        <HeroH1>Want a website like this?</HeroH1>
        <HeroP>Only four spots available per month. Don't miss out.</HeroP>
        <HeroBtnWrapper>
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
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
