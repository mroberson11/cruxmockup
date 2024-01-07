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
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <Link href="/pricing" passHref>
            <SidebarLink>Pricing</SidebarLink>
          </Link>
          <Link href="/contact-info" passHref>
            <SidebarLink>Contact</SidebarLink>
          </Link>
        </SidebarMenu>
        <SideBtnWrap>
          <Link href="tel:6019271778" passHref>
            <SidebarRoute>Call Now</SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
