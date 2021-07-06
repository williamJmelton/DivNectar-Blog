// tslint:disable-next-line:no-submodule-imports
import { createGlobalStyle, DefaultTheme } from "styled-components"
import Typography from "./typography"
import { palette } from "./palette"


export interface Theme extends DefaultTheme {
  isDark?: boolean
  global: {
    bg: string
    color: string
    link: string
    linkHover: string
    inlineBgColor: string
    hr?: string
  }
  code: {
    highlightCodeLineBg: string
    highlightLineBorderLeftColor: string
  }
  palette: Palette
  actions: ActionPalette
}

enum ColorPalette {
  lightShades = "245, 242, 232",
  lightAccent = "109, 214, 243",
  mainBrand = "92, 193, 192",
  darkAccent = "172, 126, 152",
  darkShades = "36, 57, 79",

  lightYellow = "255,229,100",
  darkYellow = "#FFDE6B",
  lightGrey = "#575D61",

  success = "95, 153, 81",
  warning = "221, 136, 25",
  error = "244, 67, 54",
}

export interface Palette {
  lightShades: ColorPalette | string
  lightAccent: ColorPalette | string
  mainBrand: ColorPalette | string
  darkAccent: ColorPalette | string
  darkShades: ColorPalette | string
}

interface ActionPalette {
  primary: ColorPalette | string
  info: ColorPalette | string
  success: ColorPalette | string
  warning: ColorPalette | string
  error: ColorPalette | string
}

const baseTheme = {
  actions: {
    error: ColorPalette.error,
    info: palette.darkShades,
    primary: palette.mainBrand,
    success: ColorPalette.success,
    warning: ColorPalette.warning,
  },
  code: {
    highlightCodeLineBg: ColorPalette.lightGrey,
    highlightLineBorderLeftColor: ColorPalette.darkYellow,
  },
  palette,
}

export const darkTheme: Theme = {
  ...baseTheme,
  global: {
    bg: palette.darkShades,
    color: palette.lightShades,
    hr: ColorPalette.lightGrey,
    inlineBgColor: ColorPalette.lightGrey,
    link: palette.mainBrand,
    linkHover: palette.lightAccent,
  },
}

export const lightTheme: Theme = {
  ...baseTheme,
  global: {
    bg: palette.lightShades,
    color: palette.darkShades,
    inlineBgColor: ColorPalette.lightYellow,
    link: palette.mainBrand,
    linkHover: palette.darkAccent,
  },
}

export const GlobalStyle = createGlobalStyle<{
  theme: Theme
  didAppLoad: boolean
}>`
  html {
    /* Default text & BG color from Ayu theme */
    background-color: ${props => props.theme.global.bg};
    color: ${props => props.theme.global.color};
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

  p {
    color: inherit;
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