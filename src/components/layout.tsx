import React, { ReactNode, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, PageRendererProps } from "gatsby"
import styled, { ThemeContext } from "styled-components"
import { GlobalStyle, Theme } from "../styles/theme"
import { rhythm, styledScale } from "../styles/typography"

import Header from "./header"
import { TextContentWrapper } from "../styles/wrappers"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
  theme: Theme
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
  const { children, title, location } = props
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
      <div style={{ marginTop: 40 }}>
        <GlobalStyle theme={theme} didAppLoad={false} />
        <main>
          <TextContentWrapper>{children}</TextContentWrapper>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
