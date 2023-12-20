import styled from "styled-components";
import Link from "next/link";

export const BreadcrumbContainer = styled.div`
  position: relative;
  top: 100px;
  left: 150px;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const BreadcrumbList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const BreadcrumbItem = styled.li`
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
