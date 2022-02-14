import groq from "groq"

export const indexQuery = groq`{
  "site": *[_type == "site"][0]{
    keywords, siteDescription, siteName
  },
  "sections": *[_type == "section"] | order(menuTitle){
    _id,
    menuTitle,
    "slug": slug.current,
    subtitle
  }
}`

export const pageQuery = groq`{
  "pages": *[_type == "page"]{
    _id,
    mainImage,
    menuTitle,
    "slug": slug.current,
    template[0],
    title
  }
}`

export const authorsQuery = groq`{
  "authors": *[_type == "author"]{
    name,
    "posts": *[_type == "post" && author._ref == ^._id]{},
    "slug": slug.current
  }[count(posts) > 0]
}`

export const categoriesQuery = groq`{
  "categories": *[_type == "category"] | order(title){
    "slug": slug.current,
    title,
    "posts": *[_type == "post" && references(^._id)]
  }[count(posts) > 0]
}`

export const authorQuery = groq`{
  "authors": *[_type == "author"]{
    bio[]{
      ..., markDefs[]{
        ..., item->{
          _type, "slug": slug
        }
      }
    },
    name,
    "posts": *[_type == "post" && author._ref == ^._id]
    | order(publishedAt desc){
      publishedAt, title, slug
    },
    "slug": slug.current
  }[count(posts) > 0]
}`

export const postQuery = groq`{
  "posts": *[_type == "post"]{
    _id,
    author->{name, "slug": slug.current},
    body[]{
      ..., markDefs[]{
        ..., item->{
          _type, "slug": slug
        }
      }
    },
    categories[]->{_id, "slug": slug.current, title},
    publishedAt,
    "slug": slug.current,
    title
  }
}`

export const categoryQuery = groq`{
  "categories": *[_type == "category"] | order(title){
    _id,
    "posts": *[_type == "post" && references(^._id)]
    | order(publishedAt desc){
      publishedAt, title, slug
    },
    "slug": slug.current,
    title,
    _id
  }[count(posts) > 0]
}`

export const sectionQuery = groq`{
  "sections": *[_type == "section"]{
    _id,
    body[]{
      ..., markDefs[]{
        ..., item->{
          _type, "slug": slug
        }
      }
    },
    menuTitle,
    seoDescription,
    seoTitle,
    "slug": slug.current,
    subtitle,
    title,
    video->{_type, "slug": slug.current, thumbnail, title, videoLink}
  }
}`

export const videoQuery = groq`{
  "videos": *[_type == "video"]{
    body[]{
      ..., markDefs[]{
        ..., item->{
          _type, "slug": slug
        }
      }
    },
    introduction,
    publishDate,
    section->{"slug": slug.current, title, _type},
    "slug": slug.current,
    thumbnail,
    title,
    videoLink
  }
}`

export const navbarQuery = groq`{
  "menu": *[_type == "menu"][0]{
    "items": items[]->{
      _id,
      "slug": slug.current,
      title
    }
  }
}`
