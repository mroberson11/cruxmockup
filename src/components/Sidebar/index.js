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
          {/* <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink> */}
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          {/* <SidebarLink to="why" onClick={toggle}>
            Why Us
          </SidebarLink> */}
          <Link href="/pricing" passHref>
            <SidebarLink>Pricing</SidebarLink>
          </Link>
          <Link href="/contact-info" passHref>
            <SidebarLink>Contact</SidebarLink>
          </Link>
          <a
            href="https://cruxsoftwaresolutions.tech/"
            onClick={toggle}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              textSecoration: "none",
              listStyle: "none",
              transition: "0.2s ease-in-out",
              textDecoration: "none",
              color: "var(--trueWhite)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--cruxBlue")}
            onMouseLeave={(e) => (e.target.style.color = "var(--trueWhite")}
          >
            Shop
          </a>
        </SidebarMenu>
        <SideBtnWrap>
          <Link href="/contact-form" passHref>
            <SidebarRoute>Claim Free Trial</SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
