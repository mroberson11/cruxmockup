import React, { useState } from "react";
import Footer from "../src/components/Footer";
import Head from "next/head";
import HeroSection from "../src/components/HeroSection";
import Image from "next/image";
import InfoSection from "../src/components/InfoSection";
import Navbar from "../src/components/Navbar";
//import OfferPopup from "../src/components/OfferPopup";
import CruxOffers from "../src/components/WhatWeDo";
import Sidebar from "../src/components/Sidebar";
import CruxAbout from "../src/components/WhoWeAre";
import CruxHelp from "../src/components/HowWeCanHelp";
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
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Head>
        <title>Crux Software Solutions | Mississippi Web Design</title>
      </Head>
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
      {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />\
      {/*<OfferPopup />*/}
      <HeroSection />
      <CruxOffers />
      <CruxAbout />
      {/* <Testimonials /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      <CruxHelp />
      <InfoSection {...homeObjThree} />
      {/* <VideoSection /> */}
      <ScrollUp />
      <Footer />
    </>
  );
}
