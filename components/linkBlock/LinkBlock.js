import React from "react";
import styled from "styled-components";

import grid from "../../settings/grid";
import colors from "../../settings/colors";
import fonts from "../../settings/fonts";
import bp from "../../settings/breakpoints";

const Container = styled(grid)`
  background-color: ${colors.ElectricBlue25};
  height: 240px;
  padding-top: 24px;
`;

const Content = styled.div`
  grid-column: 7 / span 4;
  ${bp.mobileBreak} {
    grid-column: 1/-1;
  }
`;

const Text = styled.h1`
  margin: 0;
  color: ${colors.cloud1};
  ${fonts.h2}
`;

const LinkText = styled.h1`
  margin: 0;
  color: ${colors.darkBlue};
  ${fonts.h2}
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
  //hover
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export default function LinkBlock({ block }) {
  const { to, linkText, title } = block;

  return (
    <Container>
      <Content>
        <Text>{title}</Text>
        <a href={to}>
          <LinkText>{linkText}</LinkText>
        </a>
      </Content>
    </Container>
  );
}
