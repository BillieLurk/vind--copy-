import styled from "styled-components";
import colors from "../../settings/colors";
import fonts from "../../settings/fonts";

const Title = styled.h1`
  ${fonts.h1};
  color: ${colors.darkBlue};
  margin: 0px;
  margin-bottom: 12px;
`;
const Number = styled.h1`
  ${fonts.h1};
  color: ${colors.electricBlue};
  margin: 0px;
`;

const Body = styled.h3`
  align-self: start;
  color: ${colors.darkBlue};
  ${fonts.body};
  margin-top: 400px;

  white-space: pre-wrap;
`;

//export these components so they can be imported in other files
export { Title, Number, Body };
