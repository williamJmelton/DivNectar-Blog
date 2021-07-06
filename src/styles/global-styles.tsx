import { createGlobalStyle } from "styled-components"
import { Theme } from "./theme"

export const GlobalStyle = createGlobalStyle`
  html {
    /* Default text & BG color from Ayu theme */
    background-color: #FAFAFA;
    color: #575f66;
    font-size: 1.1.rem;
    /* background-image: url('/images/noiseTexture.png');
    background-repeat: repeat;
    background-size: 128px; */
  }
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: #399EE6;
    padding: 8px;
    font-size: 0.9rem;
  }

  h1 {
    color: #F2AE49
  }

  h2 {
    color: #86B300
  }

  pre {
    padding: 8px 14px;
    font-size: 1.2rem;
  }
`
