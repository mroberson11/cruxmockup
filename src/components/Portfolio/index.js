import React from "react";
import AltNav from "../AltNav";
import BorthwickBallistics from "../../images/DemoImages/borthwick-ballistics-hero-section.png";
import CruxFastFood from "../../images/DemoImages/fast-food-hero-section.png";
import CruxPizza from "../../images/DemoImages/pizza-hero-section.png";
import CruxBBQ from "../../images/DemoImages/bbq-hero-section.png";
import PiKapp from "../../images/DemoImages/pi-kapp.png";
import Jennie from "../../images/DemoImages/jennie-roberson.png";
import MeadowsRidgebacks from "../../images/DemoImages/meadows-ridgebacks.png";
import Northolt from "../../images/DemoImages/northolt-rfc.png";
import SAE from "../../images/DemoImages/sae-hero-section.png";
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
  let tDuration = 0.6;

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
                transition={{ delay: 0.1, duration: tDuration }}
                animate={animation}
              >
                Mississippi Theta
              </InfoSectionHeader>
              <ImgWrap
                initial={initial}
                transition={{ delay: 0.3, duration: tDuration }}
                animate={animation}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <a
                  href="https://msstatesae.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={SAE} alt="SAE" priority={true} />
                </a>
              </ImgWrap>
            </InfoSection>

            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.5, duration: tDuration }}
                animate={animation}
              >
                Borthwick Ballistics
              </InfoSectionHeader>
              <ImgWrap
                initial={initial}
                transition={{ delay: 0.7, duration: tDuration }}
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
                transition={{ delay: 0.5, duration: tDuration }}
                animate={animation}
              >
                Northolt RFC
              </InfoSectionHeader>
              <ImgWrap
                initial={initial}
                transition={{ delay: 0.7, duration: tDuration }}
                animate={animation}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <a
                  href="https://northoltrugbyfootballclub.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={Northolt} alt="Northolt RFC" priority={true} />
                </a>
              </ImgWrap>
            </InfoSection>

            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.5, duration: tDuration }}
                animate={animation}
              >
                Jennie Roberson Portfolio
              </InfoSectionHeader>
              <ImgWrap
                initial={initial}
                transition={{ delay: 0.7, duration: tDuration }}
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
                transition={{ delay: 0.5, duration: tDuration }}
                animate={animation}
              >
                Pi Kappa Phi Iota Nu
              </InfoSectionHeader>
              <ImgWrap
                initial={initial}
                transition={{ delay: 0.7, duration: tDuration }}
                animate={animation}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <a
                  href="https://msstatepikappaphi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={PiKapp}
                    alt="Pi Kappa Phi Iota Nu"
                    priority={true}
                  />
                </a>
              </ImgWrap>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.5, duration: tDuration }}
                animate={animation}
              >
                Meadows Ridgebacks
              </InfoSectionHeader>
              <ImgWrap
                initial={initial}
                transition={{ delay: 0.7, duration: tDuration }}
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
          </PortfolioContent>
        </PortfolioWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Portfolio;
