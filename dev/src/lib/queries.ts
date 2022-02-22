import groq from "groq"

export const layoutQuery = groq`{
  "site": *[_type == "site"][0]{
    email,
    keywords,
    seoDescription,
    seoImage,
    seoTitle,
    siteDescription,
    siteName,
    siteURL
  }
}`

export const indexQuery = groq`{
  "site": *[_type == "site"][0]{
    keywords, siteDescription, siteName,
    "sectionPages": sections[]->{
      _id, _type, menuTitle, "slugCurrent": slug.current, subtitle, title
    }
  },
  "photograph": *[_type == "photography"] | order(_createdAt)[0]{
    image, title
  }
}`

export const pageQuery = groq`{
  "pages": *[_type == "page"]{
    _id,
    _type,
    mainImage,
    menuTitle,
    "slugCurrent": slug.current,
    template[0],
    title
  }
}`

export const authorsQuery = groq`{
  "authors": *[_type == "author"]{
    _type,
    name,
    "posts": *[_type == "post" && author._ref == ^._id] | order(date desc){
      _type, publishedAt, "slugCurrent": slug.current, title
    },
    "slugCurrent": slug.current
  }[count(posts) > 0]
}`

export const categoriesQuery = groq`{
  "categories": *[_type == "category"] | order(title){
    _type,
    "slugCurrent": slug.current,
    title,
    "posts": *[_type == "post" && references(^._id)]
  }[count(posts) > 0]
}`

export const authorQuery = groq`{
  "authors": *[_type == "author"]{
    _type,
    bio[]{
      ..., markDefs[]{
        ..., item->{_type, "slugCurrent": slug.current}
      }
    },
    name,
    "posts": *[_type == "post" && author._ref == ^._id]
      | order(publishedAt desc){
        _type, publishedAt, title, "slugCurrent": slug.current
      },
    "slugCurrent": slug.current,
    twitterHandle
  }[count(posts) > 0]
}`

export const postsQuery = groq`{
  "posts": *[_type == "post"]{
    _id,
    _type,
    author->{
      _type, name, occupation, "slugCurrent": slug.current, twitterHandle
    },
    body[]{
      ..., markDefs[]{
        ..., item->{
          _type, "slugCurrent": slug.current
        }
      }
    },
    categories[]->{_id, _type, "slugCurrent": slug.current, title},
    "comments": *[_type == "comment" && post._ref == ^._id && approved == true]
      | order(_createdAt desc){_createdAt, message, name},
    publishedAt,
    "slugCurrent": slug.current,
    title
  }
}`

export const categoryQuery = groq`{
  "categories": *[_type == "category"] | order(title){
    _id,
    _type,
    "posts": *[_type == "post" && references(^._id)]
      | order(publishedAt desc){
        _type, publishedAt, "slugCurrent": slug.current, title
    },
    "slugCurrent": slug.current,
    title,
    _id
  }[count(posts) > 0]
}`

export const sectionQuery = groq`{
  "sections": *[_type == "section"]{
    _id,
    _type,
    body[]{
      ..., markDefs[]{
        ..., item->{
          _type, "slugCurrent": slug.current
        }
      }
    },
    menuTitle,
    seoDescription,
    seoTitle,
    "slugCurrent": slug.current,
    subtitle,
    title,
    video->{_type, "slugCurrent": slug.current, thumbnail, title, videoLink}
  }
}`

export const videoQuery = groq`{
  "videos": *[_type == "video"]{
    _type,
    body[]{
      ..., markDefs[]{
        ..., item->{
          _type, "slugCurrent": slug.current
        }
      }
    },
    introduction,
    publishDate,
    section->{"slugCurrent": slug.current, title, _type},
    "slugCurrent": slug.current,
    thumbnail,
    title,
    videoLink
  }
}`

export const blogQuery = groq`{
  "posts": *[_type == "post"] | order(publishedAt desc){
    _id,
    _type,
    publishedAt,
    "slugCurrent": slug.current,
    title
  }
}`

export const navbarQuery = groq`{
  "menu": *[_type == "menu"][0]{
    "items": items[]->{
      _id,
      _type,
      "slugCurrent": slug.current,
      title
    }
  }
}`
