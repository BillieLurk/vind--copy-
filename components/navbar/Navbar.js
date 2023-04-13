import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import grid from "../../settings/grid";
import fonts from "../../settings/fonts";
import bp from "../../settings/breakpoints";
import colors from "../../settings/colors";

import logoBright from "../../assets/images/logos/logoNav_bright.svg";
import logo from "../../assets/images/logos/logoNav.svg";
import burger from "../../assets/images/burger/burger.svg";
import burgerWhite from "../../assets/images/burger/burger_white.svg";
import styled from "styled-components";
import Drawer from "./Drawer";

const navHeight = 70;

const Nav = styled(grid)`
  background-color: ${(props) =>
    props.transparant 
      ? "transparent"
      : colors.white};
  ${fonts.details};
  height: ${navHeight}px;
  width: 100%;
  transition: 0.2s ease-in-out;
  color: ${(props) =>
    props.bright && (props.transparant)
      ? colors.white
      : colors.darkBlue};
  position: fixed;
  top: 0;
  ${(props) => (props.show ? "top: 0;" : `top: -${navHeight}px;`)}
  z-index: 1000000;
  
`;

const Routes = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0px;
  padding-right: 0px;
  grid-column: 7 / span 2;
  justify-content: start;
  gap: 40px;
  ${bp.mobileBreak} {
    display: none;
  }
`;

const Burger = styled.div`
  height: fit-content;
  width: fit-content;
  align-self: center;
  grid-column: -1;
  display: none;
  justify-self: end;
  ${bp.mobileBreak} {
    display: inline;
  }
`;

const Logo = styled(Image)`
  height: 15px;
  width: fit-content;
`;

const LinkText = styled(Link)`
  ${fonts.body};
  ${bp.mobileBreak} {
    ${fonts.mobile.body};
  }
  &:hover {
    color: ${colors.electricBlue};
  }
  
  white-space: nowrap;

  //hover animated underline
  position: relative;

  
 
`;

export default function Navbar(props) {
  const { bright, transparant } = props;

  const navRoutes = [...props.navRoutes[0].navBarRoutes];
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const currentRoute = router.asPath;

  const [show, setShow] = useState(true);

  const [scrollTopInMargins, setScrollTopInMargins] = useState(false);

  useEffect(() => {
    let oldValue = 0;
    let newValue = 0;
    window.scrollTo(0, 0);

    window.addEventListener("scroll", function (e) {
      // Get the new Value
      newValue = window.pageYOffset;

      if (newValue > navHeight * 2) {
        setScrollTopInMargins(true);
      } else {
        setScrollTopInMargins(false);
      }

      //Subtract the two and conclude
      if (oldValue - newValue < 0) {
        setShow(false);
      } else if (oldValue - newValue > 0) {
        setShow(true);
      }

      // Update the old value
      oldValue = newValue;
    });
  }, []);

  return (
    <>
      <Nav
        bright={bright}
        show={show}
        scrollTopInMargins={scrollTopInMargins}
        transparant={transparant}
      >
        <Link href="/" style={{ alignSelf: "center" }}>
          <Logo
            src={
              bright && (props.transparant || !scrollTopInMargins)
                ? logo
                : logo
            }
            style={{ gridColumn: "1" }}
            alt="vindmark logo"
          />
        </Link>
        <Routes>
          {navRoutes?.map((route) => {
            return (
              <LinkText
                href={`/${route?.slug?.current}`}
                active={currentRoute === `/${route?.slug?.current}`}
                key={route.current + route.title}
                bright={bright}
                show={show}
                scrollTopInMargins={scrollTopInMargins}
                transparant={transparant}
              >
                {route?.title}
              </LinkText>
            );
          })}
        </Routes>
        <Burger onClick={() => setOpen(true)}>
          <Image
            src={
              bright && (props.transparant || !scrollTopInMargins)
                ? burgerWhite
                : burger
            }
            alt="burger menu"
          />
        </Burger>
        <Drawer open={open} setOpen={setOpen} navRoutes={navRoutes} />
      </Nav>
    </>
  );
}
