import React, { FC } from "react"
import PropTypes from "prop-types"

interface Props {
  siteTitle?: string
}

const Footer: FC<Props> = ({ siteTitle }) => {
  return (
    <footer>
      &copy; {new Date().getFullYear()} {siteTitle}, Built with
      {` `}
      <a href="https://gatsbyjs.com" target="_blank" rel="noreferrer">
        Gatsby
      </a>
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
