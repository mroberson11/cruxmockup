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
                src={require("../../../public/videos/Bluespace.webm")}
                alt="Introduction Video"
                type="video/mp4"
                playsinline
                controls
              />
            </VideoWrapper>
            <InfoSection>
              <InfoSectionHeader>What We Do</InfoSectionHeader>
              <InfoSectionText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                nisl quam, tristique quis scelerisque ac, gravida eu tortor.
                Mauris posuere ac eros sed tempus. Vestibulum non laoreet erat,
                at suscipit magna. Nam sed velit quis nisi tincidunt dapibus et
                sed nisi. Quisque commodo, metus ut mollis volutpat, neque nulla
                ullamcorper nulla, et tempor lacus neque sit amet elit. In eu
                pretium tortor. Proin bibendum porta metus nec malesuada.
                Vivamus commodo libero orci, faucibus aliquam nibh aliquet sit
                amet.
              </InfoSectionText>
            </InfoSection>
            <InfoSection>
              <InfoSectionHeader>Why We Do It</InfoSectionHeader>
              <InfoSectionText>
                Donec sed ligula a diam suscipit feugiat et quis felis. Vivamus
                a orci id ante pellentesque egestas. Nulla urna nunc, feugiat in
                commodo eu, tincidunt ut lacus. Proin mattis velit lorem, quis
                laoreet eros euismod sit amet. Aenean id lacinia est, sed
                laoreet velit. Sed tincidunt, ante vitae fermentum porta, urna
                purus venenatis erat, vel blandit leo tellus in eros. Integer
                sed sapien a diam pretium molestie. Nullam facilisis metus vel
                tellus commodo hendrerit in ut sem. Aenean id nunc sagittis,
                venenatis lorem vel, euismod orci. Phasellus nunc est, molestie
                nec magna eget, condimentum rhoncus tortor. Pellentesque ornare
                tristique convallis.
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
