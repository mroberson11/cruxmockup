import React from "react";
import Image from "next/image";
import Link from "next/link";
import Email from "../../images/ContactInfo/email.svg";
import Text from "../../images/ContactInfo/text.svg";
import OnlineRequest from "../../images/ContactInfo/online-request.svg";
import AltNav from "../AltNav";
import {
  Container,
  ContactWrapper,
  ContactCard,
  ContactIcon,
  ContactH1,
  ContactH2,
  ContactP,
  EmphasizedP,
  EmphasizedA,
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
              <Image src={Text} alt="Text Messages" priority={true} />
            </ContactIcon>
            <ContactH2>Shoot Us a Text</ContactH2>
            <ContactP>
              Send us a text message day or night at{" "}
              <Link
                href="tel: 601-345-1523"
                passHref
                style={{ textAlign: "center" }}
              >
                <EmphasizedP>601-345-1523</EmphasizedP>
              </Link>
            </ContactP>
          </ContactCard>
          <ContactCard>
            <ContactIcon>
              <Image src={Email} alt="Mailbox" priority={true} />
            </ContactIcon>
            <ContactH2>Drop an Email</ContactH2>
            <ContactP>
              If you prefer your mail electronic then reach out to{" "}
              <Link
                href="mailto:info@cruxsoftwaresolutions.com"
                passHref
                style={{ textAlign: "center" }}
              >
                <EmphasizedA>info@cruxsoftwaresolutions.com</EmphasizedA>
              </Link>
            </ContactP>
          </ContactCard>
          <ContactCard>
            <ContactIcon>
              <Image src={OnlineRequest} alt="Contact Form" priority={true} />
            </ContactIcon>
            <ContactH2>Submit a Contact Request</ContactH2>
            <ContactP>
              Fill out an online contact request form{" "}
              <EmphasizedP>
                <Link
                  href="/contact-form"
                  passHref
                  style={{ textAlign: "center" }}
                >
                  <i>here</i>
                </Link>
              </EmphasizedP>
            </ContactP>
          </ContactCard>
        </ContactWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default ContactInfo;
