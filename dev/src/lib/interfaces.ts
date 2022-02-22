import type {
  Author,
  Photography,
  Post,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyedReference,
  SanityReference,
  Section,
  Site
} from "../generated/schema"

export interface Image {
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

// export interface SlugCurrent extends Slug {
//   slug: string
// }

export interface SiteRefs extends Site {
  sections: SanityKeyedReference<Section>[]
}

export interface IndexData {
  site: SiteRefs
  photograph: Photography
}

export interface AuthorPosts extends Author {
  posts: Post[]
}

export interface AuthorData {
  authors: AuthorPosts[]
  slug: string
}
