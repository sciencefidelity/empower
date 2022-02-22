import React, { FC } from "react"
import { PortableText, PortableTextComponents } from "@portabletext/react"
import { BlockContent } from "../lib/interfaces"

interface Props {
  value: BlockContent
  components: PortableTextComponents
}

const PortableTextComponent: FC<Props> = ({ value, components }) => {
  return (
    <PortableText
      value={value}
      components={components}
    />
  )
}
export default PortableTextComponent
