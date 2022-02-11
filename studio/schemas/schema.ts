import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import blockContent from './objects/blockContent'

// documents
import author from './documents/author'
import post from './documents/post'
import site from './documents/site'

// taxonomy
import category from './taxonomy/category'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    blockContent,

    // documents
    site,
    post,
    author,

    // taxonomy
    category
  ])
})
