import { createGlobalStyle } from "styled-components"
// import Theme from "typography-theme-grand-view"
import { Theme } from "./theme"

export const GlobalStyle = createGlobalStyle<{theme: Theme, didAppLoad: boolean}>`
  html {
    background-color: #FAFAFA;
    color: #575f66;
    font-size: 1.1.rem;
  }
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: background ${props =>
      props.didAppLoad ? "0.2s" : "0.0s"} ease-out;
    background-image: url('/broken_noise.png');
    background-repeat: repeat;
    background-size: 200px;
  }

  a {
    color: #399EE6;
    padding: 8px;
    font-size: 0.9rem;
  }

  h1 {
    /* color: #F2AE49 */
    color: red;
  }

  h2 {
    color: #86B300
  }

  pre {
    padding: 8px 14px;
    font-size: 1.2rem;
  }
`
