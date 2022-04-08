export default {
  name: 'photography',
  title: 'Photography',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
