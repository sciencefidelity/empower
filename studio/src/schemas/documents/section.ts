export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  groups: [
    {
      name: 'info',
      title: 'Info'
    },
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'info'
    },
    {
      name: 'subtitle',
      title: 'Subitle',
      type: 'string',
      group: 'info'
    },
    {
      name: 'menuTitle',
      title: 'Menu Title',
      type: 'string',
      description:
        'The title shown in the main navigation if defferent from Title',
      group: 'info'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      group: 'info'
    },
    {
      name: 'body',
      title: 'Introduction',
      type: 'blockContent',
      group: 'content'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'content'
    },
    {
      name: 'video',
      title: 'Video',
      type: 'reference',
      to: { type: 'video' },
      group: 'content'
    },
    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      description:
        'Displayed on Facebook and Twitter shares (max 60 characters).',
      group: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'SEO description',
      type: 'string',
      description:
        'Displayed on Facebook and Twitter shares (max 65 characters).',
      group: 'seo'
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      description:
        'Ideal size 1200 x 630px (if not added main image will be used).',
      group: 'seo'
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'mainImage'
    }
  }
}