import { Lotus } from '../../components/twemoji'

export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  icon: Lotus,
  groups: [
    {
      name: 'post',
      title: 'Section'
    },
    {
      name: 'settings',
      title: 'Settings'
    },
    {
      name: 'meta',
      title: 'Meta data'
    },
    {
      name: 'twitter',
      title: 'Twitter card'
    },
    {
      name: 'facebook',
      title: 'Facebook card'
    }
  ],
  fields: [
    {
      name: 'image',
      title: 'Feature image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'post'
    },
    {
      name: 'imageData',
      title: 'Image data',
      type: 'imageData',
      group: 'post'
    },
    {
      name: 'video',
      title: 'Video',
      type: 'reference',
      to: { type: 'video' },
      group: 'post'
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'post'
    },
    {
      name: 'subtitle',
      title: 'Subitle',
      type: 'string',
      group: 'post'
    },
    {
      name: 'body',
      title: 'Introduction',
      type: 'portableText',
      group: 'post'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      group: 'settings'
    },
    {
      name: 'meta',
      title: 'Meta data',
      type: 'metaData',
      group: 'meta'
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'twitterCard',
      group: 'twitter'
    },
    {
      name: 'facebookCard',
      title: 'Facebook Card',
      type: 'facebookCard',
      group: 'facebook'
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
