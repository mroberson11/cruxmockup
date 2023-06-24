import React from "react";
import AboutPicture from "../../images/InfoImages/dev-productivity.svg";
import AltNav from "../AltNav";
import FAQs from "../FAQs";
import Footer from "../Footer";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";
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
  ImgWrap,
} from "./AboutElements";

const About = () => {
  const animation = useAnimation();
  const { ref, initial } = useMyAnimation({ animation });

  return (
    <>
      <Container>
        <AltNav />
        <AboutH1>About Us</AboutH1>
        <AboutWrapper>
          <AboutContent>
            <InfoSection>
              <ImgWrap
                initial={initial}
                transition={{ delay: 0.1, duration: 0.6 }}
                animate={animation}
              >
                <Image
                  src={AboutPicture}
                  alt="Developer at Computer"
                  priority={true}
                />
              </ImgWrap>
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
                Crux Software Solutions is a premium web development agency
                specializing in the creation of E-Commerce websites for small to
                medium sized businesses. We are a Mississippi based company
                consisting of a dynamic group of engineers with more than seven
                years of software development experience.
                <br />
                <br />
                Whether it&apos;s purchasing your website&apos;s domain name,
                developing your E-Commerce site, configuring your products,
                handling security updates, making content changes, setting up
                additional payment processes, running promotions, or anything in
                between, we do it all for you.
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
                marketing tool or its greatest handicap.
                <br />
                <br />
                Technology is complex. So, we want to make it as simple as
                possible for any business to take advantage of the massive
                potential that implementing an online store can have on their
                revenue, customer satisfaction, brand perception, and company
                growth.
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
