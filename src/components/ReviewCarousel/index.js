import React, { useState } from "react";
import {
  Container,
  ContainerWrapper,
  ReviewArticle,
  Heading,
  ImgContainer,
  PersonImg,
  QuoteIcon,
  Author,
  Job,
  Info,
  Button,
} from "./ReviewCarouselElements";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./Data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <Container>
      <Heading>Customer Feedback</Heading>
      <ContainerWrapper>
        <Button onClick={prevPerson}>
          <FaChevronLeft />
        </Button>
        <ReviewArticle>
          <ImgContainer>
            <PersonImg src={image} alt={name} />
            <QuoteIcon>
              <FaQuoteRight />
            </QuoteIcon>
          </ImgContainer>
          <Author>{name}</Author>
          <Job>{job}</Job>
          <Info>{text}</Info>
        </ReviewArticle>
        <Button onClick={nextPerson}>
          <FaChevronRight />
        </Button>
      </ContainerWrapper>
    </Container>
  );
};

export default Reviews;
