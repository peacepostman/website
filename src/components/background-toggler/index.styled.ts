import styled, { keyframes } from "styled-components";
import BackgroundTogglerProps from "./index.d";

const svgAnimation = keyframes`
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg)
    }
`;

const svgCircleAnimation = keyframes`
    0% {
        transform: scale(.6);
        opacity: .6
    }
    50% {
        transform: scale(1);
    }
    100% {
        stroke-dashoffset: 0;
        opacity: 1
    }
`;

const BackgroundTogglerStyled = styled.button<BackgroundTogglerProps>`
  position: absolute;
  right: 24px;
  top: 24px;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 0;
  width: 48px;
  height: 48px;
  padding: 10px;
  svg {
    max-width: 100%;
    circle {
      fill: transparent;
      stroke: #fff;
      stroke-width: 10;
      transform-origin: 50% 50%;
      transition: transform 0.15s linear, opacity 0.15s ease-in;
    }
  }

  &:active svg circle {
    transform: scale(0.8);
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  &:hover {
  }

  &.changing-theme {
    svg {
      transform: rotate(-90deg);
    }
    svg circle {
      fill: transparent;
      stroke: #fff;
      stroke-linecap: round;
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      stroke-width: 10px;
      transform-origin: 50% 50%;
      animation: ${svgCircleAnimation} 0.8s ease-in-out forwards;
    }
  }
`;

export default BackgroundTogglerStyled;
