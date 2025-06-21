import React from "react";
import {
  Section,
  Container,
  Headline,
  Paragraph,
  CTA,
} from "./WhoWeAreElements";

const WhoWeAre = () => {
  return (
    <Section>
      <Container>
        <Headline>Built for the ones who build.</Headline>

        <Paragraph>
          You&apos;re running a business, not a tech company.
        </Paragraph>

        <Paragraph>
          You shouldn&apos;t have to Google &quot;how to code&quot; just to launch your idea.
        </Paragraph>

        <Paragraph>
          Or pay $100k+ for a bloated platform you&apos;ll outgrow in six months.
        </Paragraph>

        <Paragraph>
          At Crux, we build apps that work — simple as that.
        </Paragraph>

        <Paragraph>
          Need to sell a product? Book a service? Manage internal chaos?
        </Paragraph>

        <Paragraph>
          We&apos;ve got you. Fast builds. Real results. No babysitting required.
        </Paragraph>

        <Paragraph>
          Just smart design, clean code, and direct communication.
        </Paragraph>

        <Paragraph>
          We don&apos;t hide behind jargon or &quot;synergy.&quot; We ship. You scale.
        </Paragraph>

        <Paragraph>
          If that&apos;s what you&apos;re after — hit the button.
        </Paragraph>

        <CTA
          href="https://outlook.office365.com/owa/calendar/CruxSoftwareSolutions@cruxsoftwaresolutions.com/bookings/"
          target="_blank"
        >
          Book a Call
        </CTA>
      </Container>
    </Section>
  );
};

export default WhoWeAre;


