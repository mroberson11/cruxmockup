import React, { useState } from "react";
import Video from "../../videos/BlueSpace.mp4";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "../ButtonElements";
import { useMediaQuery } from "react-responsive";
import {
  VideoContainer,
  VideoBg,
  VideoContent,
  VideoH1,
  VideoP,
  VideoBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./VideoElements";

const VideoSection = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <VideoContainer id="home">
      <VideoBg
        autoPlay
        loop
        muted
        playsinline
        src={require("../../videos/DfyEcommerce.mp4")}
        type="video/mp4"
      />
    </VideoContainer>
  );
};

export default VideoSection;
