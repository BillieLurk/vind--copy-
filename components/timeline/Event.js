import React from "react";
import styled from "styled-components";

import colors from "../../settings/colors";
import grid from "../../settings/grid";
import fonts from "../../settings/fonts";

import bp from "../../settings/breakpoints";
import { motion } from "framer-motion";

const Container = styled(grid)`
  grid-template-columns: repeat(9, 1fr);
  row-gap: 0;
  border-bottom: 1px solid ${colors.darkBlue};
  padding: 0;
  padding-bottom: 40px;
  margin-bottom: 24px;

  ${bp.mobileBreak} {
    padding-bottom: 32px;
    margin-bottom: 12px;
  }

  & > h1 {
    margin: 0;
  }
`;

const Year = styled.h1`
  grid-column: 1;
  ${fonts.h2};
  color: ${colors.electricBlue};
`;

const Content = styled.h1`
  grid-column: 4 / span 4;
  white-space: pre-wrap;
  ${bp.mobileBreak} {
    grid-column: 1/-1;
    padding-top: 12px;
    grid-row: 2;
  }
  ${fonts.body}
`;

const eventVariants = {
  show: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -100,
  },
  transition: { duration: 0.5 },
};

export default function Event(props) {
  const { year, content } = props;

  return (
    <Container as={motion.div} variants={eventVariants} >
      <Year>{year}</Year>
      <Content>{content}</Content>
    </Container>
  );
}
