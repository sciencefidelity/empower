export default {
  name: 'social',
  title: 'Social Links',
  type: 'document',
  fields: [
    {
      name: 'site',
      title: 'site',
      type: 'string'
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    }
  ],

  preview: {
    select: {
      title: 'site'
    }
  }
}
