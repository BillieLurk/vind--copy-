import React from "react";
import styled from "styled-components";

import { urlFor } from "../../lib/sanity";

import grid from "../../settings/grid";
import fonts from "../../settings/fonts";
import colors from "../../settings/colors";
import bp from "../../settings/breakpoints";

import Story from "./story/Story";

const Container = styled(grid)`
  margin-top: 48px;
  margin-bottom: 107px;
`;

const Title = styled.h1`
  ${fonts.h2};
  color: ${colors.darkBlue};
  margin: 0px;
  grid-column: 1/-1;
`;

const StoriesContainer = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${bp.mobileBreak} {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-gap: 24px;
  
`;

export default function StoryGallery({ block }) {

  const { story } = block;

  return (

    <Container>
      <Title>Stories</Title>
      <StoriesContainer>
        {story?.length > 0 && story.map((storyItem) => {
          return (<Story block={storyItem} key={storyItem._id} />)
        })}
      </StoriesContainer>
    </Container>
  );
}
