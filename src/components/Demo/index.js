import React from "react";
import AltNav from "../AltNav";
import CruxFastFood from "../../images/DemoImages/fast-food-hero-section.png";
import CruxPizzeria from "../../images/DemoImages/pizza-hero-section.png";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";
import { LogoImg } from "./DemoElements";
import {
  Container,
  DemoH1,
  DemoWrapper,
  DemoContent,
  InfoSection,
  InfoSectionHeader,
  ImgWrap,
} from "./DemoElements";

const Demo = () => {
  const animation = useAnimation();
  const { ref, initial } = useMyAnimation({ animation });

  return (
    <>
      <Container>
        <AltNav />
        <DemoH1>E-Commerce Demo Sites</DemoH1>
        <DemoWrapper>
          <DemoContent>
            <InfoSection>
              <InfoSectionHeader
                ref={ref}
                initial={initial}
                transition={{ delay: 0.1, duration: 0.6 }}
                animate={animation}
              >
                Fast Food Demo
              </InfoSectionHeader>
              <ImgWrap
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <Link href="https://56e20ef9aa.nxcli.net" passHref>
                  <Image
                    src={CruxFastFood}
                    alt="Crux Fast Food"
                    priority={true}
                  />
                </Link>
              </ImgWrap>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                Pizzeria Demo
              </InfoSectionHeader>
              <ImgWrap
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <Link href="https://e43e510d46.nxcli.net" passHref>
                  <Image
                    src={CruxPizzeria}
                    alt="Crux Pizzeria"
                    priority={true}
                  />
                </Link>
              </ImgWrap>
            </InfoSection>
          </DemoContent>
        </DemoWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Demo;
