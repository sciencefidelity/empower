import { LotusPosition } from '../../components/twemoji'

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: LotusPosition,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
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
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string'
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
