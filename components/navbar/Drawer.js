import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../../assets/images/logos/Logotype.svg";
import burger from "../../assets/images/burger/burger_expanded.svg";

import grid from "../../settings/grid";
import colors from "../../settings/colors";
import fonts from "../../settings/fonts";

const DrawerContainer = styled(grid)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: ${colors.darkBlue};
  z-index: 1000000;
  padding-top: 28px;
  right: ${(props) => (props.open == true ? "0%" : "-100%")};
  transition: right 0.3s;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1;
`;

const Routes = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
`;

const LinkText = styled(Link)`
  ${fonts.h2};
  color: white;
  margin: 0;
  margin-bottom: 16px;
  text-decoration: ${(props) => props.active};
`;

const Burger = styled.div`
  grid-column: -1;
`;

export default function Drawer(props) {
  const { open, setOpen, navRoutes } = props;
  
  const router = useRouter();
  const currentRoute = router.pathname;
  
  return (
    <DrawerContainer open={open}>
      <Burger onClick={() => setOpen(false)}>
        <Image src={burger} alt="close drawer" />
      </Burger>
      <ContentContainer>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Routes>
          {navRoutes?.map((route) => {
            return (
              <LinkText
                href={`/${route.url}`}
                active={currentRoute === `/${route.url}` ? "underline" : "none"}
                key={route.url+route.title}
              >
                {route.title}
              </LinkText>
            );
          })}
        </Routes>
      </ContentContainer>
    </DrawerContainer>
  );
}
