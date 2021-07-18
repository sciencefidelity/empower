import React, { FC } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

interface Props {
  siteTitle: string
}

const Header:FC<Props> = ({ siteTitle }) => {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
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
