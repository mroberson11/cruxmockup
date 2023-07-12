import React from "react";
import AltNav from "../AltNav";
import CruxFastFood from "../../images/DemoImages/fast-food-hero-section.png";
import CruxPizza from "../../images/DemoImages/pizza-hero-section.png";
import FBCCS from "../../images/DemoImages/fbc-cs.png";
import MeadowsRidgebacks from "../../images/DemoImages/meadows-ridgebacks.png";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
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
                Crux Pizza Co.
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
                <Link href="https://e43e510d46.nxcli.net/" passHref>
                  <Image src={CruxPizza} alt="Crux Pizza Co." priority={true} />
                </Link>
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
                <Link href="https://fbccrystalsprings.com" passHref>
                  <Image
                    src={FBCCS}
                    alt="FBC Crystal Springs"
                    priority={true}
                  />
                </Link>
              </ImgWrap>
            </InfoSection>

            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.9, duration: 0.6 }}
                animate={animation}
              >
                Meadows Ridgebacks
              </InfoSectionHeader>
              <ImgWrap
                initial={initial}
                transition={{ delay: 1.1, duration: 0.6 }}
                animate={animation}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <Link href="https://meadowsridgebacks.com" passHref>
                  <Image
                    src={MeadowsRidgebacks}
                    alt="Meadows Ridgebacks"
                    priority={true}
                  />
                </Link>
              </ImgWrap>
            </InfoSection>

            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 1.3, duration: 0.6 }}
                animate={animation}
              >
                Crux Fast Food
              </InfoSectionHeader>
              <ImgWrap
                initial={initial}
                transition={{ delay: 1.5, duration: 0.6 }}
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
          </PortfolioContent>
        </PortfolioWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Portfolio;
