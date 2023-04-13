import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { urlFor } from "../../lib/sanity";
import styled from "styled-components";
import grid from "../../settings/grid";

const Container = styled(grid)`
  grid-template-columns: repeat(1, 1fr);
  margin-top: 48px;
  margin-bottom: 48px;
`;

const ImageGallery = ({ block }) => {
  return (
    <Container>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          750: 1,
          900: block?.images?.length < 2 ? 1 : 2,
        }}
      >
        <Masonry gutter="24px">
          {block?.images?.map((image) => (
            <img
              key={image._key}
              src={urlFor(image)}
              alt={image.alt}
              style={{ width: "100%", objectFit: "contain" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};

export default ImageGallery;
