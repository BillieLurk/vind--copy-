import React from "react";
import { groq } from "next-sanity";
import contentSections from "../components/contentSections";
import { headQuery, navSlugsQuery, footerSlugsQuery } from "../lib/globalFetch";

import { sanityClient, useDefinePreview } from "../lib/sanity";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Page from "../components/PageWrapper/Page";

const pageQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    image,
    leadText,
    title,
    builder
  }
`;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `
      *[_type == "page" && defined(slug.current)] {
        "params": {
          "slug": slug.current
        }
      }
    `
  );
      
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const page = await sanityClient.fetch(pageQuery, { slug });
  const head = await sanityClient.fetch(headQuery);
  const navRoutes = await sanityClient.fetch(navSlugsQuery);
  const footerRoutes = await sanityClient.fetch(footerSlugsQuery);
  //const story = await sanityClient.fetch(storiesQuery);
  return { props: { page, head, navRoutes, footerRoutes } };
}

export default function dynamicPage({ page, head, navRoutes, footerRoutes }) {
  const pageBuilder = page?.builder;
  
  
  if(!page) {
    return <h1>Error404</h1>
  }
  return (
    <Page data={head}>
      <Navbar bright={pageBuilder?.navBright} navRoutes={navRoutes} />

      {pageBuilder?.builder?.map((section) => {
      
        return contentSections(section);
      })}
      <Footer block={head[0]?.footer} footerRoutes={footerRoutes} />
    </Page>
  );
}
