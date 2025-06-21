import React from "react";
import { useEffect, useState } from "react";
import {
  Container,
  Heading,
  StringLine,
  Step,
  StepLink,
  Label,
  String,
} from "./HowWeCanHelpElements";


const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const steps = [
  "You reach out",
  "We meet to discuss goals",
  "You receive a proposal",
  "We start building",
  "You launch with confidence",
];

const CruxHelp = () => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <Heading>What to Expect</Heading>
      <StringLine>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {index === 0 && !isMobile ? (
              <Step as="a" href="https://outlook.office365.com/owa/calendar/CruxBookings@cruxsoftwaresolutions.com/bookings/" target="_blank" rel="noopener noreferrer">
                <Label>{step}</Label>
                {index + 1}
              </Step>
            ) : (
              <Step>
                <Label>{step}</Label>
                {index + 1}
              </Step>
            )}
            {index < steps.length - 1 && <String />}
          </React.Fragment>
        ))}
      </StringLine>
    </Container>
  );
};


export default CruxHelp;
