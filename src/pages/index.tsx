import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>[Hello, World!]</h1>
    <p>
      Welcome to my small slice of the internet! I know it isn't much, but I
      hope that you find something of value here! I like to share my small
      tidbits of knowledge here and there!
    </p>
  </Layout>
)

export default IndexPage
