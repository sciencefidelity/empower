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
   * Bio — `markdown`
   *
   *
   */
  bio?: Markdown;

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
   * Body — `markdown`
   *
   *
   */
  body?: Markdown;

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
   * Excerpt — `string`
   *
   *
   */
  excerpt?: string;

  /**
   * Body — `markdown`
   *
   *
   */
  body?: Markdown;

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
   * Introduction — `markdown`
   *
   *
   */
  body?: Markdown;

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
   * Site URL — `url`
   *
   *
   */
  siteURL?: string;

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
   * Body — `markdown`
   *
   *
   */
  body?: Markdown;

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
  | Menu
  | Page
  | Post
  | Section
  | Site
  | Social
  | Video
  | Category;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Markdown = any;
