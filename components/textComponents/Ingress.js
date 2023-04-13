import React from "react";
import styled from "styled-components";
import contentSections from "../contentSections";

import fonts from "../../settings/fonts";
import grid from "../../settings/grid";
import bp from "../../settings/breakpoints";
import CallToAction from "../callToActions/CallToAction";
import { PortableText } from "../../lib/sanity";

import TextBox from "./TextBox";

const Container = styled(grid)`
  padding: 0;
  grid-column: 1/-1;
  background-color: ${(props) => props.color};
  white-space: pre-wrap;
  height: fit-content;
`;

const Title = styled.h1`
  grid-column: 1 / span 3;
  ${fonts.h1}
  margin: 0;
`;

//style a text area
const Text = styled.div`
  grid-column: 7 / span 4;
  ${bp.mobileBreak} {
    grid-column: 1/-1;
  }
  ${fonts.body}

  white-space: pre-wrap;
`;

const BuilderContainer = styled.div`
  margin-top: 24px;
  grid-column: 7 / span 4;
  ${bp.mobileBreak} {
    grid-column: 1/-1;
  }
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default function Ingress(props) {
  const { block, color, children, title } = props;

  return (
    <Container color={color}>
      {block?.title ? <Title>{block?.title}</Title> : <Title>{title}</Title>}
      <Text>
        {children ? children : <PortableText value={block?.portableText} />}
      </Text>
      <BuilderContainer>
        {block?.builder?.map((section) => {
          return contentSections(section);
        })}
      </BuilderContainer>
    </Container>
  );
}
