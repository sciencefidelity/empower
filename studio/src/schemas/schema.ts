import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import portableText from './objects/portableText'
import youtube from './objects/youtube'

// documents
import author from './documents/author'
import comment from './documents/comment'
import menu from './documents/menu'
import page from './documents/page'
import photography from './documents/photography'
import post from './documents/post'
import section from './documents/section'
import site from './documents/site'
import social from './documents/social'
import video from './documents/video'

// taxonomy
import tag from './taxonomy/tag'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    portableText,
    youtube,

    // documents
    author,
    comment,
    menu,
    page,
    photography,
    post,
    section,
    site,
    social,
    video,

    // taxonomy
    tag
  ])
})
