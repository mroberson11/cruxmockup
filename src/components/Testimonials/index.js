import React from "react";
import Image from "next/image";
import Icon1 from "../../images/InfoImages/pair-programming.svg";
import Icon2 from "../../images/InfoImages/seo.svg";
import Icon3 from "../../images/InfoImages/maintenance.svg";
import {
  TestimonialsContainer,
  TestimonialsH1,
  TestimonialsWrapper,
  TestimonialsCard,
  TestimonialsIcon,
  TestimonialsP,
  TestimonialsCustomer,
  TestimonialsCompany,
} from "./TestimonialsElements";

const Testimonials = () => {
  return (
    <>
      <TestimonialsContainer id="Testimonials">
        <TestimonialsH1>Customer Testimonials</TestimonialsH1>
        <TestimonialsWrapper>
          <TestimonialsCard>
            <TestimonialsIcon>
              <Image src={Icon1} alt="Pair Programming" priority={true} />
            </TestimonialsIcon>
            <TestimonialsP>
              &quot;We are very happy with our website! Professionally done
              throughout the entire process. They were very patient with all our
              staff & teams. They answered all our questions. It&apos;s such a
              peace of mind knowing I don&apos;t have to worry about our
              website. I highly recommend!&quot;
            </TestimonialsP>
            <TestimonialsCustomer>Chris Teasley</TestimonialsCustomer>
            <TestimonialsCompany>FBC Crystal Springs</TestimonialsCompany>
          </TestimonialsCard>
          <TestimonialsCard>
            <TestimonialsIcon>
              <Image src={Icon2} alt="Sale Generation" priority={true} />
            </TestimonialsIcon>
            <TestimonialsP>
              &quot;Great designer and website builder. Responds to questions
              very quickly and delivers a high-quality and professional
              website.&quot;
            </TestimonialsP>
            <TestimonialsCustomer>Will Eifling</TestimonialsCustomer>
            <TestimonialsCompany>Delta Dry</TestimonialsCompany>
          </TestimonialsCard>
          <TestimonialsCard>
            <TestimonialsIcon>
              <Image src={Icon3} alt="Maintenance" priority={true} />
            </TestimonialsIcon>
            <TestimonialsP>
              &quot;All content changes, product updates, promotions, upcoming
              events, server management, and the remaining responsibilites
              associated with maintaining a robust E-Commerce website wil be
              handled for you.&quot;
            </TestimonialsP>
            <TestimonialsCustomer>Matthew Roberson</TestimonialsCustomer>
            <TestimonialsCompany>Crux Software Solutions</TestimonialsCompany>
          </TestimonialsCard>
        </TestimonialsWrapper>
      </TestimonialsContainer>
    </>
  );
};

export default Testimonials;
