import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import {
  BreadcrumbContainer,
  BreadcrumbList,
  BreadcrumbItem,
  StyledLink,
  UnstyledLink,
} from "./BreadcrumbElements";

const Breadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) => {
  const router = useRouter();
  const { asPath: paths } = router;
  const pathNames = paths.split("/").filter(Boolean);

  return (
    <BreadcrumbContainer className={containerClasses}>
      <BreadcrumbList>
        <BreadcrumbItem className={listClasses}>
          <StyledLink href={"/"}>{homeElement}</StyledLink>
        </BreadcrumbItem>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          const itemLink = capitalizeLinks
            ? `${link.charAt(0).toUpperCase()}${link.slice(1)}`
            : link;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem className={itemClasses}>
                {index === pathNames.length - 1 ? (
                  <UnstyledLink href={href}>{itemLink}</UnstyledLink>
                ) : (
                  <StyledLink href={href}>{itemLink}</StyledLink>
                )}
              </BreadcrumbItem>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};

Breadcrumb.propTypes = {
  homeElement: PropTypes.node.isRequired,
  separator: PropTypes.node.isRequired,
  containerClasses: PropTypes.string,
  listClasses: PropTypes.string,
  activeClasses: PropTypes.string,
  capitalizeLinks: PropTypes.bool,
};

export default Breadcrumb;
