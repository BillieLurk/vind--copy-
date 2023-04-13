import React from "react";
import styled from "styled-components";

import grid from "../../settings/grid";
import fonts from "../../settings/fonts";
import colors from "../../settings/colors";
import bp from "../../settings/breakpoints";

const TextBoxContainer = styled.div`
  grid-column: 7 / span 4;
  
  
  
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  

  ${bp.mobileBreak} {
    padding-left: 0px;
    margin-left: 0px;
    border-left: none;
  }
  
  ${fonts.body}
  
  }
  
  ${bp.mobileBreak} {
    grid-column: 1/-1;
    padding-left: 0px;
    margin-left: 0px;
`;

export default function TextBox(props) {
  const { children } = props;
  return <TextBoxContainer>{children}</TextBoxContainer>;
}
