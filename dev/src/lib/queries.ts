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
    email,
    keywords,
    introduction,
    "sections": sections[]->{
      _id, _type, menuTitle, "slug": slug.current, subtitle, title
    },
    seoDescription,
    seoTitle,
    seoImage,
    siteDescription,
    siteName,
    siteURL
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
    "slug": slug.current,
    template[0],
    title
  }
}`

export const authorsQuery = groq`{
  "authors": *[_type == "author"]{
    _type,
    name,
    "posts": *[_type == "post" && author._ref == ^._id] | order(date desc){
      _type, publishedAt, "slug": slug.current, title
    },
    "slug": slug.current
  }[count(posts) > 0]
}`

export const categoriesQuery = groq`{
  "categories": *[_type == "category"] | order(title){
    _type,
    "slug": slug.current,
    title,
    "posts": *[_type == "post" && references(^._id)]
  }[count(posts) > 0]
}`

export const authorQuery = groq`{
  "authors": *[_type == "author"]{
    _type,
    bio[]{
      ..., markDefs[]{
        ..., item->{_type, "slug": slug.current}
      }
    },
    name,
    "posts": *[_type == "post" && author._ref == ^._id]
      | order(publishedAt desc){
        _type, publishedAt, title, "slug": slug.current
      },
    "slug": slug.current,
    twitterHandle
  }[count(posts) > 0]
}`

export const postsQuery = groq`{
  "posts": *[_type == "post"]{
    _id,
    _type,
    author->{
      _type, name, occupation, "slug": slug.current, twitterHandle
    },
    body[]{
      ..., markDefs[]{
        ..., item->{
          _type, "slug": slug.current
        }
      }
    },
    categories[]->{_id, _type, "slug": slug.current, title},
    "comments": *[_type == "comment" && post._ref == ^._id && approved == true]
      | order(_createdAt desc){_createdAt, message, name},
    publishedAt,
    "slug": slug.current,
    title
  }
}`

export const categoryQuery = groq`{
  "categories": *[_type == "category"] | order(title){
    _id,
    _type,
    "posts": *[_type == "post" && references(^._id)]
      | order(publishedAt desc){
        _type, publishedAt, "slug": slug.current, title
    },
    "slug": slug.current,
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
          _type, "slug": slug.current
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
    _type,
    body[]{
      ..., markDefs[]{
        ..., item->{
          _type, "slug": slug.current
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

export const blogQuery = groq`{
  "posts": *[_type == "post"] | order(publishedAt desc){
    _id,
    _type,
    publishedAt,
    "slug": slug.current,
    title
  }
}`

export const navbarQuery = groq`{
  "menu": *[_type == "menu"][0]{
    "items": items[]->{
      _id,
      _type,
      "slug": slug.current,
      title
    }
  }
}`
