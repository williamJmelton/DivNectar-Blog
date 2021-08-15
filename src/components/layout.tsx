import React, { ReactNode, useContext } from "react"
import { useStaticQuery, graphql, PageRendererProps } from "gatsby"
import styled, { ThemeContext } from "styled-components"
import { GlobalStyle, Theme } from "../styles/theme"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode";
// import { rhythm, styledScale } from "../styles/typography"

import Header from "./header"
import { TextContentWrapper } from "../styles/wrappers"

interface Props extends PageRendererProps {
  title?: string
  children?: ReactNode
  theme?: Theme
  topMargin?: number
}

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  padding: 12px;
  width: 100%;
  background-color: rgba(139, 190, 226, 0.2);
  -webkit-backdrop-filter: blur(4px);
  -o-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(10px);

  backdrop-filter: blur(4px);
  border-top: 1px solid rgba(0, 0, 0, 0.4);
`

const Layout = (props: Props) => {
  const { location, title, children } = props
  const { isDark, toggleDark } = useStyledDarkMode();
  var topMarginValue = 40; // by default the top margin is 40px to keep
                           // things from going under the navbar.
  if(props.topMargin) {
    topMarginValue = props.topMargin;
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const theme = useContext(ThemeContext)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div style={{ marginTop: topMarginValue }}>
        <GlobalStyle theme={theme} isDefaultDark={false} didAppLoad={false} />
        <main>
          <TextContentWrapper>{children}</TextContentWrapper>
          <label>
            <input
              type="checkbox"
              onChange={() => toggleDark()}
              checked={!!isDark}
            />
            Dark mode
          </label>
        </main>
        <Footer>
          <footer>
            © {new Date().getFullYear()}, Built with 🥰, by
            <a href="https://www.gatsbyjs.com">William Melton</a>
          </footer>
        </Footer>
      </div>
    </>
  )
}


export default Layout
