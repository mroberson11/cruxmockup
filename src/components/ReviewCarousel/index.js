import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
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
} from "./ReviewCarouselElements";
import { FaQuoteRight } from "react-icons/fa";
import people from "./Data";

const Reviews = () => {
  return (
    <Container>
      <Heading>Customer Feedback</Heading>
      <ContainerWrapper>
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {people.map((review, index) => (
            <SwiperSlide
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReviewArticle
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <ImgContainer>
                  <PersonImg src={review.image} alt={review.name} />
                  <QuoteIcon>
                    <FaQuoteRight />
                  </QuoteIcon>
                </ImgContainer>
                <Author>{review.name}</Author>
                <Job>{review.job}</Job>
                <Info>{review.text}</Info>
              </ReviewArticle>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerWrapper>
    </Container>
  );
};

export default Reviews;
