import React, { FC } from "react"
import { graphql } from "gatsby"
import BasePortableText from "@sanity/block-content-to-react"

import clientConfig from "../../client-config"
import { IndexQuery } from "../../generated/graphqlTypes"
import Layout from "../components/layout"

interface Props {
  readonly data: IndexQuery
}

const IndexPage: FC<Props> = ({ data }) => {
  const post = data && data.sanityPost
  return (
    <Layout>
      <h2>{post.title}</h2>
      <p>{post.publishedAt}</p>
      <p>by: {post.author.name}</p>
      <p>in {post.categories.map(
        (category, index) =>
          <span key={category._id}>
            {category.title}
            {index !== post.categories.length - 1  ? <span>, </span> : <span></span>}
          </span>
      )}</p>
      {post.body._rawChildren &&
        <BasePortableText
          blocks={post.body._rawChildren} {...clientConfig.sanity}
        />
      }
    </Layout>
  )
}

export const query = graphql`
  query Index {
    sanityPost {
      _id
      author {
        _id
        name
      }
      publishedAt(formatString: "dddd, MMMM Do YYYY")
      categories {
        _id
        title
      }
      title
      slug {
        current
      }
      body {
        _rawChildren(resolveReferences: {maxDepth: 10})
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
