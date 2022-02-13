import * as React from "react"
import { PortableText } from "@portabletext/react"

const PortableTextComponent = ({ body }) => {
  return (
    <PortableText
      value={body}
    />
  )
}
export default PortableTextComponent
