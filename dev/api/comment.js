require("dotenv").config()
const sanityClient = require('@sanity/client')

async function sendComment(req, res) {
  const client = sanityClient.config({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET,
    apiVersion: process.env.PUBLIC_SANITY_API_VERSION,
    token: process.env.SANITY_API_TOKEN,
    useCdn: true
  })
  const { id, email, message, name, twitterHandle } = JSON.parse(req.body)
  const doc = {
    _type: "comment",
    email: email,
    message: message,
    name: name,
    post: {
      _ref: id,
      _type: "reference"
    },
    twitterHandle: twitterHandle
  }
  await client.create(doc).then(res => {
    console.log(`Comment was created, document ID is ${res._id}`)
  })
}
