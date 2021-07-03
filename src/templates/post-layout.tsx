import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const shortcodes = { Link } // Provide common components here

type Mdx = {
  data: {
    mdx: {
      id: string
      body: string & React.ReactNode
      frontmatter: {
        title: string
      }
      html: string
    }
  }
}

export default function BlogPost({ data: { mdx } }: Mdx) {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
