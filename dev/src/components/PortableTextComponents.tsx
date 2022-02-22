import * as React from "react"
import { PortableTextComponents } from "@portabletext/react"
import { buildUrl } from "../lib/utils"

export const components: PortableTextComponents = {
  marks: {
    link: ({value, children}) => {
      const target = value?.blank ? "_blank" : undefined
      return (
        <a
          href={value?.href}
          target={target} rel={target === "_blank" ? "noreferrer" : undefined}
        >{children}</a>
      )
    },
    internalLink: ({value, children}) => {
      return (
        <a href={buildUrl(value?.item._type, value?.item.slug)}>
          {children}
        </a>
      )
    }
  }
}
