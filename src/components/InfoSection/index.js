import React, { useEffect } from "react";
import Image from "next/image";
import { ButtonRouter } from "../ButtonElements";
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
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

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
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);
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
                    <ButtonRouter
                      smooth={true}
                      duration={500}
                      spy={true}
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
                    </ButtonRouter>
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
