import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? "var(--trueBlack)" : "transparent"};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const NavLogo = styled(motion.div)`
  color: var(--trueWhite);
  justify-self flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -10px;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
