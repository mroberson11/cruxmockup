import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  CheckListWrapper,
  FormComments,
  FormButton,
  RecaptchaWrapper,
  Text,
} from "./ContactFormElements";
import { ButtonRouter } from "../ButtonElements";
import emailjs from "@emailjs/browser";
import SwitchItem from "../SwitchItem";
import Recaptcha from "../Recaptcha";

const ContactForm = () => {
  const [isValid, setIsValid] = useState(false);
  console.log("Valid set to False");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log("Form is valid. Sending email.");

      emailjs
        .sendForm(
          "service_lz8gq0f",
          "template_up0b275",
          form.current,
          "user_YZWlae1Uq0NzIL8lY9vPH"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    console.log("Form is not valid.");
  };

  const handleClick = () => {
    // Changing state
    console.log("Handling click");
    setIsValid(true);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Link href="/">
            <Icon>CRUX</Icon>
          </Link>
          <FormContent>
            <Form ref={form} onSubmit={sendEmail}>
              <FormH1>
                Submit your contact information to have a representative reach
                out within 24 hours.
              </FormH1>
              <FormLabel htmlFor="for">Full Name*</FormLabel>
              <FormInput type="text" name="user_name" required />
              <FormLabel htmlFor="for">Email*</FormLabel>
              <FormInput type="email" name="user_email" required />
              <FormLabel htmlFor="for">Phone*</FormLabel>
              <FormInput type="phone" name="phone" required />
              <FormLabel htmlFor="for">My Interests</FormLabel>
              <CheckListWrapper>
                <SwitchItem switchLabel="I want a fast website" />
                <SwitchItem switchLabel="I want an attractive website" />
                <SwitchItem switchLabel="I want more leads for my business" />
                <SwitchItem switchLabel="I want my website maintained for me" />
              </CheckListWrapper>
              <FormLabel htmlFor="for">Additonal Comments</FormLabel>
              <FormComments type="comments" name="comments" />
              <FormButton type="submit">Submit</FormButton>
              <RecaptchaWrapper>
                <Recaptcha />
              </RecaptchaWrapper>
              <button onClick={handleClick}>Set Valid</button>
              <ButtonRouter
                to="/contact-info"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                style={{ background: "none" }}
              >
                <Link href="/contact-info" passHref>
                  <Text>Get in touch sooner</Text>
                </Link>
              </ButtonRouter>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactForm;
