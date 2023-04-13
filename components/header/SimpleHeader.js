import React from "react";
import Image from "next/image";

import grid from "../../settings/grid";
import styled from "styled-components";

import ImageSlide from "../imageSlide/ImageSlide";
import colors from "../../settings/colors";
import fonts from "../../settings/fonts";

import HeaderText from "../textComponents/HeaderText";
import Grid from "../../settings/grid";

const HeaderContainer = styled(Grid)`
    background-color: ${colors.cloud5};
    height: 360px;
    
`;

const Text = styled.h1`
  align-self: end;
  color: ${colors.darkBlue};
  ${fonts.display2};
  
`;

export default function Header({block}) {
  const { title } = block;

  return (
    <HeaderContainer>
      <Text>{title}</Text>
    </HeaderContainer>
  );
}
