import React, { useState } from "react";
import Benefits from "../src/components/Benefits";
import Footer from "../src/components/Footer";
import Head from "next/head";
import HeroSection from "../src/components/HeroSection";
import Image from "next/image";
import LogoCarousel from "../src/components/LogoCarousel";
import InfoSection from "../src/components/InfoSection";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import Services from "../src/components/Services";
import Script from "next/script";
import ScrollUp from "../src/components/ScrollUp";
import Testimonials from "../src/components/Testimonials";
import VideoSection from "../src/components/VideoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../src/components/InfoSection/Data";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-X71DLG71ZJ');
      `}
      </Script>

      <Script
        id="google-ads"
        src="https://www.googletagmanager.com/gtag/js?id=G-MY3B0HBVF1"
      >
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-MY3B0HBVF1');`}
      </Script>

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <LogoCarousel />
      <InfoSection {...homeObjOne} />
      <Benefits />
      <Services />
      {/* <Testimonials /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      <InfoSection {...homeObjThree} />
      {/* <VideoSection /> */}
      <ScrollUp />
      <Footer />
    </>
  );
}
