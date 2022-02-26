import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import CompanyLogo from "../../../public/images/CompanyLogo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  LogoImg,
} from "./AltNavElements.js";
import { SocialIcons, SocialIconLink } from "../Footer/FooterElements.js";

const AltNav = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav style={{ background: "black" }}>
          <NavbarContainer>
            <NavLogo>
              <Link href="/" passHref>
                <LogoImg
                  src={"../../images/CompanyLogo.png"}
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
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/cruxsoftware/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.youtube.com"
                  target="_blank"
                  aria-label="Youtube"
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
