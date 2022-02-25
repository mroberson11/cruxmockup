import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
