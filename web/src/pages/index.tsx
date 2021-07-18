import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

interface Data {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const IndexPage:FC = () => {
  const data: Data = useStaticQuery(graphql`
    query SiteIndexQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      {!!data && <Seo title={data.site.siteMetadata.title} />}
      {!!data && <h1>{data.site.siteMetadata.title}</h1>}
    </Layout>
  )
}

export default IndexPage
