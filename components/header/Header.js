import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

import grid from "../../settings/grid";
import styled from "styled-components";

import ImageSlide from "../imageSlide/ImageSlide";
import colors from "../../settings/colors";
import fonts from "../../settings/fonts";

import { motion } from "framer-motion";
import { Parallax, useParallax } from "react-scroll-parallax";

const HeaderContainer = styled.div`
  z-index: -10000;
`;

const Text = styled.h1`
  align-self: end;
  grid-column: 1/-1;
  color: ${colors.white};
  ${fonts.display2};
`;

export default function Header({ block }) {
  return (
    <HeaderContainer>
      <ImageSlide src={urlFor(block?.background)} height={720}>
        <Text
          as={motion.h1}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {block?.title}
        </Text>
      </ImageSlide>
    </HeaderContainer>
  );
}
