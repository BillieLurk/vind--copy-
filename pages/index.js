import React, { Component, Suspense, useEffect, useState } from "react";
import { sanityClient } from "../lib/sanity";
import { useInView } from "react-intersection-observer";
import { usePreview } from "../lib/sanity.preview";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Page from "../components/PageWrapper/Page";
import { headQuery, storiesQuery, navSlugsQuery, footerSlugsQuery } from "../lib/globalFetch";
import VideoHeader from "../components/header/VideoHeader";

import contentSections from "../components/contentSections";


export default function Home({ preview, head, landing, navRoutes, footerRoutes }) {
  const landingData = landing[0].pageBuilder;

  const [logoInView, setLogoInView] = useState(false);
  
  return (
    <>
      <Page data={{ preview, ...head }}>
        <Navbar
          transparant={false}
          navRoutes={navRoutes}
          bright={landingData?.navBright}
        />
        <VideoHeader setLogoInView={setLogoInView} landing={landing} />

        {landingData?.builder?.map((section) => {
          return contentSections(section);
        })}
        
        <Footer block={head[0]?.footer} footerRoutes={footerRoutes} />
      </Page>
    </>
  );
}

const landingPageQuery = `
*[_type == "siteLandingPage"]{
  pageBuilder,
  nav,
  tagline,
}
`;

export const getStaticProps = async ({ preview = false }) => {
  const landing = await sanityClient.fetch(landingPageQuery);
  const navRoutes = await sanityClient.fetch(navSlugsQuery);
  const footerRoutes = await sanityClient.fetch(footerSlugsQuery);
  const head = await sanityClient.fetch(headQuery);

  if (preview) {
    return { props: { preview, head, landing, navRoutes, footerRoutes } };
  }
  //const about = await sanityClient.fetch(aboutQuery);

  //const story = await sanityClient.fetch(storiesQuery);
  return { props: { head, landing, navRoutes, footerRoutes } };
};
