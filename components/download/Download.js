import React from "react";
import styled from "styled-components";
import Link from "next/link";
import colors from "../../settings/colors";
import fonts from "../../settings/fonts";
import { urlFor, getUrlFromId} from "../../lib/sanity";

const IconContainer = styled.div`
  background-color: ${(props) => props.color};
  color: ${(props) =>
  
    props.color === colors.white ? colors.darkBlue : colors.white};
  position: relative;

  border-radius: 1000px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-left: 2px;
  align-items: center;
  height: fit-content;
  width: 1.5rem;
  transition: 0.1s ease-in-out;
  opacity: 1;
`;

const ReadMore = styled.div`
  display: flex;
  white-space: nowrap;
  align-self: center;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.color};
  opacity: 1;
  & > h1 {
    margin: 0;
    ${fonts.link};
  }
  &:hover {
    & > ${IconContainer} {
      opacity: 0.8;
    }

    opacity: 0.8;
    color: ${(props) =>
      props.color === colors.white ? colors.cloud30 : colors.cloud90};
  }
`;

export default function Download({ block }) {
  const { color, text, file } = block;
  const componentColor = color === "white" ? colors.white : colors.darkBlue;

  
  //`${urlFor(file)}?dl=`
  return (
    <>
      <a href={`${getUrlFromId(file?.asset?._ref)}?dl=`} download>
        <ReadMore color={componentColor}>
          <IconContainer color={componentColor}>
            <span className="icon-download"></span>
          </IconContainer>

          <h1>{text}</h1>
        </ReadMore>
      </a>
    </>
  );
}
