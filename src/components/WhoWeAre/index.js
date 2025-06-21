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
          You're running a business, not a tech company.
        </Paragraph>

        <Paragraph>
          You shouldn't have to Google "how to code" just to launch your idea.
        </Paragraph>

        <Paragraph>
          Or pay $100k+ for a bloated platform you'll outgrow in six months.
        </Paragraph>

        <Paragraph>
          At Crux, we build apps that work—simple as that.
        </Paragraph>

        <Paragraph>
          Need to sell a product? Book a service? Manage internal chaos?
        </Paragraph>

        <Paragraph>
          We’ve got you. Fast builds. Real results. No babysitting required.
        </Paragraph>

        <Paragraph>
          Just smart design, clean code, and direct communication.
        </Paragraph>

        <Paragraph>
          We don’t hide behind jargon or “synergy.” We ship. You scale.
        </Paragraph>

        <Paragraph>
          If that’s what you’re after—hit the button.
        </Paragraph>

        <CTA href="https://outlook.office365.com/owa/calendar/CruxSoftwareSolutions@cruxsoftwaresolutions.com/bookings/" target="_blank">
          Book a Call
        </CTA>
      </Container>
    </Section>
  );
};

export default WhoWeAre;

