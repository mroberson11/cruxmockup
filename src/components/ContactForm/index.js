import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
  SubmitText,
} from "./ContactFormElements";
import { ButtonRouter } from "../ButtonElements";
import emailjs from "@emailjs/browser";
import SwitchItem from "../SwitchItem";
import Recaptcha from "../Recaptcha";
import { useForm } from "../../hooks/useForm";
import Success from "../Success";

const ContactForm = () => {
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const form = useRef();

  const { handleSubmit, handleChange, data, errors } = useForm({
    validations: {
      name: {
        pattern: {
          value: "^[a-zA-Z ]*$",
          message: "Alphabetic characters only.",
        },
      },
      email: {
        required: {
          value: true,
          message: "Valid email is required.",
        },
      },
      phone: {
        pattern: {
          value: "^[0-9]*$",
          message: "Numerical digits only.",
        },
      },
    },
    onSubmit: () => sendEmail(),
  });

  const sendEmail = () => {
    console.log("Sending email...");
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
          setSuccessfulSubmission(true);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const recaptchaCallback = (value) => {
    console.log("Recaptcha in parent Verified: ", value);
    setRecaptchaVerified(value);
  };

  return (
    <>
      <Container>
        <FormWrap>
          {successfulSubmission ? <Success /> : console.log()}
          <Link href="/" passHref>
            <Icon>CRUX</Icon>
          </Link>
          <FormContent>
            <Form ref={form} onSubmit={handleSubmit}>
              <FormH1>
                Submit your contact information to have a representative reach
                out within 24 hours.
              </FormH1>
              <FormLabel htmlFor="for">Full Name*</FormLabel>
              {errors.name && (
                <p className="error" style={{ color: "red" }}>
                  {errors.name}
                </p>
              )}
              <FormInput
                type="text"
                name="name"
                placeholder="John Doe"
                value={data.name || ""}
                onChange={handleChange("name")}
                required
              />
              <FormLabel htmlFor="for">Email*</FormLabel>
              {errors.email && (
                <p className="error" style={{ color: "red" }}>
                  {errors.email}
                </p>
              )}
              <FormInput
                type="email"
                name="email"
                placeholder="johndoe@email.com"
                value={data.email || ""}
                onChange={handleChange("email")}
                required
              />
              <FormLabel htmlFor="for">Phone*</FormLabel>
              {errors.phone && (
                <p className="error" style={{ color: "red", topMargin: "0" }}>
                  {errors.phone}
                </p>
              )}
              <FormInput
                type="phone"
                name="phone"
                placeholder="6011234567"
                value={data.phone || ""}
                onChange={handleChange("phone")}
                required
              />
              <FormLabel htmlFor="for">My Interests</FormLabel>
              <CheckListWrapper>
                <SwitchItem
                  name="option1"
                  switchLabel="I want a fast website"
                />
                <SwitchItem
                  name="option2"
                  switchLabel="I want an attractive website"
                />
                <SwitchItem
                  name="option3"
                  switchLabel="I want more leads for my business"
                />
                <SwitchItem
                  name="option4"
                  switchLabel="I want my website maintained for me"
                />
              </CheckListWrapper>
              <FormLabel htmlFor="for">Additonal Comments</FormLabel>
              <FormComments type="comments" name="comments" />
              {recaptchaVerified ? (
                <FormButton type="submit">Submit</FormButton>
              ) : (
                <SubmitText>Validate Recaptcha</SubmitText>
              )}

              <RecaptchaWrapper>
                <Recaptcha
                  recaptchaVerified={recaptchaVerified}
                  recaptchaCallback={recaptchaCallback}
                />
              </RecaptchaWrapper>
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
