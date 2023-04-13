import React, { Component } from "react";
import styled from "styled-components";
import grid from "../../settings/grid";
import { Number, Title, Body } from "./sharedComponents";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
`;

const Section = styled(grid)`
  width: 100%;
  height: 100%;
  padding: 0;
`;

const MobileBody = styled(Body)`
  margin-top: 0;
`;

const Content = styled(grid)`
  grid-column: 1 / -1;
  height: fit-content;
  grid-template-columns: repeat(1, 1fr);
`;

const PartImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default function MobileExplosion({ content }) {
  return (
    <Container>
      <Section>
        <Content>
          <Number>01.</Number>
          <Title>{content[0].title}</Title>
          <PartImage src={"/explosion/190.png"} />
          <MobileBody>{content[0].text}</MobileBody>
        </Content>
        <Content>
          <Number>02.</Number>
          <Title>{content[1].title}</Title>
          <PartImage src={"/explosion/290.png"} />
          <MobileBody>{content[1].text}</MobileBody>
        </Content>
        <Content>
          <Number>03.</Number>
          <Title>{content[2].title}</Title>
          <PartImage src={"/explosion/580.png"} />
          <MobileBody>{content[2].text}</MobileBody>
        </Content>
        <Content>
          <Number>04.</Number>
          <Title>{content[3].title}</Title>
          <PartImage src={"/explosion/800.png"} />
          <MobileBody>{content[3].text}</MobileBody>
        </Content>
      </Section>
    </Container>
  );
}
