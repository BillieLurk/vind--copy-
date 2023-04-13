import React from "react";
import styled from "styled-components";
import Image from "next/image";

import grid from "../../settings/grid";
import fonts from "../../settings/fonts";
import bp from "../../settings/breakpoints";

import almi from "../../assets/images/owners/almi.png";
import energy from "../../assets/images/owners/energy.png";
import försäkring from "../../assets/images/owners/försäkring.png";

const Container = styled(grid)`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 2;

  margin-bottom: 0px;
  margin-top: 0px;

  padding-top: 48px;
  padding-bottom: 48px;

  ${bp.mobileBreak} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
  }
`;

const Logos = styled(Image)`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  grid-column: 1;
  ${fonts.h2};
  margin-top: 0;
  margin-bottom: 0;
  ${bp.mobileBreak} {
    margin-bottom: 48px;
  }
`;

const LogoContainer = styled.div`
  grid-row: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  ${bp.mobileBreak} {
    grid-column: 1;
    grid-row: auto;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

const Partly = styled.h1`
  ${fonts.h2};
  white-space: nowrap;
  position: absolute;
  top: -58px;
  margin: 0;
  width: fit-content;
  ${bp.mobileBreak} {
    position: static;
    margin-top: 32px;
    margin-bottom: 48px;
  }
`;

export default function Owners() {
  return (
    <Container>
      <Title>Owners</Title>
      <LogoContainer>
        <Logos src={almi} alt="almi" />
      </LogoContainer>
      <LogoContainer>
        <Logos src={försäkring} alt="försäkring" />
      </LogoContainer>
      <LogoContainer>
        <Partly>Partly funded by</Partly>
        <Logos src={energy} alt="energy" />
      </LogoContainer>
    </Container>
  );
}
