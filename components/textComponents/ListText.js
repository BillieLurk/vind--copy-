import React from "react";
import styled from "styled-components";

import fonts from "../../settings/fonts";

const Text = styled.h1`
  ${fonts.body}
  white-space: pre-wrap;
  margin: 0;
`;



export default function ListText(props) {
  const { block } = props;

  return (
    <Text>
      {block.text}
    </Text>
  );
}
