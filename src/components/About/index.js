import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "../ButtonElements";
import AltNav from "../AltNav";
import {
  Container,
  AboutH1,
  AboutWrapper,
  AboutContent,
  VideoWrapper,
  InfoVideo,
  InfoSection,
  InfoSectionHeader,
  InfoSectionText,
} from "./AboutElements";
import Footer from "../Footer";
import FAQs from "../FAQs";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";

const About = () => {
  const animation = useAnimation();
  const { ref, initial } = useMyAnimation({ animation });

  return (
    <>
      <Container>
        <AltNav />
        <AboutH1>About Us </AboutH1>
        <AboutWrapper>
          <AboutContent>
            <VideoWrapper>
              <InfoVideo
                src={require("../../videos/BlueSpace.mp4")}
                alt="Introduction Video"
                type="video/mp4"
                playsinline
                controls
              />
            </VideoWrapper>
            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                What We Do
              </InfoSectionHeader>
              <InfoSectionText
                ref={ref}
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                CRUX Software Solutions is a premium web development agency
                specializing in the creation of lightning fast websites that are
                aesthetically pleasing tailored to service based businesses.
                Search Engine Optimization & Lead Generation are at the heart of
                our service offerings. For the technical savvy, we utilize the
                Next.js framework to create React (Javascript) applications
                served on our partners Central Distributed Network. In
                layman&apos;s terms, we make <i>fast</i> websites. This enhances
                user experience, customer satisfaction, and of course lead
                conversion.
              </InfoSectionText>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
              >
                Why We Do It
              </InfoSectionHeader>
              <InfoSectionText
                initial={initial}
                transition={{ delay: 0.9, duration: 0.6 }}
                animate={animation}
              >
                We have a passion for helping small businesses grow. We believe
                a company&apos;s website can be its greatest digital asset &
                marketing tool or its greatest handicap. Technology is complex.
                So, we want to make it as simple as possible for service based
                businesses to take advantage of the massive potential that
                implementing a strategic sales funnel & a quality website can
                have on their lead generation, revenue, and company growth.
              </InfoSectionText>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader>FAQs</InfoSectionHeader>
              <InfoSectionText>
                <FAQs />
              </InfoSectionText>
            </InfoSection>
          </AboutContent>
        </AboutWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default About;
