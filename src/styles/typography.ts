import { CSSObject } from "styled-components"
import Typography from "typography"
// import altonTheme from "typography-theme-alton"
import grandViewTheme from "typography-theme-grand-view"

grandViewTheme.overrideThemeStyles = () => {
  return {
    // gatsby-remark-autolink-headers - don't underline when hidden
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    }
  }
}

const typography = new Typography(grandViewTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

type StyledScale = (values: number) => CSSObject
export const styledScale = scale as StyledScale