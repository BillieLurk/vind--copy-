import React, { useEffect, useState, useRef, Suspense } from "react";
import styled from "styled-components";
import Loader from "../loader/Loader";
import bp from "../../settings/breakpoints";
import fonts from "../../settings/fonts";
import colors from "../../settings/colors";
import grid from "../../settings/grid";
import { ScrollTrigger, gsap } from "gsap/dist/all";
import {Body, Number, Title} from "./sharedComponents";

import MobileExplosion from "./MobileExplosion";

gsap.registerPlugin(ScrollTrigger);

const duration = 8000;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  display: grid;

  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
`;

const InnerContainer = styled(grid)`
  grid-column: 1/-1;

  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  z-index: 1000000;
  grid-column: 1;
  grid-row: 1;
`;

const Canvas = styled.canvas`
  position: absolute;
  z-index: -10000;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  grid-row: 1;
  position: absolute;
  z-index: 100000;
  margin-top: 3rem;
  transform: translateY(50%);
  grid-column: 1 / span 4;
  height: fit-content;

  opacity: 0;

  
`;

//make a tint overlay for the inner container
const Tint = styled.div`

  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 1;
  z-index: 100000000;
`;




//style a apple like scroller
const Scroller = styled.div`
  position: absolute;
  
  bottom: 0;
  left: 0;
  height: 8px;
  
  border-radius: 100px;
  width: 0%;
  background-color: ${colors.electricBlue};
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 100000;
`;

const frameCount = 960;

const textContent = [
  {
    title: "Tower extension",
    text: "Tornet förlängs med hjälp av adapter- och nya tornsektioner. Genom tornförhöjningen utnyttjas platsens vindgradient och medelvinden ökas. Kvarvarande teknisk livslängd för torn och fundament från den befintliga anläggningen fastställs baserat på dokumenterade dimensioneringsberäkningar, materialprover samt driftsdata. Sammantaget bildar nya och återbrukade tornsektioner den bärande strukturen.",
  },
  {
    title: "Rotor span optimization",
    text: "Rotordiameter analyseras och anpassas efter anläggningens rådande driftförhållande och regler för bygglov/tillstånd. Under de parameterstudier som utförs varieras de ingående designvariablerna i valda intervall, för att sedan utvärdera resultatet såväl konstruktions- som investeringsmässigt. Optimal tradeoff mellan navhöjd och svept yta definieras.",
  },
  {
    title: "Installation of new machine house",
    text: "Ett nytt maskinhus tillverkad av erkänd leverantör ersätter det befintliga. Vindförhållanden och övrig vinddata från platsen är väl dokumenterad vilket ger en förståelse för turbinen och olika komponenters tillstånd, varav val av maskintyp görs i syfte att minimera slitage och behov av reparationer. Lasterna för den nya konstellationen (nytt maskinhus, rotor, tornförhöjning, återbruk av torn, och fundament) beräknas med hjälp av avancerade simuleringsprogram som beaktar massor och styvheter för hybrid-konfigurationen. Slutresultatet är en tillförlitlig optimal WTG design som består av återbrukade och nytillverkade komponenter.",
  },
  {
    title: "Component repair cycle",
    text: "Komponenter från det befintliga verket uppgraderas och återförs i systemet som reservdelar. Därmed kan livslängden på vindkraftverk av samma maskintyp förlängas genom att endast komponenter som tjänat ut byts ut. För att öka nyttan analyseras driftdata och varje enskild komponent uppgraderas för att motverka kända konstruktionsbrister. Processen reducerar energianvändningen under livscykeln och minskar koldioxidutsläppen ytterligare per producerad kilowattimme.",
  },
];

const currentFrame = (index) =>
  `explosion/${
    index < 1
      ? "1"
      : index > frameCount - 1
      ? frameCount
      : index.toString().padStart(0, "0")
  }.png`;

let animation = {
  frame: 0,
};

export default function Explosion() {
  const canvasRef = useRef(null);

  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);

  const scrollerRef = useRef(null);

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  let images = [];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 720);
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // check on initial load

    console.log(isMobileDevice);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = innerRef.current.clientWidth;
    canvas.height = innerRef.current.clientHeight;

    const explosion = new Image();

    //preload images and store them in an array; some issuses here
    const preloadImages = () => {
      return new Promise((resolve) => {
        let loadedImagesCount = 0;
    
        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
          img.onload = () => {
            loadedImagesCount++;
            if (loadedImagesCount === frameCount) {
              resolve();
            }
          };
          images.push(img);
        }
      });
    };
    
    const startAnimation = () => {
      const startAnimation = () => {
        const render = () => {
          explosion.src = images[animation.frame].src;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(explosion, 0, 0, canvas.width, canvas.height);
          requestAnimationFrame(render);
        };
        
        // ... other gsap timeline setup code ...
      
        render(); // Start the render loop
      };
      
    };
  
    // Load images and then start the animation
    preloadImages().then(() => {
      startAnimation();
    });

    //listen for resize and update canvas size
    const resize = () => {
      images = [];
      preloadImages();
    };

    

    window.addEventListener("resize", resize);

    const render = () => {
      explosion.src = images[animation.frame].src;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(explosion, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(render);
    };
    const tl2 = gsap.timeline({
      scrollTrigger: {
        anticipatePin: 0.5,
        trigger: innerRef.current,
        markers: false,

        start: "top top",
        end: "+=" + duration,
        scrub: 1,
      },
    });
    tl2.to(innerRef.current.children[0], {
      duration: 0.1,
      opacity: 0,
      });
    

    tl2
      .to(contentRef1.current, {
        opacity: 1,
        delay: 0.10,
        duration: 0.2,
        y: 0,
      })
      .to(contentRef1.current.children[1], {
        duration: 0.1,
        opacity: 0,
      })
      .to(contentRef1.current.children[0], {
        duration: 0.10,
        color: colors.cloud1,
      });

    tl2
      .to(contentRef2.current, {
        opacity: 1,
        y: 0,
        delay: -0.1,
        duration: 0.2,
      })
      .to(contentRef2.current.children[1], {
        duration: 0.15,
        opacity: 0,
      })
      .to(contentRef2.current.children[0], {
        duration: 0.10,
        color: colors.cloud1,
      });

    tl2
      .to(contentRef3.current, {
        opacity: 1,
        delay: 0,
        y: 0,
        duration: 0.5,
      })
      .to(contentRef3.current.children[1], {
        duration: 0.25,
        opacity: 0,
      })
      .to(contentRef3.current.children[0], {
        duration: 0.15,
        color: colors.cloud1,
      });

    tl2
      .to(contentRef4.current, {
        opacity: 1,
        y: 0,
        delay: -0.2,
        duration: 0.5,
      })
      .to(contentRef4.current.children[1], {
        duration: 0.25,
        opacity: 0,
      })
      .to(contentRef4.current.children[0], {
        duration: 0.15,
        color: colors.cloud1,
      });
      //add a delay after the animation is done
    tl2.to(contentRef4.current.children[1], {
      duration: 1,
      
    });


    let tl = gsap.timeline({
      scrollTrigger: {
        anticipatePin: 0.5,
        trigger: innerRef.current,
        markers: false,
        pin: true,
        start: "top top",
        end: "+=" + duration,
        scrub: 1,
      },

      onUpdate: () => {
        render();
        //console.log(animation);
      },
    });

    tl.to(animation, {
      frame: frameCount - 1,
      snap: "frame",
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    gsap.to(scrollerRef.current, {
      scrollTrigger: {
        anticipatePin: 0.5,
        trigger: innerRef.current,
        markers: false,

        start: "top top",
        end: "+=" + duration,
        scrub: 1,
      },
      width: "100%",
    });
  }, []);
  return (
    <>
      {isMobileDevice ? (
        <MobileExplosion content={textContent} />
      ) : (
        <Container visible ref={containerRef}>
          <InnerContainer ref={innerRef}>
            <Tint/>
            <Scroller ref={scrollerRef} />
            <Content ref={contentRef1}>
              <Number>01.</Number>
              <div>
                <Title>{textContent[0].title}</Title>
                <Body>{textContent[0].text}</Body>
              </div>
            </Content>
            <Content ref={contentRef2}>
              <Number style={{ marginTop: "3rem" }}>02.</Number>
              <div>
                <Title>{textContent[1].title}</Title>
                <Body>{textContent[1].text}</Body>
              </div>
            </Content>
            <Content ref={contentRef3}>
              <Number style={{ marginTop: "6rem" }}>03.</Number>
              <div>
                <Title>{textContent[2].title}</Title>
                <Body>{textContent[2].text}</Body>
              </div>
            </Content>
            <Content ref={contentRef4}>
              <Number style={{ marginTop: "9rem" }}>04.</Number>
              <div>
                <Title>{textContent[3].title}</Title>
                <Body>{textContent[3].text}</Body>
              </div>
            </Content>
            <Canvas ref={canvasRef} />
          </InnerContainer>
        </Container>
      )}
    </>
  );
}
