import React from "react";
import BorthwickBallistics from "../../images/DemoImages/borthwick-ballistics-hero-section.png";
import CruxFastFood from "../../images/DemoImages/fast-food-hero-section.png";
import CruxBBQ from "../../images/DemoImages/bbq-hero-section.png";
import FBCCS from "../../images/DemoImages/fbc-cs.png";
import Jennie from "../../images/DemoImages/jennie-roberson.png";
import MeadowsRidgebacks from "../../images/DemoImages/meadows-ridgebacks.png";
import Northolt from "../../images/DemoImages/northolt-rfc.png";
import Image from "next/image";
import {
  Container,
  SiteGalleryH1,
  SiteGalleryWrapper,
  SiteGalleryContent,
  InfoSection,
  ImgWrap,
} from "./SiteGalleryElements";

const SiteGallery = () => {
  return (
    <>
      <Container>
        <SiteGalleryH1>Our Portfolio</SiteGalleryH1>
        <SiteGalleryWrapper>
          <SiteGalleryContent>
            <InfoSection
              className="northolt"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
                <a
                  href="https://northoltrugbyfootballclub.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={Northolt} alt="Northolt RFC" priority={true} />
                </a>
              </ImgWrap>
            </InfoSection>
            <InfoSection
              className="borthwick"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
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
            <InfoSection
              className="jennie"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
                <a
                  href="https://jennieroberson.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={Jennie} alt="Jennie Roberson" priority={true} />
                </a>
              </ImgWrap>
            </InfoSection>
            <InfoSection
              className="fbc"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
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
            <InfoSection
              className="meadows"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
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
            {/* <InfoSection
              className="cruxFastFood"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
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
            </InfoSection> */}
            <InfoSection
              className="cruxBbq"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
                <a
                  href="https://c1347f319e.nxcli.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={CruxBBQ} alt="Crux BBQ" priority={true} />
                </a>
              </ImgWrap>
            </InfoSection>
          </SiteGalleryContent>
        </SiteGalleryWrapper>
      </Container>
    </>
  );
};

export default SiteGallery;
