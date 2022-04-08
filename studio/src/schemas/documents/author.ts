import { LotusPosition } from '../../components/twemoji'

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: LotusPosition,
  fields: [
    {
      name: 'name',
      title: 'Full name',
      type: 'string',
      description: 'Use your real name so people can recognize you'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'occupation',
      title: 'Occupation',
      type: 'string'
    },
    {
      name: 'facebook',
      title: 'Facebook profile',
      type: 'url',
      description: 'URL of your personal Facebook Profile'
    },
    {
      name: 'twitter',
      title: 'Twitter profile',
      type: 'url',
      description: 'URL of your personal Twitter Profile'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text'
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
