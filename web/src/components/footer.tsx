import React, { FC } from "react"
import PropTypes from "prop-types"

interface Props {
  siteTitle?: string
}

const Footer:FC<Props> = ({ siteTitle }) => {
  return (
    <footer>
      © {new Date().getFullYear()} {siteTitle}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `eMpower`,
}

export default Footer
