import React from "react";
import AltNav from "../AltNav";
import CruxHead from "../CruxHead";
import Calendar from "../../images/ContactInfo/calendar.svg";
import Email from "../../images/ContactInfo/email.svg";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
import OnlineRequest from "../../images/ContactInfo/online-request.svg";
import Text from "../../images/ContactInfo/text.svg";
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

const ContactInfo = () => {
  return (
    <>
      <CruxHead title="Contact Information | Mississippi Web Design" />
      <Container>
        <AltNav />
        <ContactH1>Contact Information</ContactH1>
        <ContactWrapper>
          <ContactCard>
            <ContactIcon>
              <Image src={Calendar} alt="Contact Form" priority={true} />
            </ContactIcon>
            <ContactH2>Online Consultation</ContactH2>
            <ContactP>
              Schedule an Online Consultation with our{" "}
              <EmphasizedP>
                <Link
                  href="https://outlook.office365.com/owa/calendar/CruxConsultations@cruxsoftwaresolutions.com/bookings/"
                  passHref
                  style={{ textAlign: "center" }}
                >
                  <b>calendar</b>
                </Link>
              </EmphasizedP>
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
              <Image src={Text} alt="Text Messages" priority={true} />
            </ContactIcon>
            <ContactH2>Give Us a Call</ContactH2>
            <ContactP>
              Speak to a real human at{" "}
              <Link
                href="tel: 6019271778"
                passHref
                style={{ textAlign: "center" }}
              >
                <EmphasizedP>601-927-1778</EmphasizedP>
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
