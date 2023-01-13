import React, { useState, useEffect } from "react";
import CompanyLogo from "../../images/CompanyLogos/CruxLogoDark.png";
import Image from "next/image";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoContainer,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "var(--trueWhite)" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <LogoContainer
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Image src={CompanyLogo} alt="Company Logo" priority={true} />
              </LogoContainer>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem
                whileHover={{
                  scale: 1.1,
                }}
              >
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem
                whileHover={{
                  scale: 1.1,
                }}
              >
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              {/* <NavItem
                whileHover={{
                  scale: 1.1,
                }}
              >
                <NavLinks
                  to="why"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Why Us
                </NavLinks>
              </NavItem> */}
              <NavItem
                whileHover={{
                  scale: 1.1,
                }}
              >
                <NavLinks
                  to="information"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>
              {/* <NavItem
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Link href="/pricing" passHref>
                  <NavLinks>Pricing</NavLinks>
                </Link>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
              <Link href="/contact-form" passHref>
                <NavBtnLink
                  to="/contact"
                  duration={500}
                  exact="true"
                  offset={-80}
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Get Started
                </NavBtnLink>
              </Link>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
