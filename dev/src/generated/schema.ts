import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Occupation — `string`
   *
   *
   */
  occupation?: string;

  /**
   * Twitter Handle — `string`
   *
   *
   */
  twitterHandle?: string;

  /**
   * Bio — `blockContent`
   *
   *
   */
  bio?: BlockContent;

  /**
   * Avatar — `image`
   *
   *
   */
  avatar?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Comment
 *
 *
 */
export interface Comment extends SanityDocument {
  _type: "comment";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Message — `text`
   *
   *
   */
  message?: string;

  /**
   * Twitter Handle — `string`
   *
   *
   */
  twitterHandle?: string;

  /**
   * Post — `reference`
   *
   *
   */
  post?: SanityReference<Post>;
}

/**
 * Menu
 *
 *
 */
export interface Menu extends SanityDocument {
  _type: "menu";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Manu Items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Page> | SanityKeyedReference<Section>>;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Menu Title — `string`
   *
   * The title shown in the main navigation
   */
  menuTitle?: string;

  /**
   * Template — `array`
   *
   *
   */
  template?: Array<SanityKeyed<string>>;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * SEO title — `string`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters).
   */
  seoTitle?: string;

  /**
   * SEO description — `string`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters).
   */
  seoDescription?: string;

  /**
   * SEO Image — `image`
   *
   * Ideal size 1200 x 630px (if not added main image will be used).
   */
  seoImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Photography
 *
 *
 */
export interface Photography extends SanityDocument {
  _type: "photography";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Keywords (tags) — `string`
   *
   *
   */
  keywords?: string;

  /**
   * Excerpt — `text`
   *
   *
   */
  excerpt?: string;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Social title — `string`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters)
   */
  ogTitle?: string;

  /**
   * Social description — `string`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters)
   */
  ogDescription?: string;
}

/**
 * Section
 *
 *
 */
export interface Section extends SanityDocument {
  _type: "section";

  /**
   * Section Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Subitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Menu Title — `string`
   *
   * The title shown in the main navigation if defferent from Title
   */
  menuTitle?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Introduction — `blockContent`
   *
   *
   */
  body?: BlockContent;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Video — `reference`
   *
   *
   */
  video?: SanityReference<Video>;

  /**
   * SEO title — `string`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters).
   */
  seoTitle?: string;

  /**
   * SEO description — `string`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters).
   */
  seoDescription?: string;

  /**
   * SEO Image — `image`
   *
   * Ideal size 1200 x 630px (if not added main image will be used).
   */
  seoImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Site
 *
 *
 */
export interface Site extends SanityDocument {
  _type: "site";

  /**
   * Site Name — `string`
   *
   *
   */
  siteName?: string;

  /**
   * Site Description — `string`
   *
   *
   */
  siteDescription?: string;

  /**
   * Keywords — `string`
   *
   * A list of keywords seperated by commas.
   */
  keywords?: string;

  /**
   * Site URL — `url`
   *
   *
   */
  siteURL?: string;

  /**
   * Email Address — `string`
   *
   *
   */
  email?: string;

  /**
   * SEO image — `image`
   *
   *
   */
  seoImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Introduction — `blockContent`
   *
   *
   */
  introduction?: BlockContent;

  /**
   * SEO title — `string`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters).
   */
  seoTitle?: string;

  /**
   * SEO description — `string`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters).
   */
  seoDescription?: string;

  /**
   * Twitter Handle — `string`
   *
   *
   */
  twitterHandle?: string;

  /**
   * Order of Sections — `array`
   *
   *
   */
  sections?: Array<SanityKeyedReference<Section>>;
}

/**
 * Social
 *
 *
 */
export interface Social extends SanityDocument {
  _type: "social";

  /**
   * site — `string`
   *
   *
   */
  site?: string;

  /**
   * Username — `string`
   *
   *
   */
  username?: string;

  /**
   * Link — `url`
   *
   *
   */
  link?: string;
}

/**
 * Video
 *
 *
 */
export interface Video extends SanityDocument {
  _type: "video";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Introduction — `text`
   *
   *
   */
  introduction?: string;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;

  /**
   * Video Link — `url`
   *
   *
   */
  videoLink?: string;

  /**
   * Publish date — `date`
   *
   *
   */
  publishDate?: string;

  /**
   * Section — `reference`
   *
   * Which section does this video belong to?
   */
  section?: SanityReference<Section>;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Thumbnail — `image`
   *
   *
   */
  thumbnail?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents =
  | Author
  | Comment
  | Menu
  | Page
  | Photography
  | Post
  | Section
  | Site
  | Social
  | Video
  | Category;
