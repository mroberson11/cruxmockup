import React from "react";
import AltNav from "../AltNav";
import BorthwickBallistics from "../../images/DemoImages/borthwick-ballistics-hero-section.png";
import CruxFastFood from "../../images/DemoImages/fast-food-hero-section.png";
import CruxPizza from "../../images/DemoImages/pizza-hero-section.png";
import CruxBBQ from "../../images/DemoImages/bbq-hero-section.png";
import FBCCS from "../../images/DemoImages/fbc-cs.png";
import Jennie from "../../images/DemoImages/jennie-roberson.png";
import MeadowsRidgebacks from "../../images/DemoImages/meadows-ridgebacks.png";
import Footer from "../Footer";
import Image from "next/image";
import CruxHead from "../CruxHead";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";
import {
  Container,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioContent,
  InfoSection,
  InfoSectionHeader,
  ImgWrap,
} from "./PortfolioElements";

const Portfolio = () => {
  const animation = useAnimation();
  const { ref, initial } = useMyAnimation({ animation });

  return (
    <>
      <CruxHead title="Our Portfolio" />
      <Container>
        <AltNav />
        <PortfolioH1>Crux Portfolio</PortfolioH1>
        <PortfolioWrapper>
          <PortfolioContent>
            <InfoSection>
              <InfoSectionHeader
                ref={ref}
                initial={initial}
                transition={{ delay: 0.1, duration: 0.6 }}
                animate={animation}
              >
                Borthwick Ballistics
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
                <a
                  href="https://borthwickballisticsllc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={BorthwickBallistics}
                    alt="Borthwick Ballistics"
                    priority={true}
                  />
                </a>
              </ImgWrap>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                Jennie Roberson Portfolio
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
                <a
                  href="https://jennieroberson.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={Jennie} alt="Jennie Roberson" priority={true} />
                </a>
              </ImgWrap>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                FBC Crystal Springs
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
                <a
                  href="https://fbccrystalsprings.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={FBCCS}
                    alt="FBC Crystal Springs"
                    priority={true}
                  />
                </a>
              </ImgWrap>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                Meadows Ridgebacks
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
                <a
                  href="https://meadowsridgebacks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={MeadowsRidgebacks}
                    alt="Meadows Ridgebacks"
                    priority={true}
                  />
                </a>
              </ImgWrap>
            </InfoSection>

            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                Crux Fast Food
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
                <a
                  href="https://56e20ef9aa.nxcli.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={CruxFastFood}
                    alt="Crux Fast Food"
                    priority={true}
                  />
                </a>
              </ImgWrap>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                Crux Pizza Co.
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
                <a
                  href="https://e43e510d46.nxcli.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={CruxPizza} alt="Crux Pizza Co." priority={true} />
                </a>
              </ImgWrap>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                Crux BBQ
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
                <a
                  href="https://c1347f319e.nxcli.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={CruxBBQ} alt="Crux BBQ" priority={true} />
                </a>
              </ImgWrap>
            </InfoSection>
          </PortfolioContent>
        </PortfolioWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Portfolio;
