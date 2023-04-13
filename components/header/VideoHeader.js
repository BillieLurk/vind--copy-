import React from "react";
import styled from "styled-components";
import AnimLogo from "../animLogo/AnimLogo";
import grid from "../../settings/grid";
import fonts from "../../settings/fonts";
import colors from "../../settings/colors";
import bp from "../../settings/breakpoints";
import { Parallax, useParallax } from "react-scroll-parallax";

//make a div that centers all children verticaly
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  grid-column: 1/3;
  width: 200px;
  ${bp.mobileBreak} {
    grid-row: 1;
    width: 180px;
    height: fit-content;
    justify-self: center;
  }
`;

//make a styled component for a container that holds a background video and an overlay
const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -10000;
`;

//make a styled component for the overlay div
const Overlay = styled(grid)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  ${bp.mobileBreak} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    top: 40%;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
`;

const TaglineContainer = styled.div`
  height: 100%;
  grid-column: 7 / -1;
  width: 100%;

  ${bp.mobileBreak} {
    grid-column: 1 / -1;
    grid-row: 1;
    justify-self: flex-end;
    height: fit-content;
  }
`;

const TagLine = styled.h1`
  position: relative;
  top: 40.5%;
  white-space: pre-wrap;
  
  ${fonts.display1}
  line-height: 80px;
  ${bp.mobileBreak} {
    ${fonts.mobile.display1};
    font-size: 60px;
    line-height: 60px;
    position: static;
  }

  color: ${colors.gray_breeze};
  margin: 0;
`;

const Logo = styled(AnimLogo)``;

export default function VideoHeader(props) {
  const { setLogoInView, landing } = props;

  return (
    <>
      <VideoContainer>
        <Overlay>
          <LogoContainer>
            <Logo setLogoInView={setLogoInView} />
          </LogoContainer>
          <TaglineContainer>
            <TagLine>{props?.landing[0].tagline}</TagLine>
          </TaglineContainer>
        </Overlay>
        <Video muted autoPlay loop playsinline>
          <source src={"/videos/hero.mp4"} type="video/mp4" />
        </Video>
      </VideoContainer>
    </>
  );
}
