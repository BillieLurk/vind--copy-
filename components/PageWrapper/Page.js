import React from "react";
import Head from "next/head";
import { Scrollbar } from "react-scrollbars-custom";
import { ParallaxProvider } from 'react-scroll-parallax';
import styled from "styled-components";
import Link from "next/link";
//style a button that exits preview mode, and is fixed
const ExitPreviewButton = styled(Link)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100000;
  background-color: #000;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export default function Page(props) {
  const { children, data } = props;
  return (
    <ParallaxProvider>
      <Head>
        <title>{data[0].title}</title>
        <meta name="description" content={data[0].description} />
      </Head>
      {children}
      {data.preview && <ExitPreviewButton href="/api/exit-preview">Exit Preview</ExitPreviewButton>}
    </ParallaxProvider>
  );
}
