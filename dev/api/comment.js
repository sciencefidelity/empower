require("dotenv").config()
import sanityClient from "@sanity/client"

async function sendComment(req, res) {
  const { id, email, message, name, twitterHandle } = JSON.parse(req.body)
  try {
    await sanityClient.config({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      apiVersion: process.env.PUBLIC_SANITY_API_VERSION,
      token: process.env.SANITY_API_TOKEN
    }).create({
      _type: "comment",
      email: email,
      message: message,
      name: name,
      post: {
        _ref: id,
        _type: "reference"
      },
      twitterHandle: twitterHandle
    }).then(() => {
      console.log("Comment sent")
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
  return res.status(200).json({ text: "message sent" })
}
