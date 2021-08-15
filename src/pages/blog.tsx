import * as React from 'react'
import { graphql, Link, PageRendererProps } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components';

type BlogPostNode = {
  id: string;
  slug: string;
  frontmatter: {
    title: string;
    date: string;
  }
};

type Data = {
  data: {
    allMdx: {
      nodes: BlogPostNode[];
    }
  }
};

const BlogPostCard = styled.div`
  -webkit-backdrop-filter: blur(4px);
  -o-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(10px);

  backdrop-filter: blur(4px);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: ${props => props.theme.global.inlineBgColor};
  border-radius: 3%;
  opacity: 0.8;
  border: 1px solid rgba(0,0,0,0.1);
`

const BlogPage = ({ data }: Data, props: PageRendererProps) => {
  return (
    <Layout topMargin={100} location={props.location}>
      {
        data.allMdx.nodes.map((node: BlogPostNode) => (
          <BlogPostCard>
            <article key={node.id}>
              <Link to={'/post/' + node.slug }><h2 style={{marginTop: '0.5rem'}}>{node.frontmatter.title}</h2></Link>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          </BlogPostCard>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
