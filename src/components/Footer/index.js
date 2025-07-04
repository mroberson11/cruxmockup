import React from "react";
import WhiteLogo from "../../images/CompanyLogos/white-no-tagline.png";
import Image from "next/image";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { LogoContainer } from "../Navbar/NavbarElements";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>More Information</FooterLinkTitle>
                <Link href="https://outlook.office365.com/owa/calendar/CruxBookings@cruxsoftwaresolutions.com/bookings/" passHref>
                  <FooterLink>Get Started</FooterLink>
                </Link>
                <Link href="https://g.page/r/CRXcCbOIyJ6JEAg/review " passHref>
                  <FooterLink>Google Reviews</FooterLink>
                </Link>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink href="https://www.facebook.com/cruxsoftware">
                  Facebook
                </FooterLink>
                <FooterLink href="https://www.instagram.com/cruxsoftware/">
                  Instagram
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo
                whileHover={{
                  scale: 1.1,
                }}
              >
                <LogoContainer>
                  <FooterLink href="/">
                    <Image src={WhiteLogo} alt="Company Logo" priority={true} />
                  </FooterLink>
                </LogoContainer>
              </SocialLogo>
              <WebsiteRights>
                Crux ® {new Date().getFullYear()} | {' '}
                <a href="tel:6019271778">601-927-1778</a>
              </WebsiteRights>

              <SocialIcons>
                <SocialIconLink
                  href="https://www.facebook.com/cruxsoftware"
                  target="_blank"
                  aria-label="Facebook"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/cruxsoftware/"
                  target="_blank"
                  aria-label="Instagram"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <FaInstagram />
                </SocialIconLink>
                {/* <SocialIconLink
                  href="https://www.youtube.com"
                  target="_blank"
                  aria-label="Youtube"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <FaYoutube />
                </SocialIconLink> */}
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
