import * as React from "react"
import { PortableText } from "@portabletext/react"

const PortableTextComponent = ({ body, components }) => {
  return (
    <PortableText
      value={body}
      components={components}
    />
  )
}
export default PortableTextComponent
