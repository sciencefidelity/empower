export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText'
    },
    {
      name: 'videoLink',
      title: 'Video Link',
      type: 'url'
    },
    {
      name: 'publishDate',
      title: 'Publish date',
      type: 'date',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'section',
      title: 'Section',
      description: 'Which section does this video belong to?',
      type: 'reference',
      to: { type: 'section' }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
