import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? "var(--offWhite)" : "transparent"};
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
`;

export const NavLogo = styled.div`
  color: var(--offWhite);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--offWhite);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(motion.li)`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({ scrollNav }) =>
    scrollNav ? "var(--offBlack)" : "var(--offWhite)"};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: var(--defaultFont);

  &.active {
    border-bottom: 3px solid var(--cruxBlue);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(motion.button)`
  border-radius: 50px;
  background: var(--cruxBlue);
  white-space: nowrap;
  padding: 10px 22px;
  color: var(--offBlack);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: var(--defaultFont);

  &:hover {
    background: var(--offWhite);
  }
`;

export const LogoContainer = styled(motion.div)`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
