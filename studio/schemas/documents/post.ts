import { Rule } from "@sanity/types"

interface Selection {
  author?: string
  title?: string
  media?: string
}

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {
      name: 'info',
      title: 'Information'
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
      title: 'Title',
      type: 'string',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      group: 'info'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY,',
        timeFormat: 'h:mm a',
        calendarTodayLabel: 'Today'
      },
      group: 'info'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      group: 'info'
    },
    {
      name: 'keywords',
      title: 'Keywords (tags)',
      type: 'string',
      group: 'info'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'info'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
      group: 'content'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'content'
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      description:
        'Displayed on Facebook and Twitter shares (max 60 characters)',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.max(60).warning(`Only 60 characters will be visible.`),
      group: 'seo'
    },
    {
      name: 'ogDescription',
      title: 'Social description',
      description:
        'Displayed on Facebook and Twitter shares (max 65 characters)',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.max(65).warning(`Only 65 characters will be visible.`),
      group: 'seo'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection: Selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
