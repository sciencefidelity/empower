import S from '@sanity/desk-tool/structure-builder'
import Facebook from '../components/Facebook'
import Google from '../components/Google'
import Twitter from '../components/Twitter'
import {
  BallotBoxWithCheck,
  Books,
  CameraFlash,
  Compass,
  FilmProjector,
  Gear,
  Label,
  Lotus,
  LotusPosition,
  SpeechBalloon,
  WhiteCheckMark,
  WritingHand
} from '../components/twemoji'


export const getDefaultDocumentNode = ({ schemaType }) => {
  if (
    schemaType === "author" ||
    schemaType === "page" ||
    schemaType === "post" ||
    schemaType === "section" ||
    schemaType === "tag" ||
    schemaType === "video"
  ) {
    return S.document().views([
      S.view.form(),
      S.view.component(Google).title('Google'),
      S.view.component(Twitter).title('Twitter'),
      S.view.component(Facebook).title('Facebook')
    ])
  }
}

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Post')
        .icon(WritingHand)
        .child(
          S.documentTypeList('post')
            .title('Post')
        ),
      S.listItem()
        .title('Page')
        .icon(Books)
        .child(
          S.documentTypeList('page')
            .title('Page')
        ),
      S.listItem()
        .title('Section')
        .icon(Lotus)
        .child(
          S.documentTypeList('section')
            .title('Section')
        ),
      S.listItem()
        .title('Video')
        .icon(FilmProjector)
        .child(
          S.documentTypeList('video')
            .title('Video')
        ),
      S.divider(),
      S.listItem()
        .title('Comment')
        .icon(SpeechBalloon)
        .child(
          S.list()
            .title('Inbox')
            .items([
              S.listItem()
                .title('Pending')
                .icon(BallotBoxWithCheck)
                .child(
                  S.documentTypeList('comment')
                    .title('Comments pending')
                    .filter('_type == "comment" && approved != true')
                ),
              S.listItem()
                .title('Approved')
                .icon(WhiteCheckMark)
                .child(
                  S.documentTypeList('comment')
                    .title('Comments approved')
                    .filter('_type == "comment" && approved == true')
                )
            ])
        ),
      S.listItem()
        .title('Author')
        .icon(LotusPosition)
        .child(
          S.documentTypeList('author')
            .title('Author')
        ),
      S.listItem()
        .title('Photography')
        .icon(CameraFlash)
        .child(
          S.documentTypeList('photography')
            .title('Photography')
        ),
      S.listItem()
        .title('Tag')
        .icon(Label)
        .child(
          S.documentTypeList('tag')
            .title('Tag')
        ),
      S.divider(),
      S.listItem()
        .title('settings')
        .icon(Gear)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General')
                .child(
                  S.document().schemaType('settings').documentId('settings')
                )
                .icon(Gear),
              S.listItem()
                .title('Navigation')
                .child(
                  S.document().schemaType('navigation').documentId('navigation')
                )
                .icon(Compass)
            ])
        ),
      ...S.documentTypeListItems().filter(
        item =>
          ![
            'author',
            'comment',
            'navigation',
            'page',
            'photography',
            'post',
            'section',
            'settings',
            'tag',
            'video'
          ].includes(
            item.getId()
          )
      ),
    ])
