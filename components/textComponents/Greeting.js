import React from "react";
import styled from "styled-components";

import grid from "../../settings/grid";
import fonts from "../../settings/fonts";
import HeaderText from "./HeaderText";
import ReadMore from "../callToActions/CallToAction";

const HeaderGrid = styled(grid)`
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: #fff;
`;

const ContentContainer = styled.div`
  grid-column: 1 / span 9;
  display: flex;
  flex-direction: column;
`;

const AboutUs = styled.h1`
  grid-column: 1/1;
  ${fonts.body};
  margin: 0;
  white-space: nowrap;
`;

const CallToActionContainer = styled(grid)`
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 88px;
  width: 100%;
  grid-column: 1/-1;
`;

export default function Greeting(props) {
  const { block } = props;
  const { headerText } = block;
  return (
    <HeaderGrid>
      <ContentContainer>
        <HeaderText>{headerText}</HeaderText>
      </ContentContainer>
      {block?.callToAction.label !== undefined && (
        <CallToActionContainer>
          <AboutUs>{block?.callToActionPreText}</AboutUs>
          <ReadMore
            style={{ gridColumn: "2" }}
            block={{
              label: block?.callToAction?.label,
              to: block?.callToAction?.to,
              color: block?.callToAction?.color,
            }}
          />
        </CallToActionContainer>
      )}
    </HeaderGrid>
  );
}
