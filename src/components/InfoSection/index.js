import React, { useEffect } from "react";
import Image from "next/image";
import { AnimatedButton } from "../ButtonElements";
import Link from "next/link";
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
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";

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
                  {description}
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
              <ImgWrap>
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
