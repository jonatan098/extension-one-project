import { Roboto } from "next/font/google";
import { createGlobalStyle } from "styled-components";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 72.5%;
  }
  body {
    background: #f5f5f5;
    font-size: 1.6rem;
  }

  button {
    border: 0;
    box-shadow: none;
    background: none;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    min-height: 100vh;
    position: relative;
  }
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    font-family: ${roboto.style.fontFamily};
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #component {
    flex: 1;
    min-height: 88.2vh;
  }
`;

export default GlobalStyle;
