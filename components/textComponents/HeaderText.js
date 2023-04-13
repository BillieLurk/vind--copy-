import React from "react";
import styled from "styled-components";

import fonts from "../../settings/fonts";
import bp from "../../settings/breakpoints";

const BodyText = styled.h1`
  grid-column: 1 / span 9;
  ${fonts.h1};
  ${bp.mobileBreak} {
    ${fonts.mobile.h1};
  }
  margin: 0;
  white-space: pre-wrap;
`;

export default function HeaderText(props) {
  const { children } = props;

  return <BodyText>{children}</BodyText>;
}
