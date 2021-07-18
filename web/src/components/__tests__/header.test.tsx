/**
 * @jest-environment jsdom
 */

import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="eMpower" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

it("renders the site title", () => {
  const siteTitle = `eMpower`
  const { container, getByText } = render(<Header siteTitle={siteTitle} />)
  expect(getByText("eMpower")).toBeInTheDocument()
  expect(container.firstChild).toMatchInlineSnapshot(`
    <header>
      <h1>
        <a
          href="/"
        >
          eMpower
        </a>
      </h1>
    </header>
  `)
})
