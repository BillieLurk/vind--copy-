import React from "react";
import styled from "styled-components";

import fonts from "../../settings/fonts";

const Text = styled.h1`
  ${fonts.preamble}
  line-height: 1.9rem;
  white-space: pre-wrap;
  margin: 0;
`;



export default function PreambleText(props) {
  const { block } = props;
  
  return (
    <Text>
      {block.text}
    </Text>
  );
}
