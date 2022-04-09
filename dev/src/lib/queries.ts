import groq from "groq"

const omitDrafts = `!(_id in path('drafts.**'))`
const slug = `"slug": slug.current`
const body = `body[]{ ..., markDefs[]{ ..., item->{ _type, ${slug} } } }`
const navFields = `label, url->{ _type, "slug": slug.current }`

const seo = `
  facebookCard{ description, image, title },
  meta{ canonicalURL, description, title },
  twitterCard{ description, image, title }
`

const pageSettings = `settings{
  excerpt, publishedAt,
  authors[]->{ _id, _type, avatar, name, occupation, ${slug} },
  tags[]->{ _id, _type, ${slug}, title }
}`

const pagePostFields = `
  _id, _type, ${body}, feature, image, ${slug}, title, ${pageSettings}, ${seo}
`

const authors = `"authors": *[_type == "author" && ${omitDrafts}] | order(name){
  _id, _type, avatar, bio, name, occupation, ${slug},
  "posts": *[_type == "post" && references(^._id)] | order(date desc){
    _type, "publishedAt": settings{ publishedAt }, ${slug}, title
  }
}`

const navigation = `
  "navigation": *[_type == "navigation" && ${omitDrafts}][0]{
    primary[]{${navFields}},
    secondary[]{${navFields}},
    sections[]{${navFields}}
  }
`

const pages = `"pages": *[_type == "page" && ${omitDrafts}]{
  template[0], ${pagePostFields}
}`

const posts = `"posts": *[_type == "post" && ${omitDrafts}] | order(publishedAt){
  ${pagePostFields}
}`

const sections = `"sections": *[_type == "section"]{
  _id, _type, body, image, ${slug}, subtitle, title, ${seo},
  video->{ videoLink, title, ${slug}, section, publishDate }
}`

const settings = `"settings": *[_type == "settings" && ${omitDrafts}][0]{
  email, siteDescription, siteName, socialLinks[]{ name, url }, ${seo}
}`

const tags = `"tags": *[_type == "tag" && ${omitDrafts}]{
  _id, _type, ${slug}, title
}`

const videos = `"videos": *[_type == "video" && ${omitDrafts}]{
  _id, _type, ${body}, introduction, publishDate, ${slug}, thumbnail, title,
  videoLink, section->{ _type, title, ${slug} },
}`

export const authorsQuery = groq`{
  ${authors}, ${navigation}, ${settings}
}`

export const indexQuery = groq`{
  "photography": *[
    _type == "photography"
    && _id == "3d60db54-c190-48d8-a17f-396f9a6f5c05"
  ][0] { image, title },
  ${navigation}, ${settings}
}`

export const pagesQuery = groq`{
  ${pages}, ${posts}, ${navigation}, ${settings}
}`

export const postsQuery = groq`{
  ${posts}, ${navigation}, ${settings}
}`

export const sectionsQuery = groq`{
  ${navigation}, ${sections}, ${settings}
}`
