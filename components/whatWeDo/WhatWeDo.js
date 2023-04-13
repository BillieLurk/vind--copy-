import React from "react";
import styled from "styled-components";

import grid from "../../settings/grid";
import fonts from "../../settings/fonts";
import colors from "../../settings/colors";
import bp from "../../settings/breakpoints";

import ReadMore from "../callToActions/CallToAction";
import HeaderText from "../textComponents/HeaderText";
import TextBox from "../textComponents/TextBox";

const Container = styled(grid)`
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 80px;
  ${bp.mobileBreak} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const Text = styled.h1`
  ${fonts.body};
  ${bp.mobileBreak} {
    ${fonts.mobile.body};
  }
  margin-top: 0px;
  margin-bottom: 107px;
`;

const Header = styled.div`
  grid-column: 1 / span 9;
  ${bp.mobileBreak} {
    grid-column: 1/-1;
  }
`;

export default function WhatWeDo() {
  return (
    <Container>
      <Header>
        <HeaderText>
          Vindmark phases out unprofitable wind plants by optimising existing
          turbines with conventional technology. We use our technical know-how
          and circular thinking to make today’s wind turbines more efficient and
          prolong their lifespan by 15 years.
        </HeaderText>
      </Header>
      <TextBox>
        <Text>
          Today, more than half of the turbines around the country are at risk
          of being shut down. This is, unfortunately, not only a Swedish
          problem; it’s global. Without an actionable plan to remedy this,
          Sweden is, in a worst-case scenario, on the verge of phasing out wind
          power as an energy source.
          <br />
          <br />
          Vindmark is founded on social usefulness and responsibility. We
          believe that wind power and our circular solution have a significant
          role to play in a sustainable future.
        </Text>

        <ReadMore text="Read more about us" to={'/'}/>

      </TextBox>
    </Container>
  );
}
