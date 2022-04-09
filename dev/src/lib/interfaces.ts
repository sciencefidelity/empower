export interface Author extends SanityDocument {
  _type: "author"
  avatar: Image
  bio: string
  name: string
  occupation: string
  posts: Post[]
  slug: string
}

export interface Comment {
  _createdAt: string
  message: string
  name: string
}

export interface Image extends SanityDocument {
  _type: "image";
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface MenuItem {
  label: string
  url: URL
}

export interface Meta {
  canonicalURL: string
  description: string
  title: string
}

export interface Navigation {
  primary: MenuItem[]
  secondary: MenuItem[]
  sections: MenuItem[]
}

export interface Page extends SanityDocument {
  _type: "page"
  body: PortableText
  facebookCard: SocialCard
  feature: boolean
  image: Image
  meta: Meta
  settings: PageSettings
  slug: string
  template: "page" | "blog" | "contact"
  title: string
}

export interface PageSettings {
  authors: Author[]
  excerpt: string
  publishedAt: string
  tags: Tag[]
}

export interface Photography extends SanityDocument {
  image: Image
  title: string
}

export type PortableText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image"
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export interface Post extends SanityDocument {
  _type: "post"
  body: PortableText
  comments: Comment[]
  facebookCard: SocialCard
  feature: boolean
  image: Image
  meta: Meta
  settings: PageSettings
  slug: string
  title: string
  twitterCard: SocialCard
}

export interface SanityBlock {
  _type: "block"
  [key: string]: any
}

export interface SanityImageAsset extends SanityDocument {
  _type: "sanity.imageAsset"
  assetId: string
  extension: string
  metadata: SanityImageMetadata
  mimeType: string
  originalFilename: string
  path: string
  sha1hash: string
  size: number
  uploadId: string
  url: string
}

export interface SanityImageCrop {
  _type: "sanity.imageCrop"
  bottom: number
  left: number
  right: number
  top: number
}

export interface SanityImageDimensions {
  _type: "sanity.imageDimensions"
  aspectRatio: number
  height: number
  width: number
}

export interface SanityImageHotspot {
  _type: "sanity.imageHotspot"
  height: number
  width: number
  x: number
  y: number
}

export interface SanityImageMetadata {
  _type: "sanity.imageMetadata"
  dimensions: SanityImageDimensions
  hasAlpha: boolean
  isOpaque: boolean
  lqip: string
  palette: SanityImagePalette
}

export interface SanityImagePalette {
  _type: "sanity.imagePalette"
  darkMuted: SanityImagePaletteSwatch
  darkVibrant: SanityImagePaletteSwatch
  dominant: SanityImagePaletteSwatch
  lightMuted: SanityImagePaletteSwatch
  lightVibrant: SanityImagePaletteSwatch
  muted: SanityImagePaletteSwatch
  vibrant: SanityImagePaletteSwatch
}

export interface SanityImagePaletteSwatch {
  _type: "sanity.imagePaletteSwatch"
  background: string
  foreground: string
  population: number
  title: string
}

export declare type SanityKeyed<T> = T extends object ? T & {
  _key: string
} : T

export declare type SanityReference<_T> = {
  _type: "reference"
  _ref: string
};

export interface SanityDocument {
  _id: string
  _createdAt: string
  _rev: string
  _updatedAt: string
}

export interface Section extends SanityDocument {
  _type: "section"
  body: PortableText
  facebookCard: SocialCard
  image: Image
  meta: Meta
  slug: string
  subtitle: string
  title: string
  twitterCard: SocialCard
  video: Video
}

export interface Settings extends SanityDocument {
  email: string
  facebookCard: SocialCard
  meta: Meta
  siteDescription: string
  siteName: string
  socialLinks: SocialLinks
  twitterCard: SocialCard
}

export interface SocialCard {
  description: string
  image: Image
  title: string
}

export interface SocialLinks {
  name: string
  url: string
}

export interface Tag extends SanityDocument {
  _type: "tag"
  posts: Post[]
  slug: string
  title: string
}

export interface URL {
  _type: "author" | "section" | "page" | "post" | "tag" | "video"
  slug: string
}

export interface Video extends SanityDocument {
  _type: "video"
  body: PortableText
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
