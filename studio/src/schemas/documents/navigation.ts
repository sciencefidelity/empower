import { Compass } from '../../components/twemoji'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: Compass,
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  groups: [
    {
      name: 'primary',
      title: 'Primary navigation'
    },
    {
      name: 'secondary',
      title: 'Secondary navigation'
    },
    {
      name: 'sections',
      title: 'Sections grid'
    }
  ],
  fields: [
    {
      name: 'primary',
      title: 'Primary navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label'
            },
            {
              name: 'url',
              type: 'reference',
              to: [
                { type: 'author' },
                { type: 'section' },
                { type: 'page' },
                { type: 'post' },
                { type: 'tag' },
                { type: 'video' }
              ]
            }
          ]
        }
      ],
      sortable: true,
      group: 'primary'
    },
    {
      name: 'secondary',
      title: 'Secondary navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            {
              name: 'url',
              type: 'reference',
              to: [
                { type: 'author' },
                { type: 'section' },
                { type: 'page' },
                { type: 'post' },
                { type: 'tag' },
                { type: 'video' }
              ]
            }
          ]
        }
      ],
      sortable: true,
      group: 'secondary'
    },
    {
      name: 'sections',
      title: 'Sections grid',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            {
              name: 'url',
              type: 'reference',
              to: [
                { type: 'section' }
              ]
            }
          ]
        }
      ],
      sortable: true,
      group: 'secondary'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare: () => {
      return {
        title: 'Navigation'
      }
    }
  }
}
