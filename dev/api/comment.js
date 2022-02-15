require("dotenv").config()
const sanityClient = require("@sanity/client")

async function sendComment(req, res) {
  try {
    await sanityClient.config({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: "production",
      apiVersion: "2021-02-11",
      token: process.env.SANITY_API_TOKEN,
      useCdn: true
    })
    .create({
      _type: "comment",
      email: req.body.email,
      message: req.body.message,
      name: req.body.name,
      post: {
        _ref: req.body.id,
        _type: "reference"
      },
      twitterHandle: req.body.twitterHandle
    })
    .then(res => {
      console.log(`Comment was created, document ID is ${res._id}`)
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
  return res.status(200).json({ success: "message sent" })
}
export default sendComment
