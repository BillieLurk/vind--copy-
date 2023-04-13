import { createClient, createImageUrlBuilder } from "next-sanity";
import { definePreview } from "next-sanity/preview";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { buildFileUrl } from "@sanity/asset-utils";
import styled from "styled-components";
import fonts from "../settings/fonts";
import bp from "../settings/breakpoints";
import colors from "../settings/colors";

export const config = {
  projectId: "3fnfij79",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const useDefinePreview = definePreview(config);

const builder = imageUrlBuilder(config);

export function urlFor(source) {
  return builder.image(source);
}

export const getUrlFromId = (ref) => {
  // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
  // We don't need the first part, unless we're using the same function for files and images
  const [_file, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${config.projectId}/${config.dataset}/${id}.${extension}`;
};
//https://cdn.sanity.io/files/3fnfij79/production/file-15ddacd4dbc909c21620d53c8d6e0ddc93247c87.txt

const P = styled.p`
  min-height: 1rem;
  ${fonts.body};
  ${bp.mobileBreak} {
    ${fonts.mobile.body};
  }
`;

const H1 = styled.h1`
  ${fonts.h1};
  ${bp.mobileBreak} {
    ${fonts.mobile.h1};
  }
`;

const H2 = styled.h2`
  ${fonts.h2};
  ${bp.mobileBreak} {
    ${fonts.mobile.h2};
  }
`;

const H3 = styled.h3`
  ${fonts.h2};
  ${bp.mobileBreak} {
    ${fonts.mobile.h2};
  }
`;

const Preamble = styled.h1`
  align-self: start;
  color: ${colors.white};
  ${fonts.preamble};
  margin-top: 0px;
  margin-bottom: 24px;
  white-space: pre-wrap;
`;

const H4 = styled.h4`
  min-height: 1rem;
  ${fonts.preamble};
  line-height: 32px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin: 0;
`;

const components = {
  block: {
    normal: ({ children }) => <P>{children}</P>,
    h1: ({ children }) => <H1>{children}</H1>,
    h2: ({ children }) => <H2>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    h4: ({ children }) => <H4>{children}</H4>,
    preamble: ({ children }) => <Preamble>{children}</Preamble>,
  },
};

//create a serializer for the portable text
const serializer = {};
//style portableTextComponent so that first element has not top margin

export const PortableText = (props) => (
  <PortableTextComponent components={components} {...props} />
);

export function toPlainText(blocks = []) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== "block" || !block.children) {
          return "";
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child) => child.text).join("");
      })
      // join the paragraphs leaving split by two linebreaks
      .join("\n")
  );
}
