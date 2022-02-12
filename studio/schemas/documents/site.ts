import { StringValidation } from '../interfaces'

export default {
  name: 'site',
  title: 'Site',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  groups: [
    {
      name: 'meta',
      title: 'Meta'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'meta'
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'string',
      group: 'meta'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'A list of keywords seperated by commas.',
      group: 'meta'
    },
    {
      name: 'siteURL',
      title: 'Site URL',
      type: 'url',
      group: 'meta'
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      group: 'meta',
      validation: (Rule: StringValidation) =>
        Rule.regex(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).error('Not a valid email address')
    },
    {
      name: 'seoImage',
      title: 'SEO image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'meta'
    },
    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      description:
        'Displayed on Facebook and Twitter shares (max 60 characters).',
      validation: (Rule: StringValidation) =>
        Rule.max(60).warning('Only 60 characters will be visible.'),
      group: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'SEO description',
      type: 'string',
      description:
        'Displayed on Facebook and Twitter shares (max 65 characters).',
      validation: (Rule: StringValidation) =>
        Rule.max(65).warning('Only 65 characters will be visible.'),
      group: 'seo'
    },
    {
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      group: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'siteName',
      media: 'mainImage'
    }
  }
}
