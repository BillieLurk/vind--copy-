import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

import { urlFor } from "../../lib/sanity";

import ReadMore from "../callToActions/CallToAction";
import ImageSlide from "../imageSlide/ImageSlide";
import { PortableText } from "../../lib/sanity";

import fonts from "../../settings/fonts";
import colors from "../../settings/colors";
import bp from "../../settings/breakpoints";

const Body = styled.h1`
  align-self: start;
  color: ${colors.white};
  ${fonts.preamble};
  margin-top: 0px;
  margin-bottom: 24px;
  white-space: pre-wrap;
`;

const Content = styled.div`
  grid-column: ${(props) => (props.left === 1 ? "1/span 4" : "7/span 4")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${bp.mobileBreak} {
    grid-column: 1/-1;
  }
`;

const Title = styled.h1`
  ${fonts.preamble};
  color: ${colors.halfWhite};
  margin: 0px;
`;

const rightVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
  hidden: { opacity: 0, x: 100 },
};

const leftVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
  hidden: { opacity: 0, x: -100 },
};

export default function TextAndImage(props) {
  const { block } = props;
  const { background, body, title, callToActionField, alignText } = block;

  const ref = useRef(null);
  const isInView = useInView(ref);
  
  return (
    <ImageSlide src={urlFor(background).height(840).width(1680)} height={840}>
      <Content
        left={alignText == "left"? 1: 0}
        as={motion.div}
        initial="hidden"
        variants={alignText == "left" ? leftVariants : rightVariants}
        animate={isInView && "visible"}
      >
        <Title ref={ref}>{title}</Title>
        <PortableText value={block?.portableText} component={Body}/>
        <Body>{body}</Body>

        {callToActionField?.to?.length > 0 && (
          <ReadMore block={callToActionField} />
        )}
      </Content>
    </ImageSlide>
  );
}
