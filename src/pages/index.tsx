import React, { useEffect, useRef, useState, useCallback } from "react";
import { PageProps } from "gatsby";
import Granim from "granim";
import Navbar from "../components/navbar";
import {
  GlobalStyle,
  Section,
  Main,
  Content,
  Footer,
  Header,
  Intro,
} from "./index.styled";

type StatesProps =
  | "default-theme"
  | "violet-theme"
  | "sunnyday-theme"
  | "aqua-theme"
  | "beach-theme"
  | "deep-theme";

export default function IndexRoute(props: PageProps) {
  const [granimInstance, setGranimInstance] = useState<any>(null);
  const [currentState, setCurrentState] = useState<StatesProps>(
    "default-theme"
  );
  const [previousState, setPreviousState] = useState<StatesProps>(
    "default-theme"
  );
  const togglerRef = useRef(null);
  const canvasRef = useRef(null);
  const states = {
    "default-theme": {
      gradients: [["#B3FFAB", "#12FFF7"]],
    },
    "violet-theme": {
      gradients: [["#4776e6", "#8e54e9"]],
    },
    "sunnyday-theme": {
      gradients: [["#FF4E50", "#F9D423"]],
    },
    "aqua-theme": {
      gradients: [["#36d1dc", "#5b86e5"]],
    },
    "beach-theme": {
      gradients: [["#43c6ac", "#f8ffae"]],
    },
    "deep-theme": {
      gradients: [["#2c3e50", "#4ca1af"]],
    },
  };

  useEffect(() => {
    setGranimInstance(
      new Granim({
        element: "#canvas-interactive",
        name: "interactive-gradient",
        elToSetClassOn: ".canvas-interactive-wrapper",
        direction: "diagonal",
        isPausedWhenNotInView: true,
        stateTransitionSpeed: 800,
        defaultStateName: "default-theme",
        states,
      })
    );
  }, []);

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      if (!togglerRef.current.classList.contains("changing-theme")) {
        togglerRef.current.classList.toggle("changing-theme");
        const States: StatesProps[] = [
          "default-theme",
          "violet-theme",
          "sunnyday-theme",
          "aqua-theme",
          "beach-theme",
          "deep-theme",
        ];
        States.splice(States.indexOf(currentState), 1);
        if (previousState !== currentState) {
          States.splice(States.indexOf(previousState), 1);
        }
        const newState: StatesProps =
          States[Math.floor(Math.random() * States.length)];
        granimInstance.changeState(newState);
        setPreviousState(currentState);
        setCurrentState(newState);
        setTimeout(() => {
          togglerRef.current.classList.toggle("changing-theme");
        }, 800);
      }
    },
    [granimInstance, currentState]
  );

  return (
    <>
      <GlobalStyle />
      <Main className="canvas-interactive-wrapper">
        <canvas ref={canvasRef} id="canvas-interactive"></canvas>
        <Navbar onClick={onClick} togglerRef={togglerRef} />
        <Section>
          <Content itemScope itemType="https://schema.org/Person">
            <Header></Header>
            <Intro>
              <small>
                Hi, my name is <span itemProp="person">Benjamin</span>,
              </small>
              I'm a <span itemProp="jobTitle">frontend developper</span>{" "}
              specialized in pixel perfect integration and I make accessibility
              a priority.
            </Intro>
          </Content>

          <Footer>
            <span></span>
            <span></span>
            <span></span>
          </Footer>
        </Section>
      </Main>
    </>
  );
}
