import { Compass } from '../../components/twemoji'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: Compass,
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Manu Items',
      type: 'array',
      of: [
        { type: 'reference', to: { type: 'page' } },
        { type: 'reference', name: 'section', to: { type: 'section' } }
      ],
      sortable: true
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
