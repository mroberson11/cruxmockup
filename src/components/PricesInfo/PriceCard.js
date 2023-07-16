import React from "react";
import Link from "next/link";
import {
  PriceCardContainer,
  PlanType,
  Price,
  Divider,
  OriginalCurrency,
  Slash,
  Currency,
  SellingPoint,
  LearnMoreButton,
} from "./PriceCardElements";

const PriceCard = ({ headline, price, sellingPoints }) => {
  return (
    <PriceCardContainer
      className="price-card-container"
      whileHover={{
        scale: 1.01,
      }}
    >
      <PlanType>{headline}</PlanType>
      <Price>
        <Currency>{price}</Currency>
      </Price>
      {sellingPoints?.map(function (point, index) {
        return (
          <>
            <Divider />
            <div
              style={{ fontSize: "20px" }}
              className="selling-point"
              key={index}
            >
              {point}
            </div>
          </>
        );
      })}
      <Divider />
      <Link href="/contact-form" passHref>
        <LearnMoreButton>LEARN MORE</LearnMoreButton>
      </Link>
    </PriceCardContainer>
  );
};

export default PriceCard;
