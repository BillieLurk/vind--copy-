import React from "react";
import styled from "styled-components";

import { urlFor } from "../../../lib/sanity";

import fonts from "../../../settings/fonts";
import colors from "../../../settings/colors";
import grid from "../../../settings/grid";

import CallToAction from "../../callToActions/CallToAction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.span`
  ${colors.darkBlue}
  ${fonts.preamble}
`;

const LeadContainer = styled.div`
  overflow: hidden;
  height: 4rem;
`;

const LeadText = styled.h4`
  margin: 0;

  ${colors.darkBlue}
  ${fonts.body}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  object-position: center;
  aspect-ratio: 1.42/1;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const TextContainer = styled.div`
  height: 172px;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Story({ block }) {
  const { image, title, leadText, slug } = block;

  console.log(slug);
  return (
    <Container>
      <ImageContainer>
        <Image src={urlFor(image).crop("focalpoint")} alt={slug} />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <LeadContainer>
          <LeadText>{leadText}</LeadText>
        </LeadContainer>
        <CallToAction
          block={{
            label: "Read more",
            to: `/${slug.current}`,
            color: "dark",
          }}
        />
      </TextContainer>
    </Container>
  );
}
