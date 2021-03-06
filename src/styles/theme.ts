// tslint:disable-next-line:no-submodule-imports
import { createGlobalStyle, DefaultTheme } from "styled-components"
// import { rythm } from "./typography"
import { palette } from "./palette"



export interface Theme extends DefaultTheme {
  isDark: boolean
  global: {
    bg: string
    color: string
    link: string
    linkHover: string
    inlineBgColor: string
    hr?: string
    bgImage: string
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
  isDark: true,
  global: {
    bg: palette.darkShades,
    color: palette.lightShades,
    hr: ColorPalette.lightGrey,
    inlineBgColor: ColorPalette.lightGrey,
    link: palette.mainBrand,
    linkHover: palette.lightAccent,
    bgImage: `url('/images/broken_noise.png')`
  },
}

export const lightTheme: Theme = {
  ...baseTheme,
  isDark: false,
  global: {
    bg: palette.lightShades,
    color: palette.darkShades,
    inlineBgColor: ColorPalette.lightYellow,
    link: palette.mainBrand,
    linkHover: palette.darkAccent,
    bgImage: `url('/images/light_toast.png')`
  },
}

export const GlobalStyle = createGlobalStyle<{
  theme: Theme
  didAppLoad: boolean
  isDefaultDark: false
}>`
  html {
    background-color: ${props => props.theme.global.bg};
    color: ${props => props.theme.global.color};
    font-size: 1.1.rem;
    background-image: ${props => props.theme.global.bgImage};
    background-repeat: repeat;
    background-size: 200px;
    height: 100%;
    /* overflow-y: hidden; */
  }
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.global.color};
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