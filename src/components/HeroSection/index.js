import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "../ButtonElements";
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
import HeroImage from "../../images/HeroImages/blue-milky-way.webp";

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
            src={HeroImage}
            alt="Green Space Background"
            layout="fill"
            type="image/webp"
          />
        ) : (
          <BackgroundPic
            src={"../../images/HeroImages/blue-milky-way.webp"}
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
            <AnimatedButton
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
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </AnimatedButton>
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
