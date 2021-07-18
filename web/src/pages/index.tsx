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

  const siteTitle = data.site.siteMetadata?.title

  return (
    <Layout>
      <Seo title={siteTitle} />
      <h1>{siteTitle}</h1>
    </Layout>
  )
}

export default IndexPage
