import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "./sanityClient"
import { Image } from "./interfaces"

export const buildUrl = (type: string, slug: string): string => {
  return `${subdir(type)}/${slug}`
}

export const capitalize = (str: string): string => {
  return str
    .split(/[\s-]/g)
    .map(e => e.replace(e[0], e[0].toUpperCase()))
    .join(" ")
}

export const article = (word: string): string => {
  return /[aeiou]/i.test(word[0]) ? "an" : "a"
}

export const kebabCase = (str: string): string => {
  return str.toLowerCase().split(" ").join("-").replace(/[^a-z0-9-]/g, "")
}

export const socialImage = (image: Image) => {
  return `${urlFor(image)
    .auto("format")
    .width(1200)
    .height(630)
    .quality(85)
    .url()}`
}

export const subdir = (type: string): string => {
  switch (type) {
  case "author":
    return "/authors"
  case "post":
    return "/blog"
  case "section":
    return "/section"
  case "tag":
    return "/tags"
  case "video":
    return "/videos"
  default:
    return ""
  }
}

export const twitterLink = (handle: string): string => {
  return `https://twitter.com/${handle.replace(/^@/, "")}`
}

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}
