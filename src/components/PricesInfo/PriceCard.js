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

const PriceCard = ({ id, headline, price, alt, sellingPoints }) => {
  return (
    <PriceCardContainer
      whileHover={{
        scale: 1.01,
      }}
    >
      <PlanType>{headline}</PlanType>
      <Price>
        <Currency>{price}</Currency>
      </Price>
      {sellingPoints?.map(function (name, index) {
        return (
          <>
            <Divider />
            <div key={index}>{name}</div>
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
