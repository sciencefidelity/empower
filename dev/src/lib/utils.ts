import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "./sanityClient"
import { Image } from "./interfaces"

export const capitalize = (word: string): string => {
  return word[0].toUpperCase() + word.slice(1, word.length)
}

export const kebabCase = (word: string): string => {
  return word.toLowerCase().split(" ").join("-").replace(/[^a-z0-9\-]/g, "")
}

export const socialImage = (image: Image) => {
  return `${urlFor(image)
    .auto("format")
    .width(1200)
    .height(630)
    .quality(85)
    .url()}`
}

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}

export const buildUrl = (slugData: any): string => {
  let slug = ""
  if (slugData?.slug?.current) slug = slugData?.slug?.current
  let directory: string
  switch (slugData._type) {
  case "author":
    directory = "/authors"
    break
  case "post":
    directory = "/blog"
    break
  case "section":
    directory = "/section"
    break
  case "video":
    directory = "/videos"
    break
  default:
    directory = ""
  }
  return `${directory}/${slug}`
}
