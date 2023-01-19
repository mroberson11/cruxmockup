import React, { useState } from "react";
import HeroImage from "../../images/HeroImages/blue-milky-way.webp";
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
        <HeroH1>Restaurant E-Commerce</HeroH1>
        <HeroP>Done-For-You</HeroP>
        <HeroBtnWrapper
          whileHover={{
            scale: 1.1,
          }}
        >
          <Link href="/contact-form" passHref>
            <AnimatedButton
              to="contact"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              duration={500}
              exact="true"
              offset={-80}
              whileTap={{ scale: 0.9 }}
              animate={{
                rotate: [0, 0, 360, 0, 0],
              }}
              transition={{ duration: 3 }}
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
