import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";


import grid from "../../../settings/grid";
import fonts from "../../../settings/fonts";
import bp from '../../../settings/breakpoints';
import colors from "../../../settings/colors";


import Logo from "../../../assets/images/logos/Logo.svg";
import styled from "styled-components";





const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
`;


const Overlay = styled(grid)`
  pointer-events: none;
  height: 100%;
  width: 100%;
  align-items: center;
  position: absolute;
  background-color: rgba(255,255,255,0.55);
  box-shadow: -1px -24px 17px -7px rgba(255,255,255,1) inset;
  -webkit-box-shadow: -1px -24px 17px -7px rgba(255,255,255,1) inset;
  -moz-box-shadow: -1px -24px 17px -7px rgba(255,255,255,1) inset;
  ${bp.mobileBreak} {
    
  }
`

const Text = styled.h1`
  color: ${colors.darkBlue};
  ${fonts.display1};
  grid-column: 7/span 5;
  margin: 0px;
  position: absolute;
  top: 40%;

  ${bp.mobileBreak} {
    grid-column: 1/-1;
    top: auto;
    bottom: 0%;
    ${fonts.h1};
  }
`;




const LogoComponent = styled(Image)`
  grid-column: 1/span 2;
  ${bp.mobileBreak} {
    grid-column: 1/-1;
    align-self: center;
  }

`




export default function FlowFields({block}) {
  const Sketch = dynamic(() => import("../../../p5/flowfieldsComponent"), {
    ssr: false,
  });

  const [render, setRender] = useState(false);
  const {tagline} = block;

  useEffect(() => {
    setRender(true);
  }, []);


  return (
    <HeroContainer suppressHydrationWarning={true}>
      {render && <Sketch/>}
      <Overlay>
        <LogoComponent src={Logo} alt="VindMark Logo" />
        <Text>{tagline}</Text>
      </Overlay>
    </HeroContainer>
  );
}
