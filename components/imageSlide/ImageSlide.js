import React from "react";
import Image from "next/image";

import grid from "../../settings/grid";
import colors from "../../settings/colors";
import fonts from "../../settings/fonts";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  overflow: hidden;
  height: ${(props) => props.height}px;
  width: 100%;
  position: relative;
`;


//issue when loading fix!!
const Background = styled.img`
  width: 100%;
  height: ${(props) => props.height}px;
  position: relative;
  object-fit: cover;

  
`;

const Overlay = styled(grid)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
`;

export default function ImageSlide(props) {
  const {src, alt, height} = props;

  return (
    <Container height={height}>
      <Background src={src} alt={alt} height={height} placeholder='blur' />
      <Overlay>{props.children}</Overlay>
    </Container>
  );
}
