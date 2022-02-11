import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "./sanityClient"
import { Image } from "./interfaces"


export const capitalize = (word: string): string => {
  return word[0].toUpperCase() + word.slice(1, word.length)
}

export const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
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

