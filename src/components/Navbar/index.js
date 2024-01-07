import React, { useState, useEffect } from "react";
import WhiteLogo from "../../images/CompanyLogos/white-no-tagline.png";
import BlackLogo from "../../images/CompanyLogos/black-no-tagline.png";
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
      <IconContext.Provider value={{ color: "var(--offWhite)" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <LogoContainer
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Image
                  src={scrollNav ? BlackLogo : WhiteLogo}
                  alt="Company Logo"
                  priority={true}
                />
              </LogoContainer>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars
                style={{
                  color: scrollNav ? "var(--offBlack)" : "var(--offWhite)",
                }}
              />
            </MobileIcon>
            <NavMenu>
              <NavItem
                whileHover={{
                  scale: 1.1,
                }}
              >
                <NavLinks
                  scrollNav={scrollNav}
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
              <NavItem
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Link href="/pricing" passHref>
                  <NavLinks scrollNav={scrollNav}>Pricing</NavLinks>
                </Link>
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
                <Link href="/contact-info" passHref>
                  <NavLinks scrollNav={scrollNav}>Contact</NavLinks>
                </Link>
              </NavItem>
              {/* <NavItem
                whileHover={{
                  scale: 1.1,
                }}
              >
                <a
                  href="https://cruxsoftwaresolutions.tech/"
                  rel="noopener noreferrer"
                  style={{
                    color: scrollNav ? "var(--offBlack)" : "var(--offWhite)",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    padding: "0 1rem",
                    height: "100%",
                    cursor: "pointer",
                    fontFamily: "var(--defaultFont)",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--offWhite)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--offWhite)")
                  }
                >
                  Shop
                </a>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
              <Link href="tel:6019271778" passHref>
                <NavBtnLink
                  duration={500}
                  exact="true"
                  offset={-80}
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Call Now
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
