import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/HeroSection";
import Sidebar from "../src/components/Sidebar";
import InfoSection from "../src/components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../src/components/InfoSection/Data";
import Benefits from "../src/components/Benefits";
import Services from "../src/components/Services";
import Footer from "../src/components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Benefits />
      <Services />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}
