import React from "react";
import Image from "next/image";

import colors from "../../settings/colors";
import grid from "../../settings/grid";
import bp from "../../settings/breakpoints";

import logo from "../../assets/images/logos/Logotype.svg";
import styled from "styled-components";
import fonts from "../../settings/fonts";
import Link from "next/link";
import Download from "../download/Download";
import { PortableText } from "../../lib/sanity";

const Container = styled(grid)`
  background-color: ${colors.darkBlue};
  height: 480px;
  width: 100%;
  padding-top: 47px;
  padding-bottom: 48px;
  ${bp.mobileBreak} {
    padding-top: 40px;
    padding-bottom: 25px;
  }
`;

const LeftContainer = styled.div`
  grid-column: 1 / span 2;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${bp.mobileBreak} {
    grid-column: 1/-1;
    position: relative;
    flex-direction: column-reverse;
  }
`;

const RightContainer = styled.div`
  grid-column: 7 / span 2;
  color: ${colors.white};
  display: flex;
  padding-left: 11px;
  margin-left: -11px;
  

  ${bp.mobileBreak} {
    align-self: center;
    position: absolute;
    flex-direction: column-reverse;
    padding-left: 0px;
    margin-left: 0px;
  }
`;
//border-left: 1px solid ${colors.electricBlue};

const RightText = styled.div`
  display: grid;
  grid-template-rows: auto;
  height: 100%;
`;

const List = styled.ul`
  position: relative;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  white-space: pre-wrap;
  ${bp.mobileBreak} {
    padding-left: 10px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  gap: 60px;
  flex-direction: column;
  justify-content: space-between;
`;

const CopyRightText = styled.h1`
  color: ${colors.cloud1};
  margin: 0;
  white-space: nowrap;
  ${fonts.body}
  ${bp.mobileBreak} {
    ${fonts.mobile.body}
  }
`;

const Logo = styled(Image)`
  width: fit-content;
  height: 26px;
`;

const LinkItem = styled.li`
  color: ${colors.white};
  text-decoration: none;
  ${fonts.body}
  ${bp.mobileBreak} {
    ${fonts.mobile.body}
  }

  &:hover {
    color: ${colors.electricBlue};
  }
`;

export default function Footer(props) {
  
  const footerRoutes = [
    ...props.footerRoutes[0]?.footer?.footerRoutes,
    
  ];

  const { block } = props;
 
  return (
    <Container>
      <LeftContainer>
        <CopyRightText>{block?.copyright}</CopyRightText>
        <Logo src={logo} alt={"Copyright logo"} />
      </LeftContainer>
      <RightContainer>
        <RightText>
          <ListContainer>
            <List>
              {footerRoutes?.map((route) => {
                return (
                  <Link href={route?.slug?.current} key={route?.title}>
                    <LinkItem>{route?.title}</LinkItem>
                  </Link>
                );
              })}
            </List>
            <List>{<PortableText value={block?.portableText} />}</List>
          </ListContainer>
        </RightText>
      </RightContainer>
    </Container>
  );
}
