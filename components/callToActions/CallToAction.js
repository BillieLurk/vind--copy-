import React from "react";
import fonts from "../../settings/fonts";
import colors from "../../settings/colors";
import styled from "styled-components";
import Link from "next/link";

const IconContainer = styled.div`
  background-color: ${(props) => props.color};
  
  position: relative;
  
  border-radius: 1000px;
  display: flex;
  justify-content: end;
  align-items: center;
  height: fit-content;
  width: 1.5rem;
  transition: 0.1s ease-in-out;
  
`



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
      
      width: 50px;
      opacity: 0.8;
      
     
    }
    
    opacity: 0.8;
    color: ${(props) =>
      props.color === colors.white ? colors.cloud30 : colors.cloud90};
  }
`;



export default function CallToAction({ block }) {
  const { color, label, to } = block;
  const componentColor = color === "white" ? colors.white : colors.darkBlue;
  return (
    <>
      <Link href={to || "/"}>
        <ReadMore color={componentColor}>
          {color === "white" ? (
            <IconContainer color={componentColor} >
              <span className="icon-Arrow-Black"></span>
            </IconContainer>
          ) : (
            <IconContainer color={componentColor} >
              <span className="icon-Arrow"></span>
            </IconContainer>
          )}
          <h1>{label}</h1>
        </ReadMore>
      </Link>
    </>
  );
}
