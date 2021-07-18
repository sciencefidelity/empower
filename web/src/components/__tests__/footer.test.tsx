/**
 * @jest-environment jsdom
 */

import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Footer from "../footer"

test(`renders the site title`, () => {
  const siteTitle = `eMpower`
  const { getByText } = render(<Footer siteTitle={siteTitle} />)
  expect(getByText(/eMpower/i)).toBeInTheDocument()
})
