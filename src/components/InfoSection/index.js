import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "../ButtonElements";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  pageLink,
}) => {
  const animation = useAnimation();
  const { ref, initial } = useMyAnimation({ animation });
  const steps = description.split("\n");

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} ref={ref}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1
              initial={initial}
              transition={{ delay: 0.5, duration: 0.6 }}
              animate={animation}
            >
              <TextWrapper>
                <TopLine
                  initial={initial}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  animate={animation}
                >
                  {topLine}
                </TopLine>
                <Heading
                  lightText={lightText}
                  initial={initial}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  animate={animation}
                >
                  {headline}
                </Heading>
                <Subtitle
                  darkText={darkText}
                  initial={initial}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  animate={animation}
                >
                  {steps.map((step, index) => (
                    <React.Fragment key={index}>
                      {step}
                      <br />
                    </React.Fragment>
                  ))}
                </Subtitle>
                <BtnWrap>
                  <Link href={pageLink} passHref>
                    <AnimatedButton
                      duration={500}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                      initial={initial}
                      transition={{ delay: 1, duration: 0.6 }}
                      animate={animation}
                    >
                      {buttonLabel}
                    </AnimatedButton>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2
              initial={initial}
              transition={{ delay: 0.5, duration: 0.6 }}
              animate={animation}
            >
              <ImgWrap
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={img} alt={alt} priority={true} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
