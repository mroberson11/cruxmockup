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

const PriceCard = () => {
  return (
    <PriceCardContainer>
      <PlanType>Ultimate Website Package</PlanType>
      <Price>
        <OriginalCurrency>$7,000</OriginalCurrency>
        <Currency>$3,499</Currency>
      </Price>
      <Divider />
      <SellingPoint>
        Website with Average Load-time Under 2 Seconds
      </SellingPoint>
      <Divider />
      <SellingPoint>Modern Design Customized for Your Business</SellingPoint>
      <Divider />
      <SellingPoint>Three Months of Facebook Advertising</SellingPoint>
      <Divider />
      <SellingPoint>Free Images/Videos/Audio</SellingPoint>
      <Divider />
      <SellingPoint>Free Copywriting</SellingPoint>
      <Divider />
      <SellingPoint>SEO Optimization</SellingPoint>
      <Divider />
      <SellingPoint>Google Business Setup/Optimization</SellingPoint>
      <Divider />
      <SellingPoint>Contact Form Setup/Configuration</SellingPoint>
      <Divider />
      <SellingPoint>Online Appointment Scheduler</SellingPoint>
      <Divider />

      <SellingPoint>Web Hosting</SellingPoint>
      <Divider />
      <SellingPoint>SSL Certificates</SellingPoint>
      <Divider />
      <SellingPoint>Security Updates/Content Changes</SellingPoint>
      <Divider />
      <SellingPoint>
        Maintenance All Done for You with No Monthly Contracts
      </SellingPoint>
      <Divider />
      <SellingPoint>*Money Back Service Guarantee*</SellingPoint>
      <Divider />
      <Link href="/contact-form" passHref>
        <LearnMoreButton>LEARN MORE</LearnMoreButton>
      </Link>
    </PriceCardContainer>
  );
};

export default PriceCard;
