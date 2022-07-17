import React, { useState, useRef } from "react";
import CompanyLogo from "../../images/CompanyLogos/CRUXLogoDark.png";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
import Recaptcha from "../Recaptcha";
import SwitchItem from "../SwitchItem";
import Success from "../Success";
import { AnimatedButton } from "../ButtonElements";
import { useForm } from "../../hooks/useForm";
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
  LogoWrapper,
} from "./ContactFormElements";

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
        "template_5nkaa87",
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

          <FormContent>
            <Form ref={form} onSubmit={handleSubmit}>
              <LogoWrapper
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="/" passHref>
                  <Image src={CompanyLogo} alt="Company Logo" priority={true} />
                </Link>
              </LogoWrapper>
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
              <FormLabel>More Information</FormLabel>
              <CheckListWrapper>
                <SwitchItem
                  name="existing"
                  switchLabel="I have an existing website"
                />

                <SwitchItem
                  name="quote"
                  switchLabel="I'm interested in a quote for a new website"
                />
                <SwitchItem
                  name="leads"
                  switchLabel="I'm interested in a maintenance package"
                />
              </CheckListWrapper>
              <FormLabel htmlFor="for">Additional Comments</FormLabel>
              <FormComments type="comments" name="comments" />
              {recaptchaVerified ? (
                <FormButton
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                >
                  Submit
                </FormButton>
              ) : (
                <SubmitText>Validate Recaptcha</SubmitText>
              )}

              <RecaptchaWrapper>
                <Recaptcha
                  recaptchaVerified={recaptchaVerified}
                  recaptchaCallback={recaptchaCallback}
                />
              </RecaptchaWrapper>
              <AnimatedButton
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
              </AnimatedButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactForm;
