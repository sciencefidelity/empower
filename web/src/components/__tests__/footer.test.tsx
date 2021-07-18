/**
 * @jest-environment jsdom
 */

import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Footer from "../footer"

describe("Footer", () => {

  it("renders correctly", () => {
    const tree = renderer
      .create(<Footer siteTitle="eMpower" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders the site title", () => {
    const siteTitle = `eMpower`
    const { getByText } = render(<Footer siteTitle={siteTitle} />)
    expect(getByText(/eMpower/i)).toBeInTheDocument()
  })

  it.todo("renders the current year")

  it.todo("links to gatsbyjs.com")

})
