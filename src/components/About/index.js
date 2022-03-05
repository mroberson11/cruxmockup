import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonRouter } from "../ButtonElements";
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

const About = () => {
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
              <InfoSectionHeader>What We Do</InfoSectionHeader>
              <InfoSectionText>
                CRUX Software Solutions is a premium web development agency
                specializing in the creation of lightning fast websites that are
                aesthetically pleasing. Search Engine Optimization & Business
                Lead Generation are at the heart of our service offerings. For
                the technical savvy, we utilize the Next.js framework to create
                React (Javascript) applications served on our partners Central
                Distributed Network. In layman&apos;s terms, we make <i>fast</i>{" "}
                websites. This enhances user experience, customer satisfaction,
                and of course lead conversion.
              </InfoSectionText>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader>Why We Do It</InfoSectionHeader>
              <InfoSectionText>
                We have a passion for helping small businesses grow. We believe
                a company&apos;s website can be its greatest digital asset &
                marketing tool or its greatest handicap. Technology is complex.
                So, we want to make it as simple as possible for service based
                businesses to take advantage of the massive potential that
                implementing a strategic sales funnel & quality website can have
                on their lead generation, revenue, and company growth.
              </InfoSectionText>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader>FAQs</InfoSectionHeader>
              <InfoSectionText>
                <ul>
                  <li>Example 1</li>
                  <li>Example 2</li>
                  <li>Exmaple 3</li>
                </ul>
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
