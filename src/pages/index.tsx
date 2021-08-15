import { PageRendererProps } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = (props: PageRendererProps) => (
  <Layout location={props.location}>
    <Seo title="Home" />
    <h1>[Hello, World!]</h1>
    <p>
      Welcome to DivNectar, my little slice of the internet. 

      Please excuse the mess, as I'm currently in the process of migrating to a new host and re-designing the site! Got some awesome tutorials coming soon as well as some cool new features for developers!!
    </p>
  </Layout>
)

export default IndexPage
