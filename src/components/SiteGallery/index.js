import React from "react";
import iSpy from "../../images/DemoImages/ispyms.png";
import HeIsWorthy from "../../images/DemoImages/he-is-worthy.png";
import CharlieFromStarkville from "../../images/DemoImages/charlie-from-starkville.png";
import BorthwickBallistics from "../../images/DemoImages/borthwick-ballistics-hero-section.png";
import PiKapp from "../../images/DemoImages/pi-kapp.png";
import Jennie from "../../images/DemoImages/jennie-roberson.png";
import MeadowsRidgebacks from "../../images/DemoImages/meadows-ridgebacks.png";
import Northolt from "../../images/DemoImages/northolt-rfc.png";
import SAE from "../../images/DemoImages/sae-hero-section.png";
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
              className="ispy"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
                <a
                  href="https://ispyms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={iSpy} alt="iSpy MS" priority={true} />
                </a>
              </ImgWrap>
            </InfoSection>
            <InfoSection
              className="heisworthy"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
                <a
                  href="https://heisworthy.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={HeIsWorthy} alt="He Is Worthy" priority={true} />
                </a>
              </ImgWrap>
            </InfoSection>
            <InfoSection
              className="charlie"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
                <a
                  href="https://charliefromstarkville.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={CharlieFromStarkville}
                    alt="Charlie From Starkville"
                    priority={true}
                  />
                </a>
              </ImgWrap>
            </InfoSection>

            <InfoSection
              className="sae"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
                <a
                  href="https://msstatesae.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={SAE} alt="SAE" priority={true} />
                </a>
              </ImgWrap>
            </InfoSection>
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
              className="pikapp"
              whileHover={{
                scale: 1.025,
              }}
            >
              <ImgWrap>
                <a
                  href="https://msstatepikappaphi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={PiKapp}
                    alt="MIssissippi State Pi Kappa Alpha"
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
            </InfoSection>
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
            </InfoSection> */}
          </SiteGalleryContent>
        </SiteGalleryWrapper>
      </Container>
    </>
  );
};

export default SiteGallery;
