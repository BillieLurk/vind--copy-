import styled from "styled-components";
import bp from "./breakpoints";
/*
export default {
  paddingLeft: `${36 + 12}px`,
  paddingRight: `${36 + 12}px`,
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gridGap: `${12 * 2}px`,

  
};
*/

export default styled.div`
  padding-left: ${36 + 12}px;
  padding-right: ${36 + 12}px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${12 * 2}px;
  ${bp.mobileBreak} {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: ${15}px;
    padding-left: ${15}px;
    padding-right: ${15}px;
  }
`;
