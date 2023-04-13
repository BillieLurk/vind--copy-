import React from "react";
import styled from "styled-components";
import grid from "../../settings/grid";
import bp from "../../settings/breakpoints";
import { toPlainText } from "../../lib/sanity";

import contentSections from "../contentSections";
import Ingress from "./Ingress";
import HeaderText from "./HeaderText";

const CenterAlignmentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled(grid)`
  padding-top: 80px;
  padding-bottom: 80px;
  white-space: pre-wrap;
  grid-template-rows: fit-content(0);
  row-gap: 46px;

  ${bp.mobileBreak} {
    padding-top: 40px;
    row-gap: 0;
    padding-bottom: 40px;
  }
`;

const Header = styled.div`
  grid-column: 1 / span 9;
  height: fit-content;
  ${bp.mobileBreak} {
    grid-column: 1/-1;
  }
  padding-bottom: 42px;
`;

export default function TextBlock(props) {
  const { block, children } = props;
  
  return (
    <CenterAlignmentContainer>
      <Container>
        {block?.headerText !== undefined && (
          <Header>
            <HeaderText>{block?.headerText}</HeaderText>
          </Header>
        )}

        {children}
        {block?.builder?.map((section) => {
          return contentSections(section);
        })}
      </Container>
    </CenterAlignmentContainer>
  );
}
