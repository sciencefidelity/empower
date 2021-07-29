import React, { FC } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { SiteTitleQuery } from "../../generated/graphqlTypes"
import Header from "./header"
import Footer from "./footer"

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const { site } = useStaticQuery<SiteTitleQuery>(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {!!site && (
        <Header siteTitle={site.siteMetadata.title || `eMpower`} />
      )}
      <div>
        <main>{children}</main>
      </div>
      {!!site && (
        <Footer siteTitle={site.siteMetadata.title || `eMpower`} />
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
