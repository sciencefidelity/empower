import { Rule } from '@sanity/types'
import { Gear } from '../../components/twemoji'

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: Gear,
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  groups: [
    {
      name: 'site',
      title: 'Title and description'
    },
    {
      name: 'meta',
      title: 'Meta'
    },
    {
      name: 'twitter',
      title: 'Twitter'
    },
    {
      name: 'facebook',
      title: 'Facebook'
    },
    {
      name: 'social',
      title: 'Social'
    }
  ],
  fields: [
    {
      name: 'siteName',
      title: 'Site name',
      type: 'string',
      description: 'The name of your site',
      group: 'site'
    },
    {
      name: 'siteDescription',
      title: 'Site description',
      type: 'string',
      description: 'Used in your theme, meta data and search results',
      group: 'site'
    },
    {
      name: 'language',
      title: 'Publication language',
      type: 'string',
      description: 'Default: English (en)',
      placeholder: 'en',
      group: 'site'
    },
    {
      name: 'email',
      title: 'Email address',
      type: 'email',
      group: 'site'
    },
    {
      name: 'meta',
      title: 'Site meta',
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
    },
    {
      name: 'socialLinks',
      title: 'Social links',
      type: 'socialLinks',
      description: 'URLs of your social profiles',
      group: 'social'
    }
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'siteDescription',
      media: 'twitterCard.image'
    }
  }
}
