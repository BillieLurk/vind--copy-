import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import anim from "../../assets/animations/A2_Vindmark_scale_up_F7F7F7.json";
import { useInView } from "react-intersection-observer";

//styled lottie player
const Logo = styled(Player)`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: block;
  & > svg {
    transform: unset !important;
  }
`;

const AnimLogo = ({ setLogoInView }) => {
  const [lottie, setInstance] = useState({ lottie: null });
  const openSegment = [0, 103];
  const closeSegment = [104, 207];

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (lottie.lottie) {
      if (first) {
        lottie.lottie.playSegments([1, 0], true);
      } else {
        setLogoInView(inView);
        if (!inView) {
          lottie.lottie.setSpeed(3);
          lottie.lottie.playSegments(closeSegment, false);
        } else {
          lottie.lottie.setSpeed(3);
          lottie.lottie.playSegments(openSegment, false);
        }
      }
    }
    setFirst(false);
  }, [lottie, inView]);
  return (
    <div ref={ref}>
      <Logo
        lottieRef={(instance) => setInstance({ lottie: instance })}
        keepLastFrame
        src={anim}
        speed={3}
      ></Logo>
    </div>
  );
};

export default AnimLogo;
