import React, { FC } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

interface Props {
  siteTitle?: string
}

const Header:FC<Props> = ({ siteTitle }) => {
  return (
    <header>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `eMpower`,
}

export default Header
