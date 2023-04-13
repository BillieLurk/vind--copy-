import React from "react";
import styled from "styled-components";
import fonts from "../../settings/fonts";

import grid from "../../settings/grid";
import bp from "../../settings/breakpoints";
import { motion } from "framer-motion";

import Event from "./Event";

const Container = styled(grid)`
  padding-top: 48px;
  padding-bottom: 80px;
  background-color: #f7f7f7;
  row-gap: 0;
`;

const Title = styled.h1`
  ${fonts.h2};
  white-space: nowrap;
  margin: 0;
  ${bp.mobileBreak} {
    margin-bottom: 48px;
  }
`;

const EventContainer = styled.div`
  grid-column: 4 / -1;
  ${bp.mobileBreak} {
    grid-column: 1 / -1;
  }
`;

const containerVariants = {
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Timeline({ block }) {
  return (
    <Container>
      <Title>{block?.title}</Title>
      <EventContainer
        as={motion.div}
        variants={containerVariants}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        {block?.events.map((event, index) => {
          return (
            <Event
              year={event.date}
              content={event.eventText}
              key={event._key}
            />
          );
        })}
      </EventContainer>
    </Container>
  );
}
