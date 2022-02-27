import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonRouter } from "../ButtonElements";
import Email from "../../../public/images/ContactInfo/email.svg";
import Text from "../../../public/images/ContactInfo/text.svg";
import OnlineRequest from "../../../public/images/ContactInfo/online-request.svg";
import AltNav from "../AltNav";
import {
  Container,
  BodyContentWrap,
  DivSection,
  ContactWrapper,
  ContactCard,
  ContactIcon,
  ContactH1,
  ContactH2,
  ContactP,
  EmphasizedP,
} from "./ContactInfoElements";
import Footer from "../Footer";

const ContactInfo = () => {
  return (
    <>
      <Container>
        <AltNav />
        <ContactH1>Contact Information</ContactH1>
        <ContactWrapper>
          <ContactCard>
            <ContactIcon>
              <Image src={Text} alt="Text Messages" />
            </ContactIcon>
            <ContactH2>Shoot Us a Text</ContactH2>
            <ContactP>
              Send us a text message day or night at{" "}
              <EmphasizedP>601-345-1523</EmphasizedP>
            </ContactP>
          </ContactCard>
          <ContactCard>
            <ContactIcon>
              <Image src={Email} alt="Mailbox" />
            </ContactIcon>
            <ContactH2>Drop an Email</ContactH2>
            <ContactP>
              If you prefer your mail electronic then reach out to
              <EmphasizedP>info@cruxsoftwaresolutions.com</EmphasizedP>
            </ContactP>
          </ContactCard>
          <ContactCard>
            <ContactIcon>
              <Image src={OnlineRequest} alt="Contact Form" />
            </ContactIcon>
            <ContactH2>Submit a Contact Request</ContactH2>
            <ContactP>
              Fill out an online contact request form{" "}
              <ButtonRouter style={{ background: "none" }}>
                <EmphasizedP>
                  <Link href="/contact-form">
                    <i>here</i>
                  </Link>
                </EmphasizedP>
              </ButtonRouter>
            </ContactP>
          </ContactCard>
        </ContactWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default ContactInfo;
