import React from "react";
import Link from "next/link";
import CompanyLogo from "../../images/CompanyLogos/blue-w-tagline.png";
import { IconContext } from "react-icons/lib";
import { FaFacebook, FaInstagram, FaMobileAlt } from "react-icons/fa";
import { SocialIcons, SocialIconLink } from "../Footer/FooterElements.js";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  LogoImg,
} from "./AltNavElements.js";

const AltNav = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "var(--offWhite)" }}>
        <Nav style={{ background: "var(--offBlack)" }}>
          <NavbarContainer>
            <NavLogo
              whileHover={{
                scale: 1.1,
              }}
            >
              <Link href="/" passHref>
                <LogoImg src={CompanyLogo.src} alt="Company Logo" />
              </Link>
            </NavLogo>
            <NavMenu>
              <SocialIcons style={{ marginRight: "10px" }}>
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
                <SocialIconLink
                  href="tel:6019271778"
                  target="_blank"
                  aria-label="Call Now"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <FaMobileAlt />
                </SocialIconLink>
              </SocialIcons>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      ;
    </>
  );
};

export default AltNav;
