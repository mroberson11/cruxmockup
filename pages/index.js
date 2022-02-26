import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/HeroSection";
import Sidebar from "../src/components/Sidebar";

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
    </>
  );
}
