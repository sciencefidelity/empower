import type {
  BlockContent,
  Comment,
  Photography,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference
} from "../generated/schema"
export type { Photography }

export interface Author {
  _type: "author"
  bio: BlockContent
  name: string
  occupation: string
  posts: Post[]
  slug: string
  twitterHandle: string
}
export interface Category {
  _type: "category"
  posts: Post[]
  slug: string
  title: string
}
export interface Image {
  _type: "image";
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}
export interface Menu {
  items: MenuItem[]
}
export interface MenuItem {
  _id: string
  _type: "menu"
  slug: string
  title: string
}
export interface Page {
  _id: string
  _type: string
  body: BlockContent
  mainImage: Image
  menuTitle: string
  seoDescription: string
  seoKeywords: string
  seoTitle: string
  slug: string
  template: "page" | "blog" | "contact"
  title: string
}
export interface Post {
  _id: string
  _type: "post"
  author: Author
  body: BlockContent
  categories: Category[]
  comments: Comment[]
  posts: Post[]
  publishedAt: string
  seoDescription: string
  seoKeywords: string
  seoTitle: string
  slug: string
  title: string
}
export interface Section {
  _id: string
  _type: "section"
  body: BlockContent
  menuTitle: string
  seoDescription: string
  seoKeywords: string
  seoTitle: string
  slug: string
  subtitle: string
  title: string
  video: Video
}
export interface Site {
  email: string
  introduction: BlockContent
  keywords: string
  sections: Section[]
  seoDescription: string
  seoTitle: string
  seoImage: Image
  siteDescription: string
  siteName: string
  siteURL: string
}
export interface Video {
  _type: "video"
  body: BlockContent
  introduction: string
  publishDate: string
  section: Section
  seoDescription: string
  seoKeywords: string
  seoTitle: string
  slug: string
  thumbnail: Image
  title: string
  videoLink: string
}
