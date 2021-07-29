import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { IndexQuery } from "../../generated/graphqlTypes"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: FC = () => {
  const { site } = useStaticQuery<IndexQuery>(graphql`
    query Index {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      {!!site && <Seo title={site.siteMetadata.title} />}
      {!!site && <h1>{site.siteMetadata.title}</h1>}
    </Layout>
  )
}

export default IndexPage
