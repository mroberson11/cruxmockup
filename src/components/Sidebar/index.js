import React from "react";
import Link from "next/link";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          {/* <SidebarLink to="why" onClick={toggle}>
            Why Us
          </SidebarLink> */}
          <SidebarLink to="information" onClick={toggle}>
            Contact
          </SidebarLink>
          {/* <Link href="/pricing" passHref>
            <SidebarLink>Pricing</SidebarLink>
          </Link> */}
        </SidebarMenu>
        <SideBtnWrap>
          <Link href="/contact-form" passHref>
            <SidebarRoute>Get Started</SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
