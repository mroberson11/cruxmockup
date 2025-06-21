import React from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon1 from "../../images/InfoImages/man-next-to-laptop.svg";
import Icon2 from "../../images/InfoImages/seo.svg";
import Icon3 from "../../images/InfoImages/pair-programming.svg";
import Icon4 from "../../images/InfoImages/maintenance.svg";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesCardFront,
  ServicesCardBack,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ArrowForward,
} from "./WhatWeDoElements";
import { AnimatedButton } from "../ButtonElements";

const CruxOffers = () => {
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const [flippedIndexes, setFlippedIndexes] = useState([]);

useEffect(() => {
  if (!isMobile) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.index);
        if (entry.isIntersecting) {
          setFlippedIndexes((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        } else {
          setFlippedIndexes((prev) => prev.filter((i) => i !== index));
        }
      });
    },
    { threshold: 0.5 }
  );

  cardRefs.current.forEach((card) => {
    if (card) observer.observe(card);
  });

  return () => {
    cardRefs.current.forEach((card) => {
      if (card) observer.unobserve(card);
    });
  };
}, [isMobile]);


  const animation = useAnimation();
  const { ref, initial } = useMyAnimation({ animation });
  return (
    <>
      <ServicesContainer id="services" ref={ref}>
        <ServicesH1>What We Do</ServicesH1>
        <ServicesWrapper>
          <ServicesCard   ref={(el) => (cardRefs.current[0] = el)}
                          className="mobile-flip-card"
                          data-index={0}
                          isFlipped={isMobile && flippedIndexes.includes(0)}
                        >
            <ServicesCardFront>
              <ServicesIcon>
                <Image src={Icon2} alt="MVP Launch" priority />
              </ServicesIcon>
              <ServicesH2>MVP Launch</ServicesH2>
              <ServicesP>
                All content changes, product updates, promotions, upcoming events, and server management.
              </ServicesP>
              <Link href="/maintenance" passHref>
                <AnimatedButton
                  primary="true"
                  dark="true"
                  duration={500}
                  exact="true"
                  offset={-80}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 3 }}
                  style={{
                    background: "var(--offWhite)",
                    color: "var(--linkBlue)",
                  }}
                >
                  Learn More <ArrowForward />
                </AnimatedButton>
              </Link>
            </ServicesCardFront>
            <ServicesCardBack>
              <ServicesH2>Launch Ready</ServicesH2>
              <ServicesP>
                Get a minimal product to market quickly with ongoing support and adjustments.
              </ServicesP>
            </ServicesCardBack>
          </ServicesCard>

          <ServicesCard   ref={(el) => (cardRefs.current[1] = el)}
                          className="mobile-flip-card"
                          data-index={1}
                          isFlipped={isMobile && flippedIndexes.includes(1)}
                        >
            <ServicesCardFront>
              <ServicesIcon>
                <Image src={Icon1} alt="Business Application" priority />
              </ServicesIcon>
              <ServicesH2>Business App</ServicesH2>
              <ServicesP>
                We specialize in creating custom websites tailored to your unique needs and business goals.
              </ServicesP>
              <Link href="/contact-form" passHref>
                <AnimatedButton
                  primary="true"
                  dark="true"
                  duration={500}
                  exact="true"
                  offset={-80}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 3 }}
                  style={{
                    background: "var(--offWhite)",
                    color: "var(--linkBlue)",
                  }}
                >
                  Learn More <ArrowForward />
                </AnimatedButton>
              </Link>
            </ServicesCardFront>
            <ServicesCardBack>
              <ServicesH2>Tailored Solutions</ServicesH2>
              <ServicesP>
                From booking to analytics, we deliver scalable tools to grow your business.
              </ServicesP>
            </ServicesCardBack>
          </ServicesCard>

          <ServicesCard   ref={(el) => (cardRefs.current[2] = el)}
                          className="mobile-flip-card"
                          data-index={2}
                          isFlipped={isMobile && flippedIndexes.includes(2)}
                        >
            <ServicesCardFront>
              <ServicesIcon>
                <Image src={Icon4} alt="Enterprise Software" priority />
              </ServicesIcon>
              <ServicesH2>Enterprise System</ServicesH2>
              <ServicesP>
                For teams that need high-performance and maintenance-free hosting and backend support.
              </ServicesP>
              <Link href="/maintenance" passHref>
                <AnimatedButton
                  primary="true"
                  dark="true"
                  duration={500}
                  exact="true"
                  offset={-80}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 3 }}
                  style={{
                    background: "var(--offWhite)",
                    color: "var(--linkBlue)",
                  }}
                >
                  Learn More <ArrowForward />
                </AnimatedButton>
              </Link>
            </ServicesCardFront>
            <ServicesCardBack>
              <ServicesH2>Backend Support</ServicesH2>
              <ServicesP>
                We manage uptime, security, and scale so you don’t have to.
              </ServicesP>
            </ServicesCardBack>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default CruxOffers;
