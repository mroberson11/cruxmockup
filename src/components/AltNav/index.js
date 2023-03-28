import React from "react";
import Link from "next/link";
import { IconContext } from "react-icons/lib";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
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
      <IconContext.Provider value={{ color: "var(--trueWhite)" }}>
        <Nav style={{ background: "var(--trueBlack)" }}>
          <NavbarContainer>
            <NavLogo
              whileHover={{
                scale: 1.1,
              }}
            >
              <Link href="/" passHref>
                <LogoImg
                  src={"../../images/CompanyLogos/blue-w-tagline.png"}
                  alt="Company Logo"
                />
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
                  href="https://www.youtube.com"
                  target="_blank"
                  aria-label="Youtube"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <FaYoutube />
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
