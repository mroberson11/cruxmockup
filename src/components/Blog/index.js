import { Posts } from "./Posts";
import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";
import AltNav from "../AltNav";
import {
  Container,
  BlogWrapper,
  BlogH1,
  BlogContent,
  BlogSection,
  BlogSectionHeader,
  BlogSectionText,
  ImgWrap,
  BlogVideo,
  Break,
} from "./BlogElements";

const Blog = () => {
  //   const animation = useAnimation();
  //   const { ref, initial } = useMyAnimation({ animation });
  return (
    <>
      <Container>
        <AltNav />
        <BlogWrapper>
          <BlogH1>Blog</BlogH1>
          <Break />
          <BlogSection>
            <BlogContent>
              <BlogSectionHeader>Title</BlogSectionHeader>
              <BlogSectionText>Hello World </BlogSectionText>
            </BlogContent>
          </BlogSection>
        </BlogWrapper>
      </Container>
    </>
  );
};

export default Blog;
