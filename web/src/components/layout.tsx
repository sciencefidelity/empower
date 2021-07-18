import React, { FC } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

interface Props {
  children: React.ReactNode;
}

interface Data {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Layout:FC<Props> = ({ children }) => {
  const data: Data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {!!data && <Header
        siteTitle={data.site.siteMetadata.title ||
        `eMpower`}
      />}
      <div>
        <main>{children}</main>
      </div>
      {!!data && <Footer
        siteTitle={data.site.siteMetadata.title ||
        `eMpower`}
      />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
