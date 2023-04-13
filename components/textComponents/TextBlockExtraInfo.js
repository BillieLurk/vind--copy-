import React from "react";
import styled from "styled-components";
import grid from "../../settings/grid";
import bp from "../../settings/breakpoints";
import { toPlainText } from "../../lib/sanity";
import fonts from "../../settings/fonts";

import contentSections from "../contentSections";



const CenterAlignmentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled(grid)`
  padding-top: 48px;
  padding-bottom: 48px;
  white-space: pre-wrap;
  grid-template-rows: fit-content(0);
  

  ${bp.mobileBreak} {
    padding-top: 40px;
    row-gap: 0;
    padding-bottom: 40px;
  }
`;

const Header = styled(grid)`
  grid-column: 1 / -1;
  height: fit-content;
  padding-left: 0;
  padding-right: 0;
  ${bp.mobileBreak} {
    grid-column: 1/-1;
  }
  padding-bottom: 42px;
`;

const HeaderText = styled.h1`
  grid-column: 7 / span 5;
  grid-row: 1;
  ${fonts.h2};
  ${bp.mobileBreak} {
    ${fonts.mobile.h1};
  }
  margin: 0;
  white-space: pre-wrap;
`;

const InfoLeft = styled.h4`
  margin: 0;
  white-space: pre-wrap;
  grid-column: 1/span 2;
`

const InfoRight = styled.h4`
white-space: pre-wrap;
  margin: 0;
  grid-column: 3/span 2;
`

export default function TextBlockExtraInfo(props) {
  const { block, children } = props;
  console.log(block)
  return (
    <CenterAlignmentContainer>
      <Container>
        {(block?.headerText !== undefined || block?.information?.length > 0) && (
          <Header>
            <InfoLeft>{block?.information?.leftColumn}</InfoLeft>
            <InfoRight>{block?.information?.rightColumn}</InfoRight>
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
