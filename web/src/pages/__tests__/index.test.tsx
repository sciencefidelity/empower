/**
 * @jest-environment jsdom
 */

// import React from "react"
// import renderer from "react-test-renderer"
// import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

// import IndexPage from "../index"

describe("IndexPage", () => {
  beforeAll(() => {
    const useStaticQuery = jest.fn();
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `eMpower`
        }
      }
    })
  })

  it.todo("renders correctly")

  it.todo("renders the site title")

})
