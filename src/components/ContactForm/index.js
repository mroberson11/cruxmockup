import React, { useRef } from "react";
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
  FormButton,
  Text,
} from "./ContactFormElements";
import { ButtonRouter } from "../ButtonElements";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
  };

  const showSuccess = (e) => {
    e.preventDefault();

    <div>Success!</div>;
  };
  return (
    <>
      <Container>
        <FormWrap>
          <Link href="/">
            <Icon>CRUX</Icon>
          </Link>
          <FormContent>
            <Form ref={form} onSubmit={showSuccess}>
              <FormH1>
                Submit your contact information to have a representative reach
                out within 24 hours.
              </FormH1>
              <FormLabel htmlFor="for">Full Name</FormLabel>
              <FormInput type="text" name="user_name" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" name="user_email" required />
              <FormLabel htmlFor="for">Phone</FormLabel>
              <FormInput type="phone" name="phone" />
              <FormLabel htmlFor="for">How We Can Help</FormLabel>
              <FormInput type="comments" name="comments" />

              <FormButton type="submit">Submit</FormButton>
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
