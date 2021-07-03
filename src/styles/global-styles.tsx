import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    /* Default text & BG color from Ayu theme */
    background-color: #fafafa; 
    color: #575f66;
    font-size: 1.1.rem;
  }
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  pre {
    padding: 8px 14px;
    font-size: 1.2rem;
  }
`
