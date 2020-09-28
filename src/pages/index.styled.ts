import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff; 
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  #canvas-interactive {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

const Main = styled.main`
  min-height: 100%;
  min-height: calc(100vh);
  background: #fdc830;
  background: -webkit-linear-gradient(to bottom right, #b3ffab, #12fff7);
  background: linear-gradient(to bottom right, #b3ffab, #12fff7);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  margin-top: 120px;
  width: 900px;
  max-width: 100%;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  background-color: white;
  padding: 20px 40px;
  border-radius: 12px 12px 0;
  box-shadow: 4px 8px 14px 3px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header``;
const Intro = styled.h1`
  color: #333;
  font-size: 32px;
  line-height: 48px;
  margin: 0;
  small {
    font-size: 22px;
    display: block;
    margin-bottom: 22px;
  }
`;

const Footer = styled.div`
  position: relative;
  margin: 2px 0 40px;
  float: right;
  width: 30px;
  span {
    display: block;
    float: right;
    width: 10px;
    height: 10px;
    background-color: #fff;
    box-shadow: 4px 8px 14px 3px rgba(0, 0, 0, 0.1);
    margin: 2px;
    transition: transform 0.1s ease-in;

    &:nth-child(1),
    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transform: scale(1.25);
    }
  }
`;

export { GlobalStyle, Section, Main, Content, Footer, Header, Intro };
