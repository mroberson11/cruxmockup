import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Nike from "../../images/MajorBrands/nike.svg";
import Ford from "../../images/MajorBrands/ford.svg";
import Coke from "../../images/MajorBrands/coke.svg";
import Samsung from "../../images/MajorBrands/samsung.svg";
import HP from "../../images/MajorBrands/hp.svg";
import BurgerKing from "../../images/MajorBrands/burger-king.svg";
import Sigma from "../../images/MajorBrands/sigma.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import {
  Container,
  MainContainer,
  ImageWrapper,
  Heading,
  Subheading,
} from "./LogoCarouselElements";

const LogoCarousel = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isDesktop ? 5 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: isDesktop ? 10000 : 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipe: false,
    draggable: false,
    pauseOnHover: false,
    touchMove: false,
  };

  return (
    <MainContainer>
      <Heading>Join the Elite</Heading>
      <Subheading>
        Utilize the same E-Commerce systems as the largest players in the game.
      </Subheading>
      <Slider {...settings}>
        <Container>
          <ImageWrapper>
            <Image
              src={Nike}
              width={100}
              height={100}
              alt="Nike Logo"
              priority={true}
            />
          </ImageWrapper>
        </Container>
        <Container>
          <ImageWrapper>
            <Image
              src={Ford}
              width={100}
              height={100}
              alt="Ford Logo"
              priority={true}
            />
          </ImageWrapper>
        </Container>
        <Container>
          <ImageWrapper>
            <Image
              src={Coke}
              width={100}
              height={100}
              alt="Coke Logo"
              priority={true}
            />
          </ImageWrapper>
        </Container>
        <Container>
          <ImageWrapper>
            <Image
              src={Samsung}
              width={100}
              height={100}
              alt="Samsung Logo"
              priority={true}
            />
          </ImageWrapper>
        </Container>
        <Container>
          <ImageWrapper>
            <Image
              src={HP}
              width={100}
              height={100}
              alt="HP Logo"
              priority={true}
            />
          </ImageWrapper>
        </Container>
        <Container>
          <ImageWrapper>
            <Image
              src={BurgerKing}
              width={100}
              height={100}
              alt="Burger King Logo"
              priority={true}
            />
          </ImageWrapper>
        </Container>
        <Container>
          <ImageWrapper>
            <Image
              src={Sigma}
              width={100}
              height={100}
              alt="Sigma Logo"
              priority={true}
            />
          </ImageWrapper>
        </Container>
      </Slider>
    </MainContainer>
  );
};

export default LogoCarousel;
