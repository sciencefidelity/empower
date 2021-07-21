/**
 * @jest-environment jsdom
 */

import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Index from "../index"

describe("Index", () => {
  beforeEach(() => {
    const useStaticQuery = jest.fn();
    useStaticQuery.mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: `eMpower`
          }
        }
      })
    )
  })

  const mockData = {
    site: {
      siteMetadata: {
        title: "eMpower"
      }
    }
  }

  it("renders correctly", () => {
    const tree = renderer
      .create(<Index />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it.todo("renders the site title")
})
