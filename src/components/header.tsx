import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

interface HeaderProps {
  siteTitle: string
}

const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 5rem;
  top: 0;
  position: fixed;
  margin: 0;
  border-bottom: 1px solid #8a919959;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(4px);
  -o-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(10px);

  backdrop-filter: blur(4px);
`

const Header = ({ siteTitle }: HeaderProps) => (
  <header>
    <HeaderContainer>
      <Link to="/"><h2 style={{ margin: 0, padding: "0 10px" }}> {siteTitle} </h2></Link>
      <Link to="/blog">blog</Link>
      <Link to="/">portfolio</Link>
    </HeaderContainer>
  </header>
)

export default Header
